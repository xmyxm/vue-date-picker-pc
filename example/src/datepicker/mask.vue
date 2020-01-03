<template>
  <div
    ref="mask"
    :class="getClass()"
    @click="eventStop($event)"
  >
    <div class="mask-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'elMask',
  props: {
    // 展示的日历组件类型
    type: {
      type: String,
      default: 'day',
    },
  },
  mounted() {
    const maskEle = this.$refs.mask;
    const parentPosition = maskEle.parentElement.getBoundingClientRect();
    const maskPosition = maskEle.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    maskEle.className = this.getClass();
    let classText = 'bottom';
    if (winHeight - parentPosition.height - parentPosition.top >= maskPosition.height || parentPosition.top < maskPosition.height) {
      classText = 'top';
      maskEle.style.top = `${parentPosition.height + 5}px`;
    } else {
      maskEle.style.bottom = `${parentPosition.height + 5}px`;
    }
    if (winWidth - parentPosition.left >= maskPosition.width) {
      maskEle.className += ` mask-${classText}-left`;
    } else if (parentPosition.left + parentPosition.width >= maskPosition.width) {
      maskEle.className += ` mask-${classText}-right`;
    } else {
      maskEle.className += ` mask-${classText}-center`;
    }
  },
  methods: {
    eventStop(event) {
      event.stopPropagation();
    },
    getClass() {
      return this.type === 'customWeek' ? 'date-double-picker-mask' : 'date-picker-mask';
    },
  },
};
</script>

<style scoped>
.date-picker-mask,
.date-double-picker-mask {
    position: absolute;
    max-height: 350px;
    z-index: 10;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    line-height: 20px;
    user-select: none;
}

.date-picker-mask {
  width: 250px;
}

.date-double-picker-mask {
  width: 500px;
}

.mask-top-left::before,
.mask-top-center::before,
.mask-top-right::before {
  content: "";
  position: absolute;
  border-bottom: 4px solid #fff;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid transparent;
  z-index: 1000;
}

.mask-top-left::after,
.mask-top-center::after,
.mask-top-right::after {
  content: "";
  position: absolute;
  border-bottom: 5px solid #e4e7ed;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 5px solid transparent;
  z-index: 99;
}

.mask-top-left,
.mask-bottom-left {
  left: 0;
}

.mask-top-center,
.mask-bottom-center {
  left: 50%;
  transform: translateX(-50%);
}

.mask-top-right,
.mask-bottom-right {
  right: 0;
}

.mask-top-left::before,
.mask-top-center::before,
.mask-top-right::before{
  top: -8px;
}

.mask-top-left::after,
.mask-top-center::after,
.mask-top-right::after {
  top: -10px;
}

.mask-bottom-left::before,
.mask-bottom-center::before,
.mask-bottom-right::before{
  bottom: -8px;
}

.mask-bottom-left::after,
.mask-bottom-center::after,
.mask-bottom-right::after{
  bottom: -10px;
}

.mask-top-center::before,
.mask-top-center::after,
.mask-bottom-center::before,
.mask-bottom-center::after {
  transform: translateX(-50%);
}


.mask-top-left::before,
.mask-bottom-left::before {
  left: 40px;
}

.mask-top-left::after,
.mask-bottom-left::after {
  left: 38px;
}

.mask-top-right::before,
.mask-bottom-right::before {
  right: 40px;
}

.mask-top-right::after,
.mask-bottom-right::after {
  right: 38px;
}

.mask-bottom-left::before,
.mask-bottom-center::before,
.mask-bottom-right::before {
  content: "";
  position: absolute;
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
  z-index: 1000;
}

.mask-bottom-left::after,
.mask-bottom-center::after,
.mask-bottom-right::after {
  content: "";
  position: absolute;
  border-bottom: 5px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 5px solid #e4e7ed;;
  z-index: 99;
}

.mask-inner {
    position: relative;
    background: #fff;
    height: 100%;
}

</style>
