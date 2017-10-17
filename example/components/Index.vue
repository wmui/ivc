<template>
  <div class="index-demo">
    <ivc-header title="IVC"></ivc-header>
    <ivc-cell v-for="(item, index) in components" :key="index" :title="item" :to="`#/${item.toLowerCase()}`">{{ item }}</ivc-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        'Header',
        'Button',
        'Badge',
        'Cell',
        'Switch',
        'Checkbox',
        'Radio',
        'Popup',
        'Scroller',
        'Tooltip'
      ]
    }
  }
}
</script>

<style lang="scss">
  body {
    font-family: Arial, "Microsoft YaHei";
  }
</style>
