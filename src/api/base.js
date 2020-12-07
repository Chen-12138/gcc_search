const SERVER_ADDR = "47.102.155.74";
const SERVER_ADDR_HTTP = `http://${SERVER_ADDR}:10808/color_porcelain`;

export default {
  PROD_HTTP: SERVER_ADDR_HTTP, //生产环境下的HTTP接口
  TEST_HTTP: SERVER_ADDR_HTTP, //测试环境下的HTTP接口
}