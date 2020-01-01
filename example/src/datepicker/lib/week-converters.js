
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
function weekIndexByDate(date) {
  const dateText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  const nowDate = new Date(dateText);
  const initTime = new Date(dateText);
  initTime.setMonth(0); // 本年初始月份
  initTime.setDate(1); // 本年初始时间
  const differenceVal = nowDate - initTime; // 今天的时间减去本年开始时间，获得相差的时间
  let todayYear = Math.ceil(differenceVal / (24 * 60 * 60 * 1000)); // 获取今天是今年第几天
  // 如果当前年份第一天不是周一需要补上上年年尾的几天
  todayYear += initTime.getDay();
  const index = Math.ceil(todayYear / 7);
  // 当年所属周
  const result = { index };
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
    // debugger;
    // 当前日期非周日
    const startTime = new Date(dateText);
    startTime.setDate(startTime.getDate() - weekIndex);
    const endTime = new Date(dateText);
    // 这里是6，因为排列是从周日开始
    endTime.setDate(endTime.getDate() + 6 - weekIndex);
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
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  // 是否在日历尾部多加一行
  const enablefix = false;
  // 该月总天数
  const dayCount = tools.getMonthDaysNum(month, year);
  // 该月第一天是周几
  const startDayWeek = tools.getWeek(1, month, year);
  // 该月最后一天是周几
  const lastDayWeek = tools.getWeek(dayCount, month, year);
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

  // 补齐本月之前的数据
  const prevDay = startDayWeek % 7;

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

  let nextDay = (7 - ((lastDayWeek + 1) % 7)) % 7;
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
  //
  const currentWeek = weekIndexByDate(date).currentWeek;
  if (currentWeek.end < new Date()) {
    const minDay = currentWeek.start.getDate();
    const maxDay = currentWeek.end.getDate();
    console.log(currentWeek);
    dayList.forEach((item) => {
      if (item.day >= minDay && item.day <= maxDay) {
        item.status = CONF.ACTIVE;
      }
    });
  }
  return dayList;
}

export default {
  weekConverters,
};
