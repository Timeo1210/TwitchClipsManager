const readableNumber = (viewCount: number, range: number) =>
  (viewCount / range).toFixed(1);

const formatViewCount = (viewCount: number): string => {
  if (viewCount < 1e3) return `${viewCount}`;
  if (viewCount < 1e6) return `${readableNumber(viewCount, 1e3)}K`;
  if (viewCount < 1e9) return `${readableNumber(viewCount, 1e6)}M`;
  if (viewCount < 1e12) return `${readableNumber(viewCount, 1e9)}B`;
  return `${readableNumber(viewCount, 1e12)}T`;
};

export default formatViewCount;
