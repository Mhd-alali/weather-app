import React from "react";
import Flex from "../Container/flex";

import { UnitStringFormatter} from "../api/accu-helper";

export default function WeekCard({ icon, dayTemp, nightTemp, date,onClick }) {
    const datetime = new Date(date).toUTCString().slice(0,11);
    return (
        <Flex onClick={onClick} classes={'bg-primary-light flex-col w-3/4 p-3 min-w-min rounded hover:border-white border-[1px] border-primary-light transition duration-300 hover:brightness-110 cursor-pointer'}>
            <p>{datetime}</p>
            <div className="child:w-14 my-4 ">
                <img src={`../src/assets/weather-icons/${icon}.svg`} alt="" />
            </div>
            <Flex classes={'gap-4'}>
                <p>{dayTemp.Value}{UnitStringFormatter(dayTemp.Unit)}</p>
                <p className="text-slate-400">{nightTemp.Value}{UnitStringFormatter(nightTemp.Unit)}</p>
            </Flex>
        </Flex>
    );
}
