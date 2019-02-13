<template>
  <div>
    <h1>Home Page</h1>
    <Authentication />
    <p>{{testdata}}</p>
  </div>
</template>

<script>
import Authentication from '@/components/Authentication'

  export default {
    components: {
      Authentication
    },
    computed: {
      testdata: function () {
        return this.$store.state.testdata;
        // return 'yoho Dean'
      }
    }
  }
</script>
