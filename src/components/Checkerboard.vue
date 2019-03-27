<template>
  <div id="board">
    <div class="white row0 col0"><img :src="img0" /></div>
    <div class="grey row0 col1"></div>
    <div class="white row0 col2"><img :src="img2" /></div>
    <div class="grey row0 col3"></div>
    <div class="white row0 col4"><img :src="img3" /></div>
    <div class="grey row0 col5"></div>
    <div class="white row0 col6"><img :src="img4" /></div>
    <div class="grey row0 col7"></div>
    <div class="grey row1 col0"></div>
    <div class="white row1 col1"><img :src="img5" /></div>
    <div class="grey row1 col2"></div>
    <div class="white row1 col3"><img :src="img6" /></div>
    <div class="grey row1 col4"></div>
    <div class="white row1 col5"><img :src="img7" /></div>
    <div class="grey row1 col6"></div>
    <div class="white row1 col7"><img :src="img8" /></div>
    <div class="white row2 col0"><img :src="img9" /></div>
    <div class="grey row2 col1"></div>
    <div class="white row2 col2"><img :src="img10" /></div>
    <div class="grey row2 col3"></div>
    <div class="white row2 col4"><img :src="img11" /></div>
    <div class="grey row2 col5"></div>
    <div class="white row2 col6"><img :src="img12" /></div>
    <div class="grey row2 col7"></div>
    <div class="grey row3 col0"></div>
    <div class="white row3 col1"><img :src="img13" /></div>
    <div class="grey row3 col2"></div>
    <div class="white row3 col3"><img :src="img14" /></div>
    <div class="grey row3 col4"></div>
    <div class="white row3 col5"><img :src="img15" /></div>
    <div class="grey row3 col6"></div>
    <div class="white row3 col7"><img :src="img16" /></div>
    <div class="white row4 col0"><img :src="img17" /></div>
    <div class="grey row4 col1"></div>
    <div class="white row4 col2"><img :src="img18" /></div>
    <div class="grey row4 col3"></div>
    <div class="white row4 col4"><img :src="img19" /></div>
    <div class="grey row4 col5"></div>
    <div class="white row4 col6"><img :src="img20" /></div>
    <div class="grey row4 col7"></div>
    <div class="grey row5 col0"></div>
    <div class="white row5 col1"><img :src="img20" /></div>
    <div class="grey row5 col2"></div>
    <div class="white row5 col3"><img :src="img21" /></div>
    <div class="grey row5 col4"></div>
    <div class="white row5 col5"><img :src="img22" /></div>
    <div class="grey row5 col6"></div>
    <div class="white row5 col7"><img :src="img23" /></div>
    <div class="white row6 col0"><img :src="img24" /></div>
    <div class="grey row6 col1"></div>
    <div class="white row6 col2"><img :src="img25" /></div>
    <div class="grey row6 col3"></div>
    <div class="white row6 col4"><img :src="img26" /></div>
    <div class="grey row6 col5"></div>
    <div class="white row6 col6"><img :src="img27" /></div>
    <div class="grey row6 col7"></div>
    <div class="grey row7 col0"></div>
    <div class="white row7 col1"><img :src="img28" /></div>
    <div class="grey row7 col2"></div>
    <div class="white row7 col3"><img :src="img29" /></div>
    <div class="grey row7 col4"></div>
    <div class="white row7 col5"><img :src="img30" /></div>
    <div class="grey row7 col6"></div>
    <div class="white row7 col7"><img :src="img31" /></div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      img0: '', img1: '', img2: '', img3: '', img4: '', img5: '', img6: '', img7: '', 
      img8: '', img9: '', img10: '', img11: '', img12: '', img13: '', img14: '', img15: '', 
      img16: '', img17: '', img18: '', img19: '', img20: '', img21: '', img22: '', img23: '', 
      img24: '', img25: '', img26: '', img27: '', img28: '', img29: '', img30: '', img31: './assets/blk.png', 
    }
  },
  computed: {
    ...mapGetters([
      'boardState', 'allMvs', 'selected', 'spacesize'
    ])
  },
  watch: {
    boardState: function (newBd, oldBd) {
      for ( let cc = 0; cc < 32; cc++ ) {
        if (oldBd && newBd && newBd[cc] !== oldBd[cc]) {
          let datalabel = 'img' + cc
          if (newBd[cc] === 'r') {this[datalabel] = './assets/red.png'}
          if (newBd[cc] === 'b') {this[datalabel] = './assets/blk.png'}
        }
      }
    }
  },
  methods: {
    spaceImg(spaceInt) {
      let spaceState = 3
      if ( spaceInt == 2 ) {
        return './assets/blk.png'
      } else {
        return './assets/red.png'
      }
    }
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
  
  .imgsz {
    max-width: 61px;
    max-height: 61px;
  }
</style>