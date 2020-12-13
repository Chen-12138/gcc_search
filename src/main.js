import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'amfe-flexible';

//font-awesome
import '@/assets/css/common.css'
import 'font-awesome/css/font-awesome.css'

import http from "@/api/modules/index.js"
import { getToken } from "@/utils/auth";
//video
import 'video.js/dist/video-js.css'
import VueVideoPlayer from 'vue-video-player'
Vue.use(VueVideoPlayer)

Vue.config.productionTip = false
Vue.prototype.$http = http;

// vant
import { Image as VanImage } from 'vant'
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
router.beforeEach((to, from, next) => {
  //以下要替换成可持久存储的token才行,不然用户一刷新页面就要重新登陆(store随页面刷新而重置)
  if (window.localStorage.getItem("token") || getToken()) {
    if (to.path === '/login') {
      //登录状态下 访问login.vue页面 会跳到index.vue
      next({ path: '/home' });
    } else {
      next();
    }
  } else {
    // 如果没有token ,访问任何页面。都会进入到 登录页
    if (to.path === '/login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
      next();
    } else { // 否则 跳转到登录页面
      next({ path: '/login' });
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
