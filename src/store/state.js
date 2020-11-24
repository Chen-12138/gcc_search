import { getSearch } from '@/utils/cache'

const state = {
  // 搜索历史
  searchHistory: getSearch(),
}

export default state
