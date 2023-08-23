import React, { PropsWithChildren, useContext, useState } from "react";
import { VideoQuery } from "@/API";

type State = VideoQuery["Video_getById"];
type Dispatch = React.Dispatch<React.SetStateAction<State>>;
type VideoProviderProps = PropsWithChildren<{ video: State }>;

export const VideoContext = React.createContext<
  { video: State; setClip: Dispatch } | undefined
>(undefined);

export const VideoProvider = ({
  video,
  children,
}: VideoProviderProps): JSX.Element => {
  const [clipState, setClip] = useState(video);
  const value = { video: clipState, setClip };
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

export const useVideoContext = (): { video: State; setClip: Dispatch } => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  return context;
};
