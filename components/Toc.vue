<script setup>
import { ref } from "vue";
import { vAutoAnimate } from "@formkit/auto-animate";

const isOpen = ref(false);

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
  <nav class="select-none toc" v-auto-animate>
    <header class="flex items-center justify-between toc-header">
      <h3 class="text-xl font-bold">Table of contents</h3>
      <Icon
        name="eva:arrow-ios-downward-fill"
        class="z-[999] w-7 h-7 icon"
        @click="isOpen = !isOpen"
      />
    </header>

    <ul class="toc-links" v-if="isOpen">
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc-link _${link.depth}`"
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
  @apply p-4 bg-green border border-green rounded-lg;
  @apply w-full mx-auto;
  /*
  position: fixed;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  */

  & .icon {
    transition: 0.4s ease-in-out;
  }
  &.active .icon {
    transform: rotate(180deg);
    transition: 0.2s ease-in-out;
  }
}
.toc-header {
  @apply border-b border-green;
}
.toc-links {
  @apply flex flex-col gap-2 px-2;
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
