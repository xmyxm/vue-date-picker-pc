<template>
  <el-mask v-if="openNext" :on-cancel="onClose">
    <Day v-if="buttonKeyNext == 'day'" v-bind="dayConfig" :disabled="disabledWeek" ></Day>
    <Week v-if="buttonKeyNext == 'week'" v-bind="weekConfig" :disabled="disabledWeek"></Week>
    <custom-week v-if="buttonKeyNext == 'customWeek'" v-bind="customWeekConfig" :disabled="disabledWeek"></custom-week>
  </el-mask>
</template>

<script>
import naturalCalc from './lib/natural-date-calc';
import changecall from './lib/changecall';
import { lastDate, lastDateRange, lastQuarter } from './lib/default-config';
import tools from './lib/tools';
import Week from './week';
import Mask from './mask';
import customWeek from './custom-week';
import Day from './day';

export default {
  name: 'DatePicker',
  components: {
    Day,
    Week,
    'custom-week': customWeek,
    'el-mask': Mask,
  },
  props: {
    // 选择日期需要传递此参数
    value: {
      type: Date,
      default: lastDate(),
    },
    year: {
      type: Number,
      default: tools.getYear(),
    },
    startDate: {
      type: [Date, Object],
      default: null,
    },
    endDate: {
      type: [Date, Object],
      default: null,
    },
    quarter: {
      type: Number,
      default: lastQuarter(),
    },
    month: {
      type: Number,
      default: tools.getDateMonthNum(),
    },
    week: {
      type: Number,
      default: tools.getDateWeekNum(new Date()),
    },
    dateRange: {
      type: Object,
      default() { return lastDateRange(); },
    },
    open: {
      type: Boolean,
      default: false,
    },
    buttonKey: {
      type: String,
      default: 'day',
    },
    onClose: {
      type: Function,
      default() {},
    },
    onSus: {
      type: Function,
      default() {},
    },
    dayConfig: {
      type: Object,
      default() {
        const { onSus, onClose, value } = this;
        return {
          onClose,
          lunar: true,
          value,
          onChange(data) { onSus(changecall.handleDateChange(data)); },
        };
      },
    },
    weekConfig: {
      type: Object,
      default() {
        const { onSus, onClose, year, week } = this;
        return {
          onClose,
          year,
          week,
          onChange(data) { onSus(changecall.handleWeekChange(data)); },
        };
      },
    },
    customWeekConfig: {
      type: Object,
      default() {
        const { onSus, onClose, value } = this;
        return {
          onClose,
          lunar: true,
          value,
          onChange(data) { onSus(changecall.handleDateChange(data)); },
        };
      },
    },
  },
  data() {
    return {
      startDateNext: this.startDate || naturalCalc('-0day', new Date('2017-06-01')),
      endDateNext: this.endDate || naturalCalc('-1day', new Date()),
      openNext: this.open,
      buttonKeyNext: this.buttonKey,
    };
  },
  created() {

  },
  watch: {
    open(newOpen) {
      this.openNext = newOpen;
      this.$nextTick(function () {
        if (this.openNext) {
          window.addEventListener('touchmove', this.preventEvent, {
            passive: false,
          });
        } else {
          window.removeEventListener('touchmove', this.preventEvent);
        }
      });
    },
    year(newYear) {
      this.yearConfig.year = newYear;
      this.weekConfig.year = newYear;
      this.customWeekConfig.year = newYear;
    },
    month(newMonth) {
      this.monthConfig.month = newMonth;
    },
    week(newWeek) {
      this.weekConfig.week = newWeek;
    },
    value(newValue) {
      this.dayConfig.value = newValue;
    },
  },
  methods: {
    preventEvent(e) {
      e.preventDefault();
    },

    disabledWeek(date) {
      let yesterday = this.endDateNext;
      const boundary = this.startDateNext;
      // 按周，昨天所在的周可选
      if (this.buttonKeyNext === 'week') {
        yesterday = tools.resetToFirst(yesterday, 'week');
        yesterday = naturalCalc('+7day', yesterday);
      }
      if (this.buttonKeyNext === 'month') {
        const now = new Date();
        yesterday = now.setMonth(now.getMonth() - 1);
      }
      date = naturalCalc('-0day', date);
      // today = tools.buildNoTimesDate(yesterday);
      if (date < boundary || date > yesterday) {
        return true;
      }
      return false;
    },

    susCallBack(fun) {
      return fun();
    },
  },
};
</script>

<style>
@import "./style/index.css";
</style>
