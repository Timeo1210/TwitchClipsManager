import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VideoQuery } from "@/API";
import { UnpackedArray } from "@/utils/UnpackedArray";
import formatThumbnailUrl from "@/utils/formatThumbnailUrl";
import formatVideoDate from "@/utils/formatVideoDate";
import getVideoRawEndDate from "@/utils/getVideoRawEndDate";
import ActionButton from "@/components/ActionButton";
import HoverEffectWrapper from "../HoverEffectWrapper";
import GridCell from "./GridCell";

type VideoDetailsProps = {
  video: UnpackedArray<VideoQuery["getById"]>;
};

const VideoDetails = ({ video }: VideoDetailsProps): JSX.Element => {
  const videoThumbnailUrl = formatThumbnailUrl(video.thumbnail_url, 300, 169);
  const videoRawEndDate = getVideoRawEndDate(video.created_at, video.duration);
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(0,59,125,1) 0%, rgba(9,81,121,1) 25%, rgba(0,135,173,1) 100%)",
        maxWidth: "1000px",
      }}
      className="flex flex-col"
    >
      <div className="flex">
        <div
          style={{ flex: "0 1.5 550px" }}
          className="bg-gray-800 border-transparent bg-clip-padding border-2 flex flex-col items-center p-3"
        >
          <h1 className="text-3xl my-3 text-center">{video.title}</h1>
          <div
            style={{ maxWidth: "300px", minWidth: "300px" }}
            className="w-full mb-3"
          >
            <HoverEffectWrapper>
              <Link href={video.url}>
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <div className="w-full relative border-2 rounded border-purple-900 ">
                    <Image
                      src={videoThumbnailUrl}
                      className="rounded"
                      alt="thumbnail"
                      width="300px"
                      height="169px"
                    />
                  </div>
                </a>
              </Link>
            </HoverEffectWrapper>
          </div>
        </div>
        <div
          style={{ flex: "0 1 450px" }}
          className="border-transparent bg-clip-padding border-t-2 border-b-2 border-r-2 text-xl flex flex-col items-center"
        >
          <div className="h-full w-full grid grid-cols-2 grid-rows-4">
            <GridCell borderRight borderBottom>
              Nombre de vues
            </GridCell>
            <GridCell borderBottom>{video.view_count}</GridCell>
            <GridCell borderRight borderBottom>
              Durée
            </GridCell>
            <GridCell borderBottom>{video.duration}</GridCell>
            <GridCell borderRight borderBottom>
              Commencé
            </GridCell>
            <GridCell borderBottom>
              {formatVideoDate(video.created_at, true)}
            </GridCell>
            <GridCell borderRight>Fini</GridCell>
            <GridCell>{formatVideoDate(videoRawEndDate, true)}</GridCell>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 border-transparent bg-clip-padding border-2 border-t-0 flex justify-center">
        <Link href="/videos/download">
          <a>
            <ActionButton className="m-2 p-2 text-3xl font-semibold">
              <span className="tracking-widest">Télécharger</span>
            </ActionButton>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default VideoDetails;
