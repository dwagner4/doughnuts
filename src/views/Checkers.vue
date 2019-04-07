<template>
  <div class="about" >


    <v-dialog v-model="newmatchdialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">New Match</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Match</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-checkbox
                  v-model="isRemote"
                  :label="`Remote Match?`"
                ></v-checkbox>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-select
                  :items="players"
                  box
                  label="Your Color?"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Match Name"
                ></v-text-field>
              </v-flex>
              
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="newmatchdialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="newmatchdialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    
    <checkerboard v-on:game-move="gamehandler" />
  </div>
</template>

<script>

import Checkerboard from '@/components/Checkerboard'
import { mapGetters } from 'vuex'

export default {
  components: {
      Checkerboard
  },
  data () {
    return {
      newmatchdialog: false,
      players: [ 'red','blk']
    }
  },
  computed: {
    ...mapGetters([
      'isRemote'
    ])
  },
  methods: {
    gamehandler: function() {alert("yoho")}
  }
  
}
</script>
