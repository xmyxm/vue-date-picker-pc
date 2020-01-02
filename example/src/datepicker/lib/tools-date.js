import lunarUtil from './lunar-util';

// 给日期添加农历，节假日
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

export function dayCountByMonth(date) {
  return (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();
}

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

export default {
  addLunarInfo,
  dayCountByMonth,
  monthInfoByDate,
};
