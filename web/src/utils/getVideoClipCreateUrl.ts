const getVideoClipCreateUrl = (
  videoUrl: string,
  relativeRawElpasedTime: string
): string => `${videoUrl}?t=${relativeRawElpasedTime}`;

export default getVideoClipCreateUrl;
