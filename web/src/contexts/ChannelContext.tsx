import React, { PropsWithChildren, useContext } from "react";
import { ChannelQuery } from "@/API";

export const ChannelContext = React.createContext<
  ChannelQuery["Channel_get"] | undefined
>(undefined);

export const ChannelProvider = ({
  children,
  channel,
}: PropsWithChildren<{
  channel: ChannelQuery["Channel_get"];
}>): JSX.Element => (
  <ChannelContext.Provider value={channel}>{children}</ChannelContext.Provider>
);

export const useChannelContext = (): ChannelQuery["Channel_get"] => {
  const context = useContext(ChannelContext);
  if (context === undefined)
    throw new Error("useChannelContext must be used within a ChannelProvider");
  return context;
};
