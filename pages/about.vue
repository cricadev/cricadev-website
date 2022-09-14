<template lang="">
  <div class="pt-16">
    <p class="font-black text-xl4_m">
      <span>C</span>
      <span>R</span>
      <span>I</span>
      <span>C</span>
      <span>A</span>
      <span>D</span>
      <span>E</span>
      <span>V</span>
    </p>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev | About me",
});
</script>
<style lang="scss" scoped>
p {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  span {
    width: min-content;
    height: min-content;
  }
}
</style>
