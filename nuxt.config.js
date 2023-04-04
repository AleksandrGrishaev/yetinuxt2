import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - yetinuxt2',
    title: 'yetinuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
  ],
 
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' },
      { code: 'ru', iso: 'ru', file: 'ru.js', name: 'Русский' },
      // ...more locales
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    vuetify: {
      customVariables: ['~/assets/variables.scss'],
      theme: {
        options: {
          customProperties: true,
        },
        dark: true,
        themes: {
          light: {
            primary: 'var(--color-primary)',
            accent: 'var(--color-accent)',
            secondary: 'var(--color-secondary)',
            info: 'var(--color-info)',
            warning: 'var(--color-warning)',
            error: 'var(--color-error)',
            success: 'var(--color-success)',
            text: 'var(--color-text)',
            background: 'var(--color-background)',
          },
          dark: {
            primary: 'var(--color-primary)',
            accent: 'var(--color-accent)',
            secondary: 'var(--color-secondary)',
            info: 'var(--color-info)',
            warning: 'var(--color-warning)',
            error: 'var(--color-error)',
            success: 'var(--color-success)',
            text: 'var(--color-text)',
            background: 'var(--color-background)',
          },
        },
      },
    },
      }
    }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  
  

 