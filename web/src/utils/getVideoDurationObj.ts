type DurationObj = {
  hours: number;
  minutes: number;
  seconds: number;
};

const getVideoDurationObj = (duration: string): DurationObj => ({
  hours: parseInt(duration.substring(0, duration.indexOf("h")), 10) || 0,
  minutes:
    parseInt(
      duration.substring(duration.indexOf("h") + 1, duration.indexOf("m")),
      10
    ) || 0,
  seconds:
    parseInt(
      duration.substring(duration.indexOf("m") + 1, duration.length - 1),
      10
    ) || 0,
});

export default getVideoDurationObj;
