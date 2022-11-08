<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount } from "vue";
const { path } = useRoute();
const router = useRouter();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent("/blog").where({ _path: path }).findOne();
});
const getTags = [...blogPost.value.tags];

const { data: suggested } = await useAsyncData(`suggested`, () => {
  // fetch document where the document path matches with the current route
  return queryContent("/blog")
    .where({ tags: { $contains: getTags } })
    .find();
  // get the surround information,
  // which is an array of document that is all the documents but the current one
});

const isActive = ref(false);
onBeforeMount(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 100) {
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
</script>
<template>
  <div class="relative pt-16 xs-m:pt-24" @scroll="handleScroll">
    <div
      class="fixed top-16 left-0 w-full h-24 bg-white dark:bg-black z-[9999] text-base_m lg-m:text-xl_t appear-from-top lg:h-20 xs:h-16 appear-menu text-center"
      v-if="isActive"
    >
      <div
        class="absolute z-10 mb-4 text-black top-2 left-8 dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon
          name="akar-icons:arrow-back"
          class="relative w-[25px] h-[18px] lg-m:w-[35px] lg-m:h-[28px]"
        />
      </div>
      <p
        class="w-[1100px] lg:w-144 xs:w-96 text xss:w-64 overflow-ellipsis mx-16"
      >
        {{ blogPost.title }}
      </p>
    </div>
    <div
      class="fixed top-16 left-0 w-full h-24 bg-white dark:bg-black z-[9999] text-base_m lg-m:text-xl_t disappear-to-top lg:h-20 xs:h-16 appear-menu text-center"
      v-if="!isActive"
    >
      <div
        class="absolute z-10 mb-4 text-black top-2 left-8 dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon
          name="akar-icons:arrow-back"
          class="relative w-[25px] h-[18px] lg-m:w-[35px] lg-m:h-[28px]"
        />
      </div>
      <p
        class="w-[1100px] lg:w-144 xs:w-96 text xss:w-64 overflow-ellipsis mx-16"
      >
        {{ blogPost.title }}
      </p>
    </div>

    <div
      class="justify-around w-full goback-header z-[9999] py-2 px-4 xs-m:px-8 lg-m:px-80 dark:bg-black bg-white"
    >
      <img :src="blogPost.avatar" alt="" class="avatar-2" />

      <div class="flex flex-col ml-2">
        <span class="text-[0.688rem] font-medium author xs-m:text-sm_m">
          {{ blogPost.author }}
        </span>
        <span class="text-[0.563rem] font-light date xs-m:text-[0.813rem]">
          {{ blogPost.dates.published }}
        </span>
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
    <div class="cont-toc z-[999]">
      <Toc :links="blogPost.body.toc.links" />
    </div>
    <div class="px-10 pt-36 content-blog xs-m:px-16 lg-m:px-60">
      <h2
        class="font-black text-[1.313rem] mb-7 xs-m:text-xl_t mx-auto text-center"
      >
        {{ blogPost.title }}
      </h2>
      <BlogImg
        :src="blogPost.img"
        :tags="getTags"
        relative="true"
        top="4"
      ></BlogImg>

      <article
        class="w-full mx-auto prose dark:prose-invert xs-m:prose-lg lg-m:prose-xl"
      >
        <ContentRenderer :value="blogPost" />
      </article>
      <div class="relative z-0 related-blogs">
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
          <a
            class="my-4 blog-container"
            v-for="suggest in suggested"
            :key="suggest._path"
            :href="suggest._path"
          >
            <h2
              class="font-black text-white title text-[1.313rem] tracking-wide leading-[1.313rem] text-left xs-m:text-sm_m lg-m:text-lg_d lg-m:leading-none justify-self-start px-6 truncate-text"
            >
              {{ suggest.title }}
            </h2>
            <p
              class="font-medium text-left content text-[.75rem] text-white leading-[.85rem] xs-m:text-[0.625rem] lg-m:hidden px-6 truncate-text"
            >
              {{ suggest.description }}
            </p>

            <BlogImg
              :src="blogPost.img"
              :tags="blogPost.tags"
              top="0"
              relative="true"
              width="40%"
            ></BlogImg>

            <div class="my-2 blog-footer">
              <img :src="blogPost.avatar" alt="" class="avatar" />

              <div class="flex flex-col items-start author-date">
                <span class="text-[0.688rem] font-medium author lg-m:text-sm_m">
                  {{ suggest.author }}
                </span>
                <span class="text-[0.563rem] font-light date lg-m:text-xs_t">
                  {{ suggest.dates.published }}
                </span>
              </div>
              <span
                class="text-[0.5rem] font-normal reading flex items-center justify-center lg-m:text-[0.75rem]"
              >
                <span class="mr-1">
                  <Icon
                    name="ant-design:read-outlined"
                    class="w-[15px] h-[15px] lg-m:w-[20px] lg-m:h-[20px]"
                  />
                </span>
                {{ suggest.duration }}Min
              </span>
            </div>
            <div class="gradient"></div>
          </a>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 left-0 z-10 w-full bg-white h-14 dark:bg-black footer-mobile lg-m:h-20 xs:hidden"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
.appear-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
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
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      font-size: 0.75rem;
    }
  }
}
.cont-toc {
  z-index: 9;
  position: fixed;
  top: 18%;
  right: 10%;
  transform: translateX(-50%);
  @media (max-width: 1500px) {
    right: 0%;
  }
  @media (max-width: 1100px) {
    transform: translateX(-10%);
  }
  @media (max-width: 885px) {
    transform: translateX(0%);
  }
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
