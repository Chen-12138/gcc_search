import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'amfe-flexible';

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

// vant
import {Image as VanImage} from 'vant'
// import {ImagePreview} from 'vant'

Vue.use(VanImage);
// Vue.use(ImagePreview);

// 搜索红字指令
function hightLight(el, binding) {
  const match = binding.value;
  const reg = new RegExp(match, 'g')
  const txt = binding.arg
  let str = '';
  if (txt) {
    str = txt.replace(reg, `<span style="color:#fff">${match}</span>`)
  } else {
    str = ''
  }
  el.innerHTML = str;
}
 
Vue.directive('hightlight', {
  bind(el, binding) {
    hightLight(el, binding)
  },
  componentUpdated(el, binding) {
    hightLight(el, binding)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
