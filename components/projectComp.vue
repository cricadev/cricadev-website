<template lang="">
  <!--<div class="grid w-3/4 grid-cols-4 grid-rows-4 project-container">-->
  <transition-group
    name="project-container"
    tag="div"
    class="grid w-4/5 h-20 grid-cols-4 grid-rows-4 project-container"
  >
    <div class="bg"></div>
    <h2 class="font-black text-center text-base_m no-hover-h2">{{ title }}</h2>
    <h2 class="font-black text-center hover-h2 text-xs_m">{{ title }}</h2>
    <p class="hover-p">{{ content }}</p>
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
  .hover-p {
    opacity: 0;
    grid-column: 1/5;
    grid-row: 3/5;
    font-size: 0.75rem;
    place-self: end center;
  }
  .hover-h2 {
    opacity: 0;
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .bg {
    grid-column: 1/5;
    grid-row: 1/5;
    height: 100%;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(2px);
    z-index: 2;
  }
  img {
    grid-column: 1/5;
    grid-row: 1/5;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  h2 {
    grid-column: 2/4;
    grid-row: 2/4;
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
    h2 {
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .hover-h2 {
      opacity: 1;
    }
    .hover-p {
      opacity: 1;
    }
  }
}
</style>
