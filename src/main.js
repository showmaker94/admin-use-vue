// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//路由相关
import router from './router'
import '@/permission'

//css
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '../static/css/reset.css'
import '@/styles/index.less'

// icon
import '@/icons' 

// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css'

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

/* icofont*/
import '../static/iconfont.js' 

//axios
import axios from './config/axios.js'
Vue.prototype.$http = axios

import './mock' // simulation data

//vuex
import store from './store'


//图表
import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
})
