import { ToggleTheme } from './.nuxt/components';
<template lang="">
  <div>
    <NuxtLayout>
      <HeaderComp></HeaderComp>
      <NuxtPage />
      <FooterComp></FooterComp>
      <ToggleTheme></ToggleTheme>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "Nuxt.js project" },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/images/cricadev.png" }],
});
</script>
<style></style>
