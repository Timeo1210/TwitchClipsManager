import React, { useState } from "react";
import ClipItem from "@/components/ClipsList/ClipItem";
import { Clip } from "../utils";

type TimelineClipsProps = {
  clips: Clip[];
  index: number;
};

const TimelineClips = ({ clips, index }: TimelineClipsProps): JSX.Element => {
  const [showClips, setShowClips] = useState(false);
  const offset = index * 6 + 3;
  const bgColor = showClips ? "bg-yellow-500" : "bg-purple-900";

  return (
    <div
      onMouseEnter={() => setShowClips(true)}
      onMouseLeave={() => setShowClips(false)}
      style={!showClips ? { left: `${offset}px`, width: "3px" } : {}}
      className={!showClips ? `absolute h-full top-0 ${bgColor}` : ""}
    >
      {showClips && (
        <>
          <div
            style={{ left: `${offset}px`, width: "3px" }}
            className={`absolute h-full top-0 ${bgColor}`}
          />
          <div
            style={{ left: `${offset}px`, width: "3px", height: "2px" }}
            className="absolute z-30 top-full bg-yellow-500"
          />
          <div
            style={{ left: 0, maxHeight: "400px" }}
            className="absolute z-20 top-full w-full bg-gray-800 shadow-xl border-2 border-gray-500 rounded overflow-x-hidden overflow-y-auto custom-scrollbar"
          >
            {clips.map((clip) => (
              <ClipItem key={`child-${clip.id}`} clip={clip} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineClips;
