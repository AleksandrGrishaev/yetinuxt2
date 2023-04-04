<template>
  <div>
    <v-app>
  <Switcher />
  <ToogleTheme />
      <p>{{ $t('welcome') }}</p>
  <Nuxt />
  <Footer />
    </v-app>
  </div>

</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
