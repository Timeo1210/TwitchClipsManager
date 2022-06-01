import { useEffect, useState } from "react";
import LoadingIcon from "@/components/LoadingIcon";
import ActionButton from "@/components/ActionButton/ActionButton";
import { useChannelContext } from "@/contexts/ChannelContext";
import useVideosQuery from "@/hooks/useVideosQuery";
import VOD, { VODProps } from "./VOD";

type VODWrapperProps = {
  video: VODProps["video"];
  index: number;
};
const VODWrapper = ({ video, index }: VODWrapperProps): JSX.Element => (
  <>
    {index !== 0 && <div className="w-full p-5 bg-gray-900" />}
    <VOD video={video} />
  </>
);

const VODsTool = (): JSX.Element => {
  const channelContext = useChannelContext();
  const [canHandleMoreButton, setCanHandleMoreButton] = useState(true);
  const [queryStorage, setQueryStorage] = useState<{
    cursor: string;
    oldVideos: Array<VODProps["video"]>;
  }>({
    cursor: "",
    oldVideos: [],
  });

  const { isLoading, isError, data } = useVideosQuery({
    user_id: channelContext.id,
    after: queryStorage.cursor,
    first: "10",
    type: "archive",
  });

  const videos = [
    ...queryStorage.oldVideos,
    ...(data?.Videos_getByUser.videos || []),
  ];
  const cursor = data?.Videos_getByUser.pagination.cursor || "";

  useEffect(() => {
    if (data?.Videos_getByUser.pagination.cursor === null) {
      setCanHandleMoreButton(false);
    }
  }, [data?.Videos_getByUser.pagination.cursor]);

  const handleMoreVOD = () => {
    if (!canHandleMoreButton) return; // useless
    setQueryStorage({
      cursor,
      oldVideos: videos,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl my-4">{channelContext.display_name}</h1>
      {videos && (
        <div className="w-full max-w-5xl p-2 sm:p-3 flex flex-col items-center">
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(0,59,125,1) 0%, rgba(9,81,121,1) 25%, rgba(0,135,173,1) 100%)",
            }}
          >
            {videos.map((video, index) => (
              <VODWrapper key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      )}
      {isLoading && <LoadingIcon width={150} height={150} />}
      {videos && canHandleMoreButton && (
        <ActionButton onClick={handleMoreVOD} className="p-2 my-6 text-3xl">
          Plus
        </ActionButton>
      )}
      {!canHandleMoreButton && (
        <div className="my-6 text-xl">
          <span>Malheuresement il n&apos;y a plus de VOD disponible.</span>
        </div>
      )}
      {isError && <h1>Une erreur est survenue !</h1>}
    </div>
  );
};

export default VODsTool;
