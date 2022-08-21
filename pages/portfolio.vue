import { ProjectComp, ModalComp } from '../.nuxt/components';
<template lang="">
  <div class="">
    <div class="fixed w-full pb-16 project-category pt-36 z-[1]">
      <h1 class="text-center text-xl5_d">PROJECTS</h1>
      <div class="flex flex-col items-center justify-center">
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
    <div class="flex flex-col overflow-y-auto py-128">
      <ProjectComp
        title="FinanceGod"
        src="../financegod.png"
        content="This application will be your financial friend; you will be able to add all of your cards, create various monthly budgets, control who you send money to and from which card..."
      ></ProjectComp>
      <ProjectComp
        title="MathGod"
        src="../mathgod.png"
        content=" With capabilities like Text-To-Speech, MathGod is a mathematical helper created to be usable by everyone. It can answer just about any problem, from changing a..."
      ></ProjectComp>
      <ProjectComp
        title="CricaDev"
        src="../cricadev-project.png"
        content="A unique website created for web developer Cristian Casallas, which is me, CricaDev contains intriguing elements like a blog and is both completely interactive and accessible. "
      ></ProjectComp>
      <ProjectComp
        title="TEF"
        src="../tef.png"
        content="A distinctive website that was entirely made for designer Stefanny Ascencio. TefDsgn is a fully interactive, accessible website with intriguing aspects and a distinctive style."
      ></ProjectComp>
    </div>
    <div
      class="fixed bottom-0 w-full h-20 bg-white z-[1] dark:bg-black footer-items"
    ></div>
    >
    <ModalComp></ModalComp>
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
  filter: drop-shadow(0px 30px 10px rgba(255, 255, 255, 0.5));
}
.dark .project-category {
  background-image: linear-gradient(
    90deg,
    rgba(0, 1, 13, 1) 0%,
    rgba(0, 1, 13, 1) 100%
  );
  filter: drop-shadow(0px 30px 10px rgba(0, 1, 13, 0.5));
}
.footer-items {
  filter: drop-shadow(0px -30px 10px rgba(255, 255, 255, 0.5));
}
.dark .footer-items {
  filter: drop-shadow(0px -30px 10px rgba(0, 1, 13, 0.5));
}
</style>
