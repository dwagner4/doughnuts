/* eslint-disable */

import { db } from '@/fb'

export const state = {
  currentBdSt: { 
    r1: {x: 0, y: 0, piece: 'r'},
    r2: {x: 2, y: 0, piece: 'r'},
    r3: {x: 4, y: 0, piece: 'r'},
    r4: {x: 6, y: 0, piece: 'r'},
    r5: {x: 1, y: 1, piece: 'r'},
    r6: {x: 3, y: 1, piece: 'r'},
    r7: {x: 5, y: 1, piece: 'r'},
    r8: {x: 7, y: 1, piece: 'r'},
    r9: {x: 0, y: 2, piece: 'r'},
    r10: {x: 2, y: 2, piece: 'r'},
    r11: {x: 4, y: 2, piece: 'r'},
    r12: {x: 6, y: 2, piece: 'r'},
    b1: {x: 1, y: 5, piece: 'b'},
    b2: {x: 3, y: 5, piece: 'b'},
    b3: {x: 5, y: 5, piece: 'b'},
    b4: {x: 7, y: 5, piece: 'b'},
    b5: {x: 0, y: 6, piece: 'b'},
    b6: {x: 2, y: 6, piece: 'b'},
    b7: {x: 4, y: 6, piece: 'b'},
    b8: {x: 6, y: 6, piece: 'b'},
    b9: {x: 1, y: 7, piece: 'b'},
    b10: {x: 3, y: 7, piece: 'b'},
    b11: {x: 5, y: 7, piece: 'b'},
    b12: {x: 7, y: 7, piece: 'b'},
  },
  allMvs: [],
  selected: null,
  spacesize: 63,
  
  
}
export const getters = {
  currentBdSt(state) {
    return state.currentBdSt
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
    state.currentBdSt = bdState; 
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

