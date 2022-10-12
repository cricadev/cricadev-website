import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@kevinmarrec/nuxt-pwa",
    "@nuxt/content",
  ],
  generate: {
    fallback: "error.html",
  },
  content: {
    highlight: {
      // OR
      theme: {
        // Default theme (same as single string)
        default: "one-dark-pro",
        // Theme used if `html.dark`
        dark: "dracula",
        // Theme used if `html.sepia`
      },
    },
  },
  pwa: {
    manifest: {
      name: "CricaDev",
      short_name: "CricaDev",
      theme_color: "#f6f6f6",
      lang: "en",
    },
    meta: {
      name: "CricaDev",
      theme_color: "#dddddd",
    },
  },
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
