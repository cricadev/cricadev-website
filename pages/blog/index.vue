import { BlogComp } from '../.nuxt/components';
<template lang="">
  <div class="px-10 pt-20">
    <div
      class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
    ></div>
    <h2 class="tracking-widest text-center uppercase text-xl_m">Cricablog</h2>
    <p class="italic font-bold tracking-widest text-center">
      Welcome to my blog! <br />
      Let's talk about technology
    </p>
    <p class="pt-8 pb-4 font-medium text-base_t">Recent</p>

    <carousel :items-to-show="1">
      <slide v-for="blogPost in blogPostListCarousel" :key="blogPost.path">
        <NuxtLink class="blog-container" :to="blogPost._path">
          <h2
            class="px-4 font-black text-white title text-[1.313rem] tracking-wide leading-[1.313rem] text-center mb-2"
          >
            {{ blogPost.title }}
          </h2>
          <p
            class="font-medium text-left content text-[.75rem] text-white px-4 leading-[.85rem]"
          >
            {{ blogPost.description }}
          </p>
          <img :src="blogPost.img" alt="" class="img" />
          <div class="my-2 blog-footer">
            <img :src="blogPost.avatar" alt="" class="avatar" />
            <div class="flex flex-col items-start author-date">
              <span class="text-[0.688rem] font-medium author">
                {{ blogPost.author }}
              </span>
              <span class="text-[0.563rem] font-light date">
                {{ blogPost.dates.published }}
              </span>
            </div>
            <span
              class="text-[0.5rem] font-normal reading flex items-center justify-center"
            >
              <span class="mr-1">
                <Icon name="ant-design:read-outlined" size="15" />
              </span>
              {{ blogPost.duration }}Min
            </span>
          </div>
          <div class="gradient"></div>
        </NuxtLink>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <div class="pb-4 blogs-order">
      <p class="pt-4 font-medium text-sm_m">All Blogs</p>
      <BlogComp></BlogComp>
    </div>

    <NuxtPage />
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
const { data: blogPostListCarousel } = useAsyncData(
  "blogPostListCarousel",
  () => {
    return queryContent("/blog").sort({ id: -1 }).limit(3).find();
  }
);
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
