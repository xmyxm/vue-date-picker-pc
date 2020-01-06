import { dayListByDate, getTodayDate, getYearMonthNum } from './tools-date';
import { DAY_STYLE } from './config';

// 日期数据转换器，生成render所需的日期数据
// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function cycleConverters(displayDate, disabledCheck, dateRegion, mouseStart, mouseEnd) {
  // 是否在日历尾部多加一行
  const enablefix = false;
  const dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  const displayMonth = displayDate.getMonth();
  const todayDate = getTodayDate();
  // 显示日历所属的月份
  const endYearMonthNum = getYearMonthNum(displayDate);
  dayList.forEach((item) => {
    if (!item.disabled) {
      // 当前时间对应的月
      const currentYearMonthNum = getYearMonthNum(item.date);
      if (item.date.getTime() === todayDate.getTime() && displayMonth === item.date.getMonth()) {
        item.status = DAY_STYLE.TODAY;
      } else if (currentYearMonthNum !== endYearMonthNum) {
        if (currentYearMonthNum > endYearMonthNum) {
          // 下个月
          item.status = DAY_STYLE.NEXT;
        } else {
          // 上个月
          item.status = DAY_STYLE.PREV;
        }
      } else {
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      item.status = DAY_STYLE.DISABLED;
    }
  });

  if (mouseStart) {
    if (mouseEnd) {
      let maxDate;
      let minDate;
      if (mouseStart >= mouseEnd) {
        maxDate = mouseStart;
        minDate = mouseEnd;
      } else {
        maxDate = mouseEnd;
        minDate = mouseStart;
      }
      dayList.forEach((item) => {
        if (item.date >= minDate && item.date <= maxDate && displayMonth === item.date.getMonth()) {
          if (item.date.getTime() === minDate.getTime() || item.date.getTime() === maxDate.getTime()) {
            // 自然周第一天或最后一天
            item.status = DAY_STYLE.ACTIVE;
          } else {
            // 自然周第一天和最后一天之间的时间
            item.status = DAY_STYLE.REGION;
          }
        }
      });
    } else {
      const mouseStartTime = mouseStart.getTime();
      dayList.forEach((item) => {
        if (mouseStartTime === item.date.getTime()) {
          item.status = DAY_STYLE.ACTIVE;
        }
      });
    }
  } else if (dateRegion) {
    const { start, end } = dateRegion;
    dayList.forEach((item) => {
      if (item.date >= start && item.date <= end && displayMonth === item.date.getMonth()) {
        if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
          // 自然周第一天或最后一天
          item.status = DAY_STYLE.ACTIVE;
        } else {
          // 自然周第一天和最后一天之间的时间
          item.status = DAY_STYLE.REGION;
        }
      }
    });
  }

  return dayList;
}

export default {
    cycleConverters,
};

