<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
});
const active = ref(false);
const activateButton = (e) => {
  e.target.classList.toggle("active");
  active.value = !active.value;
};

const convertTagsIntoIcons = computed(() => {
  if (props.name === "Javascript") {
    return { name: "akar-icons:javascript-fill", text: "Javascript" };
  } else if (props.name === "Vue") {
    return { name: "akar-icons:vue-fill", text: "Vue" };
  } else if (props.name === "CSS") {
    return { name: "akar-icons:css-fill", text: "Vue" };
  } else if (props.name === "React") {
    return { name: "akar-icons:react-fill", text: "React" };
  } else if (props.name === "NodeJS") {
    return { name: "akar-icons:node-fill", text: "Node" };
  } else if (props.name === "Typescript") {
    return { name: "akar-icons:typescript-fill", text: "Typescript" };
  } else if (props.name === "Css") {
    return { name: "akar-icons:css-fill", text: "CSS" };
  } else if (props.name === "HTML") {
    return { name: "akar-icons:html-fill", text: "HTML" };
  } else if (props.name === "Sass") {
    return { name: "akar-icons:sass-fill", text: "Sass" };
  } else if (props.name === "Tailwind") {
    return { name: "file-icons:tailwind", text: "Tailwind" };
  } else if (props.name === "Nuxt") {
    return { name: "cib:nuxt-js", text: "Nuxt" };
  } else if (props.name === "Github") {
    return { name: "akar-icons:github-fill", text: "Github" };
  } else if (props.name === "Git") {
    return { name: "bi:git", text: "Git" };
  } else if (props.name === "NPM") {
    return { name: "akar-icons:npm-fill", text: "CSS" };
  } else if (props.name === "GraphQL") {
    return { name: "akar-icons:graphql-fill", text: "Graphql" };
  } else if (props.name === "Coding") {
    return { name: "ant-design:code-filled", text: "Coding" };
  } else if (props.name === "Bootstrap") {
    return {
      name: "akar-icons:bootstrap-fill",
      text: "Bootstrap",
    };
  } else if (props.name === "Tips") {
    return {
      name: "ic:baseline-tips-and-updates",
      text: "Bootstrap",
    };
  } else if (props.name === "Job") {
    return {
      name: "ep:suitcase",
      text: "Bootstrap",
    };
  } else if (props.name === "About me") {
    return { name: "../images/logo-logo-cricadev.png", text: "About me" };
  } else {
    return { name: "else", text: "else" };
  }
});
console.log(convertTagsIntoIcons);
</script>
<template>
  <button
    class="px-8 py-2 transition-all border-2 border-green2 rounded-xl text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center gap-x-2 relative"
    @click="activateButton"
  >
    <Transition name="slide-up">
      <div class="absolute top-0 w-0 text-white -left-2" v-if="active">
        <div
          class="absolute top-0 left-0 rounded-lg bg-green2"
          v-if="convertTagsIntoIcons.name == '../images/logo-logo-cricadev.png'"
        >
          <img
            src="../images/logo-logo-cricadev.png"
            alt=""
            class="w-3 brightness-[4]"
          />
        </div>
        <div
          class="absolute top-0"
          v-else-if="convertTagsIntoIcons.name == 'else'"
        ></div>
        <div
          class="absolute top-0 left-0 p-2 scale-125 rounded-lg bg-green2"
          v-else
        >
          <Icon :name="convertTagsIntoIcons.name"></Icon>
        </div>
      </div>
    </Transition>

    {{ props.name }}
  </button>
</template>
<style lang="scss">
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}
.slide-up-leave-active {
  transform: scale(0);
}
.slide-up-enter-active {
  transform: scale(1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: scale(0);
}

.slide-up-leave-to {
  opacity: 0;
}
.button {
  @apply text-green;
  transition: all 0.2s;
  &.active {
    transition: all 0.2s;

    &:first-child {
      @apply bg-green2;
    }
    @apply text-white;
  }
}
</style>
