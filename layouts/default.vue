<template>
  <!-- App.vue -->

  <v-app>
    <!-- <v-navigation-drawer app>
      
    </v-navigation-drawer> -->
    <Header />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <Layout />
      <!-- <BodyStart /> -->
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from "~/components/Header.vue";
import BodyStart from "~/components/BodyStart.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    BodyStart,
    Footer,
  },
};
</script>
