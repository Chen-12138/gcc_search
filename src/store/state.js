import { getSearch } from '@/utils/cache'

const state = {
  // 搜索历史
  searchHistory: getSearch(),
  token: JSON.parse(window.localStorage.getItem("token")),
  user: JSON.parse(window.localStorage.getItem("user")),
}

export default state
