<template>
  <div class="day-wrap">
    <!-- 日历头 -->
    <div class="header">
      <div class="iconBtn" title="上一年" @click="updateDisplayDate('updateYear', -1)">
        <i class="angleDoubleLeft" />
      </div>
      <div
        class="iconBtn"
        title="上个月"
        @click="updateDisplayDate('updateMonth', -1)"
      >
        <i class="angleLeft" />
      </div>
      <div
        :title="displayDate.getFullYear() + '-' + displayDate.getMonth() + 1"
        class="centerBtn"
      >
        {{displayDate.getFullYear()}} 年 {{displayDate.getMonth() + 1}} 月
      </div>
      <div
        class="iconBtn"
        title="下个月"
        @click="updateDisplayDate('updateMonth', 1)"
      >
        <i class="angleRight" />
      </div>
      <div class="iconBtn" title="下一年" @click="updateDisplayDate('updateYear', 1)">
        <i class="angleDoubleRight" />
      </div>
    </div>

    <!-- 星期头 -->
    <div class="head-day-list">
      <span
        v-for="val in ['一', '二', '三', '四', '五', '六', '日']"
        :class="'head-day-' + (val === '六' || val === '日' ? 'opacity' : 'item')"
        :key="val"
      >
        <span>{{ val }}</span>
      </span>
    </div>

    <!-- 日期单元 -->
    <div class="day-list">
      <div
        v-for="dayData in dayListData"
        :key="`${dayData.year}${dayData.month}${dayData.day}`"
        :class="dayData.status"
        @click="handleChooseDay(dayData)"
      >
        <span class="dayItemVal">{{dayData.day}}</span>
        <p class="vication-wrap" :title="dayData.lDay">{{dayData.lDay}}</p>
        <p v-if="dayData.holiday" class="holidayWrap">假</p>
        <p v-if="dayData.work" class="workWrap">班</p>
      </div>
    </div>
  </div>
</template>

<script>
import { weekConverters } from './lib/week-converters';
import tools from './lib/tools';
import updateTime from './lib/update-time';

export default {
  name: 'customWeek',
  props: {
    // 返回数据的格式，默认'Y/m/d'
    format: {
      type: String,
      default: 'Y/m/d',
    },
    value: {
      type: [Object, Date],
    },
    // 禁用的范围，false为不禁用，true为全部禁用
    // 数组时为多点禁用
    // 如：[new Date('2015/11/11'), [new Date('2015/11/01'), new Date('2015/11/04')]]表示禁用 2015/11/11 和 2015/11/01 - 2015/11/04
    disabled: {
      type: [Function, Boolean, Object],
      default: false,
    },
    // 选中时的回调
    onSelected: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      tools,
      displayDate: new Date('2019/12/26'), // this.value,
    };
  },
  created() {

  },
  watch: {
    value(newValue) {
      this.displayDate = newValue;
    },
  },
  computed: {
    dayListData() {
      const {
        displayDate, // 当前显示的时间对象
        disabled, // 处理可选时间范围函数
      } = this;
      const dayList = weekConverters(
        displayDate,
        disabled,
      );
      return dayList;
    },
  },
  methods: {
    // 选中某个日期
    handleChooseDay(day) {

    },
    updateDisplayDate(type, num) {
      this.displayDate = updateTime[type](this.displayDate, num);
    },
  },
};
</script>
