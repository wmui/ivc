<template>
  <label class="ivc-switch">
    <input type="checkbox" :checked="value" @change="changeValue" class="ivc-switch-input">
    <span class="ivc-switch-button"></span>
  </label>
</template>
<script>
  export default {
    name: 'ivc-switch',
    props: {
      // 初始化checkbox状态
      value: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      changeValue () {
        // 该事件直接改变ivc-checkbox中的value值，组件可通过计算属性得到变化后的值。
        // 值变化进而影响props中的值
        this.$emit('input', !this.value)
      }
    }
  }
</script>
<style lang="scss">
@import '../../src/theme-default/common/var.scss';
.ivc-switch {
  display: flex;
  align-items: center;
  position: relative;
}

.ivc-switch-input {
  height: 0;
  width: 0;
  visibility: hidden;
}

.ivc-switch-button {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 60px;
  border: 1px solid $gray-light; /* no */
  border-radius: 31px;
  background-color: $gray-light;
}
.ivc-switch-button::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 1px;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: $white;
  box-shadow: 0 1px 3px rgba(0,0,0,.4);
  transform: translateX(0);
  transition:transform .3s;
}

.ivc-switch-input:checked + .ivc-switch-button {
  background-color: $green;
  border: 1px solid $green; /* no */
  display: inline-block;
  position: relative;
  border-radius: 31px;
}
.ivc-switch-input:checked + .ivc-switch-button::after {
  transform: translateX(41px);
}
</style>
