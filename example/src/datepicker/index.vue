<template>
  <el-mask v-if="open">
    <Day v-if="type == 'day'" v-bind="bindData" :disabled="disabledWeek" ></Day>
    <Week v-if="type == 'week'" v-bind="bindData" :disabled="disabledWeek"></Week>
    <custom-week v-if="type == 'customWeek'" v-bind="bindData"></custom-week>
  </el-mask>
</template>

<script>
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
    // 选择日期
    value: {
      type: Date,
    },
    startDate: {
      type: [Date, Object],
      default: null,
    },
    endDate: {
      type: [Date, Object],
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
        value: this.value,
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
