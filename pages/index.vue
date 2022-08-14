<template lang="">
  <div class="text-center">
    <div v-if="$colorMode.value === 'dark'" class="dark-home-bg home-bg"></div>
    <div
      v-if="$colorMode.value === 'light'"
      class="light-home-bg home-bg"
    ></div>
    <div class="pattern"></div>
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style lang="css">
.home-bg {
  width: 50%;
  margin: 0 auto;
  height: 100vh;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  transform: translateX(5%);
}
.light-home-bg {
  background-image: linear-gradient(
      90deg,
      #f6f6f6 0%,
      #f6f6f6 10%,
      transparent 50%
    ),
    url("@/images/lightMode-cricadev.png");
}
.dark-home-bg {
  background-image: linear-gradient(
      90deg,
      #00010d 0%,
      #00010d 10%,
      transparent 50%
    ),
    url("@/images/darkMode-cricadev.png");
}
</style>
