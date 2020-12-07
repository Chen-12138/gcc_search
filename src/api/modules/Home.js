import axios from "@/utils/request";

const Home = {
  getHotInfo() {
    return axios.get("/popular/getPopularContent")
  },
  getInfo() {
    return axios.get("/information/list/get")
  }
}

export default Home