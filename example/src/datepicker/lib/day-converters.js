import {
  addLunarInfo,
  dayCountByMonth,
  monthInfoByDate,
} from './tools-date';
import { DAY_STYLE } from './config';

// 日期数据转换器，生成render所需的日期数据
// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function dayConverters(selectDate, displayDate, disabledCheck) {
  // 是否在日历尾部多加一行
  const enablefix = false;
  // 该月总天数, 该月第一天是周几, 该月最后一天是周几, 当前日期所在的周
  const { year, month, dayCount, firstDayWeekIndex, lastDayWeekIndex } = monthInfoByDate(displayDate);
  // 今日时间
  const todayTime = new Date();
  // 今日日期
  const todayDate = new Date(`${todayTime.getFullYear()}/${todayTime.getMonth() + 1}/${todayTime.getDate()}`);
  // 月天数对象集合
  const dayList = [];
  // 禁止点击标识
  let disabledFlag = false;

  // 获取主体部分数据
  for (let i = 0; i < dayCount; i++) {
    const currentDay = i + 1;

    let status = DAY_STYLE.CURRENT;
    // 日期的数字形式，用于比较选中
    const currentDate = new Date([year, month, currentDay].join('/'));
    // 判断当前日期是否点击
    disabledFlag = disabledCheck(currentDate);
    // 添加不可点击样式
    if (disabledFlag) {
      status = DAY_STYLE.DISABLED;
    }

    if (selectDate && selectDate.getTime() === currentDate.getTime()) {
      // 选中时间
      status = DAY_STYLE.ACTIVE;
    } else if (currentDate.getTime() === todayDate.getTime()) {
      // 追加当天状态
      status = DAY_STYLE.TODAY;
    }

    dayList.push({
      year,
      month,
      day: currentDay,
      date: currentDate,
      status,
      disabled: disabledFlag,
    });
  }

  // 补齐本月之前的数据, 若 firstDayWeekIndex = 0 则当天为周日，需补6天
  const prevDay = firstDayWeekIndex === 0 ? 6 : firstDayWeekIndex - 1;
  if (prevDay) {
    let prevMonth = month - 1;
    let prevYear = year;
    if (prevMonth <= 0) {
      prevMonth = 12;
      prevYear = year - 1;
    }
    let prevDayCount = dayCountByMonth(new Date(`${prevYear}/${prevMonth}/1`));
    const prevDayBorder = prevDayCount - prevDay;

    for (; prevDayCount > prevDayBorder; prevDayCount--) {
      let status = DAY_STYLE.PREV;
      const currentDate = new Date([prevYear, prevMonth, prevDayCount].join('/'));

      // 追加当天状态
      //   if (currentDate.getTime() === todayDate.getTime()) {
      //     status = DAY_STYLE.TODAY;
      //   }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = DAY_STYLE.DISABLED;
      }

      dayList.unshift({
        year: prevYear,
        month: prevMonth,
        day: prevDayCount,
        date: currentDate,
        status,
        disabled: disabledFlag,
      });
    }
  }

  // 补齐本月之后的数据
  // 将日历数据补全6行；
  let nextDay = lastDayWeekIndex === 0 ? 0 : 7 - lastDayWeekIndex;
  if (dayCount + prevDay <= 28 && enablefix) {
    nextDay += 7 * 2;
  } else if (
    dayCount + prevDay > 28 &&
      dayCount + prevDay <= 35 &&
      enablefix
  ) {
    nextDay += 7;
  }

  if (nextDay) {
    let nextMonth = month + 1;
    let nextYear = year;
    if (nextMonth > 12) {
      nextMonth = 1;
      nextYear = year + 1;
    }

    for (let i = 1; i <= nextDay; i++) {
      let status = DAY_STYLE.NEXT;
      const currentDate = new Date([nextYear, nextMonth, i].join('/'));
      // 追加当天状态
      //   if (currentDate.getTime() === todayDate.getTime()) {
      //     status = DAY_STYLE.TODAY;
      //   }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = DAY_STYLE.DISABLED;
      }

      dayList.push({
        year: nextYear,
        month: nextMonth,
        day: i,
        date: currentDate,
        status,
        disabled: disabledFlag,
      });
    }
  }
  // 增加农历、节假日信息
  addLunarInfo(dayList);
  return dayList;
}

export default {
  dayConverters,
};
