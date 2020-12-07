import axios from "@/utils/request";

const user={
  getCollection(param){
    let baseUrl=axios.changeParams(`/user/getCollection`,param);
    return axios.get(baseUrl)
  },
  getRecord(param){
    let baseUrl=axios.changeParams(`/user/getRecord`,param);
    return axios.get(baseUrl)
  }
}
export default user;
