import { BlogComp } from '../.nuxt/components';
<template lang="">
  <div class="px-10 pt-20 xs-m:px-36 2xl-m:px-96 xs-m:pt-24 lg-m:px-48">
    <div
      class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog xs-m:h-[6rem]"
    ></div>
    <h2
      class="tracking-widest text-center uppercase text-xl_m xs-m:text-xl3_t lg-m:text-xl5_d"
    >
      Cricablog
    </h2>
    <p
      class="italic font-bold tracking-widest text-center text-xs_t xs-m:text-lg_t xs-m:tracking-[0.2em] xs-m:pt-2"
    >
      Welcome to my blog! <br />
      Let's talk about <s>technology</s>
      <br />
      pretty much everything.
    </p>
    <p class="pt-8 pb-4 font-medium text-base_t xs-m:text-lg_t">Recent</p>

    <carousel :items-to-show="1">
      <slide v-for="blogPost in blogPostListCarousel" :key="blogPost.path">
        <a class="blog-container" :href="blogPost._path">
          <h2
            class="px-4 font-black text-white title text-[1.313rem] tracking-wide leading-[1.313rem] text-center mb-2 xs-m:text-xl_t xs-m:px-8 lg-m:text-xl2_d lg-m:px-12"
          >
            {{ blogPost.title }}
          </h2>
          <p
            class="font-medium text-left content text-[.75rem] text-white px-4 leading-[.85rem] xs-m:text-xs_t xs-m:px-8 lg-m:text-base_t lg-m:leading-normal lg-m:px-12"
          >
            {{ blogPost.description }}
          </p>
          <img :src="blogPost.img" alt="" class="img" />
          <div class="my-2 blog-footer">
            <img :src="blogPost.avatar" alt="" class="avatar" />
            <div class="flex flex-col items-start author-date">
              <span
                class="text-[0.688rem] font-medium author xs-m:text-sm_m lg-m:text-sm_d"
              >
                {{ blogPost.author }}
              </span>
              <span class="text-[0.563rem] font-light date xs-m:text-xs_t">
                {{ blogPost.dates.published }}
              </span>
            </div>
            <span
              class="text-[0.5rem] font-normal reading flex items-center justify-center xs-m:text-xs_t lg-m:text-sm_m"
            >
              <span class="mr-1">
                <Icon
                  name="ant-design:read-outlined"
                  class="w-[15px] h-[15px] xs-m:w-[20px] xs-m:h-[20px] lg-m:w-[25px] lg-m:h-[25px]"
                />
              </span>
              {{ blogPost.duration }}Min
            </span>
          </div>
          <div class="gradient"></div>
        </a>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
    <div class="mt-12 mb-8 h3 text-base_m">Tags</div>
    <div class="pb-4 blogs-order xs-m:pb-24">
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

.blogs-order {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (min-width: 599px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1100px) {
    width: 100%;
    height: 100%;
  }
}
.dark .bg-header-blog {
  filter: drop-shadow(0px 17px 10px #00010d);
}
.bg-header-blog {
  filter: drop-shadow(0px 17px 10px #f6f6f6);
}

.blog-container {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  border-radius: 15px;
  overflow: hidden;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 200px;
  @media (min-width: 599px) {
    height: 300px;
  }
  @media (min-width: 1100px) {
    height: 400px;
  }
  .blog-footer {
    grid-column: 1/6;
    grid-row: 5/6;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    width: 100%;
    height: 100%;
    .avatar {
      border-radius: 50%;
      object-fit: cover;
      height: 30px;
      width: 30px;
      z-index: 2;
      grid-column: 1/2;
      grid-row: 1/2;
      place-self: center;
      @media (min-width: 599px) {
        height: 45px;
        width: 45px;
      }
    }
    .author-date {
      grid-column: 2/5;
      place-self: center start;

      margin-left: 10px;
    }
    .reading {
      grid-column: 5/6;
      grid-row: 1/2;
      place-self: center;
      padding-right: 10px;
      padding-bottom: 2px;
    }
  }
  .title {
    grid-column: 1/6;
    grid-row: 3/4;
    z-index: 2;
  }
  .content {
    grid-column: 1/6;
    grid-row: 4/5;
    z-index: 2;
  }
  .img {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(60%);
  }
  .gradient {
    grid-column: 1/6;
    grid-row: 5/6;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
}
.dark .gradient {
  background: #00010d;
}
.gradient {
  background: #f6f6f6;
}
</style>
