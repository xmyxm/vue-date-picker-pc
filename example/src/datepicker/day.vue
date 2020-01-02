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
        @click="clickDay(dayData)"
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
import { dayConverters } from './lib/day-converters';
import updateTime from './lib/update-time';

export default {
  name: 'Day',
  props: {
    // 选中的日期，范围模式下表示起始日期
    value: {
      type: [Object, Date],
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
    dayListData() {
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
      const { onSus } = this;
      if (disabled) {
        console.log('clickDay', `${year}/${month}/${day}`);
        onSus({ date });
      }
    },
  },
};
</script>
