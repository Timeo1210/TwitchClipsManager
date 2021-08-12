/* eslint-disable @typescript-eslint/ban-types */
import React, { PropsWithChildren, Reducer, useReducer } from "react";
import {
  toolReducer,
  ToolReducerAction,
  Tools,
  ToolState,
} from "@/utils/toolReducer";

const initialToolContextValue = {
  tool: { current: Tools.VODs },
  dispatch: () => undefined,
};

export const ToolContext = React.createContext<{
  tool: ToolState;
  dispatch: React.Dispatch<ToolReducerAction>;
}>(initialToolContextValue);

export const ToolProvider = ({
  children,
}: PropsWithChildren<{}>): JSX.Element => {
  const [tool, dispatch] = useReducer<Reducer<ToolState, ToolReducerAction>>(
    toolReducer,
    initialToolContextValue.tool
  );

  return (
    <ToolContext.Provider value={{ tool, dispatch }}>
      {children}
    </ToolContext.Provider>
  );
};
