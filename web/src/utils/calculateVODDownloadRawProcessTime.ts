import getVideoDurationObj from "@/utils/getVideoDurationObj";
import convertMsInRawDate from "@/utils/convertMsInRawDate";

const calculateVODDownloadRawProcessTime = (duration: string): string => {
  const durationObj = getVideoDurationObj(duration);
  const durationMs =
    durationObj.hours * 3.6e6 +
    durationObj.minutes * 6.0e4 +
    durationObj.seconds * 1.0e3;

  const processTime = Math.ceil(durationMs / 10);

  const rawProcessTime = convertMsInRawDate(processTime);

  return rawProcessTime;
};

export default calculateVODDownloadRawProcessTime;
