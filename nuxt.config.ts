import { defineNuxtConfig } from "nuxt3";
import { resolve } from 'pathe'
import messages from './locales'

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  // plugins: ["~/plugins/vee-validate"],
  buildModules: ['@intlify/nuxt3', '@vueuse/nuxt'],
  intlify: {
    vueI18n: {
      // You can setting same `createI18n` options here !
      locale: 'en',
      messages: messages
    }
  },
  alias: {
    'images': resolve(__dirname, './assets/images')
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});