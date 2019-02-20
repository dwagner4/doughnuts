<template>
  <div>
    <h1>Lobby {{displayName}}</h1>
  </div>
</template>

<script>

  export default {
    components: {

    },
    computed: {
      displayname: function () {
            return this.$store.getters.displayName
        }
      // testdata: function () {
      //   return this.$store.state.testdata;
      //   // return 'yoho Dean'
      // }
    }
  }
</script>
