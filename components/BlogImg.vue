<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  relative: {
    type: Boolean,
    required: false,
    default: false,
  },
  top: {
    type: Number,
    required: false,
    default: 0,
  },
});
const convertTagsIntoIcons = computed(() => {
  return props.tags.map((tag) => {
    if (tag === "javascript") {
      return "akar-icons:javascript-fill";
    } else if (tag === "Vue") {
      return "akar-icons:vue-fill";
    } else if (tag === "react") {
      return "akar-icons:react-fill";
    } else if (tag === "node") {
      return "akar-icons:nodejs-fill";
    } else if (tag === "Typescript") {
      return "akar-icons:typescript-fill";
    } else if (tag === "css") {
      return "akar-icons:css-fill";
    } else if (tag === "html") {
      return "akar-icons:html-fill";
    } else if (tag === "sass") {
      return "akar-icons:sass-fill";
    } else if (tag === "Tailwind") {
      return "file-icons:tailwind";
    } else if (tag === "Nuxt") {
      return "cib:nuxt-js";
    } else if (tag === "git") {
      return "akar-icons:git-fill";
    } else if (tag === "github") {
      return "akar-icons:github-fill";
    } else {
      return "../images/logo-logo-cricadev.png";
    }
  });
});
console.log(convertTagsIntoIcons);
</script>
<template>
  <div
    class="w-full fuck"
    :class="[
      //relative if relative is true
      { relative: relative },
      //absolute if relative is false
      { absolute: !relative },
    ]"
  >
    <img
      :src="src"
      alt=""
      class="h-56 mx-auto mb-7 blog-img xs-m:h-96 lg-m:h-[420px] w-full object-cover grayscale rounded-lg"
    />
    <div
      class="absolute left-0 grid grid-flow-col grid-rows-2 gap-x-1 gap-y-2"
      :class="`top-${top}`"
    >
      <span
        class="p-2 text-white rounded-r-lg bg-green2"
        v-for="(index, key) of convertTagsIntoIcons"
        :key="key"
      >
        <div class="" v-if="index == '../images/logo-logo-cricadev.png'">
          <img
            src="../images/logo-logo-cricadev.png"
            alt=""
            class="w-4 brightness-[4]"
          />
        </div>
        <Icon :name="index" v-else></Icon>
      </span>
    </div>
  </div>
</template>
