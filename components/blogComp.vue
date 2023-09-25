<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  tags: {
    type: Array,
    required: false,
  },
  isSmall: {
    type: Boolean,
    required: false,
  },
});
const { data: blogPostList } = useAsyncData("blogPostList", () => {
  return queryContent("/blog").find();
});

const { data: suggested } = await useAsyncData(`suggested`, () => {
  // fetch document where the document path matches with the current route
  return queryContent("/blog")
    .where({ tags: { $in: props.tags } })
    .find();
  // get the surround information,
  // which is an array of document that is all the documents but the current one
});

const query = {
  path: '/blog',
  where: [{
    tags: {
      $in: props.tags
    }
  }]
}
</script>

<template>
  <ContentList :query="query">
    <template v-slot="{ list }">
      <NuxtLink class="relative my-1" :class="[
        {
          'blog-small': isSmall,
          'blog-container': !isSmall,
        },
      ]" v-for="blogPost in list" :key="blogPost.path" :to="blogPost._path">
        <h2
          class="px-4 xs-m:px-2 font-black text-white title text-[1.313rem] tracking-wide leading-[1.313rem] text-left xs-m:text-sm_m lg-m:text-lg_d lg-m:leading-none justify-self-start truncate-text">
          {{ blogPost.title }}
        </h2>
        <p class="font-medium content text-[.75rem] xs-m:text-xs_t lg-m:text-sm_m text-white px-4 leading-[.85rem] xs-m:px-2 lg-m:hidden justify-self-start text-left truncate-text"
          v-if="!isSmall">
          {{ blogPost.description }}
        </p>
        <BlogImg :src="blogPost.img" :tags="blogPost.tags" top="0"> </BlogImg>
        <div class="my-2 blog-footer">
          <div class="flex items-start gap-2 author-date">
            <nuxt-img :src="blogPost.avatar" alt="" class="avatar" />
            <div class="flex flex-col">
              <span class="text-[0.688rem] font-medium author lg-m:text-sm_m">
                {{ blogPost.author }}
              </span>
              <span class="text-[0.563rem] font-light date lg-m:text-xs_t">
                {{ blogPost.dates.published }}
              </span>
            </div>
          </div>
          <span class="text-[0.5rem] font-normal reading flex items-center justify-center lg-m:text-[0.75rem]">
            <span class="mr-1">
              <Icon name="ant-design:read-outlined" class="w-[15px] h-[15px] lg-m:w-[20px] lg-m:h-[20px]" />
            </span>
            {{ blogPost.duration }}Min
          </span>
        </div>
        <div class="gradient"></div>
      </NuxtLink>
    </template>
    <template #not-found>
      <p>No articles found.</p>
    </template>
  </ContentList>
</template>

<style lang="scss" scoped>
.blog-small {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  border-radius: 5px;
  overflow: hidden;
  place-items: center;
  place-content: center;
  width: 80%;
  margin: 20px auto;
  height: 200px;

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
      grid-column: 1 /5;
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
    font-size: 1.5rem !important;
    grid-column: 1/6;
    grid-row: 4/5;
    z-index: 2;
    place-self: start;
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

.blog-container {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  border-radius: 15px;
  overflow: hidden;
  place-items: center;
  place-content: center;
  width: 100%;
  height: 220px;

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
      grid-column: 1/5;
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
    place-self: end start;
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
