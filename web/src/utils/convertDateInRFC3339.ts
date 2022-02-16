const forceTwoDigits = (num: number): string =>
  num < 10 ? `0${num}` : `${num}`;

const convertDateInRFC3339 = (date: Date): string =>
  `${date.getUTCFullYear()}-${forceTwoDigits(
    date.getUTCMonth() + 1
  )}-${forceTwoDigits(date.getUTCDate())}T${forceTwoDigits(
    date.getUTCHours()
  )}:${forceTwoDigits(date.getUTCMinutes())}:${forceTwoDigits(
    date.getUTCSeconds()
  )}Z`;

export default convertDateInRFC3339;
