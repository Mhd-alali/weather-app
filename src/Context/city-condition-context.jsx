import React, { createContext, useState } from "react";

export const ConditionContext = createContext();

export function ConditionProvider({ children,value }) {
  return (
    <ConditionContext.Provider value={value}>{children}</ConditionContext.Provider>
  );
}
