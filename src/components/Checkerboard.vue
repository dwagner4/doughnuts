<template>
  <div id="board">
    <div class="white row0 col0"><img :src="image" /></div>
    <div class="grey row0 col1"></div>
    <div class="white row0 col2"><img :src="image" /></div>
    <div class="grey row0 col3"></div>
    <div class="white row0 col4"><img :src="spaceImg(2)" /></div>
    <div class="grey row0 col5"></div>
    <div class="white row0 col6"><img :src="spaceImg(1)" /></div>
    <div class="grey row0 col7"></div>
    <div class="grey row1 col0"></div>
    <div class="white row1 col1"><img :src="image" /></div>
    <div class="grey row1 col2"></div>
    <div class="white row1 col3"><img :src="image" /></div>
    <div class="grey row1 col4"></div>
    <div class="white row1 col5"><img :src="image" /></div>
    <div class="grey row1 col6"></div>
    <div class="white row1 col7"><img :src="image" /></div>
    <div class="white row2 col0"><img :src="image" /></div>
    <div class="grey row2 col1"></div>
    <div class="white row2 col2"><img :src="image" /></div>
    <div class="grey row2 col3"></div>
    <div class="white row2 col4"><img :src="image" /></div>
    <div class="grey row2 col5"></div>
    <div class="white row2 col6"><img :src="image" /></div>
    <div class="grey row2 col7"></div>
    <div class="grey row3 col0"></div>
    <div class="white row3 col1"><img :src="image" /></div>
    <div class="grey row3 col2"></div>
    <div class="white row3 col3"><img :src="image" /></div>
    <div class="grey row3 col4"></div>
    <div class="white row3 col5"><img :src="image" /></div>
    <div class="grey row3 col6"></div>
    <div class="white row3 col7"><img :src="image" /></div>
    <div class="white row4 col0"><img :src="image" /></div>
    <div class="grey row4 col1"></div>
    <div class="white row4 col2"><img :src="image" /></div>
    <div class="grey row4 col3"></div>
    <div class="white row4 col4"><img :src="image" /></div>
    <div class="grey row4 col5"></div>
    <div class="white row4 col6"><img :src="image" /></div>
    <div class="grey row4 col7"></div>
    <div class="grey row5 col0"></div>
    <div class="white row5 col1"><img :src="image" /></div>
    <div class="grey row5 col2"></div>
    <div class="white row5 col3"><img :src="image" /></div>
    <div class="grey row5 col4"></div>
    <div class="white row5 col5"><img :src="image" /></div>
    <div class="grey row5 col6"></div>
    <div class="white row5 col7"><img :src="image" /></div>
    <div class="white row6 col0"><img :src="image" /></div>
    <div class="grey row6 col1"></div>
    <div class="white row6 col2"><img :src="image" /></div>
    <div class="grey row6 col3"></div>
    <div class="white row6 col4"><img :src="image" /></div>
    <div class="grey row6 col5"></div>
    <div class="white row6 col6"><img :src="image" /></div>
    <div class="grey row6 col7"></div>
    <div class="grey row7 col0"></div>
    <div class="white row7 col1"><img :src="image" /></div>
    <div class="grey row7 col2"></div>
    <div class="white row7 col3"><img :src="image" /></div>
    <div class="grey row7 col4"></div>
    <div class="white row7 col5"><img :src="image" /></div>
    <div class="grey row7 col6"></div>
    <div class="white row7 col7"><img :src="image" /></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      image: './assets/blk.png'
    }
  },
  computed: {
    
  },
  methods: {
    spaceImg(spaceInt) {
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