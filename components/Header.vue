<template>
  <v-app-bar
    v-show="!isMobile"
    app
    :color="isMobile ? 'primary' : 'green'"
    dark
  >
    <v-toolbar-title>
      <v-btn icon large>
        <img src="~/static/vuetify-logo.svg" alt="Logo" height="32" />
      </v-btn>
      <span class="ml-2">{{ $t("name") }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div>
      <v-btn text>{{ $t("headerButton1") }}</v-btn>
      <v-btn text>{{ $t("headerButton2") }}</v-btn>
      <v-btn text>{{ $t("headerButton3") }}</v-btn>
    </div>
    <v-spacer></v-spacer>

    <v-menu open-on-hover bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          {{ $i18n.localeProperties.name }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          @click="switchLocale(locale.code)"
        >
          <v-list-item-title>{{ locale.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon @click="toggleTheme">
      <v-icon>{{
        isDarkTheme ? "mdi-brightness-7" : "mdi-brightness-4"
      }}</v-icon>
    </v-btn>

    <v-btn icon href="#">
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <v-btn icon href="#">
      <v-icon>mdi-discord</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark;
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    isMobile() {
      return (
        this.$vuetify.breakpoint.width < this.$vuetify.breakpoint.thresholds.sm
      );
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.isDarkTheme;
    },
    switchLocale(locale) {
      this.$i18n.setLocale(locale);
    },
  },
};
</script>

<style scoped>
.v-list-item__title {
  cursor: pointer;
}
</style>
