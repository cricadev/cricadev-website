<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: false,
  },
});

function openModal(e) {
  const modal = document.querySelectorAll(".modal");
  const target = e.currentTarget.parentElement.previousSibling.innerText;

  modal.forEach((item) => {
    if (item.firstChild.firstChild.data == target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function closeModal(e) {
  const modal = document.querySelectorAll(".modal");
  modal.forEach((item) => {
    item.classList.remove("active");
  });
}
function closeModalOutside(e) {
  const modal = document.querySelectorAll(".modal");
  if (e.currentTarget === e.target) {
    modal.forEach((item) => {
      item.classList.remove("active");
    });
  }
}
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
  }
};
</script>
<template>
  <ContentList
    path="/portfolio"
    :query="{
      where: {
        tags: {
          $in: props.tags,
        },
      },
    }"
  >
    <template v-slot="{ list }">
      <div
        class="grid w-full h-64 grid-cols-5 grid-rows-5 my-2 lg:h-96 project-container"
        v-for="blogPost in list"
        :key="blogPost.path"
      >
        <div class="bg"></div>

        <h2
          class="font-black text-center text-base_m no-hover-h2 xs-m:text-xl2_t lg-m:text-xl2_d"
        >
          {{ blogPost.title }}
        </h2>
        <h2
          class="font-black text-center hover-h2 text-sm_m xs-m:text-lg_m lg-m:text-lg_d"
        >
          {{ blogPost.title }}
        </h2>
        <p
          class="hover-p text-[0.75rem] font-light leading-3 xs-m:text-sm_m xs-m:leading-5 lg-m:text-xs_d"
        >
          {{ blogPost.description }}
          <a class="block pt-1 font-normal text-green" @click="openModal"
            >Read more...</a
          >
        </p>

        <div class="flex gap-4 text-white box-buttons xs-m:text-xs_t">
          <a :href="blogPost.code" target="_blank" class="button-1 btn"
            >Code <span><Icon name="ant-design:code-filled" /> </span
          ></a>
          <a :href="blogPost.project" target="_blank" class="button-2 btn"
            >Project <span><Icon name="carbon:view-filled" /> </span
          ></a>
        </div>
        <div class="flex flex-col text-black dark:text-white icons">
          <div class="" v-for="icon in blogPost.madeWith">
            <Icon :name="getNameTag(icon)" class="w-4 h-4 xs-m:w-6 xs-m:h-6" />
          </div>
        </div>
        <img :src="blogPost.img" alt="" class="bg-project" />
        <div
          class="dark-grad-project"
          v-show="$colorMode.value === 'dark'"
        ></div>
        <div class="grad-project" v-show="$colorMode.value === 'light'"></div>
        <div class="bg-white dark:bg-black bg-hover"></div>
        <div
          class="grid items-center justify-center modal dark:bg-black/80 bg-white/80 place-items-center"
          @click="closeModalOutside"
        >
          <div class="absolute top-0 right-0 opacity-0 span">
            {{ blogPost.title }}
          </div>
          <div
            class="absolute grid w-11/12 bg-white dark:bg-black h-3/4 modal-content"
          >
            <div
              class="absolute w-6 h-6 left-4 top-4 z-[9999] text-white"
              @click="closeModal"
            >
              <Icon name="akar-icons:arrow-back" class="relative w-6 h-6" />
            </div>
            <img :src="blogPost.square" alt="" class="bg-modal" />
            <h2 class="font-black text-base_m xs-m:text-xl2_t">
              {{ blogPost.title }}
            </h2>
            <p
              class="font-medium text-[0.75rem] leading-4 px-8 xs-m:text-xs_t xs-m:leading-5 xs-m:px-20"
            >
              {{ blogPost.description }}
            </p>
            <span
              class="made font-medium text-[0.75rem] leading-3 xs-m:text-sm_m"
              >Made with</span
            >

            <div
              class="flex flex-row space-x-4 text-black dark:text-white icons-modal"
            >
              <Icon name="cib:nuxt-js" class="w-4 h-4 xs-m:w-6 xs-m:h-6" />
              <Icon
                name="akar-icons:vue-fill"
                class="w-4 h-4 xs-m:w-6 xs-m:h-6"
              />
              <Icon name="bxl:tailwind-css" class="w-4 h-4 xs-m:w-6 xs-m:h-6" />
            </div>

            <div
              class="flex gap-4 text-white box-buttons-modal text-xs_m xs-m:text-sm_m"
            >
              <a :href="blogPost.code" target="_blank" class="button-1 btn"
                >Code
                <span><Icon name="ant-design:code-filled" size="16" /> </span
              ></a>
              <a :href="blogPost.project" target="_blank" class="button-2 btn"
                >Project
                <span><Icon name="carbon:view-filled" size="16" /> </span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #not-found>
      <p class="text-center">No projects found.</p>
    </template>
  </ContentList>
</template>

<style lang="scss" scoped>
.project-container:first-of-type {
  margin-top: 20px;
}
.project-container:last-child {
  margin-bottom: 20px !important;
}
.modal-content {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  place-self: center;
  place-items: center;
  @media (min-width: 1100px) {
    width: 40%;
  }
  @media (max-height: 780px) {
    height: 90%;
  }
  .bg-modal {
    grid-column: 1/2;
    grid-row: 1/4;
    width: 100%;
    height: 100%;
  }
  h2 {
    grid-column: 1/2;
    grid-row: 4/5;
    place-self: center;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 10px;
  }
  .made {
    grid-column: 1/2;
    grid-row: 5/7;
    place-self: center;
  }
  .icons-modal {
    grid-column: 1/2;
    grid-row: 5/7;
    padding-top: 50px;
    @media (min-width: 599px) {
      padding-top: 70px;
    }
  }

  .box-buttons-modal {
    grid-column: 1/2;
    grid-row: 6/7;
    place-self: center;
    padding-top: 40px;

    .btn {
      font-size: 0.52rem !important;
      font-weight: 300;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        padding-bottom: 2px;
      }
    }
  }
  p {
    grid-column: 1/2;
    grid-row: 4/6;
    padding-top: 20px;
  }
}

.modal.active {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0%);
  transition: all 0.2s ease-in-out;
}
.modal {
  transition: all 0.5s ease-in-out;

  transform: translateY(100%);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
}

.project-container {
  flex-grow: 1;
  transition: 0.5s;
  cursor: pointer;
  place-items: center;
  border-radius: 10px;
  overflow: hidden;

  .grad-project {
    grid-column: 1/6;
    grid-row: 2/3;
    background-image: linear-gradient(
      0deg,
      rgb(246, 246, 246) 0%,
      rgb(246, 246, 246) 30%,
      transparent 100%
    );

    height: 100%;
    width: 100%;
    z-index: 2;

    opacity: 0;
    @media (min-width: 1100px) {
      background-image: linear-gradient(
        90deg,
        transparent 0,
        transparent 80%,
        rgb(246, 246, 246) 100%
      );
      grid-column: 3/4;
      grid-row: 1/6;
    }
  }
  .dark-grad-project {
    grid-column: 1/6;
    grid-row: 2/3;
    background-image: linear-gradient(
      0deg,
      rgb(0, 1, 13) 0%,
      rgb(0, 1, 13) 30%,
      transparent 100%
    );

    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0;
    @media (min-width: 1100px) {
      background-image: linear-gradient(
        90deg,
        transparent 0,
        transparent 80%,
        rgb(0, 1, 13) 100%
      );
      grid-column: 3/4;
      grid-row: 1/6;
    }
  }
  .bg-hover {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;

    height: 100%;
    width: 100%;

    z-index: 2;
    @media (min-width: 1100px) {
      grid-column: 4/6;
      grid-row: 1/6;
    }
  }
  .box-buttons {
    grid-column: 1/6;
    grid-row: 5/6;
    opacity: 0;
    @media (min-width: 1100px) {
      grid-column: 1/4;
    }
    .btn {
      font-size: 0.5rem;
      font-weight: 300;

      @media (min-width: 599px) {
        font-size: 0.813rem;
      }
      @media (min-width: 1100px) {
        font-size: 1rem;
      }
    }
  }
  .btn {
    border-radius: 20px;
  }
  .icons {
    opacity: 0;
    grid-column: 5/6;
    grid-row: 3/5;
    place-self: start end;
    padding-top: 10px;
    padding-right: 20px;
    z-index: 3;
    @media (min-width: 1100px) {
      grid-row: 1/5;
      place-self: center end;
    }
  }
  .hover-h2 {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;
    padding-left: 25px;
    place-self: start;
    z-index: 3;
    @media (min-width: 1100px) {
      grid-column: 4/6;
      grid-row: 1/2;
      place-self: center start;
    }
  }
  .hover-p {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/6;
    width: 80%;
    place-self: center start;
    padding-bottom: 20px;
    padding-left: 25px;
    z-index: 3;
    @media (min-width: 1100px) {
      grid-column: 4/6;
      grid-row: 2/6;
    }
    @media (max-height: 850px) and (max-width: 600px) {
      padding-left: 25px;
      padding-top: 10px;
    }
  }

  .bg {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(10px) brightness(80%);
    z-index: 2;
  }
  .bg-project {
    grid-column: 1/6;
    grid-row: 1/6;
    height: 100%;
    width: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .no-hover-h2 {
    grid-column: 3/4;
    grid-row: 2/5;
    z-index: 3;
    color: #f6f6f6;
  }
  &:hover {
    box-shadow: 0px 0px 21px 4px rgba(90, 175, 152, 0.6);
    & {
      flex-grow: 6;
      @media (min-width: 1100px) {
        flex-grow: 1;
      }
    }

    .bg {
      opacity: 0;
      transition: opacity 0.2s ease-in;
    }
    .bg-project {
      grid-row: 1/3;
      transition: all 0.2s ease-in-out;
      @media (min-width: 1100px) {
        grid-row: 1/6;
        grid-column: 1/4;
      }
    }
    .no-hover-h2 {
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .hover-h2 {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
    .hover-p {
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
    .icons {
      opacity: 1;
      transition: 0.5s all ease-in-out;
    }
    .box-buttons {
      opacity: 1;
      transition: 0.5s all ease-in-out;
      z-index: 3;
      @media (max-height: 850px) and (max-width: 600px) {
        margin: 0;
        padding-top: 20px;
      }
    }
    .bg-hover {
      opacity: 1;
    }
    .dark-grad-project {
      opacity: 1;
    }
    .grad-project {
      opacity: 1;
    }
  }
}
</style>
