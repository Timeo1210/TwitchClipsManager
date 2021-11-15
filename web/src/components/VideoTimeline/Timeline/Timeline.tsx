/* eslint-disable react/no-array-index-key */
import React, { useContext, useMemo } from "react";
import { ClipsContext } from "@/contexts/ClipsContext";
import { useVideoContext } from "@/contexts/VideoContext";
import TimelineClips from "./TimelineClips";
import { TimelineClipsArray, getAllTimelineClips } from "./utils";

type TimelineProps = {
  forcedWidth: number;
};

const Timeline = ({ forcedWidth }: TimelineProps): JSX.Element => {
  const clipsContext = useContext(ClipsContext);
  const videoContext = useVideoContext();
  const interval = Math.floor(forcedWidth / 6);

  const allTimelineClips: TimelineClipsArray = useMemo(
    () =>
      getAllTimelineClips(
        videoContext.video.created_at,
        videoContext.video.duration,
        interval,
        clipsContext.clips
      ),
    [
      videoContext.video.created_at,
      videoContext.video.duration,
      interval,
      clipsContext.clips,
    ]
  );

  return (
    <div
      style={{
        height: "100px",
        minHeight: "100px",
        width: `${forcedWidth}px`,
        minWidth: `${forcedWidth}px`,
      }}
      className="relative w-full bg-gray-800 border-2 rounded border-gray-700 box-content"
    >
      <span className="absolute left-0 top-full">00h00s</span>
      {allTimelineClips.map((clips, index) => {
        if (clips.length === 0) return <React.Fragment key={index} />;
        return <TimelineClips key={index} clips={clips} index={index} />;
      })}
      <span
        className="absolute left-full top-full"
        style={{ transform: "translateX(-100%)" }}
      >
        {videoContext.video.duration}
      </span>
    </div>
  );
};

export const MemoizedTimeline = React.memo(Timeline);

export default Timeline;
