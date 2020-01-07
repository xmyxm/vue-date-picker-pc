<template>
  <Calendar
  :click-day = "clickDay"
  :mouse-enter = "enter"
  :mouse-leave = "leave"
  :day-list = "dayList"
  :display-date = "displayDate"
/>
</template>

<script>
import { weekConverters } from './lib/week-converters';
import updateTime from './lib/update-time';
import { DATE_TYPE } from "./lib/config";
import Calendar from './calendar.vue';

export default {
  name: 'Week',
  components: {
    Calendar,
  },
  props: {
    value: {
      type: Date,
    },
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },
    onSus: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      mouseHitDate: null, // 鼠标命中日期
      displayDate: new Date(this.value.getTime()),
    };
  },
  watch: {
    value(newValue) {
      this.displayDate = new Date(newValue.getTime());
    },
  },
  computed: {
    dayList() {
      const {
        value, // 当前选择的时间对象
        displayDate, // 显示时间
        disabledDay, // 禁止选择判断逻辑
        mouseHitDate,
      } = this;
      const dayList = weekConverters(
        value,
        displayDate,
        disabledDay,
        mouseHitDate,
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
    updateDisplayDate(type, num) {
      this.displayDate = updateTime[type](this.displayDate, num);
    },
    // 选中某个日期
    clickDay(dayInfo) {
      this.mouseHitDate = null;
      const { year, month, day, week, start, end, date } = dayInfo;
      const { startDate, endDate, onSus } = this;
      if (!(startDate && end < startDate) && end < endDate) {
        // console.log('clickDay', `${year}/${month}/${day}`);
        const type = DATE_TYPE.WEEK;
        onSus({type, year, month, day, week, start, end });
      }
    },
    enter(dayInfo) {
      const { year, month, day } = dayInfo;
      this.mouseHitDate = new Date(`${year}/${month}/${day}/`);
      // console.log('enter', `${year}/${month}/${day}`);
    },
    leave(dayInfo) {
      this.mouseHitDate = null;
      const { year, month, day } = dayInfo;
      // console.log('leave', `${year}/${month}/${day}`);
    },
  },
};
</script>
