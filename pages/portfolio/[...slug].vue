<script setup>
const { path } = useRoute();


const { data: portfolio } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/portfolio").where({ _path: path }).findOne();
});

useHead({
  title: portfolio.value?.title?.slice(0, 75),
  titleTemplate: (title) => `${title} | Cricablog`,
  meta: [
    {
      property: "og:title",
      content: `${portfolio.value?.metaTitle?.slice(0, 75)} | Cricablog`,
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:description",
      content: portfolio.value?.description?.slice(0, 75),
    },

    {
      property: "og:url",
      content: `https://cricadev.com${path}`,
    },
    {
      property: "article:author",
      content: portfolio.value?.author,
    },
    {
      property: "og:image",
      content: portfolio.value?.ogImg,
    },
    {
      property: "og:site_name",
      content: "CricaDev",
    },
    {
      property: "twitter:title",
      content: `${portfolio.value?.metaTitle.slice(0, 75)} | Cricadev`,
    },
    {
      hid: "description",
      name: "description",
      content: portfolio.value?.description.slice(0, 195),
    },
    {
      hid: "robots",
      name: "robots",
      content: "index, follow",
    },
    {
      rel: "cannonical",
      href: `https://cricadev.com${path}`,
    },
  ],
});


</script>
<template>
  <div class="">

    <main class="px-4 pt-20 lg-m:p-32">
      <Toc :links="portfolio.body.toc.links" />
      <ContentDoc class="relative w-full pb-32 mx-auto prose dark:prose-invert xs-m:prose-lg lg-m:prose-xl" />
    </main>
  </div>
</template>
<style></style>
