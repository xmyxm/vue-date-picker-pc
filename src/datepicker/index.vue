<template>
  <CMask v-if="open" :type="type" >
    <Day v-if="type == 'day'" v-bind="bindData"></Day>
    <Week v-if="type == 'week'" v-bind="bindData"></Week>
    <Month v-if="type == 'month'" v-bind="bindData"></Month>
    <Cycle v-if="type == 'cycle'" v-bind="bindData"></Cycle>
    <Custom v-if="type == 'custom'" v-bind="bindData"></Custom>
  </CMask>
</template>

<script>
import Day from './day.vue';
import Cycle from './cycle.vue';
import Week from './week.vue';
import Month from "./month.vue";
import Custom from './custom.vue';
import CMask from './mask.vue';
import { dateByDate, getYesterday, getRegionDay } from './lib/tools-date';

export default {
  name: 'PCDatePicker',
  components: {
    Day,
    Week,
    Month,
    Cycle,
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
      default: getYesterday,
    },
    // 自定义时间区间
    limit: {
      type: Number,
      default: 7,
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
        limit: this.limit,
        dateRegion: getRegionDay(this.dateRegion),
        startDate: this.startDate,
        endDate: this.endDate,
        onSus: this.onSus,
      };
    },
  },
};
</script>

<style>
  @import "./style/base.css";
</style>