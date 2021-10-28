import { ClipsQuery } from "@/API";
import React, { PropsWithChildren } from "react";

const initialClipsContextValue: ClipsQuery["getByBroadcasterId"] = {
  clips: [],
  pagination: {},
};

export const ClipsContext = React.createContext<
  ClipsQuery["getByBroadcasterId"]
>(initialClipsContextValue);

export const ClipsProvider = ({
  children,
  data,
}: PropsWithChildren<{
  data: ClipsQuery["getByBroadcasterId"];
}>): JSX.Element => (
  <ClipsContext.Provider value={data}>{children}</ClipsContext.Provider>
);
