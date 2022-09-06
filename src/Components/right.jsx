import React, { useContext, useEffect, useState } from "react";

import Flex from "../Container/flex";
import BtnRounded from "./btn-rounded";
import WeekCard from "./WeekCard";
import HighLightCard from "./HighLightCard";

import { ConditionContext } from "../Context/city-condition-context";

export default function Right({refrense}) {
  const [condition,setCondition] = useContext(ConditionContext)
  const [currentIndex,setCurrentIndex] = useState(0)

  const {Evapotranspiration ,SolarIrradiance,CloudCover,Wind} = condition.DailyForecasts[currentIndex].Day
  const datetime = new Date(condition.DailyForecasts[currentIndex].Date).toUTCString().slice(0,3);

  return (
    <section ref={refrense} className="bg-primary-dark min-h-screen order-2 w-full">
      <Flex classes={'flex-col w-4/5 mx-auto max-w-4xl space-y-5'}>
        <Flex classes={'my-6 gap-3 text-sm w-full'}>
          <BtnRounded classes={'py-1 ml-auto bg-white text-black'}>℃</BtnRounded>
          <BtnRounded classes={'py-1 bg-primary-light'}>℉</BtnRounded>
        </Flex>

        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1rem] justify-items-center text-sm first:justify-self-end">
          {condition.DailyForecasts && condition.DailyForecasts.map((condition,index) => 
            <WeekCard onClick={()=> setCurrentIndex(index) } date={condition.Date} icon={condition.Day.Icon} dayTemp={condition.Temperature.Maximum} nightTemp={condition.Temperature.Minimum} key={condition.EpochDate}/>
          )}
        </ul>

        <h2 className="text-2xl mr-auto font-bold">{datetime} Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
          <HighLightCard title={'Wind Status'} value={Wind.Speed} />
          <HighLightCard title={'Evapotranspiration'} value={Evapotranspiration} />
          <HighLightCard title={'SolarIrradiance'} value={SolarIrradiance} />
          <HighLightCard title={'Cloud Coverage'} value={{ Value: CloudCover, Unit: "Okta" }} />
        </div>
      </Flex>
    </section>
  )
}