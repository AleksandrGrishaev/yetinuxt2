<template>
  <v-footer flat>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="12"
        lg="6"
        v-bind:class="$vuetify.breakpoint.mdAndDown ? 'text-center' : ''"
      >
        <span>{{ $t("name1") }}</span>
        <span class="font-weight-light">{{ $t("name2") }}</span>
      </v-col>
      <v-col
        cols="12"
        md="12"
        lg="6"
        v-bind:class="
          $vuetify.breakpoint.mdAndDown ? 'text-center pt-1' : 'd-flex'
        "
        class="flex-row-reverse font-weight-light"
      >
        <v-btn icon><v-icon>mdi-discord</v-icon></v-btn>
        <v-btn icon><v-icon>mdi-instagram</v-icon></v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
