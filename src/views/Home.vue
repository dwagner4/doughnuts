<template>
  <div>
    <h1>Home Page</h1>
    <p>{{testdata}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      testdata: function () {
        return this.$store.state.testdata;
        // return 'yoho Dean'
      }
    }
  }
</script>
