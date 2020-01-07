<template>
<Calendar
  :click-day = "clickDay"
  :day-list = "dayList"
  :display-date = "displayDate"
/>
</template>

<script>
import { dayConverters } from './lib/day-converters';
import updateTime from './lib/update-time';
import { DATE_TYPE } from "./lib/config";
import Calendar from './calendar.vue';

export default {
  name: 'Day',
  components: {
    Calendar,
  },
  props: {
    // 选中的日期，范围模式下表示起始日期
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
    // 选中时的回调
    onSus: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
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
      const dayList = dayConverters(
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
      const { year, month, day, date, disabled } = dayInfo;
      const type = DATE_TYPE.DAY;
      const { onSus } = this;
      if (!disabled) {
        // console.log('clickDay', `${year}/${month}/${day}`);
        onSus({type, year, month, day, date });
      }
    },
  },
};
</script>
