const currentDate = new Date();

const formatDate = (videoDate: Date): string => {
  if (currentDate.getDate() === videoDate.getDate()) return "aujourd'hui";
  if (currentDate.getDate() - 1 === videoDate.getDate()) return "hier";
  return `le ${videoDate.toLocaleDateString()}`;
};

const formatTime = (videoDate: Date): string =>
  `à ${videoDate
    .toLocaleTimeString("default", { hour: "2-digit", minute: "2-digit" })
    .replace(":", "h")}`;

const formatVideoDate = (videoRawDate: string, showTime = false): string => {
  const videoDate = new Date(videoRawDate);
  if (Number.isNaN(videoDate.getTime())) return "";
  return `
  ${formatDate(videoDate)}
  ${showTime ? formatTime(videoDate) : ""}`.trim();
};

export default formatVideoDate;
