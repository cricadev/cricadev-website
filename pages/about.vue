<template lang="">
  <div class="">
    <div
      class="pt-20 pb-8 ml-6 font-black text-left text-xl3_m xss-m:text-xl4_m about-container"
    >
      <span class="letter c1">C </span><span class="about-link">urious</span>
      <span class="letter r">R </span
      ><span class="about-link">isk-taking</span>
      <span class="letter i">I </span><span class="about-link">nnovative</span>
      <span class="letter c2">C </span><span class="about-link">reative</span>
      <span class="letter a">A </span><span class="about-link">mbitious</span>
      <span class="letter d">D </span><span class="about-link">etermined</span>
      <span class="letter e">E </span
      ><span class="about-link">nthusistic</span>
      <span class="letter v">V </span><span class="about-link">aluable</span>
    </div>

    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev | About me",
});
</script>
<style lang="scss" scoped>
.about-container {
  display: grid;
  grid-template-rows: repeat(8, minmax(10px, 1fr));
  grid-template-columns: 15% 85%;
  place-content: start;
  place-items: center;
  height: 100vh;
  width: 100%;
  @media (min-width: 386px) {
    grid-template-columns: 20% 80%;
  }
  .letter {
    cursor: pointer;
    grid-column: 1/2;
    place-self: center;
  }

  .about-link {
    padding-left: 20px;
    grid-column: 2/3;
    place-self: center start;
  }
}
</style>
