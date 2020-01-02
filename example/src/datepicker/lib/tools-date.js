import lunarUtil from './lunar-util';

/**
 * 给日期添加农历，节假日
 * @param {*} dayList 时间天数数组集合
 */
export function addLunarInfo(dayList) {
  dayList.forEach((item) => {
    const { year, month, day } = item;
    // 获取日期农历信息
    const lunarDateInfo = lunarUtil.solar2lunar(year, month, day);
    // 根据是否闰月计算月总天数
    // const monthDayCount = lunarDateInfo.isLeap ? lunarUtil.leapDays(year) : lunarUtil.monthDays(lunarDateInfo.lYear, lunarDateInfo.lMonth);
    // 农历月份
    const lunarMonth = lunarDateInfo.lMonth;
    const lunarDay = lunarDateInfo.lDay;

    // 传入农历日期数字返回汉字表示法
    let chinaDay = lunarUtil.toChinaDay(lunarDay);
    if (lunarDay === 1) {
      chinaDay = lunarDateInfo.IMonthCn;
    }
    const holidayInfo = lunarUtil.getHolidayInfo(lunarMonth, lunarDay, year, month, day);
    // 展示信息优先级：农历节日 > 特殊节日（母亲节等）> 公历节日 > 月份（每月初一显示月份）> 日期
    chinaDay = holidayInfo.vication || chinaDay;
    // 假期标识
    const holiday = holidayInfo.holiday;
    // 假期补班标识
    const work = holidayInfo.work;

    item.lDay = chinaDay;
    item.holiday = holiday;
    item.work = work;
  });
}

// 通过日期计算所属月的总天数
export function dayCountByMonth(date) {
  return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
}

/**
 * 通过日期计算所属月的公共属性
 * @param {*} date 时间对象
 */
export function monthInfoByDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  // 计算当月总天数
  const dayCount = dayCountByMonth(date);
  // 计算当月第一天星期几
  const firstDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/1`)).getDay();
  // 计算当月最后一天星期几
  const lastDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${dayCount}`)).getDay();
  // 月信息
  const monthInfo = {
    year,
    month,
    dayCount,
    firstDayWeekIndex,
    lastDayWeekIndex,
  };
  return monthInfo;
}

/**
 * 去掉时分秒的时间对象
 * @param {*} date 时间对象
 */
export function dateByDate(date) {
  return new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`);
}

/**
 * 生成去掉时分秒的时间对象
 * @param {*} year 年
 * @param {*} month 月
 * @param {*} day 日
 */
export function dateByDateText(year, month, day) {
  return new Date([year, month, day].join('/'));
}


/**
 * 计算生成完成日历控件中的天数据
 * @param {*} displayDate 日历显示的日期（月份切换即使用此日期）
 * @param {*} disabledCheck 日期是否禁止点击check函数
 * @param {*} enablefix  是否在日历尾部多加一行
 */
export function dayListByDate(displayDate, disabledCheck, enablefix = false) {
  // 是否在日历尾部多加一行
  // 该月总天数, 该月第一天是周几, 该月最后一天是周几, 当前日期所在的周
  const { year, month, dayCount, firstDayWeekIndex, lastDayWeekIndex } = monthInfoByDate(displayDate);
  // 月天数对象集合
  const dayList = [];
  // 获取主体部分数据
  for (let i = 0; i < dayCount; i++) {
    const currentDay = i + 1;
    // 日期的数字形式，用于比较选中
    const currentDate = dateByDateText(year, month, currentDay);
    dayList.push({
      year,
      month,
      day: currentDay,
      date: currentDate,
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
      const currentDate = new Date([prevYear, prevMonth, prevDayCount].join('/'));
      dayList.unshift({
        year: prevYear,
        month: prevMonth,
        day: prevDayCount,
        date: currentDate,
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
      const currentDate = new Date([nextYear, nextMonth, i].join('/'));
      dayList.push({
        year: nextYear,
        month: nextMonth,
        day: i,
        date: currentDate,
      });
    }
  }
  addLunarInfo(dayList);
  if (typeof disabledCheck === 'function') {
    dayList.forEach((item) => {
      item.disabled = disabledCheck(item.date);
    });
  }
  return dayList;
}

export default {
  addLunarInfo,
  dayCountByMonth,
  monthInfoByDate,
  dateByDate,
  dateByDateText,
};
