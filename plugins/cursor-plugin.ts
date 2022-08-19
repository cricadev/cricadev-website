import { defineNuxtPlugin } from "#app";
// Plugin
import CursorFx from "@luxdamore/vue-cursor-fx";
import "@luxdamore/vue-cursor-fx/dist/CursorFx.css";

const cursorfx = CursorFx;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(cursorfx);
});
