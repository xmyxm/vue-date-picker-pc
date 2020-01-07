<template>
<div class="day-wrap">
    <!-- 日历头 -->
    <div class="header">
      <div class="icon-btn" title="上一年" @click="updateDisplayDate('updateYear', -1)">
        <i class="double-left-btn" />
      </div>
      <div :title="displayDate.getFullYear()" class="center-btn">
        {{displayDate.getFullYear()}} 年
      </div>
      <div class="icon-btn" title="下一年" @click="updateDisplayDate('updateYear', 1)">
        <i class="double-right-btn" />
      </div>
    </div>
    <!-- 日期单元 -->
    <div class="month-list">
      <div
        v-for="monthData in monthList"
        :key="`${monthData.year}${monthData.month}`"
        :class="monthData.status"
        @click="clickDay(monthData, $event)"
      >
        <span class="month-item-val">{{monthData.month}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { monthConverters } from './lib/month-converters';
import updateTime from './lib/update-time';
import { DATE_TYPE } from "./lib/config";

export default {
  name: 'Month',
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
    monthList() {
      const {
        value, // 当前选择的时间对象
        displayDate, // 显示年份
        disabledDay, // 禁止选择判断逻辑
      } = this;
      const list = monthConverters(
        value,
        displayDate,
        disabledDay,
      );
      return list
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
      const { year, month, date, disabled } = dayInfo;
      const { onSus } = this;
      if (!disabled) {
        // console.log('clickDay', `${year}/${month}`);
        const type = DATE_TYPE.DAY;
        onSus({type, year, month, date});
      }
    },
  },
};
</script>

<style scoped>
.month-list {
    background: #fff;
    position: relative;
    z-index: 15;
    font-size: 12px;
    text-align: left;
    padding-bottom: 5px;
}

.month-item, .month-disabled, .month-active {
    display: inline-block;
    width: 24%;
    padding: 5%;
    border-radius: 2px;
    text-align: center;
    box-sizing: border-box;
}

.month-active {
    cursor: pointer;
    background: #118bfb;
    color: #fff;
}

.month-item {
    cursor: pointer;
}

.month-disabled{
    cursor: not-allowed;
    color: #ccc;
}

.month-item:hover {
    background-color: #f8f8f8;
}

.month-item:nth-child(4n+1), 
.month-disabled:nth-child(4n+1) {
    margin-left: 2%;
}

.month-item-val {
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
}

</style>