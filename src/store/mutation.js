import * as types from './mutation-type'

const mutations = {
    [types.RESET_STATE](state) {
        const initState = {
            user: {},
            token: "",
        }
        Object.assign(state, initState);
    },
    // 搜索历史
    [types.SET_SEARCH_HISTORY](state, history) {
        state.searchHistory = history
    },
    [types.SET_USER](state, user) {
        state.user = user
    },
}

export default mutations
