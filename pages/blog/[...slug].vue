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
  <div class="relative px-4 pt-16">
    <div class="justify-around w-full my-2 blog-footer z-[9999] relative">
      <div
        class="w-6 h-6 left-4 top-16 z-[9999] text-black dark:text-white hover:cursor-pointer"
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
    </div>
    <div
      class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
    ></div>
    <h2>{{ blogPost.title }}</h2>
    <ContentDoc />
  </div>
</template>
<style lang="scss">
.blog-footer {
  z-index: 1;
  display: flex;

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
  }
  .author-date {
    grid-column: 2/5;
    place-self: center start;

    margin-left: 10px;
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
