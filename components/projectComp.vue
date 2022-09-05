<template lang="">
  <!--<div class="grid w-3/4 grid-cols-4 grid-rows-4 project-container">-->
  <transition-group
    name="project-container"
    tag="div"
    class="grid w-10/12 h-20 grid-cols-5 grid-rows-5 project-container"
  >
    <div class="bg"></div>
    <h2 class="font-black text-center text-base_m no-hover-h2">
      {{ title }}
    </h2>
    <h2 class="font-black text-center hover-h2 text-lg_m">{{ title }}</h2>
    <p class="hover-p">{{ content }}</p>
    <div class="flex gap-4 box-buttons">
      <a href="" class="button-1 btn"
        >code <span><Icon icon="ant-design:code-filled" /> </span
      ></a>
      <a href="" class="button-2 btn"
        >Project <span><Icon icon="carbon:view-filled" /> </span
      ></a>
    </div>

    <div class="flex flex-col icons">
      <Icon icon="cib:nuxt-js" />
      <Icon icon="akar-icons:vue-fill" />
      <Icon icon="bxl:tailwind-css" />
    </div>
    <img :src="img == 'none' ? '../images/coming-soon.jpg' : img" alt="" />
  </transition-group>
  <!--</div>-->
</template>
<script setup>
import { Icon } from "@iconify/vue";
defineProps({
  title: String,
  img: String,
  content: String,
});
</script>
<style lang="scss">
.project-container-enter-active,
.project-container-leave-active {
  transition: all 0.5s ease;
  opacity: 0;
}
.project-container-enter-from,
.project-container-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.project-container {
  flex-grow: 1;
  transition: 0.5s;
  cursor: pointer;
  place-items: center;
  border-radius: 10%;
  .box-buttons {
    grid-column: 1/6;
    grid-row: 5/6;
    opacity: 0;
  }
  .btn {
    border-radius: 20px;
  }
  .icons {
    opacity: 0;
    grid-column: 5/6;
    grid-row: 3/5;
  }
  .hover-p {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 4/5;
    width: 80%;
    font-size: 0.75rem;
    place-self: center start;
    padding-left: 25px;
  }
  .hover-h2 {
    opacity: 0;
    grid-column: 1/3;
    grid-row: 3/4;
    padding-left: 40px;
  }

  .bg {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(2px);
    z-index: 2;
  }
  img {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .no-hover-h2 {
    grid-column: 3/4;
    grid-row: 3/4;
    z-index: 3;
    color: #f6f6f6;
  }
  &:hover {
    & {
      flex-grow: 6;
    }

    .bg {
      opacity: 0;
      transition: opacity 0.2s ease-in;
    }
    img {
      grid-row: 1/3;
      transition: all 0.2s ease-in-out;
    }
    .no-hover-h2 {
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .hover-h2 {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
    .hover-p {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
    .icons {
      opacity: 1;
      transition: 0.5s all ease-in-out;
    }
    .box-buttons {
      opacity: 1;
      transition: 0.5s all ease-in-out;
    }
  }
}
</style>
