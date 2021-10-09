const dayDurationInMs = 8.64e7;
const currentDate = new Date();
const yesterdayStartMs = currentDate.getTime() - 2 * dayDurationInMs;
const yesterdayEndMs = currentDate.getTime() - dayDurationInMs;

const formatVideoDate = (videoRawDate: string): string => {
  const videoDate = new Date(videoRawDate);
  if (Number.isNaN(videoDate.getTime())) return "";
  if (yesterdayEndMs <= videoDate.getTime()) return "aujourd'hui";
  if (
    yesterdayStartMs <= videoDate.getTime() &&
    videoDate.getTime() <= yesterdayEndMs
  ) {
    return "hier";
  }
  return `le ${videoDate.toLocaleDateString()}`;
};

export default formatVideoDate;
