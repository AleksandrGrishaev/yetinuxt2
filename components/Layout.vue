<template>
  <div>
    <v-container>
      <v-row no-gutters class="purple darken-2">
        <v-col cols="12" xs="12" md="7" lg="8">
          <v-sheet class="pa-2 ma-2"> Level 1: .v-col-8 </v-sheet>

          <v-row no-gutters class="green darken-2">
            <v-col cols="6">
              <v-sheet class="pa-2 ma-2"> Level 2: .v-col-8 </v-sheet>
            </v-col>

            <v-col cols="6">
              <v-sheet class="pa-2 ma-2"> Level 2: .v-col-4 </v-sheet>
              <v-row no-gutters class="green darken-2">
                <v-col cols="6">
                  <v-card flat color="yellow">
                    <v-card-title> Title </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" xs="12" md="5" lg="4">
          <v-sheet class="pa-2 ma-2"> Level 1: .v-col-4 </v-sheet>
        </v-col>
      </v-row>

      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <!-- content for first column -->
        <v-sheet color="green">sdfdsf</v-sheet>
      </v-flex>
      <v-flex xs12 md6 order-md-3>
        <!-- content for second column -->
        <v-sheet color="red">dsfsdfasd</v-sheet>
      </v-flex>
      <v-flex xs12 md3 order-md-2>
        <!-- content for third column -->
        <v-sheet color="yellow">sdafsadf</v-sheet>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
