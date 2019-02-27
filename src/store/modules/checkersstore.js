
export default {
  state: {
    match: {gameLog: [ 'a','b','c','d'], red: 'dean', blk: 'logan', status: 'active'},
    matchid: null
  },
  getters: {
    match(state) {
      return state.match;
    },
    matchid(state) {
      return state.matchid;
    },
    currentBoardState(state) {
      let glog = state.match.gameLog
      let lastIndex = state.match.gameLog.length - 1
      return state.match.gameLog[lastIndex];
    }
  },
  mutations: {
    setMatchId(state, matchid) {
      state.matchid = matchid; 
    },
    setMatch(state, match) {
      state.match = match; 
    },
  },
  actions: {
    matchIdChange ( context, payload ) {
      context.commit('setMatchId', payload);
      console.log("just dumped the match id " + payload)
    }
  }
}
