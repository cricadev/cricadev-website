// Plugin
import { defineNuxtPlugin } from "#app";
import vfmPlugin from "vue-final-modal";

const vuefinalmodal = vfmPlugin;

export default defineNuxtPlugin((nuxtApp) => {
  // define plugin
  nuxtApp.vueApp.use(vuefinalmodal);
});
