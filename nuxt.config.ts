import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    cssPath: "@/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    viewer: true,
  },
  colorMode: {
    classSuffix: "",
    preference: "system", // default value of $colorMode.preference
    fallback: "light",
  },
});
