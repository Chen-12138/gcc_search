import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/common.css'
import 'font-awesome/css/font-awesome.css'

import http from "@/api/modules/index.js"

Vue.config.productionTip = false
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
