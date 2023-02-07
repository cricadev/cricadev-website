<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const active = ref(false);
const activeAll = ref(false);
const toggle = (e) => {
  if (e.target.innerText == "All") {
    const allTags = document.querySelectorAll(".button-special");
    allTags.forEach((item) => console.log(item));
  }
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
    return { name: "akar-icons:bootstrap-fill", text: "Bootstrap" };
  } else if (props.name === "Tips") {
    return { name: "ic:baseline-tips-and-updates", text: "Bootstrap" };
  } else if (props.name === "Job") {
    return { name: "ep:suitcase", text: "Bootstrap" };
  } else if (props.name === "Cancel") {
    return { name: "ic:baseline-cancel", text: "Cancel" };
  } else if (props.name === "About me") {
    return { name: "About me", text: "About me" };
  } else if (props.name === "All") {
    return { name: "akar-icons:check", text: "" };
  } else if (props.name === "Continue") {
    return { name: "akar-icons:check", text: "" };
  } else {
    return {
      name: "",
    };
  }
});
</script>
<template>
  <label
    class="px-8 py-2 transition-all border-2 border-green2 rounded-lg text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center gap-x-2 relative button-special select-none"
    @click="toggle"
    id="tag"
  >
    <Transition name="slide-up">
      <div class="absolute top-0 text-white -left-2" v-if="active">
        <div
          class="p-2 rounded-lg bg-green2"
          v-if="convertTagsIntoIcons.name == 'About me'"
        >
          <nuxt-img
            src="../images/logo-logo-cricadev.png"
            alt=""
            class="h-5 brightness-[4] top-0 left-0"
          />
        </div>
        <div
          class="absolute top-0 left-0 p-2 rounded-lg scale-[1.15] bg-green2"
          v-else
        >
          <Icon :name="convertTagsIntoIcons.name"></Icon>
        </div>
      </div>
      <div class="hidden" v-else></div>
    </Transition>

    {{ props.name }}
    <input
      type="checkbox"
      for="tag"
      @click="active.value != active.value"
      v-model="active"
    />
  </label>
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
  &:hover {
    @apply bg-green2 text-white;
  }
  &.active {
    transition: all 0.2s;

    &:first-child {
      @apply bg-green2;
    }
    @apply text-white;
  }
}
</style>
