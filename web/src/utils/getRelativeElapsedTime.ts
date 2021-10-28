const getRelativeElapsedTime = (
  originRawDate: string,
  endRawDate: string
): number => {
  const originDate = new Date(originRawDate);
  const endDate = new Date(endRawDate);
  const elapsedTime = endDate.getTime() - originDate.getTime();
  return elapsedTime;
};

export default getRelativeElapsedTime;
