import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    title: "CricaDev",
    link: [
      { rel: "icon", type: "image/png", href: "./public/images/cricadev.png" },
    ],
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    cssPath: "@/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    viewer: true,
    injectPosition: 0,
  },
  colorMode: {
    classSuffix: "",
  },
});
