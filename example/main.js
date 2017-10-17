import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Ivc from '../packages'
import '../src/theme-default/index.scss'
// 演示用的图标
import './assets/iconfont/iconfont.css'
Vue.use(Ivc)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
