import React, { Component, Suspense } from "react";

function Icon({ iconKey }) {
  return (
    <>
      <img src={`../src/assets/weather-icons/${iconKey}.svg`}/> 
    </>
  );
}

export default Icon;
