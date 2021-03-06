import Header from './Header/index.vue'
import Button from './Button/index.vue'
import Badge from './Badge/index.vue'
import Cell from './cell/index.vue'
import Switch from './switch/index.vue'
import Checkbox from './checkbox/index.vue'
import Radio from './radio/index.vue'
import Popup from './popup/index.vue'
import Scroller from './scroller/index.vue'
import Tooltip from './tooltip/index.vue'
import Swipe from './swipe/index.vue'
import SwipeItem from './swipe/SwipeItem.vue'

const version = '0.0.1'
const components = [
  Header,
  Button,
  Badge,
  Cell,
  Switch,
  Checkbox,
  Radio,
  Popup,
  Scroller,
  Tooltip,
  Swipe,
  SwipeItem
]

const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Header,
  Button,
  Badge,
  Cell,
  Switch,
  Checkbox,
  Radio,
  Popup,
  Scroller,
  Tooltip,
  Swipe,
  SwipeItem
}

export default {
  install,
  version
}
