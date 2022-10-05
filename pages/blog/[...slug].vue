<script setup>
import { onMounted } from "vue";
const { path } = useRoute();
const router = useRouter();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

const { data: suggested } = await useAsyncData(`suggested`, () => {
  // fetch document where the document path matches with the current route
  return queryContent()
    .where({ _path: { $ne: path } })
    .find();
  // get the surround information,
  // which is an array of document that is all the documents but the current one
});

const goBack = () => {
  router.push({ path: "/blog", replace: true });
};
useHead({
  title: blogPost.title,
  description: blogPost.description,
});
</script>
<template>
  <div class="relative pt-16 xs-m:pt-24">
    <div
      class="justify-around w-full goback-header z-[9999] py-2 px-4 xs-m:px-8 lg-m:px-80 dark:bg-black bg-white"
    >
      <div
        class="z-10 mb-4 text-black dark:text-white hover:cursor-pointer arrow"
        @click="goBack"
      >
        <Icon
          name="akar-icons:arrow-back"
          class="relative w-[25px] h-[18px] xs-m:w-[35px] xs-m:h-[28px]"
        />
      </div>
      <div class="flex flex-row items-start avatar-cont">
        <img :src="blogPost.avatar" alt="" class="avatar" />

        <div class="flex flex-col w-full ml-2">
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
      <div class="cont-toc z-[999]">
        <Toc :links="blogPost.body.toc.links" />
      </div>
    </div>

    <div class="px-10 pt-36 content-blog xs-m:px-16 lg-m:px-60">
      <h2
        class="font-black text-[1.313rem] mb-7 xs-m:text-xl_t mx-auto text-center"
      >
        {{ blogPost.title }}
      </h2>
      <img
        :src="blogPost.img"
        alt=""
        class="h-56 mx-auto mb-7 blog-img xs-m:h-96 lg-m:h-[420px]"
      />
      <article
        class="w-full mx-auto prose dark:prose-invert xs-m:prose-lg lg-m:prose-xl"
      >
        <ContentDoc class="mb-7" />
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
              class="font-black text-white title text-[1.313rem] tracking-wide leading-[1.313rem] text-left mb-2 xs-m:text-sm_m lg-m:text-lg_d lg-m:leading-none justify-self-start px-6"
            >
              {{ suggest.title }}
            </h2>
            <p
              class="font-medium text-left content text-[.75rem] text-white leading-[.85rem] xs-m:text-[0.625rem] lg-m:hidden px-6"
            >
              {{ suggest.description }}
            </p>
            <p
              class="hidden px-6 font-medium leading-none text-left text-white lg-m:block content text-base_t"
            >
              {{ suggest.descdesktop }}
            </p>
            <img :src="suggest.img" alt="" class="img" />
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
  </div>
</template>
<style lang="scss" scoped>
.cont-toc {
  z-index: 9;
  grid-row: 2/3;
  grid-column: 1/-1;
  place-self: end center;
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
  display: grid;
  position: fixed;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 80% 20%;
  place-items: center;
  gap: 10px;
  .arrow {
    grid-column: 1/2;
    grid-row: 1/2;
    place-self: start center;
  }
  .avatar-cont {
    grid-column: 2/4;
    grid-row: 1/2;
    place-self: start center;
    .avatar {
      border-radius: 50%;
      object-fit: cover;
      height: 30px;
      width: 30px;
      z-index: 2;

      @media (min-width: 599px) {
        height: 45px;
        width: 45px;
      }
    }
  }
  .reading {
    grid-column: 5/6;
    grid-row: 1/2;
    place-self: start center;
  }
}
</style>
