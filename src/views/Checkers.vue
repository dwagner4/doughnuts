<template>
  <div class="about">
    <v-text-field
                  v-model="boardstate"
                  label="board state"
                  @change="matchChange"
                >
    </v-text-field>
    <p>{{currentBoardState}}</p>
    <h1>This is a checkboard</h1>
    <checkerboard />
  </div>
</template>

<script>

import Checkerboard from '@/components/Checkerboard'

export default {
  components: {
      Checkerboard
  },
  data () {
    return {
      boardstate: "rrrrrrrrrrrreeeeeeeebbbbbbbbbbbb"
    }
  },
  computed: {
    currentBoardState() {
      return this.$store.getters.currentBoardState;
    },
  },
  methods: {
    matchChange () {
      this.$store.dispatch('doMove', this.boardstate);
    }
  }
  
}
</script>
