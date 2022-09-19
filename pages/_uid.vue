<template lang="">
  <div>
    <prismic-text :field="pages[0].data.title" />
  </div>
</template>
<script setup>
import { predicate } from "@prismicio/client";

const { client } = usePrismic();
const pages = await client.getAllByType("blog_posts");
pages.forEach((page) => {
  console.log(page);
});
console.log(pages);
</script>
<style lang=""></style>
