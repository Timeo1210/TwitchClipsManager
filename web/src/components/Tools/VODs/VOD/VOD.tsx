import Link from "next/link";
import Image from "next/image";
import HoverEffectWrapper from "@/components/HoverEffectWrapper/HoverEffectWrapper";
import { VideosQuery } from "@/API";
import { UnpackedArray } from "@/utils/UnpackedArray";
import formatThumbnailUrl from "@/utils/formatThumbnailUrl";
import formatVideoDate from "@/utils/formatVideoDate";
import LinkButton from "@/components/LinkButton/LinkButton";

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
                  <Image
                    src={videoThumbnailUrl}
                    className="rounded"
                    alt="thumbnail"
                    width="200px"
                    height="113px"
                  />
                </div>
              </a>
            </Link>
          </HoverEffectWrapper>
        </div>
        <div className="flex sm:hidden m-2 justify-center items-center flex-shrink-0">
          <LinkButton
            href={`/videos/${video.id}`}
            imgSrc="/images/icon-lookup.svg"
            imgSquareSize={50}
          />
        </div>
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
      <div className="hidden sm:flex m-3 justify-center items-center flex-shrink-0">
        <LinkButton
          href={`/videos/${video.id}`}
          imgSrc="/images/icon-lookup.svg"
          imgSquareSize={50}
        />
      </div>
    </div>
  );
};

export default VOD;
