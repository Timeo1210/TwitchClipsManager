/* eslint-disable @typescript-eslint/ban-types */
import React, { PropsWithChildren, useContext, useState } from "react";
import { Tools } from "@/utils/toolReducer";

type ContextValue = {
  tool: Tools;
  setTool: React.Dispatch<React.SetStateAction<Tools>>;
};

export const ToolContext = React.createContext<ContextValue | undefined>(
  undefined
);

export const ToolProvider = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => {
  const [tool, setTool] = useState<Tools>(Tools.VODs);

  return (
    <ToolContext.Provider value={{ tool, setTool }}>
      {children}
    </ToolContext.Provider>
  );
};

export const useToolContext = (): ContextValue => {
  const context = useContext(ToolContext);
  if (context === undefined)
    throw new Error("useToolContext must be used within a ToolProvider");
  return context;
};
