// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-11',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      host: true,
      port: 3000
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})