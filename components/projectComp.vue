<template lang="">
  <div class="relative w-1/2 mx-auto project-hover">
    <img class="px-8 item-container" :src="src" />
    <div class="wrap-project-content"></div>

    <h1
      class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-xl2_d font-bold text-white"
    >
      {{ title }}
    </h1>
    <a
      target="_blank"
      href="https://github.com/cricadev"
      class="absolute flex items-center gap-2 py-2 px-8 top-1/2 left-1/2 bg-green2/60 translate-x-[-300%] translate-y-[120%] text-white rounded-3xl button-appear button-1 hover:bg-green2"
    >
      Code <span> <Icon icon="ant-design:code-filled" /> </span>
    </a>
    <a
      target="_blank"
      href="https://cricadev.com"
      class="absolute flex items-center gap-2 py-2 px-8 top-1/2 left-1/2 bg-green2/60 translate-x-[-100%] translate-y-[120%] text-white rounded-3xl button-appear button-2 hover:bg-green2"
    >
      Project <span> <Icon icon="fa-solid:eye" /> </span>
    </a>
    <div
      class="absolute top-0 right-0 w-2/5 p-12 text-left wrap-project-content"
    >
      <p class="relative top-[-40px] font-black text-lg_d p-2">FincanceGod</p>
      <p class="relative font-light bottom-8 text-xs_d">
        {{ content }}
      </p>
      <div class="absolute right-0 top-12 icon-wrapper">
        <Icon icon="akar-icons:vue-fill" class="icon" height="25" />
        <Icon icon="cib:nuxt-js" class="icon" height="25" />
        <Icon icon="bxl:tailwind-css" class="icon" height="25" />
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="css" scoped>
.icon-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4px;
}
.item-container {
  filter: brightness(0.6) blur(1px);
}
.project-container {
  background-image: linear-gradient(
    90deg,
    transparent 0%,
    transparent 20%,
    rgba(0, 1, 13, 0.3) 80%,
    transparent 100%
  );
}
.project-hover:hover > img {
  transform: scaleX(0.7) translateX(-20%);
  background-size: cover;
  transition: 0.5s all ease-in;
}
.project-hover:hover > h1 {
  transform: translateX(100%);
  opacity: 0;
  transition: 0.5s all ease-in;
}
.wrap-project-content {
  opacity: 0;
  background-image: linear-gradient(90deg, #f6f6f6 0%, #f6f6f6 100%);
}
.dark .wrap-project-content {
  opacity: 0;
  background-image: linear-gradient(90deg, #00010d 0%, #00010d 100%);
}
.project-hover:hover > .wrap-project-content {
  opacity: 1;
  transform: translateX(-10%) scale(1);
  transition: 0.5s all ease-in;
}
.project-hover:hover > .button-1 {
  transform: translateY(80%) translateX(-270%);
  opacity: 1;
  transition: 0.5s all ease-in;
}
.project-hover:hover > .button-2 {
  transform: translateY(80%) translateX(-130%);
  opacity: 1;
  transition: 0.5s all ease-in;
}
.button-appear {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>
