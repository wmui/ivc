import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/normalize.css'
import './assets/styles/doc.css'
import '../../src/assets/styles/theme-default/index.scss'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
