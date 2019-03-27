<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row>
            <form @submit.prevent="onCreatePost">
            <v-flex xs6>
                <v-text-field name="post" label="Post Something" id="post" v-model="post" required></v-text-field>
                <v-btn class="primary" :loading="loading" type="submit">Post<span slot="loader"
                        class="custom-loader">
                        <v-icon light>cached</v-icon>
                    </span>
                </v-btn>
            </v-flex>
            </form>
            <v-layout column>
                    <v-layout>
                      <v-flex xs12 class="text-xs-center">
                        <v-progress-circular v-if="loading" indeterminate class="primary--text" :width="7" :size="70"></v-progress-circular>
                      </v-flex>
                    </v-layout>
                <v-flex xs6 v-for="post in posts" :key="post.id" class="mb-1">
                    <v-card dark color="secondary">
                        <v-card-text class="px-0">Post:{{post.post}}---Date:{{post.date}}</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                post: '',
                date: new Date().toISOString().substr(0, 10)
            }
        },
        created() {
            //load meetups from firebase
            this.$store.dispatch('loadPosts')
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            posts() {
                return this.$store.getters.loadedPosts
            }
        },
        methods: {
            onCreatePost() {
                const post = {
                  post: this.post,
                  date: this.date,
                }
                this.$store.dispatch('createPost', post)
            }
        }
    }
</script>

<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
