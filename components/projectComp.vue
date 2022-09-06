<template lang="">
  <!--<div class="grid w-3/4 grid-cols-4 grid-rows-4 project-container">-->
  <transition-group
    name="project-container"
    tag="div"
    class="grid w-10/12 h-20 grid-cols-5 grid-rows-4 project-container"
  >
    <div class="bg"></div>
    <h2 class="font-black text-center text-base_m no-hover-h2">
      {{ title }}
    </h2>
    <h2 class="font-black text-center hover-h2 text-sm_m">{{ title }}</h2>
    <p class="hover-p text-[0.75rem] font-light">{{ content }}</p>
    <div class="flex gap-4 text-white box-buttons">
      <a href="" class="button-1 btn"
        >Code <span><Icon name="ant-design:code-filled" /> </span
      ></a>
      <a href="" class="button-2 btn"
        >Project <span><Icon name="carbon:view-filled" /> </span
      ></a>
    </div>
    <div
      class="bg-white dark:bg-black bg-hover dark:drop-bg dark-drop-bg"
    ></div>
    <div class="flex flex-col text-black dark:text-white icons">
      <Icon name="cib:nuxt-js" class="" />
      <Icon name="akar-icons:vue-fill" class="" />
      <Icon name="bxl:tailwind-css" class="" />
    </div>
    <img :src="img == 'none' ? '../images/coming-soon.jpg' : img" alt="" />
  </transition-group>
  <!--</div>-->
</template>
<script setup>
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

  .bg-hover {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;

    height: 100%;
    width: 100%;

    z-index: 2;
  }
  .box-buttons {
    grid-column: 1/6;
    grid-row: 4/5;
    opacity: 0;
  }
  .btn {
    border-radius: 20px;
  }
  .icons {
    opacity: 0;
    grid-column: 5/6;
    grid-row: 3/5;
    place-self: start end;
    padding-top: 10px;
    padding-right: 20px;
    z-index: 3;
  }
  .hover-h2 {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/4;
    padding-left: 25px;
    place-self: start;
    z-index: 3;
  }
  .hover-p {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;
    width: 80%;
    place-self: center start;
    padding-bottom: 20px;
    padding-left: 25px;
    z-index: 3;
  }

  .bg {
    grid-column: 1/6;
    grid-row: 1/5;
    height: 100%;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(2px);
    z-index: 1;
  }
  img {
    grid-column: 1/6;
    grid-row: 1/5;
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
      z-index: 3;
    }
    .bg-hover {
      opacity: 1;
    }
  }
}
</style>
