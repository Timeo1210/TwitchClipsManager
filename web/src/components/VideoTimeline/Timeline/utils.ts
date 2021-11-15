import { ClipsQuery } from "@/API";
import getRelativeElapsedTime from "@/utils/getRelativeElapsedTime";
import getVideoRawEndDate from "@/utils/getVideoRawEndDate";
import { UnpackedArray } from "@/utils/UnpackedArray";

export type Clip = UnpackedArray<ClipsQuery["getByBroadcasterId"]["clips"]>;

export type TimelineClipsArray = Array<Clip[]>;

export const getAllTimelineClips = (
  videoRawStartTime: string,
  videoRawDuration: string,
  interval: number,
  clips: ClipsQuery["getByBroadcasterId"]["clips"]
): TimelineClipsArray => {
  const allTimelineClipsArray: TimelineClipsArray = new Array(interval)
    .fill(null)
    .map(() => []);
  const videoDuration = getRelativeElapsedTime(
    videoRawStartTime,
    getVideoRawEndDate(videoRawStartTime, videoRawDuration)
  );

  clips.forEach((clip) => {
    const relativeElapsedTime = getRelativeElapsedTime(
      videoRawStartTime,
      clip.created_at
    );
    const timelineClipIndex = Math.floor(
      (relativeElapsedTime / videoDuration) * interval
    );
    if (timelineClipIndex < 0) return; // This handle twitch api bug (look NOTES.md for more info)
    allTimelineClipsArray[timelineClipIndex].push(clip);
  });

  return allTimelineClipsArray;
};
