<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
<template>
  <div class="px-4 pt-16">
    <h2>{{ blogPost.title }}</h2>
    <ContentDoc />
  </div>
</template>
<style lang="scss"></style>
