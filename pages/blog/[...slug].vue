import { BlogComp } from '../../.nuxt/components';
<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
const router = useRouter();

const goBack = () => {
  router.push({ path: "/blog", replace: true });
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
useHead({
  title: blogPostTest.title,
});
</script>
<template>
  <div class="relative pt-20">
    <div
      class="justify-around w-full my-2 goback-header z-[9999] relative py-2 px-4 xs-m:px-8 lg-m:px-80"
    >
      <div
        class="z-10 mb-4 text-black dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon
          name="akar-icons:arrow-back"
          class="relative w-[25px] h-[18px] xs-m:w-[35px] xs-m:h-[28px]"
        />
      </div>
      <div class="flex flex-row items-start avatar-cont">
        <img :src="blogPost.avatar" alt="" class="avatar" />

        <div class="flex flex-col w-full ml-2">
          <span class="text-[0.688rem] font-medium author xs-m:text-sm_m">
            {{ blogPost.author }}
          </span>
          <span class="text-[0.563rem] font-light date xs-m:text-[0.813rem]">
            {{ blogPost.dates.published }}
          </span>
        </div>
      </div>
      <span
        class="text-[0.5rem] font-normal reading flex items-center justify-center xs-m:text-[0.813rem]"
      >
        <span class="mr-1">
          <Icon
            name="ant-design:read-outlined"
            class="w-[15px] h-[15px] xs-m:w-[20px] xs-m:h-[20px] lg-m:w-[25px] lg-m:h-[25px]"
          />
        </span>
        {{ blogPost.duration }}Min
      </span>
      <div
        class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
      ></div>
    </div>

    <div class="px-10 pt-10 content-blog xs-m:px-16 lg-m:px-60">
      <h2 class="font-black text-[1.313rem] mb-7 xs-m:text-xl_t">
        {{ blogPost.title }}
      </h2>
      <img :src="blogPost.img" alt="" class="mx-auto mb-7 blog-img" />
      <article class="w-full mx-auto prose dark:prose-invert">
        <ContentDoc class="mb-7" />
      </article>
      <div class="related-blogs">
        <div class="flex items-center justify-between mb-12 lines">
          <div class="w-[40%] h-[2px] bg-green xs-m:w-[45%]"></div>
          <img
            src="../../images/logo-logo-cricadev.png"
            alt=""
            class="w-[17px] h-[22px] xs-m:w-[25px] xs-m:h-[30px]"
          />
          <div class="w-[40%] h-[2px] bg-green xs-m:w-[45%]"></div>
        </div>
        <div class="order-mobile">
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
        <div class="order-tablet">
          <NuxtLink
            class="my-4 blog-container blog-container-tablet"
            v-for="blogPost in blogPostListTablet"
            :key="blogPost.path"
            :to="blogPost._path"
          >
            <h2
              class="px-4 mb-2 font-black tracking-wide text-center text-white title xs-m:text-sm_m"
            >
              {{ blogPost.title }}
            </h2>
            <p
              class="font-medium text-left content text-[.75rem] text-white px-4 leading-[.85rem] xs-m:text-[0.813rem]"
            >
              {{ blogPost.description }}
            </p>
            <img :src="blogPost.img" alt="" class="img" />
            <div class="my-2 blog-footer">
              <img :src="blogPost.avatar" alt="" class="avatar" />
              <div class="flex flex-col items-start author-date">
                <span class="text-[0.75rem] font-medium author">
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
        <div class="order-desktop">
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
                  <Icon
                    name="ant-design:read-outlined"
                    class="w-[15px] h-[15px] xs-m:w-[20px] xs-m:h-[20px] lg-m:w-[25px] lg-m:h-[25px]"
                  />
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
.order-tablet {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.order-desktop {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
}
.dark.shiki.one-dark-pro {
  --shiki-color-background: #f6f6f6;
}
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
    place-self: center;
    padding-right: 10px;
    padding-bottom: 2px;
  }
}
.goback-header {
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
    place-self: center;
  }
  .avatar-cont {
    grid-column: 2/4;
    grid-row: 1/2;
    place-self: start;
    .avatar {
      border-radius: 50%;
      object-fit: cover;
      height: 30px;
      width: 30px;
      z-index: 2;

      place-self: center;
      @media (min-width: 599px) {
        height: 45px;
        width: 45px;
      }
    }
  }
  .reading {
    grid-column: 5/6;
    grid-row: 1/2;
  }
}
</style>
