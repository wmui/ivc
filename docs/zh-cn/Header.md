# Header

## 用法

使用 Header 组件可以快速创建页面标题栏。

为 Header 组件传入 `title` 参数，定义标题内容。

```html
<w-header title="标准标题"></w-header>
```

Header 组件使用 slot 分发标题栏左侧与右侧内容。传入 `name` 为 `left` 和 `right` 的具名 slot 模板来定义标题栏左侧与右侧内容。

```html
<w-header title="两侧均有内容">
  <router-link to="/" slot="left">
    <i class="iconfont icon-left"></i>
  </router-link>
  <span slot="right">分享</span>
</w-header>
```

Header 组件允许通过传入 `name` 为 `title` 的具名 slot 模板来自定义标题文字部分内容。此时 title 参数将失效。

```html
<w-header>
  <router-link to="/" slot="left">
    <span class="iconfont icon-left"></span>
  </router-link>
  <p slot="title"><span>复杂样式</span>标题</p>
  <span slot="right">分享</span>
</w-header>
```

传入 `fixed` 参数，可将 Header 组件定位方式改为 `fixed`，实现悬挂定位。

```html
<w-header fixed title="悬挂标题">
  <router-link to="/" slot="left" class="link">
    <span class="iconfont icon-left"></span>
  </router-link>
</w-header>
```

## Props

| 参数    | 描述                | 类型      | 默认值   | 备注  |
|-------  |-------------------- |---------  |-------- |------ |
| title   | 标题文字            | String    |         |       |
| fixed   | 是否悬挂于屏幕顶部   | Boolean   | false   |       |
