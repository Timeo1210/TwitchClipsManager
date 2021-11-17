import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ClipsQuery } from "@/API";
import { useVideoContext } from "@/contexts/VideoContext";
import HoverEffectWrapper from "@/components/HoverEffectWrapper/HoverEffectWrapper";
import DownloadButton from "@/components/DownloadButton/DownloadButton";
import { UnpackedArray } from "@/utils/UnpackedArray";
import formatThumbnailUrl from "@/utils/formatThumbnailUrl";
import getRelativeElapsedTime from "@/utils/getRelativeElapsedTime";
import convertMsInRawDate from "@/utils/convertMsInRawDate";
import getClipDownloadUrl from "@/utils/getClipDownloadUrl";
import getVideoClipCreateUrl from "@/utils/getVideoClipCreateUrl";

type ClipItemProps = {
  clip: UnpackedArray<ClipsQuery["getByBroadcasterId"]["clips"]>;
  style?: React.CSSProperties;
};

const ClipItem = ({ clip, style = {} }: ClipItemProps): JSX.Element => {
  const clipThumbnailUrl = formatThumbnailUrl(clip.thumbnail_url, 170, 98); // This is more or less useless
  const videoContext = useVideoContext();

  const twitchOffset = 1.5 * clip.duration * 1000; // Offset for better accuracy no logic here
  const relativeElpasedTime =
    getRelativeElapsedTime(videoContext.video.created_at, clip.created_at) -
    twitchOffset;
  const relativeRawElpasedTime = convertMsInRawDate(relativeElpasedTime);
  const downloadUrl = getClipDownloadUrl(clip.thumbnail_url);
  const videoClipCreateUrl = getVideoClipCreateUrl(
    videoContext.video.url,
    relativeRawElpasedTime
  );

  return (
    <div className="flex p-1" style={style}>
      <div className="m-auto">
        <HoverEffectWrapper>
          <Link href={clip.url}>
            <a target="_blank" rel="nofollow noopener noreferrer">
              <div
                style={{
                  width: "170px",
                  height: "95px",
                }}
                className="relative border-2 rounded border-purple-900"
              >
                <Image
                  src={clipThumbnailUrl}
                  className="rounded object-cover"
                  alt="thumbnail"
                  layout="fill"
                />
              </div>
            </a>
          </Link>
        </HoverEffectWrapper>
      </div>
      <div className="flex flex-col justify-between items-start pl-3 w-full text-left">
        <Link href={`/clips/${clip.id}`}>
          <a target="_blank" className="line-clamp-2">
            <h2 className="inline text-lg underline-effect leading-4">
              {clip.title}
            </h2>
          </a>
        </Link>
        <span className="text-gray-300">
          Nombre de vues : {clip.view_count}
        </span>
        <Link href={videoClipCreateUrl}>
          <a target="_blank" rel="nofollow noopener noreferrer">
            <span className="text-gray-300 underline-effect">
              Crée après : {relativeRawElpasedTime} ({Math.round(clip.duration)}
              s)
            </span>
          </a>
        </Link>
      </div>
      <DownloadButton href={downloadUrl} className="m-3" />
    </div>
  );
};

ClipItem.defaultProps = {
  style: {},
};

export default ClipItem;
