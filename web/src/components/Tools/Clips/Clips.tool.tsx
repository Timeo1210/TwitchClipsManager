import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useChannelContext } from "@/contexts/ChannelContext";
import useClipsQuery from "@/hooks/useClipsQuery";
import LoadingIcon from "@/components/LoadingIcon/LoadingIcon";
import ClipsList from "@/components/ClipsList/ClipsList";
import { ClipsQuery } from "@/API";
import ActionButton from "@/components/ActionButton/ActionButton";
import convertDateInRFC3339 from "@/utils/convertDateInRFC3339";

const HandleErrors = (isError: boolean, error: unknown): JSX.Element => {
  const genericErrorMessage = <h1>Une erreur est survenue !</h1>;

  if (!isError) return <></>;
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any).extensions.code === "BAD_USER_INPUT")
      return (
        <div className="my-6 text-xl">
          <span>
            Malheuresement il n&apos;y a plus de clips disponible pour ces
            dates.
          </span>
        </div>
      );
    return genericErrorMessage;
  } catch {
    return genericErrorMessage;
  }
};

const ClipsTool = (): JSX.Element => {
  const channelContext = useChannelContext();
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const RFCStartDate = startDate ? convertDateInRFC3339(startDate) : undefined;
  const RFCEndDate = endDate ? convertDateInRFC3339(endDate) : undefined;

  const [canHandleMoreButton, setCanHandleMoreButton] = useState(true);
  const [queryStorage, setQueryStorage] = useState<{
    cursor: string;
    oldClips: ClipsQuery["Clips_getByBroadcasterId"]["clips"];
  }>({
    cursor: "",
    oldClips: [],
  });

  const { isLoading, isError, error, data } = useClipsQuery({
    broadcaster_id: channelContext.id,
    started_at: RFCStartDate,
    ended_at: RFCEndDate !== RFCStartDate ? RFCEndDate : undefined,
    after: queryStorage.cursor,
    first: 5,
  });

  const clips = [
    ...queryStorage.oldClips,
    ...(data?.Clips_getByBroadcasterId.clips || []),
  ];
  const cursor = data?.Clips_getByBroadcasterId.pagination.cursor || "";

  useEffect(() => {
    if (data?.Clips_getByBroadcasterId.pagination.cursor === null) {
      setCanHandleMoreButton(false);
    }
  }, [data?.Clips_getByBroadcasterId.pagination.cursor]);

  const handleMoreClips = () => {
    setQueryStorage({
      cursor,
      oldClips: clips,
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-6xl my-4">{channelContext.display_name}</h1>
      <div className="flex w-full justify-center text-xl">
        <span>Clips de {channelContext.display_name} entre le </span>
        <div className="ml-2 min-w-max">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(newDateRange) => {
              setDateRange(newDateRange);
              setQueryStorage({ cursor, oldClips: [] });
              setCanHandleMoreButton(true);
            }}
            allowSameDay
            ariaLabelledBy="Intervalle de date de création des clips"
            className="w-max cursor-pointer tracking-tighter border-2 border-purple-900 rounded bg-clip-padding bg-gray-900 hover:bg-purple-900"
          />
        </div>
      </div>
      {clips && (
        <div className="h-full w-full max-w-5xl p-2 flex items-center">
          <ClipsList clips={clips} />
        </div>
      )}
      {isLoading && (
        <div className="flex items-center">
          <LoadingIcon width={100} height={100} />
        </div>
      )}

      {/* Button pour afficher plus de clips si il n'y a pas d'erreurs et pas de chargement */}
      {clips && canHandleMoreButton && !isLoading && !isError && (
        <div className="absolute bottom-0">
          <ActionButton
            onClick={handleMoreClips}
            className="relative p-2 my-4 text-3xl"
          >
            Plus
          </ActionButton>
        </div>
      )}

      {isError
        ? HandleErrors(isError, error)
        : !canHandleMoreButton && (
            <div className="my-6 text-xl">
              <span>
                Malheuresement il n&apos;y a plus de clips disponible pour ces
                dates.
              </span>
            </div>
          )}
    </div>
  );
};

export default ClipsTool;
