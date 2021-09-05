import React, { PropsWithChildren } from "react";
import { ChannelQuery } from "@/API";

const initialChannelContextValue: ChannelQuery["get"] = {
  id: "",
  display_name: "",
  profile_image_url: "",
  view_count: 0,
  __typename: "Channel",
};

export const ChannelContext = React.createContext<ChannelQuery["get"]>(
  initialChannelContextValue
);

export const ChannelProvider = ({
  children,
  channel,
}: PropsWithChildren<{ channel: ChannelQuery["get"] }>): JSX.Element => (
  <ChannelContext.Provider value={channel}>{children}</ChannelContext.Provider>
);
