import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Badge from '../components/Badge.vue'
import Cell from '../components/Cell.vue'
import Switch from '../components/Switch.vue'
import Checkbox from '../components/Checkbox.vue'
import Radio from '../components/Radio.vue'
import Popup from '../components/Popup.vue'
import Scroller from '../components/Scroller.vue'
import Tooltip from '../components/Tooltip.vue'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'current',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/docs',
      redirect: '/'
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/badge',
      name: 'Badge',
      component: Badge
    },
    {
      path: '/cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup
    },
    {
      path: '/scroller',
      name: 'Scroller',
      component: Scroller
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip
    }
  ]
})
