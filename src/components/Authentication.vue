<template>
  <div>

    <div v-if="userStatus" key="login">
      <div class="text-xs-center">
        <v-btn outline color="info" @click="doLogout">Sign out</v-btn>
      </div>
    </div>

    <div v-else key="logout">
      <v-btn outline color="white" @click="doLogin">Login</v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: "Authentication",
  created: function() {
    this.$store.dispatch('initauth');
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      return this.$store.getters.isSignedIn;
    }
  },
  methods: {
    doLogin() {
      this.$store.dispatch('googlelogin');
    },
    doLogout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped>
.authentication {
  display: inline-block;
}
.google-button {
  height: 40px;
  border-width: 0;
  background: white;
  color: #737373;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;
}
.google-button:focus,
.google-button:hover {
  box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
}
.google-button:active {
  background-color: #e5e5e5;
  box-shadow: none;
  transition-duration: 10ms;
}
.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}
.google-button__icon--plus {
  width: 27px;
}
.google-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}
* {
  text-transform: none !important;
}
</style>
