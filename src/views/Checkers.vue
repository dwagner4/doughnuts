<template>
  <div class="about" >
    <h1>This is a checkboard</h1>
    <checkerboard v-on:game-move="gamehandler" />
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
      
    }
  },
  computed: {
    
  },
  methods: {
    gamehandler: function() {alert("yoho")}
  }
  
}
</script>
