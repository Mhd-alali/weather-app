import React, { useState } from "react";

import { ReactComponent as Close } from "../assets/icons/Close.svg";
import { ReactComponent as Loading } from "../assets/icons/Loading.svg";

import Btn from "./Btn";
import ListItem from "./ListItem";

import { getCities } from "../api/accu-helper";

export default function Aside({ showAside, toggleAside, refrense }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [visible,setVisible] = useState(false)

  const handleClick = async () => {
    if (!value) return;
    setVisible(true)
    const searchResult = await getCities(value);
    setCities(searchResult.slice(0,6));
    setVisible(false)
  };

  return (
      <aside ref={refrense}className={`absolute top-0 px-8 py-4 space-y-6 transition-transform duration-300 flex flex-col justify-start items-center bg-primary-light h-screen w-full sm:min-w-min sm:max-w-[350px] z-10 ${showAside ? "full-shadow ease-out" : "-translate-x-full ease-in"}`}>
        <button className="ml-auto child:w-6 hover:bg-primary-dark p-1 rounded-md transition" onClick={() => toggleAside(false)}>
          <Close />
        </button>

        <div className="grid grid-cols-7 gap-2 text-sm w-full">
          <input type="text" value={value} onChange={(arg) => {setValue(arg.target.value); }} placeholder="search Location" className="col-span-5 bg-primary-light border-slate-500 border-solid border-[1px] focus:border-slate-50 transition-all outline-none px-2"/>
          <Btn onClick={handleClick} classes={"col-span-2 bg-blue-600 child:w-6 child:mx-auto"}>
            {visible ? <Loading/> : "Search"}
          </Btn>
        </div>

        <ul className="flex flex-col w-full pt-6 space-y-2">
          {cities && cities.map((city) => <ListItem keyValue={city.Key} key={city.Key}>{city.LocalizedName}</ListItem>)}
        </ul>
      </aside>
  );
}
