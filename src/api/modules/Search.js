import base from "@/api/base";
import axios from "@/utils/request";

const Search = {
    // 分页获取手动输入关键词搜索的藏品结果
    getKeywordSearch(params) {
        return axios.get(`/search/getPorcelainByInput`, { params })
    },
    // 分页获取输入关键词搜索的藏品信息
    getTypeSearch(params) {
        return axios.get(`/search/getPorcelainByClick`, { params })
    },
}

export default Search