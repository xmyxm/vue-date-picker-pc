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
        <div class="attr">业务周选择: </div>
        <div class="ipt">
           <span class="text">{{customWeekText}}</span>
          <date-picker v-bind="customWeekConfig"></date-picker>
        </div>
        <i :class="customWeekConfig.open ? 'open top' : 'open'"></i>
    </div>
  </div>
</template>

<script>
import DatePicker from '../datepicker/index';
// import DatePicker from "@dp/date-picker"

export default {
  name: 'calendar',
  components: {
    'date-picker': DatePicker,
  },
  data() {
    return {
      title: '日历组件',
      dayText: this.getDate(),
      weekText: '',
      customWeekText: '',
      dateConfig: {
        type: 'day', // 'week', 'month', 'quarter', 'year', 'festival', 'optional'], //
        open: false,
        top: 0,
        year: 2019,
        quarter: 3,
        month: 9,
        week: 32,
        endDate: new Date(),
        value: this.getYearMonthDay(),
        onSus: this.onSusDayFun,
      },

      weekConfig: {
        type: 'week', // 'week', 'month', 'quarter', 'year', 'festival', 'optional'], //
        open: false,
        top: 0,
        year: 2019,
        quarter: 3,
        month: 9,
        week: 32,
        endDate: new Date(),
        value: this.getYearMonthDay(),
        onSus: this.onSusWeekFun,
      },

      customWeekConfig: {
        open: false,
        type: 'customWeek', // 'week', 'month', 'quarter', 'year', 'festival', 'optional'], //
        startDate: null,
        endDate: new Date(),
        value: new Date('2019/12/26'),
        onSus: this.onSusCustomWeekFun,
      },
    };
  },
  methods: {
    getDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate() - 1;
      return `${year}-${month}-${day}`;
    },
    getYearMonthDay() {
      return new Date(this.getDate());
    },
    onOff(sum) {
      const configList = [this.dateConfig, this.weekConfig, this.customWeekConfig];
      configList.forEach((item, index) => {
        if (index === sum) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    },
    onSusDayFun(data) {
      this.dayText = data.fetchDate;
      this.dateConfig.open = false;
      this.dateConfig.year = data.year;
      this.dateConfig.value = data.value;
      console.log(data.key, data.fetchDate);
    },
    onSusWeekFun(data) {
      this.weekText = data.fetchDate;
      this.weekConfig.open = false;
      this.weekConfig.year = data.year;
      this.weekConfig.week = data.week;
      console.log(data.key, data.fetchDate);
    },
    onSusCustomWeekFun(data) {
      this.customWeekText = data.fetchDate;
      this.customWeekConfig.open = false;
      this.customWeekConfig.year = data.year;
      this.customWeekConfig.week = data.week;
      console.log(data.key, data.fetchDate);
    },

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
  width: 80px;
  text-align: left;
}

.date-box-item .ipt {
  position: relative;
  width: 160px;
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
