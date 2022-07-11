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
      title: "Ronan by Clinet | Coming Soony",
      htmlAttrs: {
        lang: "fr,en",
      },
      meta: [
        {
          name: "title",
          content: "Ronan by Clinet | Pomerol",
        },
        {
          name: "description",
          lang: "fr",
          content:
            "Ronan by Clinet est un Bordeaux séduisant et précis, produit par le Château Clinet, Grand Cru historique, main dans la main avec des viticulteurs partenaires consciencieux.",
        },
        {
          name: "description",
          lang: "en",
          content:
            "Ronan by Clinet is a new Bordeaux wine that balanced seduction with precision, produce by Château Clinet, an historic Grand Cru, in partnership with conscientious growers.",
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
          content: "Ronan by Clinet | Pomerol",
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
