import Vue from 'vue'
import Vuex from 'vuex'
import cker from './modules/checkersstore'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cker
  },
  state: {
    a: 'AAAA'
  },
  mutations: {

  },
  actions: {

  }
})