import { BlogComp } from '../.nuxt/components';
<template lang="">
  <div class="px-10 pt-16">
    <div
      class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black bg-header-blog"
    ></div>
    <h2 class="tracking-widest text-center uppercase text-xl_m">Cricablog</h2>
    <p class="italic font-bold tracking-widest text-center">
      Welcome to my blog! <br />
      Let's talk about technology
    </p>
    <p class="pt-8 pb-4 font-medium text-base_t">Recent</p>
    <BlogComp
      title="Self-education: how it save my life"
      content="Just like you, I didn't really fit anywhere when I was a kid. I still don’t, so I've built my own place. Modern psychology has evolved to understand a..."
      img="../blog-01.jpg"
      Avatar="../avatar-crica.jpg"
      Author="Cristian Casallas"
      date="18 Sep, 2022"
      Duration="18"
    ></BlogComp>
    <div class="pb-4 blogs-order">
      <p class="pt-4 font-medium text-sm_m">All Blogs</p>
      <BlogComp
        title="Self-education: how it save my life"
        content="Just like you, I didn't really fit anywhere when I was a kid. I still don’t, so I've built my own place. Modern psychology has evolved to understand a..."
        img="../blog-01.jpg"
        Avatar="../avatar-crica.jpg"
        Author="Cristian Casallas"
        date="18 Sep, 2022"
        Duration="18"
      ></BlogComp>
      <BlogComp
        title="Self-education: how it save my life"
        content="Just like you, I didn't really fit anywhere when I was a kid. I still don’t, so I've built my own place. Modern psychology has evolved to understand a..."
        img="../blog-01.jpg"
        Avatar="../avatar-crica.jpg"
        Author="Cristian Casallas"
        date="18 Sep, 2022"
        Duration="18"
      ></BlogComp>
      <BlogComp
        title="Self-education: how it save my life"
        content="Just like you, I didn't really fit anywhere when I was a kid. I still don’t, so I've built my own place. Modern psychology has evolved to understand a..."
        img="../blog-01.jpg"
        Avatar="../avatar-crica.jpg"
        Author="Cristian Casallas"
        date="18 Sep, 2022"
        Duration="18"
      ></BlogComp>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev | Blog",
});
</script>
<style lang="scss">
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
