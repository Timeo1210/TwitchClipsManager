import React from "react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { VideoDocument, VideoQuery, VideoQueryVariables } from "@/API";
import { customFetcher } from "@/utils/graphqlFetcher";
import VideoDetails from "@/components/VideoDetails";

interface IParams extends ParsedUrlQuery {
  id: string;
}

const Video = ({
  video,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => (
  <div className="bg-gray-900 flex flex-col items-center h-full p-2">
    <h1 className="text-6xl my-4">{video.user_name}</h1>
    <VideoDetails video={video} />
  </div>
);

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
