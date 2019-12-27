<template>
  <div class="mask" ref="mask" @click="eventStop($event)" >
    <div class="maskInner">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'elMask',
  components: {},
  props: {
    top: {
      type: Number,
      default: 0,
    },
    onCancel: {
      type: Function,
      default() {},
    },
  },
  computed: {
    topHeight() {
      return this.top;
    },
  },
  mounted() {
    const maskEle = this.$refs.mask;
    const parentPosition = maskEle.parentElement.getBoundingClientRect();
    const maskPosition = maskEle.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    if (winWidth - parentPosition.left >= maskPosition.width) {
      maskEle.style.left = 0;
    } else if (parentPosition.left - parentPosition.width >= maskPosition.width) {
      maskEle.style.right = 0;
    } else {
      maskEle.style.left = '50%';
      maskEle.style.transform = 'translateX(-50%)';
    }
    if (winHeight - parentPosition.height - parentPosition.top >= maskPosition.height || parentPosition.top < maskPosition.height) {
      maskEle.style.top = `${parentPosition.height}px`;
    } else {
      maskEle.style.bottom = `${parentPosition.height}px`;
    }
  },
  methods: {
    eventStop(event) {
      event.stopPropagation();
    },
  },
};
</script>

<style scoped>
.mask {
    position: absolute;
    width: 280px;
    min-height: 330px;
    z-index: 10;
    overflow: hidden;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
}

.mask .maskInner {
    position: relative;
    background: #fff;
}


</style>
