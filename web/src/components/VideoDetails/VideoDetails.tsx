import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VideoQuery, useVideostateActionMutation } from "@/API";
import { UnpackedArray } from "@/utils/UnpackedArray";
import formatThumbnailUrl from "@/utils/formatThumbnailUrl";
import formatVideoDate from "@/utils/formatVideoDate";
import getVideoRawEndDate from "@/utils/getVideoRawEndDate";
import calculateVODDownloadRawProcessTime from "@/utils/calculateVODDownloadRawProcessTime";
import ActionButton from "@/components/ActionButton";
import VideostateDetails from "@/components/VideostateDetails";
import HoverEffectWrapper from "../HoverEffectWrapper";
import GridCell from "./GridCell";

type VideoDetailsProps = {
  video: UnpackedArray<VideoQuery["Video_getById"]>;
};

const VideoDetails = ({ video }: VideoDetailsProps): JSX.Element => {
  const [hasMutate, setHasMutate] = useState<boolean>(false);
  const videoThumbnailUrl = formatThumbnailUrl(video.thumbnail_url, 300, 169);
  const videoRawEndDate = getVideoRawEndDate(video.created_at, video.duration);
  const VODDownloadProcessTime = calculateVODDownloadRawProcessTime(
    video.duration
  );

  const useVideostateMutation = useVideostateActionMutation({
    onMutate: () => setHasMutate(true),
  });

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
          <div className="mb-3">
            <HoverEffectWrapper>
              <Link href={video.url}>
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <div
                    style={{ width: "300px", height: "170px" }}
                    className="relative border-2 rounded border-purple-900 "
                  >
                    <Image
                      src={videoThumbnailUrl}
                      className="rounded"
                      alt="thumbnail"
                      layout="fill"
                      priority
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
        {hasMutate ? (
          <VideostateDetails video_id={video.id} />
        ) : (
          <ActionButton
            onClick={() => useVideostateMutation.mutate({ request: video.id })}
            className="m-2 p-2 text-3xl font-semibold flex flex-col items-center text-center"
          >
            <span className="tracking-widest">Télécharger</span>
            <span className="mt-1 text-xs">
              (Environ {VODDownloadProcessTime} de traitement)
            </span>
          </ActionButton>
        )}
      </div>
    </div>
  );
};

export default VideoDetails;
