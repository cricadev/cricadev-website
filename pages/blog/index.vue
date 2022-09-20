import { BlogComp } from '../.nuxt/components';
<template lang="">
  <div class="px-10 pt-16">
    <div
      class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
    ></div>
    <h2 class="tracking-widest text-center uppercase text-xl_m">Cricablog</h2>
    <p class="italic font-bold tracking-widest text-center">
      Welcome to my blog! <br />
      Let's talk about technology
    </p>
    <p class="pt-8 pb-4 font-medium text-base_t">Recent</p>
    <!--    <carousel :items-to-show="1">
      <slide v-for="slide in 3" :key="slide"> </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>-->

    <div class="pb-4 blogs-order">
      <p class="pt-4 font-medium text-sm_m">All Blogs</p>
      <BlogComp></BlogComp>
    </div>

    <NuxtPage />
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
<style lang="scss">
.dark .carousel__prev,
.dark .carousel__next {
  background: #f6f6f6;
  .carousel__icon {
    fill: #00010d;
  }
}
.carousel__prev,
.carousel__next {
  background: #000;
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.blogs-order {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.dark .bg-header-blog {
  filter: drop-shadow(0px 17px 10px #00010d);
}
.bg-header-blog {
  filter: drop-shadow(0px 17px 10px #f6f6f6);
}
</style>
