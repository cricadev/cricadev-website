<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
  relative: {
    type: Boolean,
    required: false,
    default: false,
  },
  top: {
    type: String,
    required: false,
    default: "0",
  },
  width: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const convertTagsIntoIcons = computed(() => {
  return props.tags.map((tag) => {
    if (tag === "Javascript") {
      return { name: "akar-icons:javascript-fill", text: "Javascript" };
    } else if (tag === "Vue") {
      return { name: "akar-icons:vue-fill", text: "Vue" };
    } else if (tag === "react") {
      return { name: "akar-icons:react-fill", text: "React" };
    } else if (tag === "node") {
      return { name: "akar-icons:node-fill", text: "Node" };
    } else if (tag === "Typescript") {
      return { name: "akar-icons:typescript-fill", text: "Typescript" };
    } else if (tag === "css") {
      return { name: "akar-icons:css-fill", text: "CSS" };
    } else if (tag === "html") {
      return { name: "akar-icons:html-fill", text: "HTML" };
    } else if (tag === "sass") {
      return { name: "akar-icons:sass-fill", text: "Sass" };
    } else if (tag === "Tailwind") {
      return { name: "file-icons:tailwind", text: "Tailwind" };
    } else if (tag === "Nuxt") {
      return { name: "cib:nuxt-js", text: "Nuxt" };
    } else if (tag === "github") {
      return { name: "akar-icons:github-fill", text: "Github" };
    } else if (tag === "Coding") {
      return { name: "ant-design:code-filled", text: "Coding" };
    } else {
      return { name: "/logo-logo-cricadev.png", text: "About me" };
    }
  });
});
</script>
<template>
  <div
    class="w-full h-full mx-auto fuck"
    :class="[
      //relative if relative is true
      { relative: relative },
      //absolute if relative is false
      { absolute: !relative },
    ]"
  >
    <div class="relative">
      <nuxt-img
        :src="src"
        alt=""
        class="object-cover w-full h-full mx-auto rounded-lg grayscale brightness-75"
        :class="{
          'w-128': width,
          'h-128': width,
        }"
      />
      <div
        class="absolute left-0 grid grid-flow-col grid-rows-2 gap-1"
        :class="`top-${top}`"
      >
        <span
          class="flex items-center w-full gap-2 p-2 text-white rounded-r-lg bg-green2 icon-anim"
          v-for="(index, key) of convertTagsIntoIcons"
          :key="key"
        >
          <div class="" v-if="index.name == '/logo-logo-cricadev.png'">
            <nuxt-img
              src="/logo-logo-cricadev.png"
              alt=""
              class="w-4 brightness-[4]"
            />
          </div>
          <Icon :name="index.name" v-else></Icon>
          <span class="flex w-full bg-green2 border-r-lg text-sm_m">
            {{ index.text }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.fuck {
  grid-column: 1/6;
  grid-row: 1/6;
}
.icon-anim {
  span {
    text-align: justify;

    position: absolute;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    span {
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
