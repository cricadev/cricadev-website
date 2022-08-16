import { CursorFx } from '@luxdamore/vue-cursor-fx';

<template lang="">
  <div>
    <NuxtLayout>
      <HeaderComp></HeaderComp>
      <NuxtPage />
      <FooterComp></FooterComp>
      <ToggleTheme></ToggleTheme>
      <CursorFx></CursorFx>
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "Hey, I'm Cristian Casallas also known as CricaDev, A FullStack Web Developer from Colombia with a variety of qualifications and experience in the industry. Curious Risk-taking Innovative Creative Ambitious Determined Enthusiastic Valuable.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "./public/cricadev.png" }],
});
</script>
<style></style>
