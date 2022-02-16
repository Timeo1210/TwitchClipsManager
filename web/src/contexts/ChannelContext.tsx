import React, { PropsWithChildren, useContext } from "react";
import { ChannelQuery } from "@/API";

export const ChannelContext = React.createContext<
  ChannelQuery["get"] | undefined
>(undefined);

export const ChannelProvider = ({
  children,
  channel,
}: PropsWithChildren<{ channel: ChannelQuery["get"] }>): JSX.Element => (
  <ChannelContext.Provider value={channel}>{children}</ChannelContext.Provider>
);

export const useChannelContext = (): ChannelQuery["get"] => {
  const context = useContext(ChannelContext);
  if (context === undefined)
    throw new Error("useChannelContext must be used within a ChannelProvider");
  return context;
};
