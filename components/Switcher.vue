<template>
    <div>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('ru')">Русский</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      changeLanguage(lang) {
        this.$router.push(this.switchLocalePath(lang));
      },
    },
  };
  </script>