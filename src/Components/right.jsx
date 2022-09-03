import React, { useContext, useEffect } from "react";

import Flex from "../Container/flex";
import BtnRounded from "./btn-rounded";

import WeekCard from "./WeekCard";
import HighLightCard from "./HighLightCard";

import { ConditionContext } from "../Context/city-condition-context";

import { ReactComponent as Cloudy } from '../assets/weather/cloudy.svg'
import { ReactComponent as Hail } from '../assets/weather/hail.svg'
import { ReactComponent as RainCloud } from '../assets/weather/rain_cloud.svg'
import { ReactComponent as Rainy } from '../assets/weather/rain.svg'
import { ReactComponent as Snow } from '../assets/weather/snow.svg'
import { ReactComponent as SnowySunny } from '../assets/weather/snowy_sunny.svg'
import { ReactComponent as Stormy } from '../assets/weather/stormy.svg'
import { ReactComponent as Sunny } from '../assets/weather/sun.svg'
import { ReactComponent as Windy } from '../assets/weather/windy.svg'


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
          <WeekCard icon={<Snow />} dayTemp={'16'} nightTemp={'11'} date={'Tomorrow'} />
          <WeekCard icon={<Windy />} dayTemp={'16'} nightTemp={'11'} date={'Sun, 7 Jun'} />
          <WeekCard icon={<Sunny />} dayTemp={'16'} nightTemp={'11'} date={'Sun, 7 Jun'} />
          <WeekCard icon={<Stormy/>} dayTemp={'16'} nightTemp={'11'} date={'Sun, 7 Jun'} />
          <WeekCard icon={<Rainy />} dayTemp={'16'} nightTemp={'11'} date={'Sun, 7 Jun'} />
        </ul>

        <h2 className="text-xl mr-auto font-bold">Today's Highlights</h2>

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