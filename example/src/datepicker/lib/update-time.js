import { dateByDate } from './tools-date';
/**
 * 修改月份
 * @param {*} date 时间对象
 * @param {*} num 增减数值
 */
export function updateMonth(date, num) {
  const newDate = dateByDate(date);
  newDate.setMonth(newDate.getMonth() + num);
  return newDate;
}

/**
 * 修改年份
 * @param {*} date 时间对象
 * @param {*} num 增减数值
 */
export function updateYear(date, num) {
  const newDate = dateByDate(date);
  newDate.setFullYear(newDate.getFullYear() + num);
  return newDate;
}

export default {
  updateMonth,
  updateYear,
};
