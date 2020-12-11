import { getSearch } from '@/utils/cache'

const state = {
  // 搜索历史
  searchHistory: getSearch(),
  token: window.localStorage.getItem("token"),
  user: {},
}

export default state
