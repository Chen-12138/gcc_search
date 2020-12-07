// import base from "@/api/base";
import axios from "@/utils/request";

const Login = {
  login(user) {
    return axios.post('/user/login', user);
  },
  register(param) {
    return axios.post(`/user/register`, param);
  },
  getCode(param) {
    return axios.post(`/user/sendCode`, param);
  },
  forgetPwd(param) {
    return axios.post(`/user/forget`, param);
  },
  logout() {
    return axios.get(`/user/logout`)
  }
}

export default Login;
