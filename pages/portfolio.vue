<template lang="">
  <div class="pt-16 sm-m:pt-32">
    <div
      class="fixed top-0 left-0 z-10 w-full h-[20vh] xs-m:h-[40vh] bg-white dark:bg-black header-mobile"
    ></div>
    <h2
      class="fixed z-20 w-full tracking-widest text-center uppercase text-xl_m"
    >
      Projects
    </h2>
    <div
      class="fixed grid grid-cols-5 grid-rows-3 mt-16 text-center project-carousel"
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
    <div class="relative items-center my-64 overflow-y-scroll project-order">
      <ProjectComp
        title="FinanceGod"
        img="../financegod.png"
        content="This application will be your financial friend; you will be able to add all of your cards..."
      ></ProjectComp>
      <ProjectComp
        title="MathGod"
        img="../mathgod.png"
        content=" With capabilities like Text-To-Speech, MathGod is a mathematical helper created to be usable by..."
      ></ProjectComp>
      <ProjectComp
        title="CRICADEV"
        img="../cricadev-project.png"
        content="A unique website created for web developer Cristian Casallas, which is me, CricaDev contains..."
      ></ProjectComp>
      <ProjectComp
        title="TEF"
        img="../tef.png"
        content="A distinctive website that was entirely made for designer Stefanny Ascencio. TefDsgn is a fully..."
      ></ProjectComp>
    </div>
    <div
      class="fixed bottom-0 left-0 z-10 w-full h-12 bg-white dark:bg-black footer-mobile"
    ></div>

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
.dark .footer-mobile {
  filter: drop-shadow(5px -40px 27px #00010d);
}
.footer-mobile {
  filter: drop-shadow(5px -40px 27px #f6f6f6);
}
.project-order {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
}
.dark .project-carousel {
  background: #00010d;
  filter: drop-shadow(5px 40px 27px #00010d);
}
.project-carousel {
  place-items: center;
  background: #f6f6f6;
  z-index: 20;
  filter: drop-shadow(0px 40px 27px #f6f6f6);

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
  font-size: 0.75rem;
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
    transform: scale(1.4);
    transition: transform 0.2s ease-in-out;
  }
}
</style>
