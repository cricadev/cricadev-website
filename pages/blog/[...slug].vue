<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount } from "vue";
const { path } = useRoute();
const router = useRouter();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/blog").where({ _path: path }).findOne();
});
const getTags = [...blogPost.value.tags];

const isActive = ref(false);
onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 200) {
    isActive.value = true;
  } else {
    isActive.value = false;
  }
};

const goBack = () => {
  router.push({ path: "/blog", replace: true });
};
useHead({
  title: blogPost.title,
  description: blogPost.description,
});
const getNameTag = (lang) => {
  if (lang == "Javascript") {
    return "akar-icons:javascript-fill";
  } else if (lang == "Vue") {
    return "akar-icons:vue-fill";
  } else if (lang == "CSS") {
    return "akar-icons:css-fill";
  } else if (lang == "React") {
    return "akar-icons:react-fill";
  } else if (lang == "NodeJS") {
    return "akar-icons:node-fill";
  } else if (lang == "Typescript") {
    return "akar-icons:typescript-fill";
  } else if (lang == "Css") {
    return "akar-icons:css-fill";
  } else if (lang == "HTML") {
    return "akar-icons:html-fill";
  } else if (lang == "Sass") {
    return "akar-icons:sass-fill";
  } else if (lang == "Tailwind") {
    return "file-icons:tailwind";
  } else if (lang == "Nuxt") {
    return "cib:nuxt-js";
  } else if (lang == "Github") {
    return "akar-icons:github-fill";
  } else if (lang == "Git") {
    return "bi:git";
  } else if (lang == "NPM") {
    return "akar-icons:npm-fill";
  } else if (lang == "GraphQL") {
    return "akar-icons:graphql-fill";
  } else if (lang == "Coding") {
    return "ant-design:code-filled";
  } else if (lang == "Bootstrap") {
    return "akar-icons:bootstrap-fill";
  } else if (lang == "About me") {
    return "";
  }
};
</script>
<template>
  <div class="relative pt-16 xs-m:pt-24" @scroll="handleScroll">
    <div
      class="fixed xs:top-16 top-24 left-0 w-full h-24 bg-white dark:bg-black z-[9998] text-base_m lg-m:text-xl_t appear-from-top lg:h-20 xs:h-16 appear-menu text-center px-128 lg:px-16 xs:px-8 lg:top-20"
      v-if="isActive"
    >
      <div
        class="z-10 text-black top-2 left-8 dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon
          name="akar-icons:arrow-back"
          class="relative w-[25px] h-[18px] lg-m:w-[35px] lg-m:h-[28px]"
        />
      </div>
      <p
        class="w-[1100px] lg:w-144 xs:w-96 text xss:w-64 overflow-ellipsis mx-16 xs-m:text-sm_m lg-m:text-base_m"
      >
        {{ blogPost.title }}
      </p>
    </div>
    <div
      class="fixed top-24 left-0 w-full h-24 bg-white dark:bg-black z-[9998] text-base_m lg-m:text-xl_t disappear-to-top lg:h-20 xs:h-16 appear-menu text-center px-96 lg:px-16 xs:px-8 lg:top-20"
      v-if="!isActive"
    >
      <div
        class="z-10 text-black top-2 left-8 dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon
          name="akar-icons:arrow-back"
          class="relative w-[25px] h-[18px] lg-m:w-[35px] lg-m:h-[28px]"
        />
      </div>
      <p
        class="w-[1100px] lg:w-144 xs:w-96 text xss:w-64 overflow-ellipsis mx-16 xs-m:text-sm_m lg-m:text-base_m"
      >
        {{ blogPost.title }}
      </p>
    </div>

    <div
      class="justify-around w-full goback-header z-[9999] py-2 px-4 xs-m:px-8 lg-m:px-2 xl-m:px-32 2xl-m:px-128 dark:bg-black bg-white"
    >
      <div class="flex gap-2 ml-2">
        <img :src="blogPost.avatar" alt="" class="avatar-2" />
        <div class="flex flex-col">
          <span class="text-[0.688rem] font-medium author xs-m:text-sm_m">
            {{ blogPost.author }}
          </span>
          <span class="text-[0.563rem] font-light date xs-m:text-[0.813rem]">
            {{ blogPost.dates.published }}
          </span>
        </div>
      </div>
      <span
        class="text-[0.5rem] font-normal reading flex items-center justify-center xs-m:text-[0.813rem]"
      >
        <span class="mr-1">
          <Icon
            name="ant-design:read-outlined"
            class="w-[15px] h-[15px] xs-m:w-[20px] xs-m:h-[20px] lg-m:w-[25px] lg-m:h-[25px]"
          />
        </span>
        {{ blogPost.duration }}Min
      </span>
      <div
        class="fixed top-0 left-0 z-10 w-full h-[4rem] bg-white dark:bg-black xs-m:h-[6rem]"
      ></div>
    </div>

    <div class="px-16 pt-36 content-blog xs-m:px-32 lg-m:px-60">
      <Toc :links="blogPost.body.toc.links" />

      <article
        class="relative w-full pb-32 mx-auto prose dark:prose-invert xs-m:prose-lg lg-m:prose-xl"
      >
        <div class="flex items-center gap-2 pb-16">
          <div v-for="tag in getTags">
            <div
              v-if="getNameTag(tag) == ''"
              class="p-1 translate-y-[2px] xs:-translate-y-0 rounded-md bg-green2"
            >
              <img
                src="../../public/icon.png"
                alt=""
                class="brightness-[4] logo-custom"
              />
            </div>
            <div class="h-full" v-else>
              <Icon
                :name="getNameTag(tag)"
                class="top-0 w-8 h-8 p-2 text-white rounded-md bg-green2"
              >
              </Icon>
            </div>
          </div>
        </div>
        <ContentRenderer :value="blogPost" />
      </article>
      <div class="relative z-0 related-blogs lg-m:hidden">
        <div class="flex items-center justify-between mb-12 lines">
          <div class="w-[40%] h-[2px] bg-green xs-m:w-[45%]"></div>
          <img
            src="../../images/logo-logo-cricadev.png"
            alt=""
            class="w-[17px] h-[22px] xs-m:w-[25px] xs-m:h-[30px]"
          />
          <div class="w-[40%] h-[2px] bg-green xs-m:w-[45%]"></div>
        </div>
        <div class="related-blog">
          <BlogComp :tags="getTags"></BlogComp>
        </div>
      </div>
      <div class="sticky right-0 hidden h-96 top-48 lg-m:block">
        <span class="relative font-bold text-center text-sm_m left-10"
          >More Posts</span
        >
        <BlogComp :tags="getTags" is-small="true"></BlogComp>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 z-10 w-full bg-white h-14 dark:bg-black footer-mobile lg-m:h-20 xs:hidden"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.logo-custom {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
.appear-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.disappear-to-top {
  animation: disappear-to-top 0.5s ease-in-out forwards;
  img {
    place-self: center start;
  }
  @keyframes disappear-to-top {
    0% {
      opacity: 1;
      transform: translateX(0);
      font-size: 0.85rem;
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
}
.appear-from-top {
  animation: appear-from-top 0.5s ease-in-out forwards;
  img {
    place-self: center start;
  }
  @keyframes appear-from-top {
    from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
      font-size: 0.85rem;
    }
  }
}
.prose :where(img):not(:where([class~="not-prose"] *)) {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
}
.prose :where(h2):not(:where([class~="not-prose"] *)),
.prose :where(h1):not(:where([class~="not-prose"] *)),
.prose :where(h3):not(:where([class~="not-prose"] *)),
.prose :where(h4):not(:where([class~="not-prose"] *)),
.prose :where(h5):not(:where([class~="not-prose"] *)),
.prose :where(h6):not(:where([class~="not-prose"] *)) {
  scroll-margin-top: 200px;
  @media (min-width: 599px) {
    scroll-margin-top: 250px;
  }
}

.prose {
  //max-width: 100%;
}
.related-blog {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: 1100px) {
    margin-bottom: 50px;
  }
  @media (max-width: 599px) {
    gap: 10px;
  }
  .blog-container {
    width: 30%;
    @media (max-width: 1100px) {
      width: 48%;
    }
    @media (max-width: 599px) {
      width: 100%;
    }
  }
}
.avatar {
  border-radius: 50%;
  object-fit: cover;
  height: 30px;
  width: 30px;
  z-index: 2;

  place-self: center;
  @media (min-width: 599px) {
    height: 45px;
    width: 45px;
  }
}

.dark.shiki.one-dark-pro {
  --shiki-color-background: #f6f6f6;
}
.content-blog {
  @media (min-width: 1100px) {
    position: relative;
    display: grid;
    padding: 0 80px;
    margin: 0;
    grid-template-columns: 25% 50% 25%;
    gap: 20px;
  }
  .blog-img {
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

  .avatar {
    border-radius: 50%;
    object-fit: cover;
    height: 30px;
    width: 30px;
    z-index: 2;
    grid-column: 1/3;
    grid-row: 1/2;
    place-self: center;
  }
  .author-date {
    grid-column: 2/5;
    grid-row: 1/2;

    place-self: center;
  }
  .reading {
    grid-column: 5/6;
    grid-row: 1/2;
    place-self: center;
    padding-right: 10px;
    padding-bottom: 2px;
  }
}
.goback-header {
  z-index: 1;
  @apply flex fixed;
  img {
    @apply w-10 h-10 object-cover rounded-full lg:w-8 lg:h-8 xs:w-6 xs:h-6;
  }
}
</style>
