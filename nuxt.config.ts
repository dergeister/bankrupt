// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    apiKey: '',
    apiUrl: ''
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
    // '@storybook-vue/nuxt-storybook',
  ],
  i18n: {
    vueI18n: './config/i18n.config.ts',
    strategy: 'prefix',
    locales: ['pt', 'en'],
    defaultLocale: 'pt'
  }
  // storybook: {
  //   url: 'http://localhost:6006',
  //   storybookRoute: '/__storybook__',
  //   port: 6006
  // }
})
