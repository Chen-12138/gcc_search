import * as types from './mutation-type'

const mutations = {
    // 搜索历史
    [types.SET_SEARCH_HISTORY](state, history) {
        state.searchHistory = history
    },
    [types.SET_USER](state, user) {
        state.user = user
    },
    [types.SET_ISFIRST](state, first) {
        state.isFirst = first
    }
}

export default mutations
