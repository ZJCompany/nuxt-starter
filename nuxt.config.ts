import { defineNuxtConfig } from "nuxt3";
import { resolve } from 'pathe'

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
    plugins: ["~/plugins/vee-validate"],
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