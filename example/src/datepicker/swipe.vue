<template>
    <div :class="className"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd">
      <slot></slot>
    </div>
</template>

<script>
// 与纵轴方向最小的角度
const calcAngleV = (startPoint, endPoint) => {
  if (startPoint.x === endPoint.x) {
    return 0;
  }
  if (startPoint.y === endPoint.y) {
    return Math.PI / 2;
  }
  const distance = Math.sqrt(
    Math.pow(endPoint.x - startPoint.x, 2) +
        Math.pow(endPoint.y - startPoint.y, 2),
  );
  const vDistance = Math.abs(endPoint.y - startPoint.y);
  return Math.acos(vDistance / distance);
};

const calcAngleL = (startPoint, endPoint) => {
  if (startPoint.x === endPoint.x) {
    return Math.PI / 2;
  }
  if (startPoint.y === endPoint.y) {
    return 0;
  }
  const distance = Math.sqrt(
    Math.pow(endPoint.x - startPoint.x, 2) +
        Math.pow(endPoint.y - startPoint.y, 2),
  );
  const lDistance = Math.abs(endPoint.x - startPoint.x);
  return Math.acos(lDistance / distance);
};

export default {
  name: 'Swipe',
  props: {
    className: {
      type: String,
      default: '',
    },
    duration: {
      type: Number,
      default: 750,
    },
    senseDistance: {
      type: Number,
      default: 80,
    },
    allowedOffsetAngle: {
      type: Number,
      default: Math.PI / 4,
    },
    onTouchStart: {
      type: Function,
    },
    onTouchEnd: {
      type: Function,
      default() {},
    },
  },
  data() {
    return {
      timer: null,
      isRabish: false,
      cache: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    onSwipeLeft(e) {
      this.$parent.prevChange && this.$parent.prevChange(e);
    },
    onSwipeRight(e) {
      this.$parent.nextChange && this.$parent.nextChange(e);
    },
    onSwipeUp() {

    },
    onSwipeDown() {

    },
    handleTouchStart(e) {
      this.isRabish = false;
      if (e.touches.length === 1) {
        this.cache = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
        };
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.isRabish = true;
          this.timer = null;
        }, this.duration);
      } else {
        this.isRabish = true;
      }
      this.onTouchStart && this.onTouchStart(e);
    },
    handleTouchEnd(e) {
      e.preventDefault();
      this.timer && clearTimeout(this.timer);
      if (!this.isRabish && e.changedTouches.length === 1) {
        this.isRabish = true;
        const touch = e.changedTouches[0];
        const changedL = this.cache.x - touch.pageX;
        const changedV = this.cache.y - touch.pageY;
        if (Math.abs(changedL) >= this.senseDistance &&
                calcAngleL({ x: touch.pageX, y: touch.pageY }, this.cache) < this.allowedOffsetAngle) {
          if (changedL > 0) {
            this.onSwipeLeft(e);
          } else {
            this.onSwipeRight(e);
          }
        } else if (Math.abs(changedV) >= this.senseDistance &&
                calcAngleV({ x: touch.pageX, y: touch.pageY }, this.cache) < this.allowedOffsetAngle) {
          if (changedV > 0) {
            this.onSwipeUp(e);
          } else {
            this.onSwipeDown(e);
          }
        }
      } else {
        this.isRabish = true;
      }
      this.onTouchEnd(e);
    },
  },
  destroyed() {
    this.timer && clearTimeout(this.timer);
  },
};
</script>

