<template>
  <div>
    <h1>Lobby</h1>
    <v-spacer></v-spacer>
    <h2>displayName: {{displayname}}</h2>
    <h2>profile: {{profile}}</h2>
    <Chat/>
  </div>
</template>

<script>
import Chat from '@/components/Chat'

  export default {
    components: {
      Chat
    },
    data () {
      return {
        dddd: 'yoho'
      }
    },
    computed: {
      displayname: function () {
          return this.$store.getters.displayName
      },
      profile: function () {
        return this.$store.getters.userprofile
      }
    }
  }
</script>
