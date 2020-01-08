<template>
  <CMask v-if="open" :type="type" >
    <Day v-if="type == DATE_TYPE.DAY" v-bind="bindData"></Day>
    <Week v-if="type == DATE_TYPE.WEEK" v-bind="bindData"></Week>
    <Month v-if="type == DATE_TYPE.MONTH" v-bind="bindData"></Month>
    <Cycle v-if="type == DATE_TYPE.CYCLE" v-bind="bindData"></Cycle>
    <Custom v-if="type == DATE_TYPE.CUSTOM" v-bind="bindData"></Custom>
  </CMask>
</template>

<script>
import Day from './day.vue';
import Cycle from './cycle.vue';
import Week from './week.vue';
import Month from "./month.vue";
import Custom from './custom.vue';
import CMask from './mask.vue';
import { DATE_TYPE } from "./lib/config";
import { dateByDate, getYesterday, getRegionDay } from './lib/tools-date';

export default {
  name: 'PCDatePicker',
  components: {
    Day,
    Week,
    Month,
    Cycle,
    Custom,
    CMask,
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
      default: DATE_TYPE.DAY,
    },
    // 选择日期（day or week）
    value: {
      type: Date,
      default: getYesterday,
    },
    // 自定义时间区间
    limit: {
      type: Number,
      default: 7,
    },
    // 自定义日期区间选择 (customWeek)
    dateRegion: {
      type: Object,
      default: null,
    },
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },
    onSus: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      DATE_TYPE,
    };
  },
  computed: {
    bindData() {
      return {
        value: dateByDate(this.value), // 格式化数据，去掉时分秒
        limit: this.limit,
        dateRegion: getRegionDay(this.dateRegion),
        startDate: this.startDate,
        endDate: this.endDate,
        onSus: this.onSus,
      };
    },
  },
};
</script>

<style>
/************************************* head icon btn start **************************************/
.header {
    background: #fff;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.double-left-btn {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEUAAAArKystLS0tLS0sLCwsLCwsLCyJa7inAAAABnRSTlMAKtRVqoCfxiXiAAAAK0lEQVQoz2MYZMAYiEWR+MwpDAyMSgIIATMHBgYhRXoqQKigsxJEeAwcAABT0woAAQzQhAAAAABJRU5ErkJggg==") center no-repeat;
}

.left-btn {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmWAJHAAAAC3RSTlMAqtQqmoDMv44dD7a7c/cAAAA6SURBVCjPY6AxaEXjM25HE5BWRlOwyWDAFTB4IwQQWtD0aGIoWYCuRAFDCQMZShLQlWxBV+LKQDMAABLEDDk9kYMXAAAAAElFTkSuQmCC") center no-repeat;
}

.right-btn {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBoCg+AAAADnRSTlMAjoCjnGZfqpaGeHNtWNtJK2AAAABFSURBVCjPYxhIwKeAJsD0El3JOgE0Ae6H6ErONaAJsD5BVxJngCbA9hhdyb0CDAECWvIcCFh7roGA09cJoHsfM4AGGAAAkw8PnyR4bVcAAAAASUVORK5CYII=") center no-repeat;
}

.double-right-btn {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAABnRSTlMAKtRVqoCfxiXiAAAAK0lEQVQoz2MYQBAIxMZIfEYlAQYGNwMkESFFBgaWZHorQaignwJEeAwuAACA5wqHf23WEAAAAABJRU5ErkJggg==") center no-repeat;
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
/************************************* head icon btn end **************************************/

</style>