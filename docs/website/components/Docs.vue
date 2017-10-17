<template>
  <div class="docs">
    <aside class="aside">
      <div class="intro">
        <div class="title">使用</div>
        <ul class="introDocs">
          <li v-for="(intro, index) in introDocs" :key="index">
            <router-link :to="`/docs/${intro.en}`">{{ intro.zh }} </router-link>
          </li>
        </ul>
        <div class="title">组件</div>
        <ul class="component">
          <li v-for="(component, index) in componentDocs" :key="index">
          <router-link :to="`/docs/${component.en}`">{{ component.en}} ( {{component.zh}} ) </router-link>
          </li>
        </ul>
      </div>
    </aside>
    <div class="content">
      <div class="doc">
        <doc-render :componentName="componentName"></doc-render>
      </div>

      <!-- 手机演示 -->
      <div class="phone" v-if="isPhoneShow">
        <iframe :src="`/template/example.html#/${active}`"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import DocRender from './DocRender.vue'
export default {
  name: 'Docs',
  data () {
    return {
    introDocs: [
      {
        en: 'start',
        zh: '开始'
      }
    ],
    componentDocs: [
      {
        en: 'header',
        zh: '页眉'
      },
      {
        en: 'badge',
        zh: '徽章'
      },
      {
        en: 'button',
        zh: '按钮'
      }
    ],
    isPhoneShow: true,
    active: this.$route.params.componentName || 'start',
    componentName: this.$route.params.componentName || 'start'
    }
  },
  components: {
    DocRender
  },
  watch: {
    $route(params) {
      this.active = this.componentName = params.params.componentName
    }
  },

}
</script>
<style lang="scss">
.docs {
  display: flex;
  height: 100%;
  width: 100%;
  .aside {
    position: fixed;
    left:0;
    top:0;
    height: 100%;
    width: 230px;
    background-color: #FAFAFA;
    color: #364149;
    overflow-y: scroll;
    .title {
      font-size:16px;
      font-weight: bold;
      padding: 8px 15px;
    }
    li {
      a {
        display: inline-block;
        padding:5px 0 5px 30px;
        font-size: 15px;
        color: #364149;
        &:hover {
          text-decoration: none;
        }
        &.current {
          color: #008CFF;
        }
      }
    }
  }
  .content {
    flex: 1;
    background-color: #fff;
    display: flex;
    margin-left: 230px;
    .doc {
      flex:1;
      padding: 10px 15px;
    }
    .phone {
      width: 375px;
      height: 714px;
      background-image: url('../assets/images/iphone.png');
      background-repeat: no-repeat;
      background-size: 375px 714px;
      position: relative;
      margin:10px;
      iframe {
        position: absolute;
        border: 0;
        top: 88px;
        left: 25px;
        width: 325px;
        height: 540px;
        background-color: #F7F7F7;
        overflow: scroll;
      }
    }
  }
}
</style>
