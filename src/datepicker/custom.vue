<template>
  <div class="custom-week-wrap">
     <Calendar
      :next-year = "false"
      :next-month = "false"
      :click-day = "clickDay"
      :mouse-enter = "enter"
      :mouse-leave = "leave"
      :day-list = "startDayList"
      :display-date = "displayStart"
    />

    <Calendar
      :last-year = "false"
      :last-month = "false"
      :click-day = "clickDay"
      :mouse-enter = "enter"
      :mouse-leave = "leave"
      :day-list = "endDayList"
      :display-date = "displayEnd"
    />
  </div>
</template>

<script>
import { weekConverters } from './lib/custom-converters';
import { getLastMonthDay, getYesterday, getTodayDate } from './lib/tools-date';
import updateTime from './lib/update-time';
import Calendar from './calendar.vue';

export default {
  name: 'Custom',
  components: {
    Calendar,
  },
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
            //
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
    leave() {

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
  left: 0;
  background: #e4e7ed;
  z-index: 1000;
}
</style>
