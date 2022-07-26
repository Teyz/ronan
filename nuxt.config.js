import { defineNuxtConfig } from "nuxt";
const path = require("path");

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  plugins: ["vue3-slide-up-down"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/style/_global.scss";',
        },
      },
    },
  },
  modules: ["@vueuse/nuxt", "@intlify/nuxt3"],
  buildModules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `usePinia()`
          'defineStore',
          // automatically imports `usePinia()` as `usePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  intlify: {
    localeDir: "lang",
    vueI18n: {
      locale: "fr",
      availableLocales: ["en", "fr"],
    },
  },
  css: ["@/assets/style/reset.scss"],
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(__dirname, "src") + "/$1",
      },
    ],
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ["script", "style", "font"].includes(type);
      },
    },
  },
  app: {
    head: {
      title: "Ronan by Clinet | Vins AOC de Bordeaux",
      htmlAttrs: {
        lang: "fr,en",
      },
      meta: [
        {
          name: "title",
          lang: "fr",
          content: "Ronan by Clinet | Vins AOC de Bordeaux",
        },
        {
          name: "title",
          lang: 'en',
          content: "Ronan by Clinet | Bordeaux AOC Wines",
        },
        {
          name: "description",
          lang: "fr",
          content:
            "Ronan by Clinet est un vin AOC de Bordeaux séduisant et précis, produit par l’équipe du Château Clinet, Grand Cru historique, main dans la main avec des vignerons partenaires consciencieux.",
        },
        {
          name: "description",
          lang: "en",
          content:
            "Ronan by Clinet is a Bordeaux AOC wine that balances seduction with precision, produced by the team of Château Clinet, an historic Grand Cru, in partnership with conscientious growers.",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
        {
          property: "og:image",
          content: "http://localhost:3000/static/ronan.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ronan-by-clinet.netlify.app/",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
        {
          hid: "t-type",
          name: "twitter:url",
          content: "https://ronan-by-clinet.netlify.app/",
        },
        {
          hid: "t-type",
          name: "twitter:title",
          content: "Ronan by Clinet | Bordeaux AOC Wines",
        },
        {
          hid: "t-type",
          name: "twitter:description",
          content:
            "Ronan by Clinet is a new Bordeaux wine that balanced seduction with precision, produce by Château Clinet, an historic Grand Cru, in partnership with conscientious growers.",
        },
        {
          hid: "t-type",
          name: "twitter:image",
          content: "http://localhost:3000/static/ronan.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
      ],
    },
  },
});
