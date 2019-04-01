<template>
  <div class="about">
    <v-text-field
                  v-model="currentBdSt"
                  label="board state"
                  @change="matchChange"
                >
    </v-text-field>
    <p>{{currentcurrentBdSt}}</p>
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
      currentBdSt: "rrrrrrrrrrrreeeeeeeebbbbbbbbbbbb"
    }
  },
  computed: {
    currentcurrentBdSt() {
      return this.$store.getters.currentcurrentBdSt;
    },
  },
  methods: {
    matchChange () {
      this.$store.dispatch('doMove', this.currentBdSt);
    }
  }
  
}
</script>
