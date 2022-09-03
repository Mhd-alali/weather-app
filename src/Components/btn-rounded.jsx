import React from "react";

export default function BtnRounded({ children ,classes}) {
  return (
    <button className={`bg-gray-500 p-2 rounded-full drop-shadow-xl child:w-6 ${classes}`}>
      {children}
    </button>
  );
}
