<template lang="">
  <div class="text-center">
    <div v-if="$colorMode.preference === 'dark'" class="dark-home-bg"></div>
    <div v-if="$colorMode.preference === 'light'" class="light-home-bg"></div>
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style lang="css">
.light-home-bg {
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      #f6f6f6 0%,
      #f6f6f6 10%,
      transparent 50%
    ),
    url("@/images/lightMode-cricadev.png");
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(5%);
}
.dark-home-bg {
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      #00010d 0%,
      #00010d 10%,
      transparent 50%
    ),
    url("@/images/darkMode-cricadev.png");
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(5%);
}
</style>
