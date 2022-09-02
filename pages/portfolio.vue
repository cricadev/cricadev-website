import { ProjectComp } from '../.nuxt/components';
<template lang="">
  <div class="pt-16 sm-m:pt-32">
    <h2 class="text-center uppercase tracking- text-xl_m">Projects</h2>
    <div
      class="relative grid grid-cols-5 grid-rows-3 mt-0 text-center project-carousel"
    >
      <img
        src="../images/border-mobile.png"
        alt=""
        class="w-full image-border"
      />

      <span class="link-project app" @click="handleClick">Apps</span
      ><span class="link-project landing" @click="handleClick"
        >Landing Pages</span
      ><span class="link-project all" @click="handleClick">All</span
      ><span class="link-project portfolio" @click="handleClick"
        >Portfolios</span
      ><span class="link-project challenges" @click="handleClick"
        >Challenges</span
      >
    </div>
    <div class="flex flex-col items-center justify-center mt-8">
      <ProjectComp title="FinanceGod" img="../financegod.png"></ProjectComp>
      <ProjectComp title="MathGod" img="../mathgod.png"></ProjectComp>
      <ProjectComp title="CRICADEV" img="../cricadev-project.png"></ProjectComp>
      <ProjectComp title="TEF" img="../tef.png"></ProjectComp>
      <ProjectComp title="TEF" img="../tef.png"></ProjectComp>
      <ProjectComp title="TEF" img="../tef.png"></ProjectComp>
      <ProjectComp title="TEF" img="../tef.png"></ProjectComp>
      <ProjectComp title="TEF" img="../tef.png"></ProjectComp>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev | Portfolio",
});
function handleClick(e) {
  const link = document.querySelectorAll(".link-project");
  const target = e.currentTarget;
  link.forEach((item) => {
    if (item == target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function handleClickBack(e) {
  const link = document.querySelector(".link-project");
  hoverToggle.classList.remove("active");
  console.log(hoverToggle);
}
</script>
<style lang="scss">
.project-carousel {
  place-items: center;
  .app {
    place-self: start center;
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .landing {
    place-self: start center;
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .all {
    place-self: end center;
    grid-column: 2/5;
    grid-row: 3/4;
    margin-top: 5px;
  }
  .challenges {
    place-self: start center;
    grid-column: 4/6;
    grid-row: 2/3;
  }
  .portfolio {
    place-self: start center;
    grid-column: 4/5;
    grid-row: 3/4;
  }
}
.image-border {
  grid-row: 1/3;
  grid-column: 2/5;
}
.link-project {
  font-size: 11px;
  color: #1f6853;
  transition: transform 0.4s ease-in-out;

  &:hover {
    color: #5aaf98;
    text-shadow: 0 0 5px #5aaf98, 0 0 10px #5aaf98;
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
  }
  &.active {
    color: #5aaf98;
    text-shadow: 0 0 5px #5aaf98, 0 0 10px #5aaf98;
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
  }
}
</style>
