import axios from "@/utils/request";

const explorer={
  getFamous(){ //获取名家大师列表
    return axios.get('/expert/list/get')
  },
  getHistory(){ //获取历史界面历史文本图片列表
    return axios.get('/history/getHistory');
  },
  getMedia(){ //获取历史界面历史视频列表
    return axios.get('/history/getMedia');
  }
}
export default explorer;
