<template>
  <CMask v-if="open" :type="type" >
    <Day v-if="type == 'day'" v-bind="bindData"></Day>
    <Week v-if="type == 'week'" v-bind="bindData"></Week>
    <Custom v-if="type == 'custom'" v-bind="bindData"></Custom>
  </CMask>
</template>

<script>
import Day from './day';
import Week from './week';
import Custom from './custom';
import CMask from './mask';
import { dateByDate, getYesterday, getRegionDay } from './lib/tools-date';

export default {
  name: 'PCDatePicker',
  components: {
    Day,
    Week,
    Custom,
    CMask,
  },
  props: {
    // 是否展示日历组件
    open: {
      type: Boolean,
      default: false,
    },
    // 展示的日历组件类型
    type: {
      type: String,
      default: 'day',
    },
    // 选择日期（day or week）
    value: {
      type: Date,
      default: getYesterday(),
    },
    // 自定义日期区间选择 (customWeek)
    dateRegion: {
      type: Object,
      default: null,
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
  computed: {
    bindData() {
      return {
        value: dateByDate(this.value), // 格式化数据，去掉时分秒
        dateRegion: getRegionDay(this.dateRegion),
        startDate: this.startDate,
        endDate: this.endDate,
        onSus: this.onSus,
      };
    },
  },
};
</script>
