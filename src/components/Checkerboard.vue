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
    
    <div id="r1" v-bind:class="currentBdSt.r1.class"><img v-bind:src="currentBdSt.r1.img" alt=""></div>
    <div id="r2" v-bind:class="currentBdSt.r2.class"><img v-bind:src="currentBdSt.r2.img" alt=""></div>
    <div id="r3" v-bind:class="currentBdSt.r3.class"><img v-bind:src="currentBdSt.r3.img" alt=""></div>
    <div id="r4" v-bind:class="currentBdSt.r4.class"><img v-bind:src="currentBdSt.r4.img" alt=""></div>
    <div id="r5" v-bind:class="currentBdSt.r5.class"><img v-bind:src="currentBdSt.r5.img" alt=""></div>
    <div id="r6" v-bind:class="currentBdSt.r6.class"><img v-bind:src="currentBdSt.r6.img" alt=""></div>
    <div id="r7" v-bind:class="currentBdSt.r7.class"><img v-bind:src="currentBdSt.r7.img" alt=""></div>
    <div id="r8" v-bind:class="currentBdSt.r8.class"><img v-bind:src="currentBdSt.r8.img" alt=""></div>
    <div id="r9" v-bind:class="currentBdSt.r9.class"><img v-bind:src="currentBdSt.r9.img" alt=""></div>
    <div id="r10" v-bind:class="currentBdSt.r10.class"><img v-bind:src="currentBdSt.r10.img" alt=""></div>
    <div id="r11" v-bind:class="currentBdSt.r11.class"><img v-bind:src="currentBdSt.r11.img" alt=""></div>
    <div id="r12" v-bind:class="currentBdSt.r12.class"><img v-bind:src="currentBdSt.r12.img" alt=""></div>

    <div id="b1" v-bind:class="currentBdSt.b1.class"><img v-bind:src="currentBdSt.b1.img" alt=""></div>
    <div id="b2" v-bind:class="currentBdSt.b2.class"><img v-bind:src="currentBdSt.b2.img" alt=""></div>
    <div id="b3" v-bind:class="currentBdSt.b3.class"><img v-bind:src="currentBdSt.b3.img" alt=""></div>
    <div id="b4" v-bind:class="currentBdSt.b4.class"><img v-bind:src="currentBdSt.b4.img" alt=""></div>
    <div id="b5" v-bind:class="currentBdSt.b5.class"><img v-bind:src="currentBdSt.b5.img" alt=""></div>
    <div id="b6" v-bind:class="currentBdSt.b6.class"><img v-bind:src="currentBdSt.b6.img" alt=""></div>
    <div id="b7" v-bind:class="currentBdSt.b7.class"><img v-bind:src="currentBdSt.b7.img" alt=""></div>
    <div id="b8" v-bind:class="currentBdSt.b8.class"><img v-bind:src="currentBdSt.b8.img" alt=""></div>
    <div id="b9" v-bind:class="currentBdSt.b9.class"><img v-bind:src="currentBdSt.b9.img" alt=""></div>
    <div id="b10" v-bind:class="currentBdSt.b10.class"><img v-bind:src="currentBdSt.b10.img" alt=""></div>
    <div id="b11" v-bind:class="currentBdSt.b11.class"><img v-bind:src="currentBdSt.b11.img" alt=""></div>
    <div id="b12" v-bind:class="currentBdSt.b12.class"><img v-bind:src="currentBdSt.b12.img" alt=""></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
     
    }
  },
  computed: {
    ...mapGetters([
      'currentBdSt', 'allMvs', 'selected', 'spacesize'
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