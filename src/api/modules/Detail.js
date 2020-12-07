import base from "@/api/base";
import axios from "@/utils/request";

const Detail = {
    // 获取某件藏品的详细信息以及推荐用户可能喜欢的藏品
    getDetail(params) {
        return axios.get(`/porcelain/getPorcelain`, { params })
    },
    // 收藏接口
    getLike(params) {
        return axios.get(`/porcelain/collect`, { params })
    },
    // 分页获取藏品评论详情
    getComment(params) {
        return axios.get(`/porcelain/getComment`, { params })
    },
    // 藏品页面发表评论
    postComment(params) {
        return axios.post(`/porcelain/postComment`, params);
    }
}

export default Detail