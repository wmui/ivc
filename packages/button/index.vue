<template>
  <button :type="type" :disabled="disabled" :class="['ivc-button', `ivc-button-${color}`, {'ivc-button-radius': radius}, {'ivc-button-pierced': pierced}]">
    <label class="ivc-button-text"><slot></slot></label>
  </button>
</template>
<script>
  export default {
    name: 'ivc-button',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      radius: {
        type: Boolean,
        default: false
      },
      pierced: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'primary',
        validator (value) {
          // 如果不是有效值，控制台会报错
          return ['blue', 'green', 'red', 'yellow', 'primary'].indexOf(value) > -1
        }
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
.ivc-button {
  display: inline-block;
  box-sizing: border-box;
  padding: 0;
  height: 88px;
  line-height: 88px;
  width: 690px;
  border: none;
  outline: none;
  text-align: center;
  color: $white;
  &-blue {
    background-color: $blue;
    border: 1px solid $blue; /* no */
    &:active {
      background-color: $blue-dark;
      border: 1px solid $blue-dark; /* no */
    }
  }
  &-green {
    background-color: $green;
    border: 1px solid $green; /* no */
    &:active {
      background-color: $green-dark;
      border: 1px solid $green-dark; /* no */
    }
  }

  &-red {
    background-color: $red;
    border: 1px solid $red; /* no */
    &:active {
      background-color: $red-dark;
      border: 1px solid $red-dark; /* no */
    }
  }

  &-yellow {
    background-color: $yellow;
    border: 1px solid $yellow; /* no */
    &:active {
      background-color: $yellow-dark;
      border: 1px solid $yellow-dark; /* no */
    }
  }
  &-primary {
    background-color: $primary;
    border: 1px solid $primary; /* no */
    &:active {
      background-color: $primary-dark;
      border: 1px solid $primary-dark; /* no */
    }
  }
  &-pierced:not(:active) {
    background-color: transparent;
    color: $gray-light;
  }

  &-radius {
    border-radius: 8px;
  }

  &[disabled] {
    opacity: .4;
    color: $gray-light;
  }

  &-text {
    font-size: 36px; /* px */
  }
}
</style>
