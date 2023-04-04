<template>
    <div>
      <v-switch v-model="isDarkTheme" label="Dark Theme"></v-switch>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      isDarkTheme: {
        get() {
          return this.$vuetify.theme.dark;
        },
        set(value) {
          this.$vuetify.theme.dark = value;
          document.documentElement.classList.toggle('dark-theme', value);
        },
      },
    },
  };
  </script>  
  
  
  
  
  