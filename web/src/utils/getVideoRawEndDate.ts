import getVideoDurationObj from "@/utils/getVideoDurationObj";

const getVideoRawEndDate = (startRawDate: string, duration: string): string => {
  const endDate = new Date(startRawDate);
  if (Number.isNaN(endDate.getTime())) return "";
  const durationObj = getVideoDurationObj(duration);
  endDate.setHours(
    endDate.getHours() + durationObj.hours,
    endDate.getMinutes() + durationObj.minutes,
    endDate.getSeconds() + durationObj.seconds
  );
  return endDate.toISOString();
};

export default getVideoRawEndDate;
