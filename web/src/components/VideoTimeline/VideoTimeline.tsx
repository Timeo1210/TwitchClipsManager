import React, { useEffect, useState } from "react";
import { useMeasure } from "react-use";
import { MemoizedTimeline } from "./Timeline";

const VideoTimeline = (): JSX.Element => {
  const [parentRef, { width }] = useMeasure<HTMLDivElement>();
  const [forcedWidth, setForcedWidth] = useState(NaN);

  useEffect(() => {
    if (width >= 900) setForcedWidth(900);
    else if (width < 900 && width >= 600) setForcedWidth(600);
    else if (width < 600 && width > 0) setForcedWidth(300);
  }, [width]);

  return (
    <div
      ref={parentRef}
      style={{ height: "135px", minHeight: "135px", maxWidth: "1000px" }}
      className="w-full mt-5 mb-7 flex flex-col items-center"
    >
      {Number.isNaN(forcedWidth) !== true && (
        <MemoizedTimeline forcedWidth={forcedWidth} />
      )}
      <span>Timeline</span>
    </div>
  );
};

export default VideoTimeline;
