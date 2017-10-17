<template>
  <div class="ivc-header" :style="headerStyle">
    <div class="ivc-header-left">
      <slot name="left"></slot>
    </div>
    <div class="ivc-header-title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="ivc-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ivc-header',
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      }
    },
    computed: {
      headerStyle () {
        if (this.fixed) {
          return {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 9999
          }
        } else {
          return {
            position: 'relative'
          }
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
.ivc-header {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height:88px;
  box-sizing: border-box;
  line-height: 88px;
  background-color: $primary;
  color: $white;
  font-size: 36px; /* px */
  z-index: 999;
  &-title {
    margin-left:90px;
    margin-right: 90px;
  }
  &-left,
  &-right {
    padding: 0 24px;
    height: 100%;
    position: absolute;
    top:0;
    i,
    .iconfont {
      display: inline-block;
      font-size: 36px;  /* px  */
      color:$white;
    }
  }
  &-left {
    left:0;
  }
  &-right {
    right:0;
  }
}
</style>
