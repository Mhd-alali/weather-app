import React,{useContext} from "react";

import Btn from "./Btn";
import BtnRounded from "./btn-rounded";
import Flex from "../Container/flex";
import Icon from "./icon";

import { ReactComponent as Location } from "../assets/icons/Location.svg";
import { ReactComponent as LocationPen } from "../assets/icons/Location-pen.svg";
import { ConditionContext } from "../Context/city-condition-context";

export default function Left({toggleAside}) {
  const [condition,setCondition] = useContext(ConditionContext)
  
  // the condition is an array of five days conditions with today as the first condition
  const currentCondition = condition.DailyForecasts?.slice(0, 1)[0]

  return <section className="bg-primary-light min-h-screen w-full sm:min-w-min sm:max-w-[350px] py-5">
    <div className="min-h-fit screen-fit">
    <div className="flex justify-between px-4 text-sm">
      <Btn onClick={() => toggleAside(true)}>Search for Places</Btn>
      <BtnRounded>
        <Location />
      </BtnRounded>
    </div>
    <Flex classes={"flex-col justify-around min-h-[80%]"}>
      <div className={"h-full child:w-2/5 child:mx-auto"}>
        <Icon iconKey={13} width={56} />
      </div>
      <Flex classes={"h-full flex-col"}>
        <p className="text-8xl ">
          15<span className="text-4xl inline-block -translate-y-2 text-slate-400">℃</span>
        </p>
        <p className="mt-12 text-xl text-slate-400 text-center">{condition.Headline && condition.Headline.Text}</p>
      </Flex>
    </Flex>
    <Flex classes={"flex-col text-slate-400 text-sm"}>
      <p><span className="mr-2">Today</span> • <span className="ml-2">Today</span></p>
      <p className="child:w-5 child:inline mt-4"><LocationPen /> Helsinki</p>
    </Flex>
    </div>
  </section>;
}
