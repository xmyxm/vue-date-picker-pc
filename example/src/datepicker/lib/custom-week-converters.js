import { dayListByDate, weekInfoByDate } from './tools-date';
import { DAY_STYLE } from './config';

// 日期数据转换器，生成render所需的日期数据
// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function weekConverters(selectDate, displayDate, disabledCheck, mouseHitDate) {
  // 是否在日历尾部多加一行
  const enablefix = false;
  const dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  const todayDate = new Date();
  dayList.forEach((item) => {
    if (!item.disabled) {
      if (item.date.getTime() === todayDate.getTime()) {
        item.status = DAY_STYLE.TODAY;
      } else {
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      item.status = DAY_STYLE.DISABLED;
    }
  });

  if (selectDate) {
    const weekInfo = weekInfoByDate(selectDate);
    const { start, end } = weekInfo.currentWeek;
    if (end < todayDate) {
      dayList.forEach((item) => {
        if (item.year === weekInfo.year && item.month === weekInfo.month && item.date >= start && item.date <= end) {
          if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
            item.status = DAY_STYLE.ACTIVE;
          } else {
            item.status = DAY_STYLE.REGION;
          }
        }
      });
    }
  }

  // 如果鼠标滑动到某时间需要 计算其对应的周
  if (mouseHitDate) {
    const weekInfo = weekInfoByDate(mouseHitDate);
    const { start, end } = weekInfo.currentWeek;
    if (end < todayDate) { // weekInfo.month <= month &&
      dayList.forEach((item) => {
        if (item.date >= start && item.date <= end) {
          if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
            item.status = DAY_STYLE.TEMP_ACTIVE;
          } else {
            item.status = DAY_STYLE.TEMP_REGION;
          }
        }
      });
    }
  }
  return dayList;
}


export default {
  weekConverters,
};
