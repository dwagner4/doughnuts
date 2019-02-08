<template>
  <div id="board">
    <div class="white row0 col0"><img id="s1" :src="imagered" ></div>
    <div class="grey row0 col1"></div>
    <div class="white row0 col2"><img class="imgsz" id="s1" src="../assets/red.png"></div>
    <div class="grey row0 col3"></div>
    <div class="white row0 col4"><img class="imgsz" id="s2" src=""></div>
    <div class="grey row0 col5"></div>
    <div class="white row0 col6"><img id="s3" src=""></div>
    <div class="grey row0 col7"></div>
    <div class="grey row1 col0"></div>
    <div class="white row1 col1"><v-img id="s4" src="../assets/red.png"></v-img></div>
    <div class="grey row1 col2"></div>
    <div class="white row1 col3"><img id="s5" src=""></div>
    <div class="grey row1 col4"></div>
    <div class="white row1 col5"><img id="s6" src=""></div>
    <div class="grey row1 col6"></div>
    <div class="white row1 col7"><img id="s7" src=""></div>
    <div class="white row2 col0"><img id="s8" src=""></div>
    <div class="grey row2 col1"></div>
    <div class="white row2 col2"><img id="s9" src=""></div>
    <div class="grey row2 col3"></div>
    <div class="white row2 col4"><img id="s10" src=""></div>
    <div class="grey row2 col5"></div>
    <div class="white row2 col6"><img id="s11" src=""></div>
    <div class="grey row2 col7"></div>
    <div class="grey row3 col0"></div>
    <div class="white row3 col1"><img id="s12" src=""></div>
    <div class="grey row3 col2"></div>
    <div class="white row3 col3"><img id="s13" src=""></div>
    <div class="grey row3 col4"></div>
    <div class="white row3 col5"><img id="s14" src=""></div>
    <div class="grey row3 col6"></div>
    <div class="white row3 col7"><img id="s15" src=""></div>
    <div class="white row4 col0"><img id="s16" src=""></div>
    <div class="grey row4 col1"></div>
    <div class="white row4 col2"><img id="s17" src=""></div>
    <div class="grey row4 col3"></div>
    <div class="white row4 col4"><img id="s18" src=""></div>
    <div class="grey row4 col5"></div>
    <div class="white row4 col6"><img id="s19" src=""></div>
    <div class="grey row4 col7"></div>
    <div class="grey row5 col0"></div>
    <div class="white row5 col1"><img id="s20" src=""></div>
    <div class="grey row5 col2"></div>
    <div class="white row5 col3"><img id="s21" src=""></div>
    <div class="grey row5 col4"></div>
    <div class="white row5 col5"><img id="s22" src=""></div>
    <div class="grey row5 col6"></div>
    <div class="white row5 col7"><img id="s23" src=""></div>
    <div class="white row6 col0"><img id="s24" src=""></div>
    <div class="grey row6 col1"></div>
    <div class="white row6 col2"><img id="s25" src=""></div>
    <div class="grey row6 col3"></div>
    <div class="white row6 col4"><img id="s26" src=""></div>
    <div class="grey row6 col5"></div>
    <div class="white row6 col6"><img id="s27" src=""></div>
    <div class="grey row6 col7"></div>
    <div class="grey row7 col0"></div>
    <div class="white row7 col1"><img id="s28" src=""></div>
    <div class="grey row7 col2"></div>
    <div class="white row7 col3"><img id="s29" src=""></div>
    <div class="grey row7 col4"></div>
    <div class="white row7 col5"><img id="s30" src=""></div>
    <div class="grey row7 col6"></div>
    <div class="white row7 col7"><img id="s31" src=""></div>
  </div>
</template>

<script>

import imgred from '@/assets/red.png'

export default {
  data () {
    return {
      match: 'rrrrrrrrrrrreeeeeeeebbbbbbbbbbbb',
      imagered: imgred
    }
  },
  computed: {
    username: function () {
      return this.$store.state.name;
    }
  },
  methods: {
    spcImg: spcCode => {
      switch ( spcCode ) {
        case 'r':
          return "@/assets/red.png"
        case 'b': 
          return 'src="@/assets/blk.png"' 
        default:
          return ""
      }
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
  }
  .grey {
    background-color: #555555;
  }
  
  .imgsz {
    max-width: 61px;
    max-height: 61px;
  }
</style>