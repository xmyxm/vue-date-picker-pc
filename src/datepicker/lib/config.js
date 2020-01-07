
/**
 * 配置界面
 */

// 多语言包配置
const lanMap = {
  zh: {
    date: ['年', '月', '日'],
    weekShort: ['日', '一', '二', '三', '四', '五', '六'],
    week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    btns: ['去年', '上个月', '下个月', '明年', '今年', '本月'],
    month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  },
  en: {
    date: ['Year', 'Month', 'Day'],
    weekShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    btns: ['Last year', 'Last month', 'Next month', 'Next year', 'This year', 'This Month'],
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
};

const locale = {
  timezoneOffset: null,
  lang: lanMap,
};

// 顶部按钮配置
const headBtns = {
  BTN_MINUS_YEAR: 'double-left-btn',
  BTN_MINUS_MONTH: 'left-btn',
  BTN_PLUS_MONTH: 'right-btn',
  BTN_PLUS_YEAR: 'double-right-btn',
  BTN_NORMAL_PREV: 'left-btn',
  BTN_NORMAL_NEXT: 'right-btn',
};


// const CONF = {
//   CURRENT: 'week-item',
//   ACTIVE: 'week-active',
//   TODAY: 'week-today',
//   DISABLED: 'week-disabled',
//   PREV: 'week-prev',
//   NEXT: 'week-next',
// };

export const DAY_STYLE = {
  CURRENT: 'day-item',
  ACTIVE: 'day-active',
  TEMP_ACTIVE: 'temp-day-active',
  REGION: 'day-region',
  TEMP_REGION: 'temp-day-region',
  TODAY: 'today',
  ACTIVE_TODAY: 'today-active',
  REGION_TODAY: 'today-region',
  DISABLED: 'day-disabled',
  DISABLED_TODAY: 'today-disabled',
  PREV: 'day-prev',
  NEXT: 'day-next',
};

export const MONTH_STYLE = {
  CURRENT: 'month-item',
  ACTIVE: 'month-active',
  DISABLED: 'month-disabled',
  THIS_MONTH: 'this-month',
  DISABLED_THIS_MONTH: 'this-month-disabled',
}

export default {
  locale,
  headBtns,
  DAY_STYLE,
};

