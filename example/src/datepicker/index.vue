<template>
  <el-mask v-if="open" :type="type" >
    <Day v-if="type == 'day'" v-bind="bindData"></Day>
    <Week v-if="type == 'week'" v-bind="bindData"></Week>
    <custom-week v-if="type == 'customWeek'" v-bind="bindData"></custom-week>
  </el-mask>
</template>

<script>

import Day from './day';
import Week from './week';
import customWeek from './custom-week';
import Mask from './mask';
import { dateByDate, getYesterday, getRegionDay } from './lib/tools-date';

export default {
  name: 'DatePicker',
  components: {
    Day,
    Week,
    'custom-week': customWeek,
    'el-mask': Mask,
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

<style>
@import "./style/index.css";
</style>
