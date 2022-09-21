<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
const router = useRouter();

const goBack = () => {
  router.go(-1);
};
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
      <img :src="blogPost.img" alt="" class="mb-7" />
      <ContentDoc />
    </div>
  </div>
</template>
<style lang="scss">
.content-blog {
  img {
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
