<template>
  <div class="day-wrap">
    <!-- 日历头 -->
    <div class="header">
      <div v-if="lastYear" class="icon-btn" title="上一年" @click="btnChange('updateYear', -1)">
        <i class="double-left-btn" />
      </div>
      <div v-else class="icon-btn"/>
      <div v-if="lastMonth" class="icon-btn" title="上个月" @click="btnChange('updateMonth', -1)">
        <i class="left-btn" />
      </div>
      <div v-else class="icon-btn"/>
      <div :title="displayDate.getFullYear() + '-' + displayDate.getMonth() + 1" class="center-btn">
        {{displayDate.getFullYear()}} 年 {{displayDate.getMonth() + 1}} 月
      </div>
      <div v-if="nextMonth" class="icon-btn" title="下个月" @click="btnChange('updateMonth', 1)">
        <i class="right-btn" />
      </div>
      <div v-else class="icon-btn"/>
      <div v-if="nextYear" class="icon-btn" title="下一年" @click="btnChange('updateYear', 1)">
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
      type: Boolean,
      default: true,
    },
    lastMonth: {
      type: Boolean,
      default: true,
    },
    nextYear: {
      type: Boolean,
      default: true,
    },
    nextMonth: {
      type: Boolean,
      default: true,
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
  methods: {
    btnChange(type, num) {
      if (this.$parent.updateDisplayDate) this.$parent.updateDisplayDate(type, num);
    },
  },
};
</script>

<style scoped>
.header {
    background: #fff;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.day-list {
    background: #fff;
    position: relative;
    z-index: 15;
    font-size: 12px;
    text-align: left;
}

.day-item,
.today,
.day-prev,
.day-next,
.day-active,
.temp-day-active,
.day-region,
.temp-day-region,
.day-disabled,
.today-active,
.today-region,
.head-day-item,
.head-day-opacity {
    position: relative;
    cursor: pointer;
    display: inline-block;
    width: 14%;
    padding-left: 3px;
    padding-right: 3px;
    text-align: center;
    border-radius: 2px;
    box-sizing: border-box;
}

.day-item .day-item-val,
.today .day-item-val,
.day-prev .day-item-val,
.day-next .day-item-val,
.day-active .day-item-val,
.temp-day-active .day-item-val,
.day-region .day-item-val,
.temp-day-region .day-item-val,
.day-disabled .day-item-val,
.today-active .day-item-val,
.today-region .day-item-val {
    display: inline-block;
    width: 2em;
    height: 2em;
    line-height: 2em;
    vertical-align: middle;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
}

.day-item .day-item-val:hover,
.day-prev .day-item-val:hover {
    background-color: #f8f8f8;
}

.today .day-item-val {
    color: #000;
    background-color: #f7f7f7;
}
.day-prev, .day-next {
    color: #a6a6a6;
}

.day-active .day-item-val,
.today-active .day-item-val {
    color: #fff;
    background-color: #118bfb;
}

.temp-day-active .day-item-val {
    color: #fff;
    background-color: #afd3f5;
}

.day-region .day-item-val {
    background-color: #deedfb;
    color: #02498a;
}

.temp-day-region .day-item-val {
    background-color: #f2f7fb;
    color: #9fc2e2;
}

.day-disabled .day-item-val {
    color: #cccccc;
    cursor: not-allowed;
}
.day-disabled .day-item-val:hover {
    background-color: #fff;
}

.center-btn {
    text-align: center;
    font-size: 12px;
    flex: 1;
}

.icon-btn {
    width: 20px;
    height: 20px;
    border-radius: 20px;
}

/************************************* 新已确认样式 day start **************************************/
.head-day-list {
    background: #fff;
    position: relative;
    z-index: 15;
    font-size: 12px;
}

.head-day-opacity {
    color: #ffb036;
    opacity: .8;
}

.holiday-wrap, .work-wrap {
    position: absolute;
    top: 0;
    left: 5px;
    padding-left: 1px;
    padding-right: 1px;
    color: #fff;
    width: 12px;
    height: 12px;
    text-align: left;
    line-height: 10px;
    font-size: 7px;
    margin-top: 0;
    z-index: 10;
}

.holiday-wrap:before, .work-wrap:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: -999;
    border-right: 2.2em solid transparent;
}

.holiday-wrap:before {
    border-top: 2.2em solid #ff6459;
}

.day-disabled .holiday-wrap:before {
    border-top: 2.2em solid rgba(255, 100, 89, 0.5);
}

.work-wrap:before {
    border-top: 2.2em solid #118bfb;
}

.day-disabled .work-wrap:before {
    border-top: 2.2em solid rgba(17, 139, 251, 0.5);
}

.day-disabled .vication-wrap {
    color: #cccccc;
}

.vication-wrap {
    font-size: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 10px;
    margin: 0;
    padding: 0;
}
/************************************* 新已确认样式 day end **************************************/


/************************************* 新已确认样式 icon btn start **************************************/

.double-left-btn {
    background: url("./icon/angleDoubleLeft.png") center no-repeat;
}

.left-btn {
    background: url("./icon/angleLeft.png") center no-repeat;
}

.right-btn {
    background: url("./icon/angleRight.png") center no-repeat;
}

.double-right-btn {
    background: url("./icon/angleDoubleRight.png") center no-repeat;
}

.double-left-btn,
.left-btn,
.right-btn,
.double-right-btn {
    display: block;
    width: 20px;
    height: 20px;
    background-size: 10px 10px;
    cursor: pointer;
}

.double-left-btn:hover,
.left-btn:hover,
.right-btn:hover,
.double-right-btn:hover {
    border-radius: 50%;
    background-color: #f7f7f7;
}
/************************************* 新已确认样式 icon btn end **************************************/

</style>
