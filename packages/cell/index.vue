<template>
  <div class="ivc-cell" @click="clickCell">
    <div class="ivc-cell-container">
      <div class="ivc-cell-left">
        <slot name="left">{{ title }}</slot>
      </div>
      <div class="ivc-cell-right">
        <slot name="right">{{ value }}</slot>
        <i v-if="to" class="ivc-icon-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ivc-cell',
    props: {
      title: {
        type: String
      },
      value: {
        type: String
      },
      to: {
        type: String
      }
    },
    methods: {
      clickCell () {
        if (this.to) {
          location.href = this.to
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
@import '../../src/theme-default/mixins/border-hairline.scss';
.ivc-cell {
  position: relative;
  width: 100%;
  height: 104px;
  background-color: $white;
  box-sizing: border-box;
  & + .ivc-cell {
    .ivc-cell-container {
     @include border-hairline(1px)
    }
  }
  &-container {
    margin: 0 30px 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
    .ivc-cell-left {
      font-size: 32px; /* px */
      color: $black-dark;
      .iconfont {
        font-size: 32px; /* px */
      }
    }
    .ivc-cell-right {
      font-size: 28px; /* px */
      color: $gray;
      display: flex;
      align-items: center;
      height: inherit;
      .ivc-icon-right {
        display: inline-block;
        margin-left: 8px;
      }
    }
  }
}
</style>
