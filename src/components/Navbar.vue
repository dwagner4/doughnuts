<template>
    <nav>
        <v-toolbar app dark class="indigo" >
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <span>Doughnuts, {{displayname}}</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <authentication />
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="indigo">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>  
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>

</template>



<script>

import Authentication from '@/components/Authentication'

export default {
    components: {
        Authentication
    },
    data () {
      return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home Page', route: '/' },
                { icon: 'supervised_user_circle', text: 'Lobby', route: '/lobby' },
                { icon: 'date_range', text: 'Play Checkers', route: '/checkers' },
            ]
        }
    },
    computed: {
        username: function () {
            console.log("yoho",this.$store.state.cker.match)
            return this.$store.state.cker.match;
        },
        displayname: function () {
            return this.$store.getters.displayName
        }
    }
}
</script>
