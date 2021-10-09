import Link from "next/link";
import HoverEffectWrapper from "@/components/HoverEffectWrapper/HoverEffectWrapper";
import { VideosQuery } from "@/API";
import { UnpackedArray } from "@/utils/UnpackedArray";
import formatThumbnailUrl from "@/utils/formatThumbnailUrl";
import formatVideoDate from "@/utils/formatVideoDate";
import LookupButton from "@/components/LookupButton";

export type VODProps = {
  video: UnpackedArray<VideosQuery["getByUser"]["videos"]>;
};

const VOD = ({ video }: VODProps): JSX.Element => {
  const videoThumbnailUrl = formatThumbnailUrl(video.thumbnail_url);
  return (
    <div
      // style={{ borderColor: "hsl(216, 50%, 50%)" }}
      className="flex flex-col sm:flex-row items-center sm:items-normal sm:justify-start bg-gray-800 border-transparent bg-clip-padding border-2 p-3"
    >
      <div className="flex justify-around w-full sm:w-auto">
        <div
          style={{ maxWidth: "200px", minWidth: "200px" }}
          className="w-full"
        >
          <HoverEffectWrapper>
            <Link href={video.url}>
              <a target="_blank">
                <div className="w-full relative">
                  <img
                    src={videoThumbnailUrl}
                    className="rounded"
                    alt="thumbnail"
                    width="200px"
                  />
                </div>
              </a>
            </Link>
          </HoverEffectWrapper>
        </div>
        <LookupButton href={`/videos/${video.id}`} className="sm:hidden m-2" />
      </div>
      <div className="flex flex-col justify-between items-center sm:items-start sm:pl-3 w-full text-center sm:text-left">
        <Link href={video.url}>
          {/* Some witch stuff happen here to work */}
          <a target="_blank" className="line-clamp-2">
            <h3 className="inline text-lg underline-effect">{video.title}</h3>
          </a>
        </Link>
        <span className="text-gray-300">
          Nombre de vues : {video.view_count}
        </span>
        <span className="text-gray-300">
          Durée : {video.duration} {formatVideoDate(video.created_at)}
        </span>
      </div>
      <LookupButton
        href={`/videos/${video.id}`}
        className="hidden sm:flex m-3"
      />
    </div>
  );
};

export default VOD;
