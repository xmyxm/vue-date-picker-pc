<template>
  <div class="day-wrap">
    <!-- 日历头 -->
    <div class="header">
      <div v-if="lastYear" class="icon-btn" title="上一年" @click="lastYear('updateYear', -1)">
        <i class="double-left-btn" />
      </div>
      <div v-else class="icon-btn"/>
      <div v-if="lastMonth" class="icon-btn" title="上个月" @click="lastMonth('updateMonth', -1)">
        <i class="left-btn" />
      </div>
      <div v-else class="icon-btn"/>
      <div :title="displayDate.getFullYear() + '-' + displayDate.getMonth() + 1" class="center-btn">
        {{displayDate.getFullYear()}} 年 {{displayDate.getMonth() + 1}} 月
      </div>
      <div v-if="nextMonth" class="icon-btn" title="下个月" @click="nextMonth('updateMonth', 1)">
        <i class="right-btn" />
      </div>
      <div v-else class="icon-btn"/>
      <div v-if="nextYear" class="icon-btn" title="下一年" @click="nextYear('updateYear', 1)">
        <i class="double-right-btn" />
      </div>
      <div v-else class="icon-btn"/>
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
        v-for="dayData in dayList"
        :key="`${dayData.year}${dayData.month}${dayData.day}`"
        :class="dayData.status"
        @click="clickDay(dayData)"
        @mouseenter="mouseEnter(dayData)"
        @mouseleave="mouseLeave(dayData)"
      >
        <span class="day-item-val">{{dayData.day}}</span>
        <p class="vication-wrap" :title="dayData.lDay">{{dayData.lDay}}</p>
        <p v-if="dayData.holiday" class="holiday-wrap">假</p>
        <p v-if="dayData.work" class="work-wrap">班</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  props: {
    lastYear: {
      type: [Function, Object],
      default: null,
    },
    lastMonth: {
      type: [Function, Object],
      default: null,
    },
    nextYear: {
      type: [Function, Object],
      default: null,
    },
    nextMonth: {
      type: [Function, Object],
      default: null,
    },
    clickDay: {
      type: [Function, Object],
      default: null,
    },
    mouseEnter: {
      type: Function,
      default() {},
    },
    mouseLeave: {
      type: Function,
      default() {},
    },
    dayList: {
      type: Array,
    },
    displayDate: {
      type: Date,
    },
  },
};
</script>
