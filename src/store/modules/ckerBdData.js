/* eslint-disable */

import { db } from '@/fb'

export const state = {
  boardState: '',
  allMvs: [],
  selected: null,
  spacesize: 63
}
export const getters = {
  boardState(state) {
    return state.boardState
  },
  allMvs(state) {
    return state.allMvs
  },
  selected(state) {
    return state.selected
  },
  spacesize(state) {
    return state.spacesize
  }
}
export const mutations = {
  SET_BOARD_STATE(state, bdState) {
    state.boardState = bdState; 
  },
  SET_ALLMVS(state, mvs) {
    state.allMvs = mvs; 
  },
  SET_SELECTED(state, sel) {
    state.selected = sel; 
  },
  SET_SPACE_SIZE(state, sz) {
    state.spacesize = sz; 
  },
}
export const actions = {
  doMove ( context, payload ) {
    console.log( payload )
    context.commit('SET_BOARD_STATE', payload)
  }
}

