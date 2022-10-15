<template lang="">
  <div class="absolute top-0 left-0 flex w-full h-full">
    <Q&A
      tag="akar-icons:vue-fill"
      tagline="Vue.js"
      question="What is Vue.js?"
      stars="1"
      content="Vue js is progressive javascript script used to create dynamic user
    interfaces. Vue js is very easy to learn.In order to work with Vue js
    you just need to add few dynamic features to a website. You don’t need
    to install any thing to use Vue js just need add Vue js library in your
    project."
      icon="logos:vue"
    ></Q&A>
    <Q&A
      tag="akar-icons:vue-fill"
      tagline="Vue.js"
      question="What is Vue.js?"
      stars="2"
      content="Vue js is progressive javascript script used to create dynamic user
  interfaces. Vue js is very easy to learn.In order to work with Vue js
  you just need to add few dynamic features to a website. You don’t need
  to install any thing to use Vue js just need add Vue js library in your
  project."
      icon="logos:vue"
    ></Q&A>
    <Q&A
      tag="akar-icons:vue-fill"
      tagline="Vue.js"
      question="What is Vue.js?"
      stars="3"
      content="Vue js is progressive javascript script used to create dynamic user
interfaces. Vue js is very easy to learn.In order to work with Vue js
you just need to add few dynamic features to a website. You don’t need
to install any thing to use Vue js just need add Vue js library in your
project."
      icon="logos:vue"
    ></Q&A>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>
<style lang="scss">
.dark .carousel__prev,
.carousel__prev {
  transform: translateX(20%) scale(1.2) translateY(-70%);
  @media (min-width: 599px) {
    transform: translateX(20%) scale(1.5) translateY(-50%);
  }
  @media (min-width: 1100px) {
    transform: translateX(20%) scale(2) translateY(-50%);
  }
}
.dark .carousel__next,
.carousel__next {
  transform: translateX(-20%) scale(1.2) translateY(-70%);
  @media (min-width: 599px) {
    transform: translateX(-20%) scale(1.5) translateY(-50%);
  }
  @media (min-width: 1100px) {
    transform: translateX(-20%) scale(2) translateY(-50%);
  }
}
.dark .carousel__prev,
.dark .carousel__next {
  background: transparent;
  .carousel__icon {
    fill: #f6f6f6;
  }
}
.carousel__prev,
.carousel__next {
  background: transparent;
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
