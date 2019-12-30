<template>
  <div class="week-wrap">
    <div class="header">
        <div class="btn" @click="prevChange">
          <div class="iconBtn">
            <Icon type="angleLeft" />
          </div>
        </div>
        <div class="centerBtn">
          <span class="dateSplitLine">{{showYear}}</span>
        </div>
        <div class="rightBtn" @click="nextChange">
          <div class="iconBtn">
            <Icon type="angleRight" />
          </div>
        </div>
    </div>
    <div class="week-List" ref="list">
      <div
        v-for="item in weekList"
        :key="item.index"
        :class="item.className"
        @click="handleChooseWeek(item, $event)"
      >
        <span>W{{item.number}}</span>
        <p class="week-date-rande">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './icon';
import tools from './lib/tools';

export default {
  name: 'Week',
  components: {
    Icon,
  },
  props: {
    year: {
      type: Number,
      default: tools.getYear(),
    },
    week: {
      type: Number,
      default: tools.getDateWeekNum(new Date()),
    },
    disabled: {
      type: [Function, Boolean],
      default: false,
    },
    onChange: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      selectWeek: this.week,
      selectYear: this.year,
      value: { week: this.week },
      showYear: this.year,
      startDate: null,
      endDate: null,
      touchStatus: null,
      touchInfo: {},
    };
  },
  created() {},
  computed: {
    // 周列表
    weekList() {
      // 起止时间默认为当前展示年份的第一天，最后一天
      const disabledCheck = tools.disabledCheckCreator(this.disabled);
      const startDate = `${this.showYear}-01-01`;
      const endData = `${this.showYear}-12-31`;
      const weekListDate = this.gerWeekList(startDate, endData, disabledCheck);
      const dataList = weekListDate.map((item, index) => {
        let className = 'week-item';
        if (
          index === this.selectWeek - 1 &&
          this.selectYear === this.showYear
        ) {
          className = 'week-item-active';
          // 默认值
          if (!this.value.monday) {
            this.value.monday = item.monday;
            this.value.sunday = item.sunday;
          }
        } else if (item.disabled) {
          className = 'week-item-disabled';
        }
        const data = {
          index,
          disabled: item.disabled,
          number: item.number,
          monday: item.monday,
          sunday: item.sunday,
          className,
          content: `${item.mondayStr}${
            item.sundayStr ? `-${item.sundayStr}` : ''
          }`,
        };
        return data;
      });
      return dataList;
    },
  },
  watch: {
    week(newWeek) {
      this.selectWeek = newWeek;
    },
    year(newYear) {
      this.selectYear = newYear;
    },
  },
  mounted() {
    // 当前组件渲染完立即调用，服务端不会执行
    const parent = this.$refs.list;
    const parentPosition = parent && parent.getBoundingClientRect();
    const parentScroll = parent.scrollTop;
    parent.scrollTo(parentPosition.x, parentScroll + parentPosition.height / 2);
  },
  methods: {
    gerWeekList(startDate, endDate, disabledCheck) {
      // 规范起始，截止日期
      startDate = new Date(startDate);
      endDate = new Date(endDate);
      const sum = (endDate - startDate) / 86400000 + 1;
      // 第一天是周几
      const firstDay = startDate.getDay();
      // 周一、周日的计算规律
      const mondayCount = (7 - firstDay + 2) % 7;
      const sundayCount = (7 - firstDay + 1) % 7;
      let tempWeek = 1;
      const dateList = [];
      for (let count = 1; count < sum + 1; count++) {
        if (count === 1) {
          const referenceDate = new Date(startDate.toGMTString());
          let firstDate = null;
          let weekObj = {
            number: tempWeek,
            disabled: disabledCheck(firstDate),
            monday: firstDate,
            mondayStr: `${month > 9 ? '' : '0'}${month}${
              date > 9 ? '' : '0'
            }${date}`,
          };
          if (firstDay === 1) {
            firstDate = startDate;
          } else if (firstDay === 0) {
            tempWeek += 1;
            firstDate = new Date(referenceDate.setDate(-5));
            const sundayMonth = startDate.getMonth() + 1;
            const sundayDate = startDate.getDate();
            weekObj.sunday = startDate;
            weekObj.sundayStr = `${sundayMonth > 9 ? '' : '0'}${sundayMonth}${
              sundayDate > 9 ? '' : '0'
            }${sundayDate}`;
          } else {
            firstDate = new Date(referenceDate.setDate(-(firstDay - 2)));
          }
          let month = firstDate.getMonth() + 1;
          let date = firstDate.getDate();
          weekObj = Object.assign({}, weekObj, {
            disabled: disabledCheck(firstDate),
            monday: firstDate,
            mondayStr: `${month > 9 ? '' : '0'}${month}${
              date > 9 ? '' : '0'
            }${date}`,
          });
          dateList.push(weekObj);
        } else if (count % 7 === mondayCount) {
          if (count === sum) {
            continue;
          }
          const referenceDate = new Date(startDate.toGMTString());
          const firstDate =
            count === 0
              ? referenceDate
              : new Date(referenceDate.setDate(count));
          const month = firstDate.getMonth() + 1;
          const date = firstDate.getDate();
          dateList.push({
            number: tempWeek,
            disabled: disabledCheck(firstDate),
            monday: firstDate,
            mondayStr: `${month > 9 ? '' : '0'}${month}${
              date > 9 ? '' : '0'
            }${date}`,
          });
        } else if (count % 7 === sundayCount || count === sum) {
          const referenceDate = new Date(startDate.toGMTString());
          const lastDate = new Date(referenceDate.setDate(count));
          if (count === sum && lastDate.getDay() !== 0) {
            dateList.pop();
          } else {
            const month = lastDate.getMonth() + 1;
            const date = lastDate.getDate();
            const lastWeek = dateList[dateList.length - 1];
            lastWeek.sunday = lastDate;
            lastWeek.sundayStr = `${month > 9 ? '' : '0'}${month}${
              date > 9 ? '' : '0'
            }${date}`;
            lastWeek.disabled = lastWeek.disabled || disabledCheck(lastDate);
            tempWeek += 1;
          }
        }
      }
      return dateList;
    },
    // 选中
    handleChooseWeek(data, e) {
      if (data.disabled) return;

      const week = data.number;
      const { showYear } = this;
      if (this.selectWeek !== week || this.selectYear !== showYear) {
        this.selectWeek = week;
        this.selectYear = this.showYear;
        this.value = {
          week: this.selectWeek,
          monday: data.monday,
          sunday: data.sunday,
        };
        this.onChange(this.value);
      }
    },
    // 改变年
    prevChange() {
      this.showYear = this.showYear - 1;
    },
    // 改变年
    nextChange() {
      this.showYear = this.showYear + 1;
    },
  },
};
</script>

<style scope>
.week-wrap {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.week-List {
    flex: 1;
    height: 330px;
    overflow: scroll;
    text-align: left;
}

.week-List :nth-child(4n) {
    margin-right: 4%;
}

.week-item,
.week-item-active,
.week-item-disabled {
    font-size: 12px;
    width: 22%;
    margin-left: 2%;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    line-height: 1em;
    cursor: pointer;
    position: relative;
    display: inline-block;
    border-radius: 2px;
    box-sizing: border-box;
}

.week-item:hover {
    background: #f7f7f7;
}

.week-item-active {
    color: #fff;
    background-color: #118bfb;
    font-size: 13px;
}

.week-item-disabled {
  color: #cccccc;
}

.week-date-rande {
    margin-top: 2px;
    margin-bottom: 0;
    width: 100%;
    font-size: 8px;
    white-space: nowrap;
}
</style>
