import { dayListByDate } from './tools-date';
import { DAY_STYLE } from './config';

// 日期数据转换器，生成render所需的日期数据
// 添加enablefix，表示是否范围日历，若范围日历enablefix设为true
export function dayConverters(selectDate, displayDate, disabledCheck) {
  // 是否在日历尾部多加一行
  const enablefix = false;
  const dayList = dayListByDate(displayDate, disabledCheck, enablefix);
  const todayDate = new Date();
  dayList.forEach((item) => {
    if (!item.disabled) {
      if (selectDate && selectDate.getTime() === item.date.getTime()) {
        // 选中时间
        item.status = DAY_STYLE.ACTIVE;
      } else if (item.date.getTime() === todayDate.getTime()) {
        // 追加当天状态
        item.status = DAY_STYLE.TODAY;
      } else {
        item.status = DAY_STYLE.CURRENT;
      }
    } else {
      item.status = DAY_STYLE.DISABLED;
    }
  });
  return dayList;
}

export default {
  dayConverters,
};

