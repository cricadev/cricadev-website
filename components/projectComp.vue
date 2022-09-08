<template lang="">
  <div class="grid w-10/12 h-20 grid-cols-5 grid-rows-4 project-container">
    <div class="bg"></div>

    <h2 class="font-black text-center text-base_m no-hover-h2">
      {{ title }}
    </h2>
    <h2 class="font-black text-center hover-h2 text-sm_m">{{ title }}</h2>
    <p class="hover-p text-[0.75rem] font-light leading-3">
      {{ content }}
      <a class="block pt-1 font-normal text-green" @click="openModal"
        >Read more...</a
      >
    </p>

    <div class="flex gap-4 text-white box-buttons">
      <a href="" class="button-1 btn"
        >Code <span><Icon name="ant-design:code-filled" /> </span
      ></a>
      <a href="" class="button-2 btn"
        >Project <span><Icon name="carbon:view-filled" /> </span
      ></a>
    </div>
    <div class="flex flex-col text-black dark:text-white icons">
      <Icon name="cib:nuxt-js" class="" />
      <Icon name="akar-icons:vue-fill" class="" />
      <Icon name="bxl:tailwind-css" class="" />
    </div>
    <img :src="img" alt="" class="bg-project" />
    <div class="dark-grad-project" v-if="$colorMode.value === 'dark'"></div>
    <div class="grad-project" v-if="$colorMode.value === 'light'"></div>
    <div class="bg-white dark:bg-black bg-hover"></div>
    <div
      class="grid items-center justify-center modal dark:bg-black/20 bg-white/20 place-items-center"
      @click="closeModalOutside"
    >
      <div class="absolute top-0 right-0 opacity-0 span">{{ title }}</div>
      <div
        class="absolute grid w-11/12 bg-white dark:bg-black h-3/4 modal-content"
      >
        <div class="absolute w-6 h-6 left-8 top-8 z-[9999]" @click="closeModal">
          <Icon name="akar-icons:arrow-back" class="relative w-6 h-6" />
        </div>
        <img :src="square" alt="" class="bg-modal" />
        <h2 class="font-black text-base_m">{{ title }}</h2>
        <p class="font-medium text-[0.75rem] leading-4 px-8">
          {{ content2 }}
        </p>
        <span class="made font-medium text-[0.75rem] leading-3">Made with</span>

        <div
          class="flex flex-row space-x-4 text-black dark:text-white icons-modal"
        >
          <Icon name="cib:nuxt-js" class="" />
          <Icon name="akar-icons:vue-fill" class="" />
          <Icon name="bxl:tailwind-css" class="" />
        </div>

        <div class="flex gap-4 text-white box-buttons-modal text-xs_m">
          <a href="" class="button-1 btn"
            >Code <span><Icon name="ant-design:code-filled" size="12" /> </span
          ></a>
          <a href="" class="button-2 btn"
            >Project <span><Icon name="carbon:view-filled" size="12" /> </span
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>
<script setup>
defineProps({
  title: String,
  img: String,
  content: String,
  square: String,
  content2: String,
});
function openModal(e) {
  const modal = document.querySelectorAll(".modal");
  const target = e.currentTarget.parentElement.previousSibling.innerText;

  modal.forEach((item) => {
    //    console.log(item.firstChild.firstChild.data == target);
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
function consolelog(e) {
  console.log(e);
}
</script>
<style lang="scss">
.modal-content {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, 1fr);
  grid-auto-flow: column;
  place-self: center;
  place-items: center;
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
  }
  .box-buttons-modal {
    grid-column: 1/2;
    grid-row: 6/7;
    place-self: center;
    padding-top: 40px;
    .btn {
      font-size: 0.75rem;
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
  border-radius: 10%;
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
  }
  .bg-hover {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;

    height: 100%;
    width: 100%;

    z-index: 2;
  }
  .box-buttons {
    grid-column: 1/6;
    grid-row: 4/5;
    opacity: 0;
  }
  .btn {
    border-radius: 20px;
  }
  .icons {
    opacity: 0;
    grid-column: 5/6;
    grid-row: 3/4;
    place-self: start end;
    padding-top: 10px;
    padding-right: 20px;
    z-index: 3;
  }
  .hover-h2 {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/4;
    padding-left: 25px;
    place-self: start;
    z-index: 3;
  }
  .hover-p {
    opacity: 0;
    grid-column: 1/6;
    grid-row: 3/5;
    width: 80%;
    place-self: center start;
    padding-bottom: 20px;
    padding-left: 25px;
    z-index: 3;
  }

  .bg {
    grid-column: 1/6;
    grid-row: 1/5;
    height: 100%;
    width: 100%;
    background: transparent;
    backdrop-filter: blur(10px);
    z-index: 2;
  }
  .bg-project {
    grid-column: 1/6;
    grid-row: 1/5;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .no-hover-h2 {
    grid-column: 3/4;
    grid-row: 2/4;
    z-index: 3;
    color: #f6f6f6;
  }
  &:hover {
    & {
      flex-grow: 6;
    }

    .bg {
      opacity: 0;
      transition: opacity 0.2s ease-in;
    }
    .bg-project {
      grid-row: 1/3;
      transition: all 0.2s ease-in-out;
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
