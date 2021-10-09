const formatThumbnailUrl = (
  thumbnail_url: string,
  width = 400,
  height = 225
): string =>
  thumbnail_url
    .replace("%{width}", width.toString())
    .replace("%{height}", height.toString());

export default formatThumbnailUrl;
