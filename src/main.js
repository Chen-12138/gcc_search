import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//font-awesome
import '@/assets/css/common.css'
import 'font-awesome/css/font-awesome.css'

import http from "@/api/modules/index.js"

//video
import 'video.js/dist/video-js.css'
import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
