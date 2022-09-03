import React, { createContext, useState } from "react";

export const ConditionContext = createContext();

export function ConditionProvider({ children }) {
  const conditionState = useState({});
  return (
    <ConditionContext.Provider value={conditionState}>{children}</ConditionContext.Provider>
  );
}
