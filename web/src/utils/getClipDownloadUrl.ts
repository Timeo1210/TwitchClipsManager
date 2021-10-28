// example of input https://clips-media-assets2.twitch.tv/AT-cm%7CcVztBGTI6qDcN4kR09mYDQ-preview-480x272.jpg
const getClipDownloadUrl = (thumbnail_url: string): string => {
  const endSliceIndex = thumbnail_url.indexOf("-preview-");
  const urlWithoutExtension = thumbnail_url.slice(0, endSliceIndex);
  return `${urlWithoutExtension}.mp4`;
};

export default getClipDownloadUrl;
