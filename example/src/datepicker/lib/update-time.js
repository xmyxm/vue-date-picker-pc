export function updateMonth(date, num) {
  date.setMonth(date.getMonth() + num);
  date = new Date(date.getTime());
  return date;
}

export function updateYear(date, num) {
  date.setFullYear(date.getFullYear() + num);
  date = new Date(date.getTime());
  return date;
}

export default {
  updateMonth,
  updateYear,
};
