<template>
  <div id="board">
    <div class="white row0 col0"></div>
    <div class="grey row0 col1"></div>
    <div class="white row0 col2"></div>
    <div class="grey row0 col3"></div>
    <div class="white row0 col4"></div>
    <div class="grey row0 col5"></div>
    <div class="white row0 col6"></div>
    <div class="grey row0 col7"></div>
    <div class="grey row1 col0"></div>
    <div class="white row1 col1"></div>
    <div class="grey row1 col2"></div>
    <div class="white row1 col3"></div>
    <div class="grey row1 col4"></div>
    <div class="white row1 col5"></div>
    <div class="grey row1 col6"></div>
    <div class="white row1 col7"></div>
    <div class="white row2 col0"></div>
    <div class="grey row2 col1"></div>
    <div class="white row2 col2"></div>
    <div class="grey row2 col3"></div>
    <div class="white row2 col4"></div>
    <div class="grey row2 col5"></div>
    <div class="white row2 col6"></div>
    <div class="grey row2 col7"></div>
    <div class="grey row3 col0"></div>
    <div class="white row3 col1"></div>
    <div class="grey row3 col2"></div>
    <div class="white row3 col3"></div>
    <div class="grey row3 col4"></div>
    <div class="white row3 col5"></div>
    <div class="grey row3 col6"></div>
    <div class="white row3 col7"></div>
    <div class="white row4 col0"></div>
    <div class="grey row4 col1"></div>
    <div class="white row4 col2"></div>
    <div class="grey row4 col3"></div>
    <div class="white row4 col4"></div>
    <div class="grey row4 col5"></div>
    <div class="white row4 col6"></div>
    <div class="grey row4 col7"></div>
    <div class="grey row5 col0"></div>
    <div class="white row5 col1"></div>
    <div class="grey row5 col2"></div>
    <div class="white row5 col3"></div>
    <div class="grey row5 col4"></div>
    <div class="white row5 col5"></div>
    <div class="grey row5 col6"></div>
    <div class="white row5 col7"></div>
    <div class="white row6 col0"></div>
    <div class="grey row6 col1"></div>
    <div class="white row6 col2"></div>
    <div class="grey row6 col3"></div>
    <div class="white row6 col4"></div>
    <div class="grey row6 col5"></div>
    <div class="white row6 col6"></div>
    <div class="grey row6 col7"></div>
    <div class="grey row7 col0"></div>
    <div class="white row7 col1"></div>
    <div class="grey row7 col2"></div>
    <div class="white row7 col3"></div>
    <div class="grey row7 col4"></div>
    <div class="white row7 col5"></div>
    <div class="grey row7 col6"></div>
    <div class="white row7 col7"></div>
    
    <div id="r1" v-bind:class="r1class"><img v-bind:src="r1img" alt=""></div>
    <div id="r2" v-bind:class="r2class"><img v-bind:src="r2img" alt=""></div>
    <div id="r3" v-bind:class="r3class"><img v-bind:src="r3img" alt=""></div>
    <div id="r4" v-bind:class="r4class"><img v-bind:src="r4img" alt=""></div>
    <div id="r5" v-bind:class="r5class"><img v-bind:src="r5img" alt=""></div>
    <div id="r6" v-bind:class="r6class"><img v-bind:src="r6img" alt=""></div>
    <div id="r7" v-bind:class="r7class"><img v-bind:src="r7img" alt=""></div>
    <div id="r8" v-bind:class="r8class"><img v-bind:src="r8img" alt=""></div>
    <div id="r9" v-bind:class="r9class"><img v-bind:src="r9img" alt=""></div>
    <div id="r10" v-bind:class="r10class"><img v-bind:src="r10img" alt=""></div>
    <div id="r11" v-bind:class="r11class"><img v-bind:src="r11img" alt=""></div>
    <div id="r12" v-bind:class="r12class"><img v-bind:src="r12img" alt=""></div>

    <div id="b1" v-bind:class="b1class"><img v-bind:src="b1img" alt=""></div>
    <div id="b2" v-bind:class="b2class"><img v-bind:src="b2img" alt=""></div>
    <div id="b3" v-bind:class="b3class"><img v-bind:src="b3img" alt=""></div>
    <div id="b4" v-bind:class="b4class"><img v-bind:src="b4img" alt=""></div>
    <div id="b5" v-bind:class="b5class"><img v-bind:src="b5img" alt=""></div>
    <div id="b6" v-bind:class="b6class"><img v-bind:src="b6img" alt=""></div>
    <div id="b7" v-bind:class="b7class"><img v-bind:src="b7img" alt=""></div>
    <div id="b8" v-bind:class="b8class"><img v-bind:src="b8img" alt=""></div>
    <div id="b9" v-bind:class="b9class"><img v-bind:src="b9img" alt=""></div>
    <div id="b10" v-bind:class="b10class"><img v-bind:src="b10img" alt=""></div>
    <div id="b11" v-bind:class="b11class"><img v-bind:src="b11img" alt=""></div>
    <div id="b12" v-bind:class="b12class"><img v-bind:src="b12img" alt=""></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
     
      r1class: "row0 col0",
      r1img: "assets/red.png",
      r2class: "row0 col2",
      r2img: "assets/red.png",
      r3class: "row0 col4",
      r3img: "assets/red.png",
      r4class: "row0 col6",
      r4img: "assets/red.png",
      r5class: "row1 col1",
      r5img: "assets/red.png",
      r6class: "row1 col3",
      r6img: "assets/red.png",
      r7class: "row1 col5",
      r7img: "assets/red.png",
      r8class: "row1 col7",
      r8img: "assets/red.png",
      r9class: "row2 col0",
      r9img: "assets/red.png",
      r10class: "row2 col2",
      r10img: "assets/red.png",
      r11class: "row2 col4",
      r11img: "assets/red.png",
      r12class: "row2 col6",
      r12img: "assets/red.png",

      b1class: "row5 col1",
      b1img: "assets/blk.png",
      b2class: "row5 col3",
      b2img: "assets/blk.png",
      b3class: "row5 col5",
      b3img: "assets/blk.png",
      b4class: "row5 col7",
      b4img: "assets/blk.png",
      b5class: "row6 col0",
      b5img: "assets/blk.png",
      b6class: "row6 col2",
      b6img: "assets/blk.png",
      b7class: "row6 col4",
      b7img: "assets/blk.png",
      b8class: "row6 col6",
      b8img: "assets/blk.png",
      b9class: "row7 col1",
      b9img: "assets/blk.png",
      b10class: "row7 col3",
      b10img: "assets/blk.png",
      b11class: "row7 col5",
      b11img: "assets/blk.png",
      b12class: "row7 col7",
      b12img: "assets/blk.png",
    }
  },
  computed: {
    ...mapGetters([
      'boardState', 'allMvs', 'selected', 'spacesize'
    ])
  },
 
  methods: {
    movePiece( fm, to ) {},
  },
  created: function() {

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

</style>