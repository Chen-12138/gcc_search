import base from "@/api/base";
import axios from "@/utils/request";

const Production = {
    // 获取文创产品
    getProduction(params) {
        return axios.get(`/product/getProduct`, { params })
    },
    // 文创产品收藏接口
    getProductLike(params) {
        return axios.get(`/product/collectProduct`, { params })
    },
    // 获取文创游戏
    getGame(params) {
        return axios.get(`/product/getGames`, { params })
    },
    // 文创游戏接口
    getGameLike(params) {
        return axios.get(`/product/collect`, { params })
    }
}

export default Production