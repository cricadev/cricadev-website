<template lang="">
  <div class="pt-16 sm-m:pt-32">
    <div
      class="fixed top-0 left-0 z-10 w-full h-64 bg-white dark:bg-black bg-header-blog"
    ></div>
    <h2
      class="fixed z-20 w-full tracking-widest text-center uppercase text-xl_m xs-m:text-xl3_t lg-m:text-xl5_d projects-title"
    >
      Projects
    </h2>
    <PortfolioTags></PortfolioTags>
    <div
      class="fixed bottom-0 left-0 z-10 w-full bg-white h-14 dark:bg-black footer-mobile lg-m:h-20 xs:hidden"
    ></div>

    <NuxtPage />
  </div>
</template>
<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount } from "vue";

const { path } = useRoute();
const router = useRouter();

const { data: projects } = useAsyncData("projects", () => {
  return queryContent("/portfolio").sort({ id: -1 }).find();
});
console.log(projects);

useHead({
  title: "CricaDev | Portfolio",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "Welcome to my portfolio, this is where all my projects live, you can find all of them as subdomains on this website!",
    },
  ],
});
function handleClick(e) {
  const link = document.querySelectorAll(".link-project");
  const target = e.currentTarget;
  link.forEach((item) => {
    if (item == target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
function handleClickBack(e) {
  const link = document.querySelector(".link-project");
  hoverToggle.classList.remove("active");
}
</script>
<style lang="scss" scoped>
.dark .footer-mobile {
  filter: drop-shadow(5px -40px 27px #00010d);
}
.footer-mobile {
  filter: drop-shadow(5px -40px 27px #f6f6f6);
}
.project-order {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  @media (max-height: 780px) {
    height: 90vh;
  }
  @media (min-width: 1100px) {
    margin-top: 20%;
  }
}
.dark .project-carousel {
  background: #00010d;
  filter: drop-shadow(5px 40px 27px #00010d);
}
.project-carousel {
  place-items: center;
  background: #f6f6f6;
  z-index: 20;
  filter: drop-shadow(0px 40px 27px #f6f6f6);
  width: 100%;
  @media (min-width: 1100px) {
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  img {
    @media (min-width: 1100px) {
      width: 50%;
    }
  }
  .app {
    place-self: start center;
    grid-column: 1/3;
    grid-row: 2/3;
  }
  .landing {
    place-self: start center;
    grid-column: 2/3;
    grid-row: 3/4;
  }
  .all {
    place-self: end center;
    grid-column: 2/5;
    grid-row: 3/4;
    margin-top: 5px;
  }
  .challenges {
    place-self: start center;
    grid-column: 4/6;
    grid-row: 2/3;
  }
  .portfolio {
    place-self: start center;
    grid-column: 4/5;
    grid-row: 3/4;
  }
}
.image-border {
  grid-row: 1/3;
  grid-column: 2/5;
}
.link-project {
  font-size: 0.75rem;
  color: #1f6853;
  transition: transform 0.4s ease-in-out;
  @media (min-width: 599px) {
    font-size: 1rem;
  }

  &:hover {
    color: #5aaf98;
    text-shadow: 0 0 5px #5aaf98, 0 0 10px #5aaf98;
    transform: scale(1.2);
    transition: transform 0.2s ease-in-out;
  }
  &.active {
    color: #5aaf98;
    text-shadow: 0 0 5px #5aaf98, 0 0 10px #5aaf98;
    transform: scale(1.4);
    transition: transform 0.2s ease-in-out;
  }
}
</style>
