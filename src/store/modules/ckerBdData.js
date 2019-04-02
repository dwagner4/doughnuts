/* eslint-disable */

import { db } from '@/fb'

export const state = {
  currentBdSt: { 
    r1: {x: 0, y: 0, piece: 'r', class: "row4 col0", img: "assets/red.png"},
    r2: {x: 2, y: 0, piece: 'r', class: "row0 col2", img: "assets/red.png"},
    r3: {x: 4, y: 0, piece: 'r', class: "row0 col4", img: "assets/red.png"},
    r4: {x: 6, y: 0, piece: 'r', class: "row0 col6", img: "assets/red.png"},
    r5: {x: 1, y: 1, piece: 'r', class: "row1 col1", img: "assets/red.png"},
    r6: {x: 3, y: 1, piece: 'r', class: "row1 col3", img: "assets/red.png"},
    r7: {x: 5, y: 1, piece: 'r', class: "row1 col5", img: "assets/red.png"},
    r8: {x: 7, y: 1, piece: 'r', class: "row1 col7", img: "assets/red.png"},
    r9: {x: 0, y: 2, piece: 'r', class: "row2 col0", img: "assets/red.png"},
    r10: {x: 2, y: 2, piece: 'r', class: "row2 col2", img: "assets/red.png"},
    r11: {x: 3, y: 2, piece: 'r', class: "row2 col4", img: "assets/red.png"},
    r12: {x: 5, y: 2, piece: 'r', class: "row2 col6", img: "assets/red.png"},
    b1: {x: 1, y: 5, piece: 'b', class: "row5 col1", img: "assets/blk.png"},
    b2: {x: 3, y: 5, piece: 'b', class: "row5 col3", img: "assets/blk.png"},
    b3: {x: 5, y: 5, piece: 'b', class: "row5 col5", img: "assets/blk.png"},
    b4: {x: 7, y: 5, piece: 'b', class: "row5 col7", img: "assets/blk.png"},
    b5: {x: 0, y: 6, piece: 'b', class: "row6 col0", img: "assets/blk.png"},
    b6: {x: 2, y: 6, piece: 'b', class: "row6 col2", img: "assets/blk.png"},
    b7: {x: 4, y: 6, piece: 'b', class: "row6 col4", img: "assets/blk.png"},
    b8: {x: 6, y: 6, piece: 'b', class: "row6 col6", img: "assets/blk.png"},
    b9: {x: 0, y: 7, piece: 'b', class: "row7 col1", img: "assets/blk.png"},
    b10: {x: 2, y: 7, piece: 'b', class: "row7 col3", img: "assets/blk.png"},
    b11: {x: 4, y: 7, piece: 'b', class: "row7 col5", img: "assets/blk.png"},
    b12: {x: 6, y: 7, piece: 'b', class: "row7 col7", img: "assets/blk.png"},
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

