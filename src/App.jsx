import React, { Suspense, useState, useRef, useLayoutEffect, useEffect } from "react";

import { ConditionProvider } from "./Context/city-condition-context";

const Aside = React.lazy(()=>  import("./Components/aside"));
const Left = React.lazy(() =>  import("./Components/left"));
const Right = React.lazy(() => import("./Components/right"));

import Loading from "./Components/loading";

import {GetCityFromPos} from './api/geolocation-reverse'

function App() {
  const [showAside, toggleAside] = useState(false);
  const componentRef = useRef(null);
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if ("geolocation" in navigator)
      navigator.geolocation.getCurrentPosition(async (pos)=>{
        const cityName = await GetCityFromPos(pos)
        import("./Components/aside")
        import("./Components/left")
        import("./Components/right")
        setLoading(false)
      },(error) => {
        console.log(error);
      },{enableHighAccuracy:true})

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

  },[])

  return (
    <> 
    <Loading isLoading={loading}/>
    <Suspense fallback={null}>
    <ConditionProvider>
          <Aside showAside={showAside} toggleAside={toggleAside} />
          <main className="flex flex-col sm:flex-row min-h-screen">
            <Left toggleAside={toggleAside} />
            <Right refrense={componentRef} />
          </main>
      </ConditionProvider>
      </Suspense>
    </>
  );
}

export default App;
