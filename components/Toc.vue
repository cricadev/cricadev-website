<script setup>


const dropdown = ref(); // we need a DOM node
const show = ref(false);

// define links prop
const props = defineProps(["links"]);
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
onMounted(() => {
  const H2Links = document.querySelectorAll("h2");
  const H3Links = document.querySelectorAll("h3");

  const linksIds = props.links.map((link) => link.id);
  H2Links.forEach((h2) => {
    h2.style.scrollMarginTop = "100px";
  })
  H3Links.forEach((h3) => {
    h3.style.scrollMarginTop = "100px";
  })
})

</script>

<template>
  <div>

    <div class="lg-m:hidden">
      <div class="fixed top-0 left-0 z-[51] w-full h-full transition-all bg-black/50 backdrop-blur-sm" v-if="show"
        @click="show = false"></div>
      <nav class="fixed right-0 z-[52] flex w-screen select-none toc dropdown top-20 pointer-events-none">
        <Icon name="ic:baseline-toc"
          class="absolute w-10 h-10 p-1 transition-all rounded-l-lg bg-green2 z-[9999] text-white right-0"
          :class="{ 'bg-green2/0 opacity-0': show }" @click="show = !show" />
        <ul class="z-[60] toc-links dropdown dropdown-5 toc-activate border-b-green border-b-2" v-if="show">

          <div class="relative z-10 flex items-center justify-between">
            <Icon name="ic:baseline-toc"
              class="absolute z-[60] w-10 h-10 p-1 text-black dark:text-white transition-all rounded-r-lg bg-green2"
              :class="{ 'bg-green2/0': show }" />
            <h3 class="top-0 font-bold text-black dark:text-white pl-14 text-sm_d ">Table of Content</h3>
            <Icon name="clarity:caret-line"
              class="w-6 h-6 text-black transition-all caret-rotate-negative dark:text-white" @click="show = !show">
            </Icon>
          </div>
          <!-- render each link with depth class -->
          <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link _${link.depth} dropdown_item`"
            class="relative z-10" @click="show = !show">
            <a :href="`#${link.id}`" class="block w-full">

              {{ link.text }}
            </a>
          </li>


        </ul>
        <ul class="z-[60] border-b-2 toc-links dropdown dropdown-5 toc-deactivate border-b-green" v-if="!show">
          <div class="flex items-center justify-between">
            <Icon name="ic:baseline-toc"
              class="absolute w-10 h-10 p-1 text-white transition-all bg-transparent rounded-r-lg"
              :class="{ 'bg-green2/0': show }" />
            <span class="top-0 text-white pl-14 text-sm_d">Table of Content</span>
            <Icon name="clarity:caret-line" class="w-6 h-6 text-white transition-all rotate-180 caret-rotate-negative"
              @click="show = !show"></Icon>
          </div>
          <!-- render each link with depth class -->
          <li v-for="link of flattenLinks(links)" :key="link.id" :class="`toc-link _${link.depth} dropdown_item`">
            <a :href="`#${link.id}`">

              {{ link.text }}
            </a>
          </li>


        </ul>
      </nav>

    </div>
    <div class="hidden lg-m:block desktop-toc">
      <div class="fixed top-0 left-0 z-[60] w-full h-full transition-all bg-black/50 backdrop-blur-sm" v-if="show"
        @click="show = false"></div>

      <Transition>
        <div
          class="left-4 z-[61] fixed items-center justify-between w-64 px-4 rounded-md 2xl-m:w-80 top-24  gap-x-2 show-toc bg-[#B8C6C3] dark:bg-[#08191D] "
          v-if="show">
          <div class="flex items-center justify-between w-full">
            <Icon name="ic:baseline-toc"
              class="w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] dark:text-white text-black"
              :class="{ 'bg-green2/0': show }" />
            <h3 class="text-black dark:text-white text-sm_d">Table of Content</h3>
            <Icon name="clarity:caret-line" class="w-6 h-6 text-black dark:text-white caret-rotate" :class="[
              {
                'rotate-180': !show,
              },
            ]"></Icon>
          </div>
          <ul class="translate-ul" v-if="show">
            <!-- render each link with depth class -->
            <li v-for="link of flattenLinks(links)" :key="link.id" class="" :class="` _${link.depth} dropdown_item `"
              @click="show = !show">
              <a :href="`#${link.id}`" class="block w-full py-1 toc-link" :class="` _${link.depth} dropdown_item `">

                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div
          class="left-4 fixed flex items-center justify-between w-64 px-4 rounded-md 2xl-m:w-80 z-[60] top-24 bg-green2 gap-x-2"
          @click="show = !show" v-else>
          <Icon name="ic:baseline-toc" class="w-10 h-10 p-1 transition-all rounded-r-lg bg-green2 z-[9999] text-white"
            :class="{ 'bg-green2/0': show }" />
          <h3 class="text-white text-sm_d">Table of Content</h3>
          <Icon name="clarity:caret-line" class="w-6 h-6 text-white transition-all rotate-180 caret-rotate-negative">
          </Icon>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
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
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
}

.caret-rotate-negative {
  // animate a rotation of 180 degrees with keyframes
  animation: caret-rotate-negative 0.3s ease-in-out;

  @keyframes caret-rotate-negative {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(180deg);
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
  @apply border-none rounded-lg;
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
      transform: translateX(100%);
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
      transform: translateX(100%);
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
  @apply flex flex-col gap-2 w-full bg-[#B8C6C3] dark:bg-[#08191D] p-4;
}



.toc-link {
  @apply dark:text-white text-black font-medium text-sm_d bg-[#238166]/60;
  cursor: pointer;

  transition: 0.6s;
  background: rgba(0, 0, 0, 0);

  &:hover,
  &.active {
    background-size: 200%;
    background-image: linear-gradient(to left,
        #1f6853,
        rgba(90, 175, 152, 1),
        #1f6853);
    background-position: right;
  }
}

.toc-link._2 {
  @apply pl-0 flex gap-2 items-center font-medium;

  &:before {
    content: '';
    display: inline-block;
    height: 20px;
    width: 12px;

    background-image: url('/h2-img.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

}

.toc-link._3 {
  @apply pl-4 flex gap-2 items-center font-normal;

  &:before {
    content: '';
    display: inline-block;
    height: 10px;
    width: 12px;

    background-image: url('/h3-img.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

}

.toc-link._4 {
  @apply pl-8;
}

.toc-link._undefined {
  @apply pl-8;
}
</style>
