<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
<template>
  <div class="px-4 pt-16">
    <div
      class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
    ></div>
    <h2>{{ blogPost.title }}</h2>
    <ContentDoc />
  </div>
</template>
<style lang="scss"></style>
