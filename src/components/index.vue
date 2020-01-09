<template>
  <div class="calendar-box">
    <div class="headerbox">
      <header class="pageheader">
        <div class="back"></div>
        <div class="title">日期选择测试</div>
        <div class="next"></div>
      </header>
    </div>
    <div
      @click="onOff(0)"
      class="date-box-item"
    >
      <div class="attr">日期选择: </div>
      <div class="ipt">
        <span class="text">{{dayText}}</span>
        <date-picker v-bind="dateConfig"></date-picker>
      </div>
      <i :class="dateConfig.open ? 'open top' : 'open'"></i>
    </div>
    <div
      @click="onOff(1)"
      class="date-box-item">
        <div class="attr">自然周选择: </div>
        <div class="ipt">
           <span class="text">{{weekText}}</span>
          <date-picker v-bind="weekConfig"></date-picker>
        </div>
        <i :class="weekConfig.open ? 'open top' : 'open'"></i>
    </div>
    <div
      @click="onOff(2)"
      class="date-box-item">
        <div class="attr">业务周选择(周期): </div>
        <div class="ipt">
           <span class="text">{{cycleText}}</span>
          <date-picker v-bind="cycleConfig"></date-picker>
        </div>
        <i :class="cycleConfig.open ? 'open top' : 'open'"></i>
    </div>
    <div
      @click="onOff(3)"
      class="date-box-item">
        <div class="attr">自定义区间选择: </div>
        <div class="ipt">
           <span class="text">{{customText}}</span>
          <date-picker v-bind="customConfig"></date-picker>
        </div>
        <i :class="customConfig.open ? 'open top' : 'open'"></i>
    </div>
    <div
      @click="onOff(4)"
      class="date-box-item">
        <div class="attr">月份选择: </div>
        <div class="ipt">
           <span class="text">{{monthText}}</span>
          <date-picker v-bind="monthConfig"></date-picker>
        </div>
        <i :class="monthConfig.open ? 'open top' : 'open'"></i>
    </div>
  </div>
</template>

<script>
import PCDatePicker from '../datepicker/index.vue';
import { weekInfoByDate } from '../datepicker/lib/tools-date';

// import PCDatePicker from "@dp/date-picker-pc"

export default {
  name: 'calendar',
  components: {
    'date-picker': PCDatePicker,
  },
  data() {
    return {
      title: '日历组件',
      dayText: '',
      weekText: '',
      cycleText: '',
      customText: '',
      monthText: '',
      dateConfig: {
        open: false,
        type: 'day',
        startDate: new Date('2010/1/1'),
        endDate: this.getDateNow(-1),
        value: this.getDateNow(-1),
        onSus: this.onSusDayFun,
      },
      weekConfig: {
        open: false,
        type: 'week',
        startDate: null,
        endDate: this.getDateNow(-1),
        value: weekInfoByDate(this.getDateNow(-1)).validTime.end,
        onSus: this.onSusWeekFun,
      },
      cycleConfig: {
        open: false,
        type: 'cycle',
        limit: 6, // 限制固定选择任意7天
        startDate: null,
        endDate: new Date(),
        value: this.getDateNow(-1),
        onSus: this.onSusCycleFun,
      },
      customConfig: {
        open: false,
        type: 'custom',
        startDate: null,
        endDate: new Date(),
        dateRegion: {
          start: this.getDateNow(-14),
          end: this.getDateNow(-1),
        },
        onSus: this.onSusCustomFun,
      },
      monthConfig: {
        open: false,
        type: 'month',
        startDate: null,
        endDate: this.getMonthNow(1),
        value: this.getMonthNow(-1),
        onSus: this.onSusMonthFun,
      }
    };
  },
  methods: {
    getDateText(date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`;
    },
    getDateNow(days = 0) {
      const date = new Date();
      date.setDate(date.getDate() + days);
      return date;
    },
    getMonthNow(month = 0) {
      const date = new Date();
      date.setMonth(date.getMonth() + month)
      return date;
    },
    onOff(sum) {
      const configList = [this.dateConfig, this.weekConfig, this.cycleConfig, this.customConfig, this.monthConfig];
      configList.forEach((item, index) => {
        if (index === sum) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    },
    onSusDayFun(data) {
      const {type, date } = data;
      this.dayText = this.getDateText(date);
      this.dateConfig.open = false;
      this.dateConfig.value = date;
      console.log(type, this.dayText);
    },
    onSusWeekFun(data) {
      const {type, year, month, day, week, start, end } = data;
      this.weekText = `${year}-${week}周: ${this.getDateText(start)} ~ ${this.getDateText(end)}`;
      this.weekConfig.open = false;
      this.weekConfig.value = end;
      console.log(type, this.weekText);
    },
    onSusCycleFun(data) {
      const {type, start, end } = data;
      this.cycleText = `${this.getDateText(start)} ~ ${this.getDateText(end)}`;
      this.cycleConfig.open = false;
      this.cycleConfig.value = end;
      console.log(type, this.cycleText);
    },
    onSusCustomFun(data) {
      const {type, start, end } = data;
      this.customText = `${this.getDateText(start)} ~ ${this.getDateText(end)}`;
      this.customConfig.open = false;
      this.customConfig.dateRegion = data;
      console.log(type, this.customText);
    },
    onSusMonthFun(data) {
      const {type, date, year, month } = data;
      this.monthText = `${year}-${month >= 10 ? month : '0' + month}`;
      this.monthConfig.open = false;
      this.monthConfig.value = date;
      console.log(type, this.monthText);
    }
  },
};
</script>

<style>
.pageheader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 44px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.back,
.next,
.next-page {
  height: 34px;
  width: 34px;
  cursor: pointer;
}

.back {
  background: url("../style/img/back.png") left center no-repeat;
  background-size: 24px 24px;
}

.next-page {
  background: url("../style/img/go.png") right center no-repeat;
  background-size: 24px 24px;
}

.title {
  flex: 1;
  text-align: center;
}

.headerbox {
  height: 44px;
}

.open {
  display: inline-block;
  width: 0;
  height: 0;
  border: none;
  border-top: 4px solid #117AF4;
  border-left: 4px solid #fff;
  border-right: 4px solid #fff;
  vertical-align: middle;
  margin-left: 3px;
  transform-origin:center center;
  transition: transform 0.5s ease;
}

.open.top{
  transform: rotate(180deg);
}

.date-box-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding-left: 50px;
  margin-top: 40px;
}

.date-box-item .attr {
  color: #000;
  width: 120px;
  text-align: left;
}

.date-box-item .ipt {
  position: relative;
  width: 250px;
  margin-left: 5px;
  height: 24px;
  line-height: 24px;
}

.date-box-item .ipt::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.text {
  vertical-align: middle;
}

</style>
