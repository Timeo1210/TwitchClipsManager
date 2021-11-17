import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { VideoDocument, VideoQuery, VideoQueryVariables } from "@/API";
import { VideoProvider } from "@/contexts/VideoContext";
import { customFetcher } from "@/utils/graphqlFetcher";
import VideoDetails from "@/components/VideoDetails";
import ClipsList from "@/components/ClipsList";
import getVideoRawEndDate from "@/utils/getVideoRawEndDate";
import useClipsQuery from "@/hooks/useClipsQuery";
import LoadingIcon from "@/components/LoadingIcon/LoadingIcon";
import VideoTimeline from "@/components/VideoTimeline";

interface IParams extends ParsedUrlQuery {
  id: string;
}

const Video = ({
  video,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const videoRawEndDate = getVideoRawEndDate(video.created_at, video.duration); // need to remove from VideoDetails

  const { isLoading, isError, data } = useClipsQuery({
    broadcaster_id: video.user_id,
    started_at: video.created_at,
    ended_at: videoRawEndDate,
    first: 100,
  });

  return (
    <VideoProvider video={video}>
      <div className="bg-gray-900 flex flex-col items-center h-full p-2 overflow-y-scroll">
        <Link href={`/channels/${video.user_id}`}>
          <a>
            <h1 className="text-6xl my-4 underline-effect">
              {video.user_name}
            </h1>
          </a>
        </Link>
        <VideoDetails video={video} />
        {data !== undefined && data?.getByBroadcasterId.clips.length >= 1 && (
          <>
            <VideoTimeline />
            <ClipsList />
          </>
        )}
        {isLoading && <LoadingIcon width={150} height={150} />}
        {isError && <h1>Une erreur est survenue !</h1>}
      </div>
    </VideoProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params as IParams;
  try {
    const data = await customFetcher<VideoQuery, VideoQueryVariables>(
      VideoDocument,
      { id }
    )();
    return {
      props: {
        video: data.getById,
      },
    };
  } catch {
    return {
      props: {
        video: {} as VideoQuery["getById"], // trick to ensure correct type
      },
      redirect: { permanent: true, destination: "/404" },
    };
  }
};

export default Video;
