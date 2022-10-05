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
  <nav class="select-none toc dropdown" ref="dropdown">
    <header
      class="flex items-center justify-between toc-header"
      @click="show = !show"
    >
      <h3 class="text-xl font-bold text-white">Table of contents</h3>
      <Icon
        name="eva:arrow-ios-downward-fill"
        class="z-[999] w-7 h-7 icon text-white"
      />
    </header>

    <ul class="toc-links dropdown dropdown-5" v-if="show">
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc-link _${link.depth} dropdown_item`"
      >
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
.toc {
  @apply bg-green border-none  rounded-lg;
  @apply w-64;

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
  @apply border-none p-4  rounded-lg;
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
.toc-link._3 {
  @apply pl-3;
}
.toc-link._4 {
  @apply pl-6;
}
.toc-link._undefined {
  @apply pl-8;
}
</style>
