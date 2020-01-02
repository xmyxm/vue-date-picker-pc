
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
  REGION: 'dayRegion',
  TODAY: 'today',
  ACTIVE_TODAY: 'todayActive',
  REGION_TODAY: 'todayRegion',
  DISABLED: 'dayDisabled',
  PREV: 'dayPrev',
  NEXT: 'dayNext',
};

// 给日期添加农历，节假日
const addLunarInfo = (dayList) => {
  let year;
  let month;
  let day;
  let firstDay;
  let monthDaySum;
  let tempMonth;
  let tempDay;

  for (let i = 0; i < dayList.length; i++) {
    let showInfo;
    let holiday;
    let work;
    year = parseInt(dayList[i].year, 10);
    month = parseInt(dayList[i].month, 10);
    day = parseInt(dayList[i].day, 10);
    // 初始化 或 新的一月，需要重新获取起始农历时间
    if (!tempDay || tempDay > monthDaySum) {
      firstDay = lunarUtil.solar2lunar(year, month, day);
      monthDaySum = firstDay.isLeap
        ? lunarUtil.leapDays(year)
        : lunarUtil.monthDays(firstDay.lYear, firstDay.lMonth);
      tempMonth = firstDay.lMonth;
      tempDay = firstDay.lDay;
    }
    showInfo = lunarUtil.toChinaDay(tempDay);
    if (tempDay === 1) {
      showInfo = firstDay.IMonthCn;
    }
    const holidayInfo = lunarUtil.getHolidayInfo(
      tempMonth,
      tempDay,
      year,
      month,
      day,
    );
      // 展示信息优先级：农历节日 > 特殊节日（母亲节等）> 公历节日 > 月份（每月初一显示月份）> 日期
    showInfo = holidayInfo.vication || showInfo;
    holiday = holidayInfo.holiday;
    work = holidayInfo.work;

    dayList[i].lDay = showInfo;
    dayList[i].holiday = holiday;
    dayList[i].work = work;
    tempDay += 1;
  }
  return dayList;
};

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
  const dayCount = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  // 计算当月第一天星期几
  const firstDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/1`)).getDay();
  // 计算当月最后一天星期几
  const lastDayWeekIndex = (new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${dayCount}`)).getDay();
  // 当年所属周
  const result = {
    year,
    month,
    week,
    dayCount,
    firstDayWeekIndex,
    lastDayWeekIndex,
  };
  const weekIndex = todayYear % 7;
  // 当前日期为周日
  if (weekIndex === 0) {
    const startTime = new Date(dateText);
    startTime.setDate(startTime.getDate() - 7);
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
    startTime.setDate(startTime.getDate() - weekIndex);
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
export function weekConverters(date, disabledCheck) {
  // 是否在日历尾部多加一行
  const enablefix = false;
  // 该月总天数, 该月第一天是周几, 该月最后一天是周几, 当前日期所在的周
  const { year, month, dayCount, firstDayWeekIndex, lastDayWeekIndex, currentWeek } = weekInfoByDate(date);
  // 今日时间
  const todayTime = new Date();
  // 今日日期
  const todayDate = new Date(`${todayTime.getFullYear()}/${todayTime.getMonth() + 1}/${todayTime.getDate()}`);

  // 月天数对象集合
  let dayList = [];
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
      month,
      year,
      day: currentDay,
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
    let prevDayCount = tools.getMonthDaysNum(prevMonth, prevYear);
    const prevDayBorder = prevDayCount - prevDay;

    for (; prevDayCount > prevDayBorder; prevDayCount--) {
      let status = CONF.PREV;
      const currentDate = new Date([prevYear, prevMonth, prevDayCount].join('/'));

      // 追加当天状态
      if (currentDate.getTime() === todayDate.getTime()) {
        status = CONF.TODAY;
      }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = CONF.DISABLED;
      }

      dayList.unshift({
        month: prevMonth,
        year: prevYear,
        day: prevDayCount,
        status,
        disabled: disabledFlag,
      });
    }
  }

  // 补齐本月之后的数据
  // 将日历数据补全6行；

  let nextDay = (7 - ((lastDayWeekIndex + 1) % 7)) % 7;
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
      if (currentDate.getTime() === todayDate.getTime()) {
        status = CONF.TODAY;
      }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = CONF.DISABLED;
      }

      dayList.push({
        month: nextMonth,
        year: nextYear,
        day: i,
        status,
        disabled: disabledFlag,
      });
    }
  }
  // 增加农历、节假日信息
  dayList = addLunarInfo(dayList);
  if (currentWeek.end < new Date()) {
    const minDay = currentWeek.start.getDate();
    const maxDay = currentWeek.end.getDate();
    console.log(currentWeek);
    dayList.forEach((item) => {
      if (item.year === year && item.month === month && item.day >= minDay && item.day <= maxDay) {
        if (item.day === minDay || item.day === maxDay) {
          item.status = CONF.ACTIVE;
        } else {
          item.status = CONF.REGION;
        }
      }
    });
  }
  return dayList;
}

export default {
  weekConverters,
};
