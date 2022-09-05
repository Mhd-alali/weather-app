import React, {
  Suspense,
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";

import { ConditionProvider } from "./Context/city-condition-context";

const Aside = React.lazy(() => import("./Components/aside"));
const Left = React.lazy(() => import("./Components/left"));
const Right = React.lazy(() => import("./Components/right"));

import Loading from "./Components/loading";

import { GetCityFromPos } from "./api/geolocation-reverse";
import { getCities, getCurrentCondition } from "./api/accu-helper";

function App() {
  const [showAside, toggleAside] = useState(false);
  const componentRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [condition, setCondition] = useState({});
  const [error,setError] = useState();
  let cityName = useRef("")

  useEffect(() => {
    if ("geolocation" in navigator)
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
            cityName.current = await GetCityFromPos(pos);
            import("./Components/aside");
            import("./Components/left");
            import("./Components/right");
            const city = (await getCities(cityName.current))[0];
            const result = await getCurrentCondition(city?.Key);
            setCondition(result);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          },
          (error) => {
            setError({message:error.message})
            setLoading(true);
        },
        { enableHighAccuracy: true }
      );

    document.addEventListener("click", handleClick);
    function handleClick(e) {
      if (componentRef && componentRef.current) {
        const ref = componentRef.current;
        if (ref.contains(e.target)) {
          toggleAside(false);
        }
      }
    }
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Loading isLoading={loading} error={error}/>
        {loading || (
        <Suspense fallback={null}>
          <ConditionProvider value={[condition, setCondition]}>
            <Aside showAside={showAside} toggleAside={toggleAside} />
            <main className="flex flex-col sm:flex-row min-h-screen">
              <Left toggleAside={toggleAside} cityName={cityName}/>
              <Right refrense={componentRef} />
            </main>
          </ConditionProvider>
        </Suspense>
      )}
    </>
  );
}

export default App;
