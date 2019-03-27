import Vue from 'vue'
import Vuex from 'vuex'
import cker from './modules/checkersstore'
import fbauth from './modules/authentication'
import chat from './modules/chat'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cker, fbauth, chat
  },
  state: {
    a: 'AAAA',
    loading: false,
  },
  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },
  actions: {

  },
  getters: {
    loading(state) {
        return state.loading
    },

  }
})