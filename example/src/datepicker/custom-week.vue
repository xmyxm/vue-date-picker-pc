<template>
  <div class="custom-week-wrap">
    <div class="day-wrap">
      <!-- 日历头 -->
      <div class="header">
        <div class="icon-btn" title="上一年" @click="updateDisplayDate('updateYear', -1)">
          <i class="double-left-btn" />
        </div>
        <div
          class="icon-btn"
          title="上个月"
          @click="updateDisplayDate('updateMonth', -1)"
        >
          <i class="left-btn" />
        </div>
        <div
          :title="displayStart.getFullYear() + '-' + displayStart.getMonth() + 1"
          class="center-btn"
        >
          {{displayStart.getFullYear()}} 年 {{displayStart.getMonth() + 1}} 月
        </div>
        <div
          class="icon-btn"
          title="下个月"
          @click="updateDisplayDate('updateMonth', 1)"
        >
          <i class="right-btn" />
        </div>
        <div class="icon-btn" title="下一年" @click="updateDisplayDate('updateYear', 1)">
          <i class="double-right-btn" />
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
          v-for="dayData in startDayList"
          :key="`${dayData.year}${dayData.month}${dayData.day}`"
          :class="dayData.status"
          @click="clickDay(dayData)"
          @mouseenter="enter(dayData)"
          @mouseleave="leave(dayData)"
        >
          <span class="day-item-val">{{dayData.day}}</span>
          <p class="vication-wrap" :title="dayData.lDay">{{dayData.lDay}}</p>
          <p v-if="dayData.holiday" class="holiday-wrap">假</p>
          <p v-if="dayData.work" class="work-wrap">班</p>
        </div>
      </div>
    </div>
    <div class="day-wrap">
      <!-- 日历头 -->
      <div class="header">
        <div class="icon-btn" title="上一年" @click="updateDisplayDate('updateYear', -1)">
          <i class="double-left-btn" />
        </div>
        <div
          class="icon-btn"
          title="上个月"
          @click="updateDisplayDate('updateMonth', -1)"
        >
          <i class="left-btn" />
        </div>
        <div
          :title="displayEnd.getFullYear() + '-' + displayEnd.getMonth() + 1"
          class="center-btn"
        >
          {{displayEnd.getFullYear()}} 年 {{displayEnd.getMonth() + 1}} 月
        </div>
        <div
          class="icon-btn"
          title="下个月"
          @click="updateDisplayDate('updateMonth', 1)"
        >
          <i class="right-btn" />
        </div>
        <div class="icon-btn" title="下一年" @click="updateDisplayDate('updateYear', 1)">
          <i class="double-right-btn" />
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
          v-for="dayData in endDayList"
          :key="`${dayData.year}${dayData.month}${dayData.day}`"
          :class="dayData.status"
          @click="clickDay(dayData)"
          @mouseenter="enter(dayData)"
          @mouseleave="leave(dayData)"
        >
          <span class="day-item-val">{{dayData.day}}</span>
          <p class="vication-wrap" :title="dayData.lDay">{{dayData.lDay}}</p>
          <p v-if="dayData.holiday" class="holiday-wrap">假</p>
          <p v-if="dayData.work" class="work-wrap">班</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { weekConverters } from './lib/custom-week-converters';
import { getLastMonthDay, getYesterday, getTodayDate } from './lib/tools-date';
import updateTime from './lib/update-time';

export default {
  name: 'customWeek',
  props: {
    // 自定义日期区间选择 (customWeek)
    dateRegion: {
      type: Object,
      default: null,
    },
    startDate: {
      type: [Date, Object],
      default: null,
    },
    endDate: {
      type: [Date, Object],
      default: new Date(),
    },
    onSus: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      mouseStart: null, // 鼠标点击的第一个点
      mouseEnd: null, // 鼠标点击的第一个点
      displayStart: this.getDisplayStart(this.dateRegion),
      displayEnd: this.getDisplayEnd(this.dateRegion),
    };
  },
  watch: {
    dateRegion(newDateRegion) {
      this.displayStart = this.getDisplayStart(newDateRegion);
      this.displayEnd = this.getDisplayEnd(newDateRegion);
    },
  },
  computed: {
    startDayList() {
      const {
        mouseStart,
        mouseEnd,
        dateRegion,
        displayStart, // 显示时间
        disabledDay, // 禁止选择判断逻辑
      } = this;
      const dayList = weekConverters(
        displayStart,
        disabledDay,
        dateRegion,
        mouseStart,
        mouseEnd,
      );
      return dayList;
    },
    endDayList() {
      const {
        mouseStart,
        mouseEnd,
        dateRegion,
        displayEnd, // 显示时间
        disabledDay, // 禁止选择判断逻辑
      } = this;
      const dayList = weekConverters(
        displayEnd,
        disabledDay,
        dateRegion,
        mouseStart,
        mouseEnd,
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
    getDisplayStart(dateRegion) {
      let startDate = getLastMonthDay();
      if (dateRegion) {
        const { start, end } = dateRegion;
        const startMonth = start.getMonth();
        const endMonth = end.getMonth();
        if (startMonth === endMonth) {
          const todayMonth = getTodayDate().getMonth();
          if (todayMonth === startMonth) {
            startDate = updateTime.updateMonth(start, -1);
          } else {
            startDate = updateTime.updateMonth(start, 0);
          }
        } else {
          startDate = start;
        }
      }
      return startDate;
    },
    getDisplayEnd(dateRegion) {
      let endDate = getYesterday();
      if (dateRegion) {
        const { start, end } = dateRegion;
        const startMonth = start.getMonth();
        const endMonth = end.getMonth();
        if (startMonth === endMonth) {
          const todayMonth = getTodayDate().getMonth();
          if (todayMonth === endMonth) {
            endDate = updateTime.updateMonth(end, 0);
          } else {
            endDate = updateTime.updateMonth(end, 1);
          }
        } else {
          endDate = end;
        }
      }
      return endDate;
    },
    updateDisplayDate(type, num) {
      this.displayStart = updateTime[type](this.displayStart, num);
      this.displayEnd = updateTime[type](this.displayEnd, num);
    },
    // 选中某个日期
    clickDay(dayInfo) {
      const { year, month, day, date, disabled } = dayInfo;
      if (!disabled) {
        if (this.mouseStart) {
          if (this.mouseStart >= date) {
            this.onSus({ start: date, end: this.mouseStart });
          } else {
            this.onSus({ start: this.mouseStart, end: date });
          }
          this.mouseStart = null;
        } else {
          this.mouseStart = date;
        }
        console.log('clickDay', `${year}/${month}/${day}`);
      }
    },
    enter(dayInfo) {
      const { year, month, day, date, disabled } = dayInfo;
      if (!disabled) {
        if (this.mouseStart) {
          this.mouseEnd = date;
        }
        // this.mouseHitDate = new Date(`${year}/${month}/${day}/`);
        console.log('enter', `${year}/${month}/${day}`);
      }
    },
    leave(dayInfo) {
      // this.mouseHitDate = null;
      // const { year, month, day } = dayInfo;
      // console.log('leave', `${year}/${month}/${day}`);
    },
  },
};
</script>

<style scoped>
.custom-week-wrap {
  display: flex;
  justify-content: space-between;
}

.day-wrap {
  flex: 1;
  position: relative;
}

.day-wrap:nth-child(2n)::before {
  position: absolute;
  content: "";
  width: 1px;
  top: 0;
  bottom: 0;
  left: -4px;
  background: #e4e7ed;
  z-index: 1000;
}
</style>
