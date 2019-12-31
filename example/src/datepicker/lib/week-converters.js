
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
    day = parseInt(dayList[i].val, 10);
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

  // 日期数据转换器，生成render所需的日期数据
  // 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function weekConverters(date, disabledCheck) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  // 是否在日历尾部多加一行
  const enablefix = false;
  // 该月总天数
  const dayNum = tools.getMonthDaysNum(month, year);
  // 该月第一天是周几
  const startDayWeek = tools.getWeek(1, month, year);
  // 该月最后一天是周几
  const lastDayWeek = tools.getWeek(dayNum, month, year);

  //   let startDate,
  //     endDate,
  //     startDateStamp,
  //     endDateStamp;
  // 今天的
  const todayTime = new Date();
  const todayDate = new Date(`${todayTime.getFullYear()}/${todayTime.getMonth() + 1}/${todayTime.getDate()}`);
  // 完全没选中的标识
  // const absoluteNoChoosed = true;

  // 非范围状态下表示已选择，范围模式下表示存在起点
  // 分别获取对应的时间戳，自动归类起点/终点
  //   if (startDateData) {
  //     startDate = tools.resetToFirst(startDateData, 'hours');
  //     endDate = tools.resetToFirst(endDateData, 'hours');
  //     startDateStamp = +startDate;
  //     endDateStamp = +endDate;

  //     if (startDateStamp > endDateStamp) {
  //       const currentDate = endDate;
  //       const tmpEndDateData = endDateData;
  //       startDateStamp = endDateStamp;
  //       endDateStamp = +startDate;
  //       endDate = startDate;
  //       startDate = currentDate;
  //       endDateData = startDateData;
  //       startDateData = tmpEndDateData;
  //     }

  //     absoluteNoChoosed = false;
  //   }

  let dayVal;
  // let checkedParam;
  let dayList = [];
  // const startDateNum = year + (month.toString().length < 2 ? '0' : '') + month;
  let disabledFlag = false;
  // let currentPos;
  // 用于比较范围/选中
  //   startDate = startDate && parseInt(tools.dateFormat('Ymd', startDate), 10);
  //   endDate = endDate && parseInt(tools.dateFormat('Ymd', endDate), 10);

  // 获取主体部分数据
  for (let i = 0; i < dayNum; i++) {
    dayVal = i + 1;

    let status = CONF.CURRENT;
    // 日期的数字形式，用于比较选中
    const currentDate = new Date([year, month, dayVal].join('/'));
    // const tmpDateNum = parseInt(
    //   startDateNum + (dayVal < 10 ? '0' : '') + dayVal,
    //   10,
    // );
    // checkedParam = cloneClockToDate(currentDate, cache);
    // disabledFlag = disabledCheck(checkedParam);
    disabledFlag = disabledCheck(currentDate);
    if (disabledFlag) {
      status = CONF.DISABLED;
    }

    // 追加当天状态
    if (currentDate === todayDate) {
      status = CONF.TODAY;
    }

    dayList.push({
      month,
      year,
      val: dayVal,
      status,
      disabled: disabledFlag,
    });
  }

  // 补齐本月之前的数据
  const prevOffset = startDayWeek % 7;

  if (prevOffset) {
    let prevMonth = month - 1;
    const isFirstMonth = prevMonth <= 0;

    prevMonth = isFirstMonth ? 12 : prevMonth;

    const prevYear = isFirstMonth ? year - 1 : year;
    let prevMonthDayNum = tools.getMonthDaysNum(prevMonth, prevYear);
    const prevDayBorder = prevMonthDayNum - prevOffset;

    for (; prevMonthDayNum > prevDayBorder; prevMonthDayNum--) {
      let status = CONF.PREV;
      const currentDate = new Date([prevYear, prevMonth, prevMonthDayNum].join('/'));
      // const tmpDateNum = parseInt(tools.dateFormat('Ymd', currentDate), 10);
      //   checkedParam = cloneClockToDate(currentDate, cache);
      // checkedParam = currentDate;
      // currentPos = 'normal';

      //   // 选中状态
      //   if (!absoluteNoChoosed) {
      //     if (tmpDateNum === startDate) {
      //       currentPos = 'start';
      //     }
      //     if (tmpDateNum === endDate) {
      //       currentPos = currentPos === 'start' ? 'startEnd' : 'end';
      //     }
      //   }

      // 追加当天状态
      if (currentDate === todayDate) {
        status = CONF.TODAY;
      }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = CONF.DISABLED;
      }

      dayList.unshift({
        month: prevMonth,
        year: prevYear,
        val: prevMonthDayNum,
        status,
        disabled: disabledFlag,
      });
    }
  }

  // 补齐本月之后的数据
  // 将日历数据补全6行；

  let nextOffset = (7 - ((lastDayWeek + 1) % 7)) % 7;

  if (dayNum + prevOffset <= 28 && enablefix) {
    nextOffset += 7 * 2;
  } else if (
    dayNum + prevOffset > 28 &&
      dayNum + prevOffset <= 35 &&
      enablefix
  ) {
    nextOffset += 7;
  }

  if (nextOffset) {
    let nextMonth = month + 1;
    const isLastMonth = nextMonth > 12;

    nextMonth = isLastMonth ? 1 : nextMonth;
    const nextYear = isLastMonth ? year + 1 : year;

    const nextDayBorder = nextOffset;

    for (let i = 1; i <= nextDayBorder; i++) {
      let status = CONF.NEXT;
      const currentDate = new Date([nextYear, nextMonth, i].join('/'));
      // const tmpDateNum = parseInt(tools.dateFormat('Ymd', currentDate), 10);
      // checkedParam = cloneClockToDate(currentDate, cache);
      // checkedParam = currentDate;
      // currentPos = 'normal';

      // 选中状态
      //   if (
      //     !absoluteNoChoosed &&
      //       tmpDateNum >= startDate &&
      //       tmpDateNum <= endDate
      //   ) {
      //     // if(tmpDateNum == startDate || tmpDateNum == endDate)
      //     //     status = CONF.ACTIVE;
      //     // else status = CONF.REGION;
      //     if (tmpDateNum === startDate) {
      //       currentPos = 'start';
      //     }
      //     if (tmpDateNum === endDate) {
      //       currentPos = currentPos === 'start' ? 'startEnd' : 'end';
      //     }
      //   }

      // 追加当天状态
      if (currentDate === todayDate) {
        status = CONF.TODAY;
      }

      disabledFlag = disabledCheck(currentDate); // (checkedParam, currentPos);
      if (disabledFlag) {
        status = CONF.DISABLED;
      }

      dayList.push({
        month: nextMonth,
        year: nextYear,
        val: i,
        status,
        disabled: disabledFlag,
      });
    }
  }
  // 增加农历、节假日信息
  dayList = addLunarInfo(dayList);
  //   selectedTime =

  //   dayList.forEach((item) => {

  //   });
  return dayList;
}


export const cloneClockToDate = (date, parsedBasedDate) => {
  if (parsedBasedDate === false) {
    return date;
  }
  date = tools.cloneDate(date);
  date.setHours(parsedBasedDate.hour || 0);
  date.setMinutes(parsedBasedDate.minute || 0);
  date.setSeconds(parsedBasedDate.second || 0);
  date.setMilliseconds(0);
  return date;
};


function weekIndexByDate(date) {
  const dateText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
  const nowDate = new Date(dateText);
  const initTime = new Date(dateText);
  initTime.setMonth(0); // 本年初始月份
  initTime.setDate(1); // 本年初始时间
  const differenceVal = nowDate - initTime; // 今天的时间减去本年开始时间，获得相差的时间
  const todayYear = Math.ceil(differenceVal / (24 * 60 * 60 * 1000)); // 获取今天是今年第几天
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
    // 当前日期非周日
    const startTime = new Date(dateText);
    startTime.setDate(startTime.getDate() - weekIndex);
    const endTime = new Date(dateText);
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
