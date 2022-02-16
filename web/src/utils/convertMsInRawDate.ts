const convertMsInRawDate = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 60);

  const secondsString = `${seconds}s`;
  const minutesString = hours !== 0 || minutes !== 0 ? `${minutes}m` : "";
  const hoursString = hours !== 0 ? `${hours}h` : "";

  return `${hoursString}${minutesString}${secondsString}`;
};

export default convertMsInRawDate;
