<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-toolbar-title>
        <div>
          <v-btn class="d-md-none" icon large @click.stop="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <span ml-2>{{ $t("name1") }}</span>
          <span class="font-weight-light">{{ $t("name2") }}</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
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
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  computed: {
    isDarkTheme() {
      return this.$vuetify.theme.dark;
    },
    currentLanguage() {
      return this.$i18n.locale;
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
