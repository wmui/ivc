<template>
  <div class="button-demo">
    <ivc-header title="Button">
      <router-link slot="left" to="/">
        <i class="iconfont icon-left"></i>
      </router-link>
    </ivc-header>
    <div class="button-group">
      <ivc-button>默认样式</ivc-button>
      <ivc-button type="submit" color="green">颜色属性</ivc-button>
      <ivc-button disabled>禁用状态</ivc-button>
      <ivc-button radius>圆角状态</ivc-button>
    </div>
  </div>
</template>
<script>
</script>

<style lang="scss">
.button-demo {
  .button-group {
    text-align: center;
    margin:20px 0;
    button + button {
      margin-top: 20px;
    }
  }
}
</style>
