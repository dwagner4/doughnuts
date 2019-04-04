<template>
  <div id="board">
    <div @click="spaceClk" id="0" v-bind:style="spaces[0].class"></div>
    <div v-bind:class="spaces[1].class"></div>
    <div id="2" @click="spaceClk" v-bind:class="spaces[2].class"></div>
    <div v-bind:class="spaces[3].class"></div>
    <div id="4" @click="spaceClk" v-bind:class="spaces[4].class"></div>
    <div v-bind:class="spaces[5].class"></div>
    <div id="6" @click="spaceClk" v-bind:class="spaces[6].class"></div>
    <div v-bind:class="spaces[7].class"></div>

    <div v-bind:class="spaces[8].class"></div>
    <div id="9" @click="spaceClk" v-bind:class="spaces[9].class"></div>
    <div v-bind:class="spaces[10].class"></div>
    <div id="11" @click="spaceClk" v-bind:class="spaces[11].class"></div>
    <div v-bind:class="spaces[12].class"></div>
    <div id="13" @click="spaceClk" v-bind:class="spaces[13].class"></div>
    <div v-bind:class="spaces[14].class"></div>
    <div id="15" @click="spaceClk" v-bind:class="spaces[15].class"></div>

    <div id="16" @click="spaceClk" v-bind:class="spaces[16].class"></div>
    <div v-bind:class="spaces[17].class"></div>
    <div id="18" @click="spaceClk" v-bind:class="spaces[18].class"></div>
    <div v-bind:class="spaces[19].class"></div>
    <div id="20" @click="spaceClk" v-bind:class="spaces[20].class"></div>
    <div v-bind:class="spaces[21].class"></div>
    <div id="22" @click="spaceClk" v-bind:class="spaces[22].class"></div>
    <div v-bind:class="spaces[23].class"></div>

    <div v-bind:class="spaces[24].class"></div>
    <div id="25" @click="spaceClk" v-bind:class="spaces[25].class"></div>
    <div v-bind:class="spaces[26].class"></div>
    <div id="27" @click="spaceClk" v-bind:class="spaces[27].class"></div>
    <div v-bind:class="spaces[28].class"></div>
    <div id="29" @click="spaceClk" v-bind:class="spaces[29].class"></div>
    <div v-bind:class="spaces[30].class"></div>
    <div id="31" @click="spaceClk" v-bind:class="spaces[31].class"></div>

    <div id="32" @click="spaceClk" v-bind:class="spaces[32].class"></div>
    <div v-bind:class="spaces[33].class"></div>
    <div id="34" @click="spaceClk" v-bind:class="spaces[34].class"></div>
    <div v-bind:class="spaces[35].class"></div>
    <div id="36" @click="spaceClk" v-bind:class="spaces[36].class"></div>
    <div v-bind:class="spaces[37].class"></div>
    <div id="38" @click="spaceClk" v-bind:class="spaces[38].class"></div>
    <div v-bind:class="spaces[39].class"></div>

    <div v-bind:class="spaces[40].class"></div>
    <div id="41" @click="spaceClk" v-bind:class="spaces[41].class"></div>
    <div v-bind:class="spaces[42].class"></div>
    <div id="43" @click="spaceClk" v-bind:class="spaces[43].class"></div>
    <div v-bind:class="spaces[44].class"></div>
    <div id="45" @click="spaceClk" v-bind:class="spaces[45].class"></div>
    <div v-bind:class="spaces[46].class"></div>
    <div id="47" @click="spaceClk" v-bind:class="spaces[47].class"></div>

    <div id="48" @click="spaceClk" v-bind:class="spaces[48].class"></div>
    <div v-bind:class="spaces[49].class"></div>
    <div id="50" @click="spaceClk" v-bind:class="spaces[50].class"></div>
    <div v-bind:class="spaces[51].class"></div>
    <div id="52" @click="spaceClk" v-bind:class="spaces[52].class"></div>
    <div v-bind:class="spaces[53].class"></div>
    <div id="54" @click="spaceClk" v-bind:class="spaces[54].class"></div>
    <div v-bind:class="spaces[55].class"></div>

    <div v-bind:class="spaces[56].class"></div>
    <div id="57" @click="spaceClk" v-bind:class="spaces[57].class"></div>
    <div v-bind:class="spaces[58].class"></div>
    <div id="59" @click="spaceClk" v-bind:class="spaces[59].class"></div>
    <div v-bind:class="spaces[60].class"></div>
    <div id="61" @click="spaceClk" v-bind:class="spaces[61].class"></div>
    <div v-bind:class="spaces[62].class"></div>
    <div id="63" @click="spaceClk" v-bind:class="spaces[63].class"></div>

    <div @click="selClk" v-bind:class="selectedclass"></div>
    
    <div id="r1" @click="pcClk" v-bind:class="pieceStyle('r1')"><img v-bind:src="pieceImg('r1')" alt=""></div>
    <div id="r2" @click="pcClk" v-bind:class="pieceStyle('r2')"><img v-bind:src="pieceImg('r2')" alt=""></div>
    <div id="r3" @click="pcClk" v-bind:class="pieceStyle('r3')"><img v-bind:src="pieceImg('r3')" alt=""></div>
    <div id="r4" @click="pcClk" v-bind:class="pieceStyle('r4')"><img v-bind:src="pieceImg('r4')" alt=""></div>
    <div id="r5" @click="pcClk" v-bind:class="pieceStyle('r5')"><img v-bind:src="pieceImg('r5')" alt=""></div>
    <div id="r6" @click="pcClk" v-bind:class="pieceStyle('r6')"><img v-bind:src="pieceImg('r6')" alt=""></div>
    <div id="r7" @click="pcClk" v-bind:class="pieceStyle('r7')"><img v-bind:src="pieceImg('r7')" alt=""></div>
    <div id="r8" @click="pcClk" v-bind:class="pieceStyle('r8')"><img v-bind:src="pieceImg('r8')" alt=""></div>
    <div id="r9" @click="pcClk" v-bind:class="pieceStyle('r9')"><img v-bind:src="pieceImg('r9')" alt=""></div>
    <div id="r10" @click="pcClk" v-bind:class="pieceStyle('r10')"><img v-bind:src="pieceImg('r10')" alt=""></div>
    <div id="r11" @click="pcClk" v-bind:class="pieceStyle('r11')"><img v-bind:src="pieceImg('r11')" alt=""></div>
    <div id="r12" @click="pcClk" v-bind:class="pieceStyle('r12')"><img v-bind:src="pieceImg('r12')" alt=""></div>

    <div id="b1" @click="pcClk" v-bind:class="pieceStyle('b1')"><img v-bind:src="pieceImg('b1')" alt=""></div>
    <div id="b2" @click="pcClk" v-bind:class="pieceStyle('b2')"><img v-bind:src="pieceImg('b2')" alt=""></div>
    <div id="b3" @click="pcClk" v-bind:class="pieceStyle('b3')"><img v-bind:src="pieceImg('b3')" alt=""></div>
    <div id="b4" @click="pcClk" v-bind:class="pieceStyle('b4')"><img v-bind:src="pieceImg('b4')" alt=""></div>
    <div id="b5" @click="pcClk" v-bind:class="pieceStyle('b5')"><img v-bind:src="pieceImg('b5')" alt=""></div>
    <div id="b6" @click="pcClk" v-bind:class="pieceStyle('b6')"><img v-bind:src="pieceImg('b6')" alt=""></div>
    <div id="b7" @click="pcClk" v-bind:class="pieceStyle('b7')"><img v-bind:src="pieceImg('b7')" alt=""></div>
    <div id="b8" @click="pcClk" v-bind:class="pieceStyle('b8')"><img v-bind:src="pieceImg('b8')" alt=""></div>
    <div id="b9" @click="pcClk" v-bind:class="pieceStyle('b9')"><img v-bind:src="pieceImg('b9')" alt=""></div>
    <div id="b10" @click="pcClk" v-bind:class="pieceStyle('b10')"><img v-bind:src="pieceImg('b10')" alt=""></div>
    <div id="b11" @click="pcClk" v-bind:class="pieceStyle('b11')"><img v-bind:src="pieceImg('b11')" alt=""></div>
    <div id="b12" @click="pcClk" v-bind:class="pieceStyle('b12')"><img v-bind:src="pieceImg('b12')" alt=""></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      selectedclass: 'notsel',
      selectedPc: null,
      spaces: [
        { class: "white row0 col0"}, { class: "grey row0 col1"}, { class: "white row0 col2"}, { class: "grey row0 col3"},
        { class: "white row0 col4"}, { class: "grey row0 col5"}, { class: "white row0 col6"}, { class: "grey row0 col7"}, 
        { class: "grey row1 col0"}, { class: "white row1 col1"}, { class: "grey row1 col2"}, { class: "white row1 col3"}, 
        { class: "grey row1 col4"}, { class: "white row1 col5"}, { class: "grey row1 col6"}, { class: "white row1 col7"},
        { class: "white row2 col0"}, { class: "grey row2 col1"}, { class: "white row2 col2"}, { class: "grey row2 col3"},
        { class: "white row2 col4"}, { class: "grey row2 col5"}, { class: "white row2 col6"}, { class: "grey row2 col7"}, 
        { class: "grey row3 col0"}, { class: "white row3 col1"}, { class: "grey row3 col2"}, { class: "white row3 col3"}, 
        { class: "grey row3 col4"}, { class: "white row3 col5"}, { class: "grey row3 col6"}, { class: "white row3 col7"},
        { class: "white row4 col0"}, { class: "grey row4 col1"}, { class: "white row4 col2"}, { class: "grey row4 col3"},
        { class: "white row4 col4"}, { class: "grey row4 col5"}, { class: "white row4 col6"}, { class: "grey row4 col7"},
        { class: "grey row5 col0"}, { class: "white row5 col1"}, { class: "grey row5 col2"}, { class: "white row5 col3"}, 
        { class: "grey row5 col4"}, { class: "white row5 col5"}, { class: "grey row5 col6"}, { class: "white row5 col7"},
        { class: "white row6 col0"}, { class: "grey row6 col1"}, { class: "white row6 col2"}, { class: "grey row6 col3"},
        { class: "white row6 col4"}, { class: "grey row6 col5"}, { class: "white row6 col6"}, { class: "grey row6 col7"},
        { class: "grey row7 col0"}, { class: "white row7 col1"}, { class: "grey row7 col2"}, { class: "white row7 col3"}, 
        { class: "grey row7 col4"}, { class: "white row7 col5"}, { class: "grey row7 col6"}, { class: "white row7 col7"} 
      ]
    }
  },
  computed: {
    ...mapGetters([
      'currentBdSt', 'allMvs', 'selected', 'spacesize'
    ])
  },
 
  methods: {
    created: function() {

    }, 
    pieceStyle: function(pcID) {
      let pc = this.currentBdSt[pcID] 
      return 'row' + pc.y + ' col' + pc.x
    },
    pieceImg: function(pcID) {
      let pcCode = this.currentBdSt[pcID].piece
      console.log(pcCode)
      let result = 'assets/red.png'
      if (pcCode == 'b') {
        result = 'assets/blk.png'
      }
      return result
    },
    pcClk: function(e) {
      let clkPc = e.target.parentNode.id
      if (!this.selectedPc) {
        this.selectedPc = clkPc
        let classStart = e.target.parentNode.className
        this.selectedclass = classStart + " selected"
      } else {
        this.selectedPc = clkPc
        let classStart = e.target.parentNode.className
        this.selectedclass = classStart + " selected"
      }
    },
    selClk: function() {
      this.selectedPc = null
      this.selectedclass = 'notsel'
    },
    spaceClk: function(e) {
      let spaceID = parseInt(e.target.id)
      let xx = Math.floor(spaceID / 8)
      let yy = spaceID % 8
      this.currentBdSt[this.selectedPc].x = xx
      this.currentBdSt[this.selectedPc].y = yy
      
      this.$emit('game-move',{pcId: this.selectedPc, x: xx, y: yy})
      this.selectedPc = null
      this.selectedclass = 'notsel'
    }
  }
}

</script>

<style scoped>
  #board {
    display: grid;
    grid-template-columns: repeat( 8, 1fr) ;
    width: 504px; height: 504px;
  }
  .row0 { grid-row: 1; }
  .row1 { grid-row: 2; }
  .row2 { grid-row: 3; }
  .row3 { grid-row: 4; }
  .row4 { grid-row: 5; }
  .row5 { grid-row: 6; }
  .row6 { grid-row: 7; }
  .row7 { grid-row: 8; }
  .col0 { grid-column: 1; }
  .col1 { grid-column: 2; }
  .col2 { grid-column: 3; }
  .col3 { grid-column: 4; }
  .col4 { grid-column: 5; }
  .col5 { grid-column: 6; }
  .col6 { grid-column: 7; }
  .col7 { grid-column: 8; }
  .white {
    background-color: pink;
    height: 63px;
  }
  .grey {
    background-color: #555555;
    height: 63px;
  }
  .selected {
    background-color: rgba(0, 255, 0, 0.3);;
    height: 63px;
    z-index: 10;
  }
  .notsel {
    display: none;
  }

</style>