<script setup>
const { path } = useRoute();
const progress = ref(0);

const setProgress = (value) => {
  progress.value = value;
  console.log(progress.value)
};

onMounted(() => {
  document.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.round((scroll / height) * 100);
    setProgress(scrolled);
  })
})

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
    <ProgressBar class="sticky top-0 z-[9999]" :progress="progress"></ProgressBar>

    <main class="relative px-4 pt-20 lg-m:p-32">

      <Toc :links="portfolio.body.toc.links" />
      <ContentDoc class="relative w-full pb-32 mx-auto prose dark:prose-invert xs-m:prose-lg lg-m:prose-xl" />
    </main>
  </div>
</template>
<style>
.prose h2 a:not(:where([class~="not-prose"], [class~="not-prose"] *)),
.prose h3 a:not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  text-decoration: none;
}
</style>
