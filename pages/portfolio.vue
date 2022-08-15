import { ProjectComp } from '../.nuxt/components';
<template lang="">
  <div class="">
    <div class="fixed w-full pb-16 project-category pt-28 z-[1]">
      <h1 class="text-center text-xl5_d">PROJECTS</h1>
      <div class="flex flex-col items-center justify-center mt-4">
        <div class="block h-12 w-80 box"></div>
        <ul class="fixed flex text-center h-36 text-green w-96">
          <li class="item top-20 left-[-5%]">Apps</li>
          <li class="item top-28 left-[10%]">Landing Pages</li>
          <li class="item top-32 left-1/2 translate-x-[-40%]">All</li>
          <li class="item top-28 right-[10%]">Portfolios</li>
          <li class="item top-20 right-[-15%]">Challenges</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col overflow-y-auto py-96">
      <ProjectComp title="FinanceGod" src="../financegod.png"></ProjectComp>
      <ProjectComp title="MathGod" src="../mathgod.png"></ProjectComp>
      <ProjectComp title="CricaDev" src="../cricadev-project.png"></ProjectComp>
      <ProjectComp title="TEF" src="../tef.png"></ProjectComp>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev | Portfolio",
});
</script>
<style lang="css" scoped>
.box::before,
.box::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #5aaf98;
}
.box::before {
  bottom: -2px;
  left: -5px;
}
.box::after {
  bottom: -2px;
  right: -5px;
}
.box {
  border: solid 2px #00010d;
  border-color: #5aaf98 transparent transparent transparent;
  border-radius: 80%/80px 80px 0 0;
  transform: scaleY(-100%);
}
.item {
  position: absolute;
}
.project-category {
  background-image: linear-gradient(90deg, #f6f6f6 0%, #f6f6f6 100%);
}
.dark .project-category {
  background-image: linear-gradient(
    90deg,
    rgba(0, 1, 13, 1) 0%,
    rgba(0, 1, 13, 1) 100%
  );
}
</style>
