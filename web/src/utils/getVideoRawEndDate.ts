const getVideoRawEndDate = (startRawDate: string, duration: string): string => {
  const endDate = new Date(startRawDate);
  if (Number.isNaN(endDate.getTime())) return "";
  const hours = parseInt(duration.substring(0, duration.indexOf("h")), 10) || 0;
  const minutes =
    parseInt(
      duration.substring(duration.indexOf("h") + 1, duration.indexOf("m")),
      10
    ) || 0;
  const seconds =
    parseInt(
      duration.substring(duration.indexOf("m") + 1, duration.length - 1),
      10
    ) || 0;
  endDate.setHours(
    endDate.getHours() + hours,
    endDate.getMinutes() + minutes,
    endDate.getSeconds() + seconds
  );
  return endDate.toISOString();
};

export default getVideoRawEndDate;
