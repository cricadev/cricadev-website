<script setup>
import { ref, onMounted } from "vue";
import autoAnimate from "@formkit/auto-animate";

const dropdown = ref(); // we need a DOM node
const show = ref(false);

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
</script>

<template>
  <div>
    <div class="lg-m:hidden">
      <div
        class="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-[9998] transition-all"
        v-if="show"
        @click="show = false"
      ></div>
      <nav
        class="left-0 flex w-screen select-none toc dropdown top-36 z-[9999] fixed"
        ref="dropdown"
      >
        <Icon
          name="ic:baseline-toc"
          class="absolute w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] text-white"
          :class="{ 'bg-green2/0 opacity-0': show }"
          @click="show = !show"
        />
        <ul
          class="z-[9999] toc-links dropdown dropdown-5 toc-activate border-b-green border-b-2"
          v-if="show"
        >
          <div class="flex items-center justify-between">
            <Icon
              name="ic:baseline-toc"
              class="absolute w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] text-white"
              :class="{ 'bg-green2/0': show }"
            />
            <h3 class="top-0 text-white pl-14 text-sm_d">Table of Content</h3>
            <Icon
              name="clarity:caret-line"
              class="w-6 h-6 text-white transition-all caret-rotate-negative"
              @click="show = !show"
            ></Icon>
          </div>
          <!-- render each link with depth class -->
          <li
            v-for="link of flattenLinks(links)"
            :key="link.id"
            :class="`toc-link _${link.depth} dropdown_item`"
            @click="show = !show"
          >
            <a :href="`#${link.id}`" class="block w-full">
              <span class="w-4 h-12 bg-green"></span>
              {{ link.text }}
            </a>
          </li>
        </ul>
        <ul
          class="z-[9999] toc-links dropdown dropdown-5 toc-deactivate border-b-green border-b-2"
          v-if="!show"
        >
          <div class="flex items-center justify-between">
            <Icon
              name="ic:baseline-toc"
              class="absolute w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] text-white"
              :class="{ 'bg-green2/0': show }"
            />
            <h3 class="top-0 text-white pl-14 text-sm_d">Table of Content</h3>
            <Icon
              name="clarity:caret-line"
              class="w-6 h-6 text-white transition-all caret-rotate-negative"
              @click="show = !show"
            ></Icon>
          </div>
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
    </div>
    <div class="hidden lg-m:block desktop-toc">
      <div
        class="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-[9998] transition-all"
        v-if="show"
        @click="show = false"
      ></div>

      <div
        class="fixed items-center justify-between w-64 px-4 rounded-md 2xl-m:w-80 top-48 bg-green2 gap-x-2 show-toc"
        @click="show = !show"
        v-if="show"
      >
        <div class="flex items-center justify-between w-full">
          <Icon
            name="ic:baseline-toc"
            class="w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] text-white"
            :class="{ 'bg-green2/0': show }"
          />
          <h3 class="text-white text-sm_d">Table of Content</h3>
          <Icon
            name="clarity:caret-line"
            class="w-6 h-6 text-white caret-rotate"
            :class="[
              {
                'rotate-180': show,
              },
            ]"
          ></Icon>
        </div>
        <ul class="translate-ul" v-if="show">
          <!-- render each link with depth class -->
          <li
            v-for="link of flattenLinks(links)"
            :key="link.id"
            class=""
            :class="` _${link.depth} dropdown_item `"
            @click="show = !show"
          >
            <a
              :href="`#${link.id}`"
              class="block w-full py-1 toc-link"
              :class="` _${link.depth} dropdown_item `"
            >
              <span class="w-4 h-12 bg-green"></span>
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
      <div
        class="fixed flex items-center justify-between w-64 px-4 rounded-md 2xl-m:w-80 top-48 bg-green2 gap-x-2"
        @click="show = !show"
        v-else
      >
        <Icon
          name="ic:baseline-toc"
          class="w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] text-white"
          :class="{ 'bg-green2/0': show }"
        />
        <h3 class="text-white text-sm_d">Table of Content</h3>
        <Icon
          name="clarity:caret-line"
          class="w-6 h-6 text-white transition-all caret-rotate-negative"
        ></Icon>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.show-toc {
}
.desktop-toc {
  grid-column: 1/2;
  width: 100%;
  position: relative;
}
.caret-rotate {
  // animate a rotation of 180 degrees with keyframes
  animation: caret-rotate 0.3s ease-in-out;
  @keyframes caret-rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
}
.caret-rotate-negative {
  // animate a rotation of 180 degrees with keyframes
  animation: caret-rotate-negative 0.3s ease-in-out;
  @keyframes caret-rotate-negative {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
.toc {
  @apply border-none;

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
.toc-deactivate {
  animation: toc-de 0.5s ease-in-out forwards;
  @keyframes toc-de {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-100%);
    }
  }
  @media (min-width: 1100px) {
    animation: toc-de-m 0.5s ease-in-out forwards;
    @keyframes toc-de-m {
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-10%);
      }
    }
  }
}
.toc-activate {
  animation: toc 0.5s ease-in-out forwards;
  @keyframes toc {
    0% {
      opacity: 1;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (min-width: 1100px) {
    animation: toc-m 0.5s ease-in-out forwards;
    @keyframes toc-m {
      0% {
        opacity: 0;
        transform: translateX(0);
      }
      100% {
        opacity: 1;
        transform: translateY(10%);
      }
    }
  }
}
.toc-links {
  @apply flex flex-col gap-2 w-full bg-[#238166]/60  p-4;
}
.toc-link {
  @apply text-white font-medium text-sm_d bg-[#238166]/60;
  cursor: pointer;
  color: #fff;
  transition: 0.6s;
  background: rgba(0, 0, 0, 0);
  &:hover,
  &.active {
    background-size: 200%;
    background-image: linear-gradient(
      to left,
      #1f6853,
      rgba(90, 175, 152, 1),
      #1f6853
    );
    background-position: right;
  }
}
.toc-link._2 {
  @apply pl-12;
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
