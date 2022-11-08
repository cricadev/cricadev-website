<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const show = ref(false);

onMounted(() => {
  autoAnimate(dropdown.value); // thats it!
});
// define links prop
defineProps(["links"]);
// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return _links;
};
const active = (e) => {
  // get parent element
  let parent = e.target.parentElement.parentElement;
  parent.classList.toggle("active");
};
</script>

<template>
  <nav
    class="left-0 flex w-screen select-none toc dropdown top-36 z-[9999] fixed"
    ref="dropdown"
    @click="show = !show"
  >
    <Icon
      name="ic:baseline-toc"
      class="absolute w-10 h-10 p-1 transition-all rounded-r-lg bg-green2"
      :class="{ 'bg-green2/0': show }"
    />

    <ul class="toc-links dropdown dropdown-5" v-if="show">
      <h3 class="pl-10 mb-8">Table of Content</h3>
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc-link _${link.depth} dropdown_item`"
      >
        <a :href="`#${link.id}`">
          <span class="w-4 h-12 bg-green"></span>
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
.toc {
  @apply border-none  rounded-lg bg-green2/50;

  & .icon {
    transition: 0.4s ease-in-out;
  }
  & .icon-open {
    transform: rotate(180deg);
    transition: 0.2s ease-in-out;
    animation: start 0.2s ease-in-out;
  }
  @keyframes start {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
}
.toc-header {
  @apply border-none   rounded-lg;
}
.toc-links {
  @apply flex flex-col gap-2 px-6 py-4;
}
.toc-link {
  @apply text-white;
  &:hover > a {
    @apply text-black;
  }
}
.toc-link._2 {
  @apply pl-12;
  &:after {
    content: "";
    position: absolute;
    width: 2px;
    background: white;
    height: 50%;
    left: 10%;
  }
}
.toc-link._3 {
  @apply pl-16;
}
.toc-link._4 {
  @apply pl-24;
}
.toc-link._undefined {
  @apply pl-8;
}
</style>
