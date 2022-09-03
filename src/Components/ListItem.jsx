import React, { useContext, useEffect } from "react";
import { getCurrentCondition } from "../api/accu-helper";
import { ConditionContext } from "../Context/city-condition-context";

export default function ListItem({ children, keyValue }) {
  const [condition,setCondition] = useContext(ConditionContext)

  const handleSelectCity = async ()=>{
    const result = await getCurrentCondition(keyValue)
    setCondition(result)
  }

  return (
    <li onClick={handleSelectCity} className="border-[1px] border-primary-light relative hover:border-slate-500 group px-2 py-3 overflow-hidden">
      {children}
      <div className="text-slate-500 -right-2 top-1/2 -translate-y-1/2 group-hover:-translate-x-4 transition absolute">
        ›
      </div>
    </li>
  );
}
