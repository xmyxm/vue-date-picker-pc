<template>
  <div class="custom-week-wrap" @mouseleave="leave" >
     <Calendar
      :next-year = "false"
      :next-month = "false"
      :click-day = "clickDay"
      :mouse-enter = "enter"
      :day-list = "startDayList"
      :display-date = "displayStart"
    />

    <Calendar
      :last-year = "false"
      :last-month = "false"
      :click-day = "clickDay"
      :mouse-enter = "enter"
      :day-list = "endDayList"
      :display-date = "displayEnd"
    />
  </div>
</template>

<script>
import { cycleConverters } from './lib/cycle-converters';
import { getLastMonthDay, getYesterday, getTodayDate } from './lib/tools-date';
import updateTime from './lib/update-time';
import Calendar from './calendar.vue';

export default {
  name: 'Cycle',
  components: {
    Calendar,
  },
  props: {
    value: {
      type: Date,
    },
    // 自定义时间区间
    limit: {
      type: Number,
      default: 7,
    },
    startDate: {
      type: [Date, Object],
      default: null,
    },
    endDate: {
      type: [Date, Object],
      default: new Date(),
    },
    onSus: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      mouseDay: null, // 鼠标移入的天数
      displayStart: this.getDisplayStart(this.value),
      displayEnd: this.value,
    };
  },
  watch: {
    dateRegion(newValue) {
      this.displayStart = this.getDisplayStart(newValue);
      this.displayEnd = this.value;
    },
  },
  computed: {
    startDayList() {
      const {
        mouseDay,
        displayStart, // 显示时间
        disabledDay, // 禁止选择判断逻辑
        value,
        limit
      } = this;
      const dayList = cycleConverters(
        displayStart,
        disabledDay,
        mouseDay ? updateTime.updateDay(mouseDay, -limit) : null,
        mouseDay,
        updateTime.updateDay(value, -limit),
        value,
      );
      return dayList;
    },
    endDayList() {
      const {
        mouseDay,
        displayEnd, // 显示时间
        disabledDay, // 禁止选择判断逻辑
        value,
        limit
      } = this;
      const dayList = cycleConverters(
        displayEnd,
        disabledDay,
        mouseDay ? updateTime.updateDay(mouseDay, -limit) : null,
        mouseDay,
        updateTime.updateDay(value, -limit),
        value,
      );
      return dayList;
    },
  },
  methods: {
    // 可选时间判断
    disabledDay(date) {
      const { startDate, endDate } = this;
      if ((startDate && date < startDate) || date > endDate) {
        return true;
      }
      return false;
    },
    getDisplayStart(date) {
      let startDate;
      const { limit } = this;
      const endMonth = date.getMonth();
      const start = updateTime.updateDay(date, -limit);
      const startMonth = start.getMonth();
      if(startMonth === endMonth) {
        startDate = updateTime.updateMonth(endDate, -1);
      } else {
        startDate = start;
      }
      return startDate;
    },
    updateDisplayDate(type, num) {
      this.displayStart = updateTime[type](this.displayStart, num);
      this.displayEnd = updateTime[type](this.displayEnd, num);
    },
    // 选中某个日期
    clickDay(dayInfo) {
      const { year, month, day, date, disabled } = dayInfo;
      if (!disabled) {
        this.mouseDay = null;
        const start = updateTime.updateDay(date, -this.limit);
        this.onSus({ start, end: date });
        console.log('clickDay', `${year}/${month}/${day}`);
      }
    },
    enter(dayInfo) {
      const { year, month, day, date, disabled } = dayInfo;
      if (!disabled) {
        this.mouseDay = date;
        console.log('enter', `${year}/${month}/${day}`);
      }
    },
    leave(dayInfo, event) {
      this.mouseDay = null; 
    },
  },
};
</script>

<style scoped>
.custom-week-wrap {
  display: flex;
  justify-content: space-between;
}

.day-wrap {
  flex: 1;
  position: relative;
}

.day-wrap:nth-child(2n)::before {
  position: absolute;
  content: "";
  width: 1px;
  top: 0;
  bottom: 0;
  left: 0;
  background: #e4e7ed;
  z-index: 1000;
}
</style>
