import base from "@/api/base";
import axios from "@/utils/request";

const Academic = {
    // 获取学术文献
    getAcademic(params) {
        return axios.get(`/academic/list/get`, { params })
    },
    // 收藏接口
    getLike(params) {
        return axios.get(`/academic/collect`, { params })
    },
    // 获取文献下载链接
    getDownload(params) {
        return axios.get(`/academic/download`, { params, responseType: `arraybuffer` })
    }
}

export default Academic