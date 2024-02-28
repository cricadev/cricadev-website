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
const shareData = {
  title: portfolio.value.title,
  text: portfolio.value.description,
  url: `https://cricadev.com${path}`,
};
const like = ref(false);

const activelike = () => {
  like.value = !like.value;
  localStorage.setItem("like", JSON.stringify(like.value));
};
onMounted(() => {
  const resultPara = document.querySelector(".result");

  resultPara.style.opacity = "0.0";
  const itemGot = JSON.parse(localStorage.getItem("like"));

  like.value = itemGot;

});
const share = async (e) => {
  const resultPara = document.querySelector(".result");

  try {
    await navigator.share(shareData);
    resultPara.style.opacity = "1.0";

    resultPara.textContent = "Cricablog shared succesfully!";
    setTimeout(() => {
      resultPara.style.opacity = "0.0";
    }, 5000);
  } catch (err) {
    navigator.clipboard.writeText(window.location.href);
    resultPara.style.opacity = "1.0";
    resultPara.textContent = `Copied to clipboard, post it anywhere you want!`;

    setTimeout(() => {
      resultPara.style.opacity = "0.0";
    }, 5000);
  }
  navigator.share(shareData);
};
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
      <!-- BUtton like and share -->
      <div class="fixed bottom-4 right-8 z-[9999] grid h-32 w-16 group-icons xs-m:bottom-32 xs-m:right-12 lg-m:right-24">
        <Icon name="fluent:thumb-like-20-filled"
          class="w-12 h-12 p-3 thumb rounded-full bg-green hover:rotate-[360deg] place-self-end translate-x-5 -translate-y-10 hover:drop-shadow-[0px_0px_20px_rgba(90,175,152,1)] thumb-icon icon order-4 transition-all"
          @click="activelike" :class="[
            {
              'text-black dark:text-white scale-110 -translate-y-12 border-2 border-green':
                like,
            },
            {
              'text-black/50 dark:text-white/50 scale-100  -translate-y-10':
                !like,
            },
          ]">
        </Icon>

        <Icon name="akar-icons:share-box"
          class="w-12 h-12 p-3 text-green thumb rounded-full bg-white hover:rotate-[360deg] place-self-end border-green border-2 share-icon icon hover:bg-green hover:text-white"
          @click="share">
        </Icon>
        <Icon name="charm:cross"
          class="w-12 h-12 p-3 text-green thumb rounded-full bg-white hover:rotate-[360deg] place-self-center border-green border-2 cross-icon icon pointer-events-none hidden">
        </Icon>
      </div>
      <div
        class="fixed bottom-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] result text-green2 px-8 z-[9998] py-4 border-green2 border-2 rounded-2xl bg-white dark:bg-black dark:text-green dark:border-green enter-alert justify-center text-center">
      </div>
    </main>
  </div>
</template>
<style>
.prose h2 a:not(:where([class~="not-prose"], [class~="not-prose"] *)),
.prose h3 a:not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  text-decoration: none;
}

.group-icons {

  &:hover>.share-icon,
  & {
    @media (max-width: 1100px) {
      opacity: 1;
      pointer-events: all;
    }
  }

  &:hover>.share-icon {
    opacity: 1;
    pointer-events: all;
  }
}

.cross-icon {
  opacity: 0;
  pointer-events: none;
}

.share-icon {
  opacity: 0;
  pointer-events: none;
}

.thumb-icon {}

.thumb {
  transition: 0.4s;
}

.logo-custom {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
</style>
