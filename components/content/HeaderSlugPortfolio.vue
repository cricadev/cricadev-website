<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-start justify-start gap-4 lg-m:flex-row lg-m:justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center justify-center p-2 rounded-full bg-green2" v-for="icon in madeWith">
          <Icon :name="getNameTag(icon)" class="w-4 h-4 text-white xs-m:w-6 xs-m:h-6" />
        </div>
      </div>
      <div class="flex justify-between w-full gap-4 lg-m:justify-end">
        <a target="_blank" :href="projectLink" class="text-black underline dark:text-white">Visit
          {{ alt }}</a>
        <a target="_blank" :href="githubLink" class="text-black underline dark:text-white">Take a
          look at the
          code</a>
      </div>
    </div>

    <nuxt-img :src="src" provider="cloudinary" :alt="alt">
    </nuxt-img>





  </div>
</template>
<script setup>
defineProps({
  madeWith: {
    type: Array,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: ""
  },
  src: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: false,
  },
  projectLink: {
    type: String,
    required: false,

  }
})
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
  } else if (lang == "Supabase") {
    return "simple-icons:supabase";
  } else if (lang == "OpenAI") {
    return "simple-icons:openai";
  }
};
</script>