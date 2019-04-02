/*import Vue from 'vue'
import App from './App'
import Mobile from './Mobile'

var width = document.documentElement.clientWidth
/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  render: h => h(width > 500 ? App : Mobile)
})
*/

import Vue from 'vue'
import App from './App'
import './assets/style/global.scss'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
