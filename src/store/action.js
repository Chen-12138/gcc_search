import * as types from './mutation-type'
import { saveSearch, deleteSearch, clearSearch } from '@/utils/cache'

// 保存搜索历史
export const saveSearchHistory = function({ commit }, query) {
    commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

// 移除单个搜索历史
export const deleteSearchHistory = function({ commit }, query) {
    commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

// 移除全部搜索历史
export const clearSearchHistory = function({ commit }, query) {
    commit(types.SET_SEARCH_HISTORY, clearSearch(query))
}