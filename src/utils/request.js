import axios from "axios";
import { Notify, Dialog } from 'vant';
import store from "@/store";
import router from "@/router";
import { getToken, removeToken } from "@/utils/auth";
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: process.env.VUE_APP_BASE_API,
  // 测试
  baseURL: 'http://47.102.155.74:10808/color_porcelain',
  timeout: 12000
})

function ShowNotify({ message, duration }) {
  Notify({
    message: message,
    color: '#ad0000',
    background: '#ffe1e1',
    duration: duration
  });
}

// request拦截器
service.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      // config.headers["Authorization"] = 'd2fd0bf8-61d7-42ce-b429-ead357ecf6cc';
      config.headers["Authorization"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

//响应拦截器
// 成功 1
// 失败 -1
// 未登录 3001
// 后台错误 500
service.interceptors.response.use(
  res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code * 1 || 1; //*1,保证code是数字
    // 获取错误信息
    const msg = res.data.message;
    if (code === 3001) {
      Dialog.confirm({
        title: "系统提示",
        message: "未登录 | 或登录状态已过期 , 请重新登陆",
        confirmButtonText: "重新登录",
        cancelButtonText: "取消"
      })
        .then(() => {
          removeToken();
          window.localStorage.clear();
          window.sessionStorage.clear();
          store.commit("RESET_STATE");
          router.replace({
            path: "/login"
          });
        })
        .catch(() => { });
    } else if (code === 500) {
      ShowNotify({ message: msg, duration: 1000 })
      return Promise.reject(new Error(msg));
    } else if (code !== 1) {
      ShowNotify({ message: msg, duration: 1000 })
      return Promise.reject("error");
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error);
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ShowNotify({ message: message, duration: 5 * 1000 })
    return Promise.reject(error);
  }
);
service.changeParams = function (baseUrl, param) {
  baseUrl = baseUrl + "?";
  for (let [key, value] of Object.entries(param)) {
    baseUrl = baseUrl + `${key}=${value}&`;
  }
  baseUrl = baseUrl.substr(0, baseUrl.length - 1); //删去最后的$
  return baseUrl;
};

export default service;
