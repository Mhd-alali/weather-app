import React from "react";
export default function Btn({ classes,children,onClick }) {
  return (
    <button onClick={onClick} className={`bg-gray-500 px-[1em] py-[.5em] rounded-sm drop-shadow-xl hover:brightness-95 transition ${classes}`}>
      {children}
    </button>
  );
}
