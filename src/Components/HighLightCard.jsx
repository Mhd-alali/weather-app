import React from "react";
import Flex from "../Container/flex";

export default function HighLightCard({ title, value, children }) {
    return (
        <Flex classes={"bg-primary-light flex-col pt-2 pb-4 rounded hover:border-white transition border-[1px] border-primary-light"}>
            <p className="font-thin">{title}</p>
            <p className="text-5xl font-bold my-2">{value.value}<span className="text-3xl font-thin">{value.unit}</span></p>
            <div className="">
                {children}
            </div>
        </Flex>
    );
}
