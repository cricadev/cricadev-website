<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-start justify-start gap-4 lg-m:flex-row lg-m:justify-between">
      <div class="flex justify-start gap-2">
        <div class="flex items-center justify-center gap-1">
          <a class="flex items-center justify-center p-2 text-white transition-all rounded-full hover:cursor-pointer bg-green2 hover:bg-white hover:text-green2 "
            v-for="icon in madeWith" target="_BLANK" :href="getNameTag(icon).link">
            <Icon :name="getNameTag(icon).name" class="w-4 h-4 xs-m:w-6 xs-m:h-6" />
          </a>
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
    return {
      name: "akar-icons:javascript-fill",
      link: "https://javascript.info/"
    }
  } else if (lang == "Vue") {
    return {
      name: "cib:vue-js",
      link: "https://vuejs.org/"
    }
  } else if (lang == "Typescript") {
    return {
      name: "simple-icons:typescript",
      link: "https://www.typescriptlang.org/"
    }
  } else if (lang == "Tailwind") {
    return {
      name: "simple-icons:tailwindcss",
      link: "https://tailwindcss.com/"
    }
  } else if (lang == "Nuxt") {
    return {
      name: "cib:nuxt-js",
      link: "https://nuxt.com/"
    }
  } else if (lang == "Github") {
    return {
      name: "cib:github",
      link: "https://github.com/"
    }
  } else if (lang == "Git") {
    return {
      name: "cib:git",
      link: "https://git-scm.com/"
    }
  } else if (lang == "Coding") {
    return "ant-design:code-filled";
  } else if (lang == "Supabase") {
    return {
      name: "simple-icons:supabase",
      link: "https://supabase.io/"
    }
  } else if (lang == "OpenAI") {
    return {
      name: "simple-icons:openai",
      link: "https://openai.com/"
    }
  }
  else if (lang == "Prisma") {
    return {
      name: "simple-icons:prisma",
      link: "https://www.prisma.io/"
    }
  }
  else if (lang == "Pinia") {
    return {
      name: "logos:pinia",
      link: "https://pinia.vuejs.org/"
    }
  }
};
</script>