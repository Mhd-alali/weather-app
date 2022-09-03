import React, {
  Suspense,
  useState,
  useRef,
  useLayoutEffect,
} from "react";

import Left from "./Components/left";
const Right = React.lazy(() => import("./Components/right"));
import Aside from "./Components/aside";
import Flex from "./Container/flex";
import {ConditionProvider} from "./Context/city-condition-context";

function App() {
  const [showAside, toggleAside] = useState(false);
  const componentRef = useRef(null);

  useLayoutEffect(() => {
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
    <ConditionProvider>
      <Aside showAside={showAside} toggleAside={toggleAside} />
      <main className="flex flex-col sm:flex-row min-h-screen">
        <Left toggleAside={toggleAside} />
        <Suspense fallback={<Flex>Loading...</Flex>}>
          <Right refrense={componentRef} />
        </Suspense>
      </main>
    </ConditionProvider>
    </>
  );
}

export default App;
