<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row>
            <v-flex xs6>
                <v-text-field name="post" label="Post" id="post" v-model="post" required></v-text-field>
                <v-btn class="primary" :disabled="loading" :loading="loading" type="submit">Post<span slot="loader"
                        class="custom-loader">
                        <v-icon light>cached</v-icon>
                    </span>
                </v-btn>
            </v-flex>
            <v-layout column>
                <v-flex xs6 v-for="post in posts" :key="post.id" class="mb-2">
                    <v-card dark color="secondary">
                        <v-card-text class="px-0">{{post.name}}</v-card-text>
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
                user: null,
                post: '',
                date: new Date().toISOString().substr(0, 10)
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            user(state) {
                return this.$store.myauth.getters.user
            },
            posts() {
                return this.$store.getters.loadedPosts
            }
        },
        methods: {
            onCreatePost() {
                if(this.user == null) {
                  return
                }
                const post = {
                  post: this.post,
                  date: this.date,
                  creatorId: this.user.uid
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
