export default {
  state: {
    user: {},
    status: false
  },

  getters: {
    user(state) {
      return state.user;
    },
    isSignedIn(state) {
      return state.status;
    }
  },

  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user; // firebaseが返したユーザー情報
    },
    onUserStatusChanged(state, status) {
      state.status = status; // ログインしているかどうか true or false
    }
  },
}