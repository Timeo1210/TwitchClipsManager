import Link from "next/link";
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
};

const ClipItem = ({ clip }: ClipItemProps): JSX.Element => {
  const clipThumbnailUrl = formatThumbnailUrl(clip.thumbnail_url);
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
    <div className="flex p-2">
      <div style={{ maxWidth: "150px", minWidth: "150px" }} className="w-full">
        <HoverEffectWrapper>
          <Link href={clip.url}>
            <a target="_blank">
              <div className="w-full relative border-2 rounded border-purple-900">
                <img
                  src={clipThumbnailUrl}
                  className="rounded"
                  alt="thumbnail"
                  width="150px"
                />
              </div>
            </a>
          </Link>
        </HoverEffectWrapper>
      </div>
      <div className="flex flex-col justify-between items-start pl-3 w-full text-left">
        <Link href={`/clips/${clip.id}`}>
          <a target="_blank" className="line-clamp-2">
            <h3 className="inline text-lg underline-effect">{clip.title}</h3>
          </a>
        </Link>
        <span className="text-gray-300">
          Nombre de vues : {clip.view_count}
        </span>
        <Link href={videoClipCreateUrl}>
          <a target="_blank">
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

export default ClipItem;
