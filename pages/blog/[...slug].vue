import { BlogComp } from '../../.nuxt/components';
<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
const router = useRouter();

const goBack = () => {
  router.go(-1);
};
const { data: blogPostListMobile } = useAsyncData("blogPostListMobile", () => {
  return queryContent("/blog").sort({ id: -1 }).limit(1).find();
});
const { data: blogPostListTablet } = useAsyncData("blogPostListTablet", () => {
  return queryContent("/blog").sort({ id: -1 }).limit(2).find();
});
const { data: blogPostListDesktop } = useAsyncData(
  "blogPostListDesktop",
  () => {
    return queryContent("/blog").sort({ id: -1 }).limit(3).find();
  }
);
const { data: blogPostTest } = await useAsyncData("blogPostTest", () => {
  return queryContent("/blog").findSurround({ _path: path });
});
console.log(blogPostTest);
useHead({
  title: blogPostTest.title,
});
</script>
<template>
  <div class="relative pt-20">
    <div
      class="justify-around w-full my-2 blog-footer z-[9999] relative py-2 px-4"
    >
      <div
        class="z-10 w-6 h-6 text-black left-4 top-16 dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon name="akar-icons:arrow-back" class="relative w-6 h-6" />
      </div>
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
      <div
        class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
      ></div>
    </div>

    <div class="px-10 pt-10 content-blog">
      <h2 class="font-black text-[1.313rem] mb-7">{{ blogPost.title }}</h2>
      <img :src="blogPost.img" alt="" class="mb-7 blog-img" />
      <ContentDoc class="mb-7" />
      <div class="related-blogs">
        <div class="flex items-center justify-between mb-12 lines">
          <div class="w-[40%] h-[2px] bg-green"></div>
          <img
            src="../../images/logo-logo-cricadev.png"
            alt=""
            class="w-[17px] h-[22px]"
          />
          <div class="w-[40%] h-[2px] bg-green"></div>
        </div>
        <div class="mb-12 order-mobile">
          <NuxtLink
            class="my-4 blog-container blog-container-mobile"
            v-for="blogPost in blogPostListMobile"
            :key="blogPost.path"
            :to="blogPost._path"
          >
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
        </div>
        <div class="mb-12 order-tablet">
          <NuxtLink
            class="my-4 blog-container blog-container-tablet"
            v-for="blogPost in blogPostListTablet"
            :key="blogPost.path"
            :to="blogPost._path"
          >
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
        </div>
        <div class="mb-12 order-desktop">
          <NuxtLink
            class="my-4 blog-container blog-container-desktop"
            v-for="blogPost in blogPostListDesktop"
            :key="blogPost.path"
            :to="blogPost._path"
          >
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
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blog-container.blog-container-mobile {
  @media (min-width: 599px) {
    display: none;
  }
}
.blog-container.blog-container-tablet {
  display: none;
  @media (min-width: 599px) {
    display: grid;
  }
  @media (min-width: 1100px) {
    display: none;
  }
}
.blog-container.blog-container-desktop {
  display: none;
  @media (min-width: 1100px) {
    display: grid;
  }
}
.content-blog {
  .blog-img {
    filter: grayscale(100%);
    border-radius: 10px;
  }
}
.blog-footer {
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100%;
  place-items: center;
  width: 100%;
  height: 100%;
  .arrow {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .avatar {
    border-radius: 50%;
    object-fit: cover;
    height: 30px;
    width: 30px;
    z-index: 2;
    grid-column: 2/3;
    grid-row: 1/2;
    place-self: center;
  }
  .author-date {
    grid-column: 3/5;
    grid-row: 1/2;

    place-self: center start;

    width: 100%;
  }
  .reading {
    grid-column: 5/6;
    grid-row: 1/2;
    place-self: end center;
    padding-right: 10px;
    padding-bottom: 2px;
  }
}
</style>
