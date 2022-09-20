<script setup>
const { path } = useRoute();
const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
<template>
  <div class="pt-16">
    <h2>{{ blogPost.title }}</h2>
    <ContentDoc />
  </div>
</template>
<style lang="scss">
@media (prefers-color-scheme: light) {
  .shiki.dark-plus {
    display: none;
  }
}
@media (prefers-color-scheme: dark) {
  .shiki.light-plus {
    display: none;
  }
}
</style>
