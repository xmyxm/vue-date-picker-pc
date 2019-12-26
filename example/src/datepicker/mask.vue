<template>
  <div class="mask" v-bind:style="{top: topHeight + 'px'}" @click="eventStop($event)" >
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
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
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
