<template lang="">
  <div class="absolute top-0 left-0 flex w-full h-full">
    <div
      class="absolute w-6 h-6 right-10 bottom-10 z-[9999] text-white"
      @click="nextSlide"
    >
      <Icon
        name="ant-design:arrow-right-outlined"
        class="relative p-2 text-white rounded-lg bg-green2"
        size="40px"
      />
    </div>
    <QandA
      tag="akar-icons:vue-fill"
      tagline="Vue.js"
      question="What is Vue.js?"
      stars="1"
      content="Vue js is progressive javascript script used to create dynamic user
    interfaces. Vue js is very easy to learn.In order to work with Vue js
    you just need to add few dynamic features to a website. You don’t need
    to install any thing to use Vue js just need add Vue js library in your
    project."
      icon="logos:vue"
    ></QandA>
    <QandA
      tag="logos:javascript"
      tagline="JavaScript"
      question="What is typeof operator?"
      stars="1"
      content="JavaScript provides a typeof operator that can examine a value and tell you what type it is:"
      icon="logos:javascript"
    ></QandA>
    <QandA
      tag="logos:react"
      tagline="React"
      question="How would you prevent a component from rendering in React?"
      stars="1"
      content="Returning null from a component's render method does not affect the firing of the component's lifecycle methods."
      icon="logos:react"
    ></QandA>
    <QandA
      tag="vscode-icons:file-type-html"
      tagline="HTML"
      question="What is an iframe and how it works?"
      stars="1"
      content="An iframe is an HTML document which can be embedded inside another HTML page."
      icon="vscode-icons:file-type-html"
    ></QandA>
    <QandA
      tag="vscode-icons:file-type-css"
      tagline="CSS"
      question="What is Sass?"
      stars="1"
      content="Sass or Syntactically Awesome StyleSheets is a CSS preprocessor that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, inline imports, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized, and get small stylesheets up and running quickly.
      A CSS preprocessor is a scripting language that extends CSS by allowing developers to write code in one language and then compile it into CSS."
      icon="vscode-icons:file-type-css"
    ></QandA>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { onMounted } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
function openModal(e) {
  const modal = document.querySelectorAll(".modal");
  const target = e.currentTarget.innerText;
  modal.forEach((item) => {
    if (item.firstChild.lastChild.innerText == target) {
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
onMounted((e) => {
  const qa = document.querySelectorAll(".qa");
  qa.forEach((item) => {
    item.classList.add("activeSlide");
  });
  qa[0].classList.add("deactiveSlide");
  console.log(qa);
});
function nextSlide(e) {
  const target = e.currentTarget.nextElementSibling;
  console.log(target);
  target.classList.add("activeSlide");
  target.nextElementSibling.classList.add("deactiveSlide");
}
</script>
<style lang="scss">
.activeSlide {
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;
  opacity: 0;
}
.deactiveSlide {
  transform: translateX(0);
  transition: all 0.5s ease-in-out;
  opacity: 1;
}

.dark .carousel__prev,
.carousel__prev {
  transform: translateX(20%) scale(1.2) translateY(-70%);
  @media (min-width: 599px) {
    transform: translateX(20%) scale(1.5) translateY(-50%);
  }
  @media (min-width: 1100px) {
    transform: translateX(20%) scale(2) translateY(-50%);
  }
}
.dark .carousel__next,
.carousel__next {
  transform: translateX(-20%) scale(1.2) translateY(-70%);
  @media (min-width: 599px) {
    transform: translateX(-20%) scale(1.5) translateY(-50%);
  }
  @media (min-width: 1100px) {
    transform: translateX(-20%) scale(2) translateY(-50%);
  }
}
.dark .carousel__prev,
.dark .carousel__next {
  background: transparent;
  .carousel__icon {
    fill: #f6f6f6;
  }
}
.carousel__prev,
.carousel__next {
  background: transparent;
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
</style>
