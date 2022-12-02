<script setup>
const isCheckAll = ref(false);
const langsdata = ["Apps", "Landing Pages", "Portfolios"];
let languages = ref([]);
let addedLAngs = ref([]);

const checkAll = () => {
  isCheckAll.value = !isCheckAll.value;
  languages = [];
  if (isCheckAll.value) {
    // Check all
    for (var key in langsdata) {
      languages.push(langsdata[key]);
      addedLAngs.value.push(langsdata[key]);
    }
  }
};

const updateCheckall = (lang) => {
  if (languages.length == langsdata.length) {
    isCheckAll.value = true;
  } else {
    isCheckAll.value = false;
  }
  if (addedLAngs.value.includes(lang)) {
    addedLAngs.value.findIndex((item) => {
      if (item == lang) {
        addedLAngs.value.splice(addedLAngs.value.indexOf(lang), 1);
      }
    });
  } else {
    addedLAngs.value.push(lang);
  }
};
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
    return "../public/icon.png";
  }
};
const showMore = ref(true);
const showMoreToggle = () => {
  showMore.value = !showMore.value;
};
</script>
<template>
  <div class="pt-24 xs:pt-16">
    <div
      class="fixed flex flex-col gap-y-4 z-[999] w-full bg-white dark:bg-black py-16 lg:py-4 xs:py-0"
    >
      <div class="flex justify-between"></div>
      <div class="">
        <!-- Check All -->
        <span class="hidden">{{ languages }} {{ addedLAngs }}</span>
        <!-- Checkboxes list -->
        <ul class="filter-container">
          <label
            class="px-8 py-2 transition-all border-2 border-green2 rounded-lg text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center gap-x-2 relative button-special select-none"
            :class="[
              { 'bg-green2 text-white': isCheckAll },
              { 'bg-[transparent] text-green2 dark:text-green': !isCheckAll },
            ]"
          >
            All
            <input
              type="checkbox"
              class="hidden"
              @click="checkAll()"
              v-model="isCheckAll"
            />
          </label>
          <li v-for="lang in langsdata.slice(0, 5)">
            <label
              class="px-8 py-2 transition-all border-2 border-green2 rounded-lg text-[.75rem] pointer-events-auto whitespace-nowrap button flex items-center gap-x-2 relative button-special select-none text-center justify-center"
              :class="[
                {
                  'bg-[transparent] text-white': languages.includes(lang),
                  'bg-[transparent] text-green': !languages.includes(lang),
                },
              ]"
            >
              <div
                class="absolute top-0 left-0 p-[10px] px-3 transition-all rounded-md bg-green2"
                v-if="getNameTag(lang) == '../public/icon.png'"
                :class="[
                  {
                    'bg-[green2] text-white scale-100':
                      languages.includes(lang),
                    'scale-0': !languages.includes(lang),
                  },
                ]"
              >
                <img
                  src="../public/icon.png"
                  alt=""
                  class="w-4 h-4 brightness-[4]"
                />
              </div>
              <div
                class="absolute top-0 left-0 p-2 px-2 transition-all rounded-md bg-green2"
                :class="[
                  {
                    'bg-[green2] text-white scale-100':
                      languages.includes(lang),
                    'scale-0': !languages.includes(lang),
                  },
                ]"
                v-else
              >
                <Icon
                  :name="getNameTag(lang)"
                  class="w-4 h-4 text-white"
                ></Icon>
              </div>
              <span
                class="transition-all"
                :class="[
                  {
                    'bg-[green2] text-black dark:text-white translate-x-4':
                      languages.includes(lang),
                    'translate-x-0 text-green2 dark:text-green':
                      !languages.includes(lang),
                  },
                ]"
              >
                {{ lang }}
              </span>
              <input
                type="checkbox"
                class="hidden"
                v-bind:value="lang"
                v-model="languages"
                @change="updateCheckall(lang)"
              />
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="grid px-4 py-64 mx-auto place-items-center">
      <PortfolioComp :tags="languages"></PortfolioComp>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.view-more {
  animation: view 0.5s ease-in-out forwards;
  @keyframes view {
    0% {
      opacity: 1;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
.view-less {
  animation: view-less 0.5s ease-in-out forwards;
  @keyframes view-less {
    0% {
      opacity: 1;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
.modal-into {
  justify-content: space-around;
  align-items: center;
  height: 80%;
}
.filter-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.8rem;
  justify-content: center;
}
.dark .modal {
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 7%,
    rgba(0, 1, 13, 1) 7%,

    rgba(0, 1, 13, 1) 100%
  );
}
.modal {
  display: grid;
  place-items: center;
  pointer-events: all;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 7%,
    rgba(246, 246, 246, 1) 7%,

    rgba(246, 246, 246, 1) 100%
  );
  transition: all 0.2s;
  // slide out animation
  transform: translateX(100%);

  &.active {
    transform: translateX(0%);

    transition: all 0.2s;
    .arrow {
      pointer-events: all;
      place-self: center start;
      top: 10%;
      left: 10%;
    }
  }
}
</style>
