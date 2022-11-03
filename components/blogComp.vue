<template>
  <NuxtLink
    class="my-1 blog-container"
    v-for="blogPost in blogPostList"
    :key="blogPost.path"
    :to="blogPost._path"
  >
    <h2
      class="px-4 xs-m:px-2 font-black text-white title text-[1.313rem] tracking-wide leading-[1.313rem] text-left mb-2 xs-m:text-sm_m lg-m:text-lg_d lg-m:leading-none justify-self-start"
    >
      {{ blogPost.title }}
    </h2>
    <p
      class="font-medium content text-[.75rem] text-white px-4 leading-[.85rem] xs-m:text-[0.625rem] xs-m:px-2 lg-m:hidden justify-self-start text-left"
    >
      {{ blogPost.description }}
    </p>
    <p
      class="hidden px-2 font-medium leading-none text-left text-white lg-m:block content text-base_t justify-self-start"
    >
      {{ blogPost.descdesktop }}
    </p>
    <img :src="blogPost.img" alt="" class="img" />
    <div class="my-2 blog-footer">
      <img :src="blogPost.avatar" alt="" class="avatar" />
      <div class="flex flex-col items-start author-date">
        <span class="text-[0.688rem] font-medium author lg-m:text-sm_m">
          {{ blogPost.author }}
        </span>
        <span class="text-[0.563rem] font-light date lg-m:text-xs_t">
          {{ blogPost.dates.published }}
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
        {{ blogPost.duration }}Min
      </span>
    </div>
    <div class="gradient"></div>
  </NuxtLink>
</template>
<script setup>
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});
</script>
<style lang="scss">
.blog-container {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  border-radius: 15px;
  overflow: hidden;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 200px;
  @media (min-width: 599px) {
    height: 250px;
    width: 48%;
  }
  @media (min-width: 1100px) {
    height: 400px;
    width: 31%;
  }
  .blog-footer {
    grid-column: 1/6;
    grid-row: 5/6;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    width: 100%;
    height: 100%;
    .avatar {
      border-radius: 50%;
      object-fit: cover;
      height: 30px;
      width: 30px;
      z-index: 2;
      grid-column: 1/2;
      grid-row: 1/2;
      place-self: center;
    }
    .author-date {
      grid-column: 2/5;
      place-self: center start;

      margin-left: 10px;
    }
    .reading {
      grid-column: 5/6;
      grid-row: 1/2;
      place-self: center;
      padding-right: 10px;
      padding-bottom: 2px;
    }
  }
  .title {
    grid-column: 1/6;
    grid-row: 3/4;
    z-index: 2;
  }
  .content {
    grid-column: 1/6;
    grid-row: 4/5;
    z-index: 2;
  }
  .img {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%) brightness(60%);
  }
  .gradient {
    grid-column: 1/6;
    grid-row: 5/6;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
}
.dark .gradient {
  background: #00010d;
}
.gradient {
  background: #f6f6f6;
}
</style>
