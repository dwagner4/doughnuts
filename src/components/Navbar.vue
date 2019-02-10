<template>
    <nav>
        <v-toolbar app dark class="indigo" >
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>
                <span>Checkers for the masses, </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn>
                <span>Sign out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
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
                <v-list-tile> <Authentication /> </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>

    
    
</template>



<script>

import Authentication from "@/components/Authentication.vue";

export default {
    components: {
        Authentication
    },
    data () {
      return {
            drawer: false,
            links: [
                { icon: 'home', text: 'Home Page', route: '/' },
                { icon: 'date_range', text: 'Play Checkers', route: '/checkers' },
            ]
        }
    },
    computed: {
        username: function () {
            return this.$store.state.name;
        }
    }
}
</script>
