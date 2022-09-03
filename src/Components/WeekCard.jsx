import React from "react";
import Flex from "../Container/flex";

export default function WeekCard({ icon, dayTemp, nightTemp, date }) {
    return (
        <Flex classes={'bg-primary-light flex-col w-3/4 p-3 min-w-min rounded'}>
            <p>{date}</p>
            <div className="child:w-14 my-4">
                {icon}
            </div>
            <Flex classes={'gap-4'}>
                <p>{dayTemp}℃</p>
                <p className="text-slate-400">{nightTemp}℃</p>
            </Flex>
        </Flex>
    );
}
