
import tools from './tools';
import lunarUtil from './lunar-util';

// const CONF = {
//   CURRENT: 'week-item',
//   ACTIVE: 'week-active',
//   TODAY: 'week-today',
//   DISABLED: 'week-disabled',
//   PREV: 'week-prev',
//   NEXT: 'week-next',
// };

const CONF = {
  CURRENT: 'dayItem',
  ACTIVE: 'dayActive',
  TEMP_ACTIVE: 'temp-day-active',
  REGION: 'dayRegion',
  TEMP_REGION: 'temp-day-region',
  TODAY: 'today',
  ACTIVE_TODAY: 'todayActive',
  REGION_TODAY: 'todayRegion',
  DISABLED: 'dayDisabled',
  DISABLED_TODAY: 'today-disabled',
  PREV: 'dayPrev',
  NEXT: 'dayNext',
};

// 给日期添加农历，节假日
function addLunarInfo(dayList) {
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

function dayCountByMonth(date) {
  return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
}

function monthInfoByDate(date) {
  const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  const nowDate = new Date(dateText);
  const initTime = new Date(dateText);
  initTime.setMonth(0); // 本年初始月份
  initTime.setDate(1); // 本年初始时间
  const differenceVal = nowDate - initTime; // 今天的时间减去本年开始时间，获得相差的时间
  let todayYear = Math.ceil(differenceVal / (24 * 60 * 60 * 1000)); // 获取今天是今年第几天
  // 本年初始时间是1号，所以天数差值需要补充1天
  todayYear += 1;
  // 如果当前年份第一天不是周一需要补上上年年尾的几天
  todayYear += initTime.getDay() - 1;
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  // 计算出第几周
  const week = Math.ceil(todayYear / 7);
  // 计算当月总天数
  const dayCount = dayCountByMonth(date);
  // 计算当月第一天星期几
  const firstDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/1`)).getDay();
  // 计算当月最后一天星期几
  const lastDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${dayCount}`)).getDay();
  // 当天是周几
  const weekIndex = todayYear % 7;
  // 当年所属周
  const result = {
    year,
    month,
    week,
    dayCount,
    weekIndex,
    firstDayWeekIndex,
    lastDayWeekIndex,
  };
  // debugger;
  // 当前日期为周日
  if (weekIndex === 0) {
    const startTime = new Date(dateText);
    // 减去6天刚好是这周周一
    startTime.setDate(startTime.getDate() - 7 + 1);
    // 当前日期所属周
    result.currentWeek = {
      start: startTime,
      end: nowDate,
    };
    // 当前日期生效周
    result.validTime = result.currentWeek;
  } else {
    // 当前日期非周日
    const startTime = new Date(dateText);
    startTime.setDate(startTime.getDate() - weekIndex + 1);
    const endTime = new Date(dateText);
    // debugger;
    endTime.setDate(endTime.getDate() + 7 - weekIndex);
    // 当前日期所属周
    result.currentWeek = {
      start: startTime,
      end: endTime,
    };
    const oldTime = new Date(dateText);
    oldTime.setDate(oldTime.getDate() - weekIndex - 7);
    // 当前日期生效周
    result.validTime = {
      start: oldTime,
      end: startTime,
    };
  }
  return result;
}

// 计算当前时间所在周的起始范围
function weekInfoByDate(date) {
  const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  const nowDate = new Date(dateText);
  const initTime = new Date(dateText);
  initTime.setMonth(0); // 本年初始月份
  initTime.setDate(1); // 本年初始时间
  const differenceVal = nowDate - initTime; // 今天的时间减去本年开始时间，获得相差的时间
  let todayYear = Math.ceil(differenceVal / (24 * 60 * 60 * 1000)); // 获取今天是今年第几天
  // 本年初始时间是1号，所以天数差值需要补充1天
  todayYear += 1;
  // 如果当前年份第一天不是周一需要补上上年年尾的几天
  todayYear += initTime.getDay() - 1;
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  // 计算出第几周
  const week = Math.ceil(todayYear / 7);
  // 计算当月总天数
  const dayCount = dayCountByMonth(date);
  // 计算当月第一天星期几
  const firstDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/1`)).getDay();
  // 计算当月最后一天星期几
  const lastDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${dayCount}`)).getDay();
  // 当天是周几
  const weekIndex = todayYear % 7;
  // 当年所属周
  const result = {
    year,
    month,
    week,
    dayCount,
    weekIndex,
    firstDayWeekIndex,
    lastDayWeekIndex,
  };
  // debugger;
  // 当前日期为周日
  if (weekIndex === 0) {
    const startTime = new Date(dateText);
    // 减去6天刚好是这周周一
    startTime.setDate(startTime.getDate() - 7 + 1);
    // 当前日期所属周
    result.currentWeek = {
      start: startTime,
      end: nowDate,
    };
    // 当前日期生效周
    result.validTime = result.currentWeek;
  } else {
    // 当前日期非周日
    const startTime = new Date(dateText);
    startTime.setDate(startTime.getDate() - weekIndex + 1);
    const endTime = new Date(dateText);
    // debugger;
    endTime.setDate(endTime.getDate() + 7 - weekIndex);
    // 当前日期所属周
    result.currentWeek = {
      start: startTime,
      end: endTime,
    };
    const oldTime = new Date(dateText);
    oldTime.setDate(oldTime.getDate() - weekIndex - 7);
    // 当前日期生效周
    result.validTime = {
      start: oldTime,
      end: startTime,
    };
  }
  return result;
}

// 日期数据转换器，生成render所需的日期数据
// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function weekConverters(selectWeek, displayDate, disabledCheck, mouseHitDate) {
  // 是否在日历尾部多加一行
  const enablefix = false;
  // 该月总天数, 该月第一天是周几, 该月最后一天是周几, 当前日期所在的周
  const { year, month, dayCount, firstDayWeekIndex, lastDayWeekIndex, currentWeek } = weekInfoByDate(displayDate);
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

    let status = CONF.CURRENT;
    // 日期的数字形式，用于比较选中
    const currentDate = new Date([year, month, currentDay].join('/'));
    // 判断当前日期是否点击
    disabledFlag = disabledCheck(currentDate);
    // 添加不可点击样式
    if (disabledFlag) {
      status = CONF.DISABLED;
    }

    // 追加当天状态

    if (currentDate.getTime() === todayDate.getTime()) {
      status = CONF.TODAY;
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
  const prevDay = firstDayWeekIndex === 0 ? 6 : firstDayWeekIndex;
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
      let status = CONF.PREV;
      const currentDate = new Date([prevYear, prevMonth, prevDayCount].join('/'));

      // 追加当天状态
      //   if (currentDate.getTime() === todayDate.getTime()) {
      //     status = CONF.TODAY;
      //   }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = CONF.DISABLED;
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
      let status = CONF.NEXT;
      const currentDate = new Date([nextYear, nextMonth, i].join('/'));
      // 追加当天状态
      //   if (currentDate.getTime() === todayDate.getTime()) {
      //     status = CONF.TODAY;
      //   }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = CONF.DISABLED;
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
  if (currentWeek.end < todayDate) {
    const { start, end } = currentWeek;
    dayList.forEach((item) => {
      if (item.year === year && item.month === month && item.date >= start && item.date <= end) {
        if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
          item.status = CONF.ACTIVE;
        } else {
          item.status = CONF.REGION;
        }
      }
    });
  }
  // 如果鼠标滑动到某时间需要 计算其对应的周
  if (mouseHitDate) {
    const selectWeekInfo = weekInfoByDate(mouseHitDate);
    // { year, month, dayCount, firstDayWeekIndex, lastDayWeekIndex, currentWeek; }
    const { start, end } = selectWeekInfo.currentWeek;
    if (selectWeekInfo.month <= month && end < todayDate) {
      dayList.forEach((item) => {
        if (item.year <= year && item.month <= month && item.date >= start && item.date <= end) {
          if (item.date.getTime() === start.getTime() || item.date.getTime() === end.getTime()) {
            item.status = CONF.TEMP_ACTIVE;
          } else {
            item.status = CONF.TEMP_REGION;
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
