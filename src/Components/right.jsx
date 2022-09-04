import React, { useContext, useEffect } from "react";

import Flex from "../Container/flex";
import BtnRounded from "./btn-rounded";
import WeekCard from "./WeekCard";
import HighLightCard from "./HighLightCard";

import { ReactComponent as Sad } from "../assets/icons/sad.svg";

import { ConditionContext } from "../Context/city-condition-context";

export default function Right({refrense}) {
  const [condition,setCondition] = useContext(ConditionContext)
  
  return (
    <section ref={refrense} className="bg-primary-dark min-h-screen order-2 w-full">
      <Flex classes={'flex-col w-4/5 mx-auto max-w-4xl space-y-5'}>
        <Flex classes={'my-6 gap-3 text-sm w-full'}>
          <BtnRounded classes={'py-1 ml-auto bg-white text-black'}>℃</BtnRounded>
          <BtnRounded classes={'py-1 bg-primary-light'}>℉</BtnRounded>
        </Flex>

        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[1rem] justify-items-center text-sm first:justify-self-end">
          {condition.DailyForecasts && condition.DailyForecasts.map(condition => <WeekCard date={condition.Date} icon={condition.Day.Icon} dayTemp={condition.Temperature.Maximum} nightTemp={condition.Temperature.Minimum} key={condition.EpochDate}/>)}
        </ul>
        <h2 className="text-2xl mr-auto font-bold">
          Today's Highlights   <span className="text-sm child:w-5 font-normal child:inline child:-translate-y-[2px]">these are random fake data .·´¯`(&gt;▂&lt;)´¯`·.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
          <HighLightCard title={'Wind Status'} value={{ value: "7", unit: "mph" }} />
          <HighLightCard title={'Humidity'} value={{ value: "84", unit: '%' }} />
          <HighLightCard title={'Visibilty'} value={{ value: "6,4", unit: 'miles' }} />
          <HighLightCard title={'Air Pressure'} value={{ value: "998", unit: "mb" }} />
        </div>
      </Flex>
    </section>
  )
}