import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './action'
import state from './state'
import mutations from './mutation'
import * as getters from './getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
