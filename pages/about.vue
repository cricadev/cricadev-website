<template lang="">
  <div class="overflow-x-hidden overflow-y-hidden">
    <div
      class="pt-20 pb-8 ml-6 font-black text-left text-xl3_m xss-m:text-xl4_m about-container lg-m:text-[12.5rem] 2xl-m:text-xl6_d lg-m:ml-0 lg-m:pt-32"
    >
      <span class="letter c1">C </span>
      <span class="about-link link-01">urious</span>

      <div class="meaning-container meaning-01">
        <nuxt-img provider="cloudinary" src="/curious_tcrkqh.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          Without questions, without interest, and without this curiosity, none
          of what we are would be possible. I am curious because I like to learn
          something new every day, and it keeps me from getting bored and keeps
          me on the lookout for solutions. Curiosity is one of the qualities
          that has led humanity to where it is now.
        </p>
      </div>
      <span class="letter r">R </span>

      <span class="about-link link-02">isk-taking</span>
      <div class="meaning-container meaning-02">
        <nuxt-img provider="cloudinary" src="/risktaking_b7pgyi.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          The ability to take risks is one of my favorite traits because it is
          what got me to where I am today. If I had stayed in school instead of
          choosing the self-taught route, I would not have achieved these
          results, or at least not so quickly. Take a risk; if it works out
          great; if it doesn't, you learn from it and move on.
        </p>
      </div>
      <span class="letter i">I </span>

      <span class="about-link link-03">nnovative</span>
      <div class="meaning-container meaning-03">
        <nuxt-img provider="cloudinary" src="/innovative_m11csj.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          Innovation promotes development, new idea adoption, and overcoming
          change's obstacles. We must always innovate in order to compete in the
          modern world because if we don't, we stagnate.
        </p>
      </div>
      <span class="letter c2">C </span>

      <span class="about-link link-04">reative</span>
      <div class="meaning-container meaning-04">
        <nuxt-img provider="cloudinary" src="/creative_mygehc.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          Our capacity for creativity enables us to approach issues in novel and
          open-minded ways. Working with code gives us the flexibility to come
          up with original ideas, create, and go above and beyond what the
          customer requests. Creativity is freedom, and no one is more creative
          than someone who works with code.
        </p>
      </div>
      <span class="letter a">A </span>

      <span class="about-link link-05">mbitious</span>
      <div class="meaning-container meaning-05">
        <nuxt-img provider="cloudinary" src="/ambitious_ceck8y.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          To create a goal and pursue it normally takes a lot of effort and
          labor, but ambition may keep us motivated and will be crucial to
          achieving what we want. Ambition is a key component in getting what we
          want.
        </p>
      </div>
      <span class="letter d">D </span>

      <span class="about-link link-06">etermined</span>
      <div class="meaning-container meaning-06">
        <nuxt-img provider="cloudinary" src="/determined_vebyxa.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          Determination is crucial because it enables us to persevere in the
          face of challenges. We are motivated to move forward fearlessly
          because we want to succeed. Although there are many challenges in
          life, we can conquer them all if we are persistent.
        </p>
      </div>
      <span class="letter e">E </span>

      <span class="about-link link-07">nthusistic</span>
      <div class="meaning-container meaning-07">
        <nuxt-img provider="cloudinary" src="/enthusiastic_guaexf.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          Numerous advantages come from being enthusiastic, including increased
          productivity, safety, the ability to inspire others by being so
          upbeat, and the finest benefit of all: wonderful peace at the end of
          the day. Enthusiasm is also necessary to keep our motivation high.
        </p>
      </div>
      <span class="letter v">V </span>

      <span class="about-link link-08">aluable</span>
      <div class="meaning-container meaning-08">
        <nuxt-img provider="cloudinary" src="/valuable_faij1b.png" alt="" />
        <p class="font-light text-sm_m xs-m:text-base_t lg-m:text-base_m">
          There is much more to you than what you possess that gives you value
          and a purpose; you were born with both. We all have a purpose, and if
          we still don't know what it is, we need to go out and search for it.
          Once we do, we'll employ the seven qualities that identify me, and the
          eighth one will show up: you'll think well of yourself.
        </p>
      </div>
      <h3
        class="absolute left-1/2 top-[10%] translate-x-[-30%] text-base_m tech-titles tech-1 lg-m:relative italic"
      >
        Working
      </h3>
      <span
        class="overflow-x-hidden overflow-y-hidden content text-xs_m xs-m:text-sm_m"
      ></span>
      <h3
        class="absolute left-1/2 top-1/2 translate-x-[-30%] translate-y-[40%] text-base_m tech-titles tech-2 lg-m:relative italic"
      >
        Learning
      </h3>

      <span
        class="overflow-x-hidden overflow-y-hidden content1 text-xs_m xs-m:text-sm_m"
      ></span>
    </div>
  </div>
</template>

<script setup>

const isScriptLoaded = ref(false);
useHead({
  title: "CricaDev | About me",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "Welcome to the about me, here you will find all of my tech stack and my qualities.",
    },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/icon.png" }],

});


const myTags = [
  "JAVASCRIPT",
  "CSS",
  "HTML",
  "GIT",
  "NUXT",
  "VUE",
  "TAILWIND",
  "SASS",
  "NPM",
  "VITE",
  "BOOTSTRAP",
  "VITEST",
  "SUPABASE",
  "VUETIFY",
  "PINIA",
  "TYPESCRIPT",
  "PRISMA",
  "OPENAI"
];
const myTags1 = ["REACT", "MONGODB", "POSTGRESQL", "PHP", "GRAPHQL", "LARAVEL", "NESTJS", "EXPRESS",];

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
  script.onload = () => {
    if (window.innerWidth < 600) {
      var tagCloud = TagCloud(".content", myTags, {
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      });

      let rootEl = document.querySelector(".content");
      rootEl.style.gridRow = "1/5";
      rootEl.style.gridColumn = "2/3";
      rootEl.style.height = "100%";
      rootEl.style.width = "100%";
      rootEl.style.display = "grid";
      rootEl.style.placeItems = "center";
      rootEl.style.marginRight = "30px";

      rootEl.addEventListener("mouseover", mouseOverHandler);

      var tagCloud1 = TagCloud(".content1", myTags1, {
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      });

      let rootEl1 = document.querySelector(".content1");
      rootEl1.style.gridRow = "5/9";
      rootEl1.style.gridColumn = "2/3";
      rootEl1.style.height = "100%";
      rootEl1.style.width = "100%";
      rootEl1.style.display = "grid";
      rootEl1.style.placeItems = "center";
      rootEl1.style.marginRight = "30px";

      rootEl1.addEventListener("mouseover", mouseOverHandler);
    } else if (window.innerWidth < 1100 && window.innerWidth > 600) {
      var tagCloud = TagCloud(".content", myTags, {
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
        radius: 200,
      });

      let rootEl = document.querySelector(".content");
      rootEl.style.gridRow = "1/5";
      rootEl.style.gridColumn = "2/3";
      rootEl.style.height = "100%";
      rootEl.style.width = "100%";
      rootEl.style.display = "grid";
      rootEl.style.placeItems = "center";
      rootEl.style.marginRight = "100px";

      rootEl.addEventListener("mouseover", mouseOverHandler);

      var tagCloud1 = TagCloud(".content1", myTags1, {
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
        radius: 200,
      });

      let rootEl1 = document.querySelector(".content1");
      rootEl1.style.gridRow = "5/9";
      rootEl1.style.gridColumn = "2/3";
      rootEl1.style.height = "100%";
      rootEl1.style.width = "100%";
      rootEl1.style.display = "grid";
      rootEl1.style.placeItems = "center";
      rootEl1.style.marginRight = "100px";
      rootEl1.addEventListener("mouseover", mouseOverHandler);
    } else if (window.innerWidth > 1100) {
      var tagCloud = TagCloud(".content", myTags, {
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
        radius: 180,
      });

      let rootEl = document.querySelector(".content");
      rootEl.style.gridRow = "2/3";
      rootEl.style.gridColumn = "2/5";
      rootEl.style.height = "100%";
      rootEl.style.width = "100%";
      rootEl.style.display = "grid";
      rootEl.style.placeItems = "center";

      rootEl.addEventListener("mouseover", mouseOverHandler);

      var tagCloud1 = TagCloud(".content1", myTags1, {
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
        radius: 180,
      });

      let rootEl1 = document.querySelector(".content1");
      rootEl1.style.gridRow = "2/3";
      rootEl1.style.gridColumn = "5/8";
      rootEl1.style.height = "100%";
      rootEl1.style.width = "100%";
      rootEl1.style.display = "grid";
      rootEl1.style.placeItems = "center";
      rootEl1.addEventListener("mouseover", mouseOverHandler);
    }
  }
  document.head.appendChild(script);

  function mouseOverHandler(e) {
    if (e.target.className === "tagcloud--item") {
      if (!e.target.classList.contains("done")) {
        if (e.target.lastChild.nodeValue === "JAVASCRIPT") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0V0Z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "GIT") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#DE4C36" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21l29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693c5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657c7.663 7.66 7.663 20.075 0 27.74c-7.665 7.666-20.08 7.666-27.749 0c-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462l-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747c-7.665 7.662-20.086 7.662-27.74 0c-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442L4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "HTML") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361"><path fill="#E44D26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766h255.11Z"/><path fill="#F16529" d="m128 337.95l84.417-23.403l19.86-222.49H128V337.95Z"/><path fill="#EBEBEB" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739l-2.919-32.704Zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604l-2.274-25.471Z"/><path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0Zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001ZM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0Zm62.74 0h16.235v32.508h22.824v16.05h-39.06V0Z"/><path fill="#FFF" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89v31.937Zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89v31.86Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "CSS") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 361"><path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36l-104.47 28.962Z"/><path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95l84.417-23.403Z"/><path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937H53.669Zm-5.752-64.641l2.903 31.937H128v-31.937H47.917ZM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58Z"/><path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0Zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0Zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0Z"/><path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "VUE") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 221"><path fill="#41B883" d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z"/><path fill="#41B883" d="m0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z"/><path fill="#35495E" d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "NUXT") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 172"><path fill="#80EEC0" d="M112.973 9.25c-7.172-12.333-25.104-12.333-32.277 0L2.524 143.66c-7.172 12.333 1.794 27.749 16.14 27.749h61.024c-6.13-5.357-8.4-14.625-3.76-22.576L135.13 47.348L112.973 9.25Z"/><path fill="#00DC82" d="M162.505 38.733c5.936-10.09 20.776-10.09 26.712 0l64.694 109.971c5.936 10.091-1.484 22.705-13.357 22.705H111.167c-11.872 0-19.292-12.614-13.356-22.705l64.694-109.971Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "TAILWIND") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "SASS") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 192"><path fill="#CD6799" d="M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362c-2.379-4.71-4.757-8.906-5.176-11.984c-.467-3.59-1.026-5.782-.467-10.072c.56-4.29 3.078-10.399 3.031-10.865c-.046-.466-.56-2.658-5.689-2.704c-5.129-.047-9.559.979-10.072 2.331c-.513 1.352-1.492 4.43-2.145 7.6c-.886 4.664-10.258 21.31-15.62 30.03c-1.726-3.403-3.218-6.388-3.545-8.766c-.466-3.59-1.026-5.782-.466-10.072c.56-4.29 3.078-10.398 3.031-10.865c-.047-.466-.56-2.658-5.689-2.704c-5.13-.047-9.56.979-10.072 2.331c-.513 1.353-1.073 4.523-2.145 7.601c-1.073 3.078-13.523 30.87-16.787 38.05a214.726 214.726 0 0 1-4.15 8.627s-.047.14-.187.373a117.773 117.773 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425c-.28 0-.793-3.357.093-7.927c1.865-9.652 6.295-24.667 6.249-25.18c0-.28.839-2.891-2.891-4.244c-3.638-1.352-4.943.886-5.27.886c-.326 0-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6269.96 6269.96 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523c-.187-.186-.373-.42-.56-.606c-14.269-15.248-40.661-26.02-39.542-46.49c.42-7.461 2.984-27.046 50.687-50.827c39.262-19.352 70.505-13.99 75.914-2.099c7.74 16.974-16.74 48.496-57.309 53.065c-15.481 1.726-23.595-4.243-25.646-6.481c-2.145-2.332-2.472-2.472-3.265-2.005c-1.305.7-.466 2.798 0 4.01c1.213 3.17 6.202 8.766 14.642 11.518c7.461 2.424 25.6 3.777 47.563-4.71c24.574-9.513 43.786-35.952 38.144-58.101c-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035C2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127c-.653.373-1.26.7-1.772.98c-6.482 3.217-31.196 16.133-37.351 29.796c-6.994 15.481 1.12 26.58 6.482 28.071c16.647 4.617 33.76-3.683 42.946-17.393c9.186-13.709 8.067-31.522 3.824-39.682c-.047-.093-.093-.187-.187-.28c1.679-.979 3.404-2.005 5.083-2.984a247.933 247.933 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974c-.7 8.767 2.89 20.144 7.6 24.62c2.099 1.96 4.57 2.006 6.156 2.006c5.502 0 7.974-4.57 10.725-9.979c3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373c6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937c-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99c-5.083 6.061-11.144 13.01-11.984 15.014c-.98 2.378-.746 4.104 1.12 5.503c1.352 1.026 3.776 1.165 6.248 1.026c4.57-.327 7.787-1.446 9.372-2.145c2.472-.886 5.363-2.239 8.067-4.244c4.99-3.684 8.02-8.953 7.741-15.9c-.14-3.824-1.399-7.648-2.938-11.239c.467-.652.886-1.305 1.353-1.958c7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258c-7.414 6.016-11.984 13.01-13.616 17.58c-2.937 8.487-.653 12.31 3.684 13.196c1.958.42 4.756-.513 6.808-1.399c2.611-.839 5.689-2.284 8.627-4.43c4.99-3.683 9.792-8.813 9.512-15.76c-.14-3.171-.979-6.296-2.145-9.327c6.295-2.61 14.409-4.056 24.76-2.844c22.197 2.611 26.58 16.46 25.74 22.29c-.839 5.828-5.502 8.999-7.04 9.978c-1.54.98-2.052 1.306-1.912 2.005c.186 1.026.932.98 2.238.793c1.819-.326 11.658-4.71 12.077-15.435c.7-13.709-12.357-28.677-35.439-28.537ZM49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487c-4.756-2.752-2.891-14.596 6.155-23.082c5.502-5.176 12.59-9.98 17.3-12.917c1.072-.653 2.658-1.585 4.57-2.751c.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243Zm53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357c-2.798-.746-4.524-12.87-.56-24.854c2.005-6.016 6.248-13.197 8.72-15.994c4.01-4.477 8.44-5.97 9.512-4.15c1.353 2.378-4.896 19.724-6.481 23.641Zm44.252 21.17c-1.073.56-2.098.933-2.565.653c-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896Zm34.133-7.787c-.793-.56-.653-2.425 2.005-8.254c1.026-2.285 3.45-6.108 7.601-9.792c.466 1.492.793 2.938.746 4.29c-.047 9-6.481 12.357-10.352 13.756Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "VITE") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="svgIDa" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"/><stop offset="100%" stop-color="#BD34FE"/></linearGradient><linearGradient id="svgIDb" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"/><stop offset="8.333%" stop-color="#FFDD35"/><stop offset="100%" stop-color="#FFA800"/></linearGradient></defs><path fill="url(#svgIDa)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"/><path fill="url(#svgIDb)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "BOOTSTRAP") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 204"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "NPM") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 165"><path fill="#C12127" d="M157.538 164.103h65.641v-32.82h65.642V0H157.538v164.103ZM223.18 32.82H256v65.64h-32.82V32.82ZM315.077 0v131.282h65.64V32.821h32.821v98.461h32.821V32.821h32.82v98.461H512V0H315.077ZM0 131.282h65.641V32.821h32.82v98.461h32.821V0H0v131.282Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "NODEJS") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 314"><defs><linearGradient id="svgIDb" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="svgIDd" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="svgIDe" x1="-4413.77%" x2="5327.93%" y1="13.43%" y2="13.43%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="svgIDf" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="svgIDg" x1="-9713.77%" x2="27.93%" y1="36.21%" y2="36.21%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="svgIDh" x1="-103.861%" x2="100.797%" y1="50.275%" y2="50.275%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><linearGradient id="svgIDi" x1="130.613%" x2="4.393%" y1="-211.069%" y2="201.605%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><path id="svgIDa" d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85Z"/></defs><g fill="none"><path fill="#539E43" d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04Zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18c0 .348-.116.694-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95Z"/><path fill="#333" d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81c1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543l-.116-75.817ZM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849c-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347Zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417Zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543c0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.821 2.821 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0l29.125-16.99Z"/><path fill="#539E43" d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04l9.361-5.433Z"/><g transform="translate(134.068 70.501)"><mask id="svgIDc" fill="#fff"><use href="#svgIDa"/></mask><use fill="url(#svgIDb)" href="#svgIDa"/><g mask="url(#svgIDc)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693Zm4.739 123.203c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079Z"/><path fill="url(#svgIDd)" d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156Z"/></g><g mask="url(#svgIDc)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271ZM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116Z"/><path fill="url(#svgIDe)" fill-rule="evenodd" d="m50.391.809l-.693.347h.924l-.231-.347Z" transform="translate(0 -9.246)"/><path fill="url(#svgIDf)" fill-rule="evenodd" d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2Z" transform="translate(0 -9.246)"/><path fill="url(#svgIDg)" fill-rule="evenodd" d="m111.3 104.712l-.347-.578v.809l.346-.231Z" transform="translate(0 -9.246)"/><path fill="url(#svgIDh)" fill-rule="evenodd" d="m106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814Z" transform="translate(0 -9.246)"/><path fill="url(#svgIDi)" fill-rule="evenodd" d="m106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814Z" transform="translate(0 -9.246)"/></g></g></g></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "MONGODB") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 549"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788c-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "REACT") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "NEXT") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><defs><linearGradient id="svgIDc" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><linearGradient id="svgIDd" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><circle id="svgIDa" cx="128" cy="128" r="128"/></defs><mask id="svgIDb" fill="#fff"><use href="#svgIDa"/></mask><g mask="url(#svgIDb)"><circle cx="128" cy="128" r="128"/><path fill="url(#svgIDc)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"/><path fill="url(#svgIDd)" d="M163.556 76.8h17.067v102.4h-17.067z"/></g></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "GRAPHQL") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 288"><path fill="#E535AB" fill-rule="evenodd" d="m152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402c7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038c-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636c-14.177 0-25.635-11.46-25.635-25.636c0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402c-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635c0 2.548-.37 5.007-1.059 7.328Zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684Zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727Zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757a25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758a25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01Zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607a25.87 25.87 0 0 1-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365Z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue === "TYPESCRIPT") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";

          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#3178C6" d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"/><path fill="#FFF" d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179c6.133 1.151 12.597 1.726 19.393 1.726c6.622 0 12.914-.633 18.874-1.899c5.96-1.266 11.187-3.352 15.678-6.257c4.492-2.906 8.048-6.704 10.669-11.394c2.62-4.689 3.93-10.486 3.93-17.391c0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898c-3.945-2.33-8.394-4.531-13.347-6.602c-3.628-1.497-6.881-2.949-9.761-4.359c-2.879-1.41-5.327-2.848-7.342-4.316c-2.016-1.467-3.571-3.021-4.665-4.661c-1.094-1.64-1.641-3.495-1.641-5.567c0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547c2.591-.604 5.471-.906 8.638-.906c2.304 0 4.737.173 7.299.518c2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719a41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582c-4.981-.777-10.697-1.165-17.147-1.165c-6.565 0-12.784.705-18.658 2.115c-5.874 1.409-11.043 3.61-15.506 6.602c-4.463 2.993-7.99 6.805-10.582 11.437c-2.591 4.632-3.887 10.17-3.887 16.615c0 8.228 2.375 15.248 7.127 21.06c4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66c2.39 1.611 4.276 3.366 5.658 5.265c1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97c-1.756 1.122-3.945 1.999-6.565 2.632c-2.62.633-5.687.95-9.2.95c-5.989 0-11.92-1.05-17.794-3.151c-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"/></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "PINIA") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 331"><defs><linearGradient id="logosPinia0" x1="55.342%" x2="42.817%" y1="0%" y2="42.863%"><stop offset="0%" stop-color="#52CE63"/><stop offset="100%" stop-color="#51A256"/></linearGradient><linearGradient id="logosPinia1" x1="55.349%" x2="42.808%" y1="0%" y2="42.863%"><stop offset="0%" stop-color="#52CE63"/><stop offset="100%" stop-color="#51A256"/></linearGradient><linearGradient id="logosPinia2" x1="50%" x2="50%" y1="0%" y2="58.811%"><stop offset="0%" stop-color="#8AE99C"/><stop offset="100%" stop-color="#52CE63"/></linearGradient><linearGradient id="logosPinia3" x1="51.378%" x2="44.585%" y1="17.473%" y2="100%"><stop offset="0%" stop-color="#FFE56C"/><stop offset="100%" stop-color="#FFC63A"/></linearGradient></defs><path fill="url(#logosPinia0)" d="M67.56 173.328c30.366-2.985 41.08-27.648 44.735-64.823c3.654-37.175-21.174-70.814-31.502-69.799c-10.328 1.015-43.15 40.322-46.805 77.497c-3.654 37.175 3.205 60.11 33.572 57.125" transform="rotate(-38 72.877 106.136)"/><path fill="url(#logosPinia1)" d="M184.454 186.277c30.367 2.986 36.394-20.032 32.74-57.207c-3.655-37.175-35.645-76.4-45.973-77.415c-10.328-1.015-35.989 32.542-32.334 69.717c3.654 37.175 15.201 61.92 45.567 64.905" transform="rotate(52 178.34 119.085)"/><path fill="url(#logosPinia2)" d="M129.232 151.601c27.341 0 34.878-26.184 34.878-67.013c0-40.83-25.579-80.843-34.878-80.843S93.605 43.758 93.605 84.588c0 40.829 8.286 67.013 35.627 67.013" transform="rotate(7 128.858 77.673)"/><path fill="url(#logosPinia3)" d="M113.386 330.307c56.896 0 103.038-16.528 103.038-91.482c0-74.955-46.142-136.462-103.038-136.462c-56.897 0-103.002 61.507-103.002 136.462c0 74.954 46.105 91.482 103.002 91.482"/><ellipse cx="165.427" cy="216.677" fill="#EAADCC" rx="14.717" ry="6.845"/><ellipse cx="57.273" cy="212.57" fill="#EAADCC" rx="14.717" ry="6.845" transform="rotate(7 57.273 212.57)"/><path d="M96.266 210.285a2.054 2.054 0 1 0-3.406 2.295c3.151 4.676 7.997 7.39 14.373 8.119c6.348.725 12.016-.902 16.877-4.852a2.054 2.054 0 1 0-2.59-3.187c-3.999 3.249-8.563 4.559-13.82 3.958c-5.23-.598-8.986-2.7-11.434-6.333M65.818 178.63a14.672 14.672 0 0 1 10.551 3.945a14.67 14.67 0 0 1 4.672 10.25a14.671 14.671 0 0 1-3.945 10.55a14.672 14.672 0 0 1-10.25 4.672a14.67 14.67 0 0 1-10.551-3.945a14.672 14.672 0 0 1-4.67-10.25a14.67 14.67 0 0 1 3.944-10.55a14.67 14.67 0 0 1 10.249-4.672"/><path fill="#FFF" d="M66.59 190.932a4.792 4.792 0 1 0-9.578.336a4.792 4.792 0 0 0 9.579-.336"/><path d="M154.99 182.366a14.671 14.671 0 0 1 10.552 3.944a14.67 14.67 0 0 1 4.67 10.25a14.672 14.672 0 0 1-3.944 10.551a14.67 14.67 0 0 1-10.25 4.671a14.671 14.671 0 0 1-10.55-3.945a14.671 14.671 0 0 1-4.672-10.25a14.67 14.67 0 0 1 3.945-10.55a14.671 14.671 0 0 1 10.25-4.671"/><path fill="#FFF" d="M65.71 175.552c9.824-.343 18.066 7.342 18.409 17.165c.343 9.824-7.342 18.065-17.166 18.408c-9.824.343-18.064-7.342-18.407-17.166c-.343-9.823 7.341-18.064 17.164-18.407m12.252 17.38c-.224-6.423-5.613-11.448-12.037-11.223c-6.422.224-11.447 5.612-11.222 12.035c.224 6.424 5.612 11.448 12.035 11.224c6.423-.224 11.448-5.612 11.224-12.036m76.921-13.645c9.824-.343 18.065 7.342 18.408 17.165c.343 9.824-7.342 18.065-17.165 18.408c-9.824.343-18.065-7.342-18.408-17.165c-.343-9.824 7.342-18.065 17.165-18.408m12.251 17.38c-.224-6.423-5.612-11.447-12.036-11.223c-6.423.224-11.448 5.613-11.223 12.036c.224 6.423 5.612 11.448 12.035 11.224c6.424-.225 11.448-5.613 11.224-12.037"/><path fill="#FFF" d="M155.763 194.668a4.792 4.792 0 1 0-9.578.335a4.792 4.792 0 0 0 9.578-.335"/><path fill="#ECB732" d="m38.083 243.16l22.33 23.235l16.022-17.044a3.765 3.765 0 0 1 5.486 5.157l-16.283 17.324l23.1 24.036a3.765 3.765 0 1 1-5.43 5.218l-22.834-23.761l-10.725 11.41a3.765 3.765 0 1 1-5.486-5.158l10.986-11.688l-22.595-23.511a3.765 3.765 0 1 1 5.43-5.218m149.956 0a3.765 3.765 0 1 1 5.429 5.218l-22.596 23.511l10.988 11.688a3.765 3.765 0 0 1-.042 5.201l-.123.121a3.765 3.765 0 0 1-5.322-.165l-10.725-11.41l-22.834 23.762a3.765 3.765 0 0 1-5.197.222l-.127-.116a3.765 3.765 0 0 1-.105-5.324l23.1-24.036l-16.284-17.324a3.765 3.765 0 0 1 .042-5.2l.123-.121a3.765 3.765 0 0 1 5.321.164l16.021 17.044z"/><path fill="#FFC73B" d="M136.602 126.74a3.765 3.765 0 0 1 0 5.323l-17.53 17.531l10.684 10.686a3.765 3.765 0 0 1 .12 5.2l-.12.125a3.765 3.765 0 0 1-5.324 0l-10.686-10.686l-10.686 10.686a3.765 3.765 0 1 1-5.324-5.325l10.685-10.686l-17.53-17.53a3.765 3.765 0 0 1-.12-5.2l.12-.125a3.765 3.765 0 0 1 5.324 0l17.531 17.53l17.531-17.53a3.765 3.765 0 0 1 5.325 0"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue
          === "VUETIFY") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 222"><path fill="#1697F6" d="m130.711 49.564l-51.043 88.428L128 221.754l64.015-110.877L256 0h-96.692z"/><path fill="#AEDDFF" d="m64.015 110.877l3.352 5.831l47.748-82.742L134.734 0H0z"/><path fill="#1867C0" d="M159.308 0C183.503 79.623 128 221.754 128 221.754l-48.332-83.762z"/><path fill="#7BC6FF" d="M134.734 0C32.794 0 67.367 116.708 67.367 116.708z"/></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "VITEST") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 234"><path fill="#FCC72B" d="m192.115 70.808l-61.2 88.488a5.27 5.27 0 0 1-2.673 2.002a5.285 5.285 0 0 1-3.343-.005a5.25 5.25 0 0 1-2.66-2.01a5.214 5.214 0 0 1-.903-3.203l2.45-48.854l-39.543-8.386a5.256 5.256 0 0 1-2.292-1.118a5.222 5.222 0 0 1-1.83-4.581a5.226 5.226 0 0 1 .895-2.383L142.218 2.27a5.279 5.279 0 0 1 6.016-1.996a5.243 5.243 0 0 1 2.66 2.01c.643.942.96 2.066.903 3.203l-2.45 48.855l39.542 8.386a5.262 5.262 0 0 1 2.293 1.117a5.21 5.21 0 0 1 1.829 4.582a5.212 5.212 0 0 1-.896 2.382z"/><path fill="#729B1B" d="M128.025 233.537a12.356 12.356 0 0 1-8.763-3.63l-57.828-57.823a12.389 12.389 0 0 1 .023-17.5a12.394 12.394 0 0 1 17.5-.024l49.068 49.061L234.917 96.733a12.39 12.39 0 0 1 17.523 17.524l-115.655 115.65a12.343 12.343 0 0 1-8.76 3.63"/><path fill="#729B1B" fill-opacity=".5" d="M127.975 233.537a12.356 12.356 0 0 0 8.763-3.63l57.828-57.823a12.385 12.385 0 0 0 3.605-8.754a12.395 12.395 0 0 0-12.375-12.376a12.4 12.4 0 0 0-8.755 3.606l-49.066 49.061L21.082 96.733a12.392 12.392 0 0 0-17.524 17.524l115.656 115.65a12.347 12.347 0 0 0 8.76 3.63"/></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "PRISMA") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#677EEB" rx="60"/><path fill="#F7FAFC" fill-rule="evenodd" d="M52.658 165.183a9.385 9.385 0 0 1-.075-9.929L123.045 40.32c3.919-6.393 13.382-5.834 16.521.975l64.369 139.631c2.388 5.181-.361 11.277-5.826 12.917l-100.13 30.039a9.384 9.384 0 0 1-10.622-3.964zm78.515-91.257c.679-3.382 5.312-3.87 6.68-.703l44.401 102.74a3.518 3.518 0 0 1-2.224 4.768l-69.182 20.652c-2.543.759-4.979-1.463-4.456-4.065z" clip-rule="evenodd"/></g></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "OPENAI") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.217 19.384A3.501 3.501 0 0 0 18 18.167V13l-6-3.35"/><path d="M5.214 15.014A3.501 3.501 0 0 0 9.66 20.28L14 17.746V10.8"/><path d="M6 7.63c-1.391-.236-2.787.395-3.534 1.689a3.474 3.474 0 0 0 1.271 4.745L8 16.578l6-3.348"/><path d="M12.783 4.616A3.501 3.501 0 0 0 6 5.833V10.9l6 3.45"/><path d="M18.786 8.986A3.501 3.501 0 0 0 14.34 3.72L10 6.254V13.2"/><path d="M18 16.302c1.391.236 2.787-.395 3.534-1.689a3.474 3.474 0 0 0-1.271-4.745l-4.308-2.514L10 10.774"/></g></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "SUPABASE") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 263"><defs><linearGradient id="logosSupabaseIcon0" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stop-color="#249361"/><stop offset="100%" stop-color="#3ECF8E"/></linearGradient><linearGradient id="logosSupabaseIcon1" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%"/><stop offset="100%" stop-opacity="0"/></linearGradient></defs><path fill="url(#logosSupabaseIcon0)" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"/><path fill="url(#logosSupabaseIcon1)" fill-opacity=".2" d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"/><path fill="#3ECF8E" d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue
          === "PHP") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 32 32"><defs><radialGradient id="vscodeIconsFileTypePhp0" cx="-16.114" cy="20.532" r="18.384" gradientTransform="translate(26.52 -9.307)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#4c6b96"/><stop offset="1" stop-color="#231f20"/></radialGradient></defs><ellipse cx="16" cy="16" fill="url(#vscodeIconsFileTypePhp0)" rx="14" ry="7.365"/><ellipse cx="16" cy="16" fill="#6280b6" rx="13.453" ry="6.818"/><path fill="#fff" d="m18.725 18.2l.667-3.434a1.752 1.752 0 0 0-.372-1.719a2.929 2.929 0 0 0-2-.525h-1.153l.331-1.7a.219.219 0 0 0-.215-.26h-1.6a.219.219 0 0 0-.215.177l-.709 3.646a2.051 2.051 0 0 0-.477-1.054a2.783 2.783 0 0 0-2.2-.807H7.7a.219.219 0 0 0-.215.177l-1.434 7.38a.219.219 0 0 0 .215.26h1.603a.219.219 0 0 0 .215-.177l.347-1.785h1.2a5.167 5.167 0 0 0 1.568-.2a3.068 3.068 0 0 0 1.15-.689a3.538 3.538 0 0 0 .68-.844l-.287 1.475a.219.219 0 0 0 .215.26h1.6a.219.219 0 0 0 .215-.177l.787-4.051h1.094c.466 0 .6.093.64.133s.1.165.025.569l-.635 3.265a.219.219 0 0 0 .215.26h1.62a.219.219 0 0 0 .207-.18m-7.395-2.834a1.749 1.749 0 0 1-.561 1.092a2.171 2.171 0 0 1-1.315.321h-.712l.515-2.651h.921c.677 0 .949.145 1.059.266a1.181 1.181 0 0 1 .093.972m14.216-2.034a2.783 2.783 0 0 0-2.2-.807h-3.091a.219.219 0 0 0-.215.177l-1.434 7.38a.219.219 0 0 0 .215.26h1.608a.219.219 0 0 0 .215-.177l.347-1.785h1.2a5.167 5.167 0 0 0 1.568-.2a3.068 3.068 0 0 0 1.15-.689a3.425 3.425 0 0 0 1.076-1.927a2.512 2.512 0 0 0-.439-2.232m-1.667 2.034a1.749 1.749 0 0 1-.561 1.092a2.171 2.171 0 0 1-1.318.32h-.71l.515-2.651h.921c.677 0 .949.145 1.059.266a1.181 1.181 0 0 1 .094.973"/><path fill="#000004" d="M10.178 13.908a1.645 1.645 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.945 1.945 0 0 1-.642 1.223a2.361 2.361 0 0 1-1.448.37h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a4.931 4.931 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.207 3.207 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.568 2.568 0 0 0-2.035-.732H7.7Zm8.126-9.342h1.6l-.387 1.962h1.421a2.767 2.767 0 0 1 1.85.468a1.548 1.548 0 0 1 .305 1.516l-.667 3.434H16.89l.635-3.265a.886.886 0 0 0-.08-.76a1.121 1.121 0 0 0-.8-.2H15.37l-.822 4.228h-1.6Zm8.34 3.126a1.645 1.645 0 0 1 1.221.338a1.34 1.34 0 0 1 .145 1.161a1.945 1.945 0 0 1-.642 1.223A2.361 2.361 0 0 1 22 17h-.978l.6-3.089Zm-3.917 6.216h1.608l.381-1.962h1.377a4.931 4.931 0 0 0 1.5-.191a2.84 2.84 0 0 0 1.07-.642a3.207 3.207 0 0 0 1.01-1.808a2.3 2.3 0 0 0-.385-2.044a2.568 2.568 0 0 0-2.035-.732h-3.092Z"/></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "LARAVEL") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 264"><path fill="#FF2D20" d="M255.856 59.62c.095.351.144.713.144 1.077v56.568c0 1.478-.79 2.843-2.073 3.578L206.45 148.18v54.18a4.135 4.135 0 0 1-2.062 3.579l-99.108 57.053c-.227.128-.474.21-.722.299c-.093.03-.18.087-.278.113a4.15 4.15 0 0 1-2.114 0c-.114-.03-.217-.093-.325-.134c-.227-.083-.464-.155-.68-.278L2.073 205.938A4.128 4.128 0 0 1 0 202.36V32.656c0-.372.052-.733.144-1.083c.031-.119.103-.227.145-.346c.077-.216.15-.438.263-.639c.077-.134.19-.242.283-.366c.119-.165.227-.335.366-.48c.119-.118.274-.206.408-.309c.15-.124.283-.258.453-.356h.005L51.613.551a4.135 4.135 0 0 1 4.125 0l49.546 28.526h.01c.165.104.305.232.454.351c.134.103.284.196.402.31c.145.149.248.32.371.484c.088.124.207.232.279.366c.118.206.185.423.268.64c.041.118.113.226.144.35c.095.351.144.714.145 1.078V138.65l41.286-23.773V60.692c0-.36.052-.727.145-1.072c.036-.124.103-.232.144-.35c.083-.217.155-.44.268-.64c.077-.134.19-.242.279-.366c.123-.165.226-.335.37-.48c.12-.118.269-.206.403-.309c.155-.124.289-.258.454-.356h.005l49.551-28.526a4.13 4.13 0 0 1 4.125 0l49.546 28.526c.175.103.309.232.464.35c.128.104.278.197.397.31c.144.15.247.32.37.485c.094.124.207.232.28.366c.118.2.185.423.267.64c.047.118.114.226.145.35m-8.115 55.258v-47.04l-17.339 9.981l-23.953 13.792v47.04l41.297-23.773zm-49.546 85.095V152.9l-23.562 13.457l-67.281 38.4v47.514zM8.259 39.796v160.177l90.833 52.294v-47.505L51.64 177.906l-.015-.01l-.02-.01c-.16-.093-.295-.227-.444-.34c-.13-.104-.279-.186-.392-.3l-.01-.015c-.134-.129-.227-.289-.34-.433c-.104-.14-.227-.258-.31-.402l-.005-.016c-.093-.154-.15-.34-.217-.515c-.067-.155-.154-.3-.196-.464v-.005c-.051-.196-.061-.403-.082-.604c-.02-.154-.062-.309-.062-.464V63.57L25.598 49.772l-17.339-9.97zM53.681 8.893L12.399 32.656l41.272 23.762L94.947 32.65L53.671 8.893zm21.468 148.298l23.948-13.786V39.796L81.76 49.778L57.805 63.569v103.608zM202.324 36.935l-41.276 23.762l41.276 23.763l41.271-23.768zm-4.13 54.676l-23.953-13.792l-17.338-9.981v47.04l23.948 13.787l17.344 9.986zm-94.977 106.006l60.543-34.564l30.264-17.272l-41.246-23.747l-47.489 27.34l-43.282 24.918z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue
          === "NESTJS") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 255"><path fill="#E0234E" d="M150.736 0c-1.851 0-3.57.397-5.157.926c3.372 2.247 5.223 5.222 6.148 8.594c.067.463.199.794.265 1.256c.066.397.132.794.132 1.19c.265 5.818-1.52 6.545-2.777 9.983c-1.917 4.43-1.388 9.19.926 13.024c.198.463.463.992.793 1.455c-2.512-16.727 11.438-19.239 14.016-24.462c.198-4.561-3.57-7.603-6.545-9.718C155.694.528 153.116 0 150.736 0m21.023 3.768c-.264 1.521-.066 1.124-.132 1.918c-.066.529-.066 1.19-.132 1.719c-.132.528-.264 1.057-.463 1.586c-.132.53-.33 1.058-.528 1.587c-.265.529-.463.992-.728 1.52c-.198.265-.33.53-.529.794l-.396.595c-.33.463-.661.926-.992 1.322c-.397.397-.727.86-1.19 1.19v.066c-.397.331-.793.728-1.256 1.058c-1.388 1.058-2.975 1.851-4.43 2.843c-.462.33-.925.595-1.322.992c-.463.33-.86.66-1.256 1.058c-.463.396-.793.793-1.19 1.256c-.33.396-.727.86-.992 1.322c-.33.463-.66.925-.925 1.388c-.265.53-.463.992-.728 1.52c-.198.53-.396.993-.528 1.521c-.199.595-.331 1.124-.463 1.653c-.066.265-.066.595-.132.86c-.067.264-.067.529-.132.793c0 .529-.067 1.124-.067 1.653c0 .397 0 .793.067 1.19c0 .529.066 1.058.198 1.653c.066.529.198 1.057.33 1.586c.199.53.331 1.058.53 1.587c.131.33.33.661.462.926L139.63 35.04a163.425 163.425 0 0 0-7.669-1.984l-4.165-.991c-3.967-.794-8-1.389-12.032-1.785c-.132 0-.199-.067-.33-.067a118.206 118.206 0 0 0-11.835-.595c-2.909 0-5.818.132-8.66.33c-4.034.265-8.066.794-12.1 1.455c-.991.133-1.983.331-2.974.53c-2.05.396-4.033.859-5.95 1.322l-2.976.793c-.991.397-1.917.86-2.842 1.256l-2.182.992c-.132.066-.265.066-.33.132c-.662.33-1.257.595-1.852.925a3.22 3.22 0 0 0-.463.199c-.727.33-1.454.727-2.049 1.058c-.463.198-.926.462-1.322.66a5.96 5.96 0 0 1-.595.331c-.595.33-1.19.661-1.72.992a16.57 16.57 0 0 0-1.586.992c-.463.33-.925.595-1.322.925c-.066.066-.132.066-.199.132c-.396.265-.859.595-1.256.926l-.132.132l-.991.793c-.133.067-.265.199-.397.265c-.33.264-.661.595-.992.86c-.066.131-.198.198-.264.264c-.397.397-.794.727-1.19 1.124c-.067 0-.067.066-.132.132c-.397.33-.794.727-1.19 1.124c-.067.066-.067.132-.133.132c-.33.33-.66.661-.991 1.058c-.132.132-.33.264-.463.396c-.33.397-.727.794-1.124 1.19c-.066.133-.198.199-.265.331c-.528.529-.991 1.058-1.52 1.587l-.198.198c-1.058 1.124-2.182 2.248-3.372 3.24a37.581 37.581 0 0 1-3.703 2.909a49.985 49.985 0 0 1-3.966 2.512a40.292 40.292 0 0 1-4.165 1.983a47.626 47.626 0 0 1-4.298 1.587c-2.776.595-5.62 1.719-8.065 1.917c-.53 0-1.124.132-1.653.198a66.66 66.66 0 0 0-1.653.397l-1.587.595c-.529.198-1.057.463-1.586.727c-.463.33-.992.595-1.455.926c-.463.33-.925.727-1.322 1.124c-.463.33-.926.793-1.322 1.19c-.397.463-.794.86-1.124 1.322c-.33.529-.727.992-.992 1.52c-.33.464-.661.992-.926 1.521c-.264.595-.528 1.124-.727 1.72a50.953 50.953 0 0 0-.595 1.718c-.132.529-.264 1.058-.33 1.587c0 .066-.067.132-.067.198c-.132.595-.132 1.389-.198 1.785c-.066.463-.132.86-.132 1.322c0 .265 0 .595.066.86c.066.463.132.86.265 1.256c.132.397.264.793.463 1.19v.066c.198.397.462.794.727 1.19c.264.397.529.794.86 1.19c.33.33.726.728 1.123 1.058c.397.397.794.727 1.256 1.058c1.587 1.388 1.984 1.851 4.033 2.909c.33.198.661.33 1.058.529c.066 0 .132.066.198.066c0 .132 0 .198.067.33c.066.53.198 1.058.33 1.587c.132.595.33 1.124.529 1.587c.198.397.33.793.529 1.19c.066.132.132.265.198.33c.265.53.53.992.794 1.455l.991 1.388c.33.397.727.86 1.124 1.257c.397.396.794.727 1.256 1.123c0 0 .067.067.132.067c.397.33.794.66 1.19.925c.463.33.926.595 1.455.86c.463.264.992.529 1.52.727c.397.198.86.33 1.323.463c.066.066.132.066.264.132c.265.066.595.132.86.198c-.199 3.57-.265 6.942.264 8.132c.595 1.322 3.504-2.71 6.413-7.338c-.396 4.561-.66 9.916 0 11.503c.727 1.653 4.694-3.504 8.132-9.19c46.874-10.842 89.648 21.553 94.144 67.303c-.86-7.14-9.652-11.107-13.685-10.115c-1.984 4.892-5.355 11.173-10.776 15.073c.462-4.363.264-8.859-.662-13.222c-1.454 6.082-4.297 11.768-8.198 16.66c-6.28.463-12.56-2.578-15.867-7.14c-.264-.198-.33-.595-.528-.86c-.199-.462-.397-.925-.53-1.388a5.488 5.488 0 0 1-.396-1.388c-.066-.463-.066-.926-.066-1.455v-.991c.066-.463.198-.926.33-1.389c.132-.462.265-.925.463-1.388c.265-.463.463-.926.793-1.388c1.124-3.174 1.124-5.752-.925-7.273a7.53 7.53 0 0 0-1.256-.66c-.265-.067-.595-.2-.86-.265c-.198-.067-.33-.133-.529-.199c-.462-.132-.925-.264-1.388-.33a5.037 5.037 0 0 0-1.388-.199c-.463-.066-.992-.132-1.455-.132c-.33 0-.66.066-.992.066c-.528 0-.991.067-1.454.199c-.463.066-.926.132-1.388.264c-.463.132-.926.265-1.389.463c-.462.198-.86.397-1.322.595c-.397.198-.793.463-1.256.661c-15.404 10.05-6.215 33.585 4.297 40.395c-3.967.727-8 1.587-9.123 2.446l-.132.132c2.842 1.72 5.817 3.174 8.925 4.43c4.231 1.388 8.727 2.644 10.71 3.173v.066a63.96 63.96 0 0 0 16.66 1.19c29.288-2.05 53.287-24.329 57.65-53.683c.132.595.265 1.124.397 1.719c.198 1.19.463 2.446.595 3.702v.067c.132.595.198 1.19.265 1.719v.264c.066.595.132 1.19.132 1.719c.066.727.132 1.454.132 2.182v1.057c0 .331.066.728.066 1.058c0 .397-.066.794-.066 1.19v.926c0 .463-.066.86-.066 1.322c0 .265 0 .529-.067.86c0 .462-.066.925-.066 1.454c-.066.198-.066.397-.066.595c-.066.529-.132.992-.199 1.52c0 .199 0 .397-.066.596c-.066.66-.198 1.256-.264 1.917v.132c-.132.595-.265 1.257-.397 1.852v.198l-.397 1.785c0 .066-.066.198-.066.264c-.132.595-.264 1.19-.463 1.786v.198c-.198.661-.396 1.256-.528 1.851c-.067.066-.067.132-.067.132l-.595 1.983c-.264.662-.462 1.257-.727 1.918c-.264.66-.463 1.322-.727 1.917c-.265.661-.53 1.256-.793 1.917h-.067c-.264.595-.529 1.256-.86 1.851a3.22 3.22 0 0 1-.198.463c-.066.067-.066.132-.132.199c-4.297 8.66-10.644 16.263-18.577 22.213c-.53.33-1.058.728-1.587 1.124c-.132.132-.33.199-.463.33c-.463.331-.925.662-1.454.992l.198.397h.066l2.777-.397h.066c1.72-.264 3.438-.595 5.157-.925c.463-.066.992-.198 1.454-.33c.331-.067.595-.133.926-.199c.463-.066.926-.198 1.388-.265c.397-.132.794-.198 1.19-.33c6.612-1.587 13.025-3.769 19.173-6.347c-10.512 14.346-24.594 25.916-41.056 33.519c7.603-.529 15.206-1.785 22.545-3.9c26.643-7.868 49.055-25.784 62.476-49.915a105.527 105.527 0 0 1-17.785 42.51a104.082 104.082 0 0 0 17.652-14.677c14.81-15.47 24.528-35.106 27.834-56.196a105.277 105.277 0 0 1 1.917 31.867c47.733-66.576 3.967-135.597-14.346-153.778c-.067-.132-.132-.198-.132-.33c-.067.066-.067.066-.067.132c0-.067 0-.067-.066-.132c0 .793-.066 1.586-.132 2.38c-.198 1.52-.397 2.975-.661 4.43c-.33 1.454-.727 2.908-1.124 4.363a54.989 54.989 0 0 1-1.587 4.23a56.872 56.872 0 0 1-1.983 4.034c-.727 1.256-1.52 2.578-2.38 3.768a50.509 50.509 0 0 1-2.71 3.57c-.993 1.19-2.05 2.248-3.108 3.306a42.608 42.608 0 0 1-1.917 1.652c-.53.463-.992.86-1.521 1.323c-1.19.925-2.38 1.785-3.702 2.578c-1.256.793-2.579 1.587-3.9 2.248c-1.39.661-2.778 1.256-4.166 1.851a46.553 46.553 0 0 1-4.297 1.388a53.252 53.252 0 0 1-4.43.992c-1.52.265-3.04.397-4.495.529c-1.058.066-2.116.132-3.174.132c-1.52 0-3.041-.132-4.495-.264c-1.521-.133-3.042-.331-4.496-.662c-1.52-.264-2.975-.66-4.43-1.123h-.066c1.455-.133 2.91-.265 4.364-.53a47.921 47.921 0 0 0 4.43-.991a46.546 46.546 0 0 0 4.296-1.388c1.455-.53 2.843-1.19 4.166-1.852c1.388-.66 2.644-1.388 3.966-2.181c1.256-.86 2.513-1.72 3.703-2.645a36.15 36.15 0 0 0 3.371-2.975c1.124-.992 2.116-2.115 3.108-3.24a65.335 65.335 0 0 0 2.776-3.57c.132-.198.265-.462.397-.66c.661-1.058 1.322-2.116 1.917-3.174a45.566 45.566 0 0 0 1.984-4.033a46.326 46.326 0 0 0 1.586-4.23c.463-1.39.794-2.844 1.124-4.298c.265-1.52.53-2.975.661-4.43c.132-1.52.265-3.04.265-4.495c0-1.058-.066-2.116-.132-3.174c-.132-1.52-.33-2.975-.53-4.43a47.926 47.926 0 0 0-.99-4.429c-.464-1.388-.926-2.843-1.455-4.231c-.53-1.388-1.19-2.777-1.851-4.099c-.728-1.322-1.455-2.645-2.248-3.9a72.995 72.995 0 0 0-2.645-3.637a139.879 139.879 0 0 0-3.041-3.372a41.356 41.356 0 0 0-1.719-1.652a121.727 121.727 0 0 0-9.19-6.48a12.31 12.31 0 0 0-1.322-.66c-2.181-1.389-4.23-2.116-6.28-2.777z"/></svg>`
          );
        } else if (e.target.lastChild.nodeValue
          === "POSTGRESQL") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 264"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664c-2.452-.366-5.26-.21-8.583.475c-5.792 1.195-10.089 1.65-13.225 1.738c11.837-19.985 21.462-42.775 27.003-64.228c8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549c-5.928-1.046-12.302-1.63-18.99-1.738c-12.537-.2-23.614 2.533-33.079 8.15c-5.24-1.772-13.65-4.27-23.362-5.864c-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48c4.492 14.718 9.282 26.94 14.237 36.33c7.027 13.315 14.546 21.156 22.987 23.972c4.731 1.576 13.327 2.68 22.368-4.85c1.146 1.388 2.675 2.767 4.704 4.048c2.577 1.625 5.728 2.953 8.875 3.74c11.341 2.835 21.964 2.126 31.027-1.848c.056 1.612.099 3.152.135 4.482c.06 2.157.12 4.272.199 6.25c.537 13.374 1.447 23.773 4.143 31.049c.148.4.347 1.01.557 1.657c1.345 4.118 3.594 11.012 9.316 16.411c5.925 5.593 13.092 7.308 19.656 7.308c3.292 0 6.433-.432 9.188-1.022c9.82-2.105 20.973-5.311 29.041-16.799c7.628-10.86 11.336-27.217 12.007-52.99c.087-.729.167-1.425.244-2.088l.16-1.362l1.797.158l.463.031c10.002.456 22.232-1.665 29.743-5.154c5.935-2.754 24.954-12.795 20.476-26.351"/><path fill="#336791" d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934c31.4-46.593 44.527-105.736 33.2-120.211c-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067c-13.456-.22-23.664 3.528-31.41 9.402c0 0-95.43-39.314-90.991 49.444c.944 18.882 27.064 142.873 58.218 105.422c11.387-13.695 22.39-25.274 22.39-25.274c5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332c-8.026 8.967-5.667 10.541-21.711 13.844c-16.235 3.346-6.698 9.302-.471 10.86c7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952c-.37 12.568-.617 21.197 1.86 27.937c2.479 6.74 4.948 21.905 26.04 17.386c17.623-3.777 26.756-13.564 28.027-29.89c.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139c13.218-6.134 21.058-16.377 8.024-13.686z"/><path fill="#FFF" d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902c-.69.523-.904 1.129-.962 1.546c-.154 1.105.62 2.327 1.096 2.957c1.346 1.784 3.312 3.01 5.258 3.28c.282.04.563.058.842.058c3.245 0 6.196-2.527 6.456-4.392c.325-2.336-3.066-3.893-6.355-4.35m88.784.073c-.256-1.831-3.514-2.353-6.606-1.923c-3.088.43-6.082 1.824-5.832 3.659c.2 1.427 2.777 3.863 5.827 3.863c.258 0 .518-.017.78-.054c2.036-.282 3.53-1.575 4.24-2.32c1.08-1.136 1.706-2.402 1.591-3.225"/><path fill="#FFF" d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28c-18.005 3.716-24.453 1.142-26.57-.417c13.995-21.32 25.508-47.092 31.719-71.137c2.942-11.39 4.567-21.968 4.7-30.59c.147-9.463-1.465-16.417-4.789-20.665c-13.402-17.125-33.072-26.311-56.882-26.563c-16.369-.184-30.199 4.005-32.88 5.183c-5.646-1.404-11.801-2.266-18.502-2.376c-12.288-.199-22.91 2.743-31.704 8.74c-3.82-1.422-13.692-4.811-25.765-6.756c-20.872-3.36-37.458-.814-49.294 7.571c-14.123 10.006-20.643 27.892-19.38 53.16c.425 8.501 5.269 34.653 12.913 59.698c10.062 32.964 21 51.625 32.508 55.464c1.347.449 2.9.763 4.613.763c4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92c.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736c-3.225.666-11.79 2.431-11.916 8.435c-.136 6.56 10.125 9.315 11.294 9.607c4.074 1.02 7.999 1.523 11.742 1.523c9.103 0 17.114-2.992 23.516-8.781c-.197 23.386.778 46.43 3.586 53.451c2.3 5.748 7.918 19.795 25.664 19.794c2.604 0 5.47-.303 8.623-.979c18.521-3.97 26.564-12.156 29.675-30.203c1.665-9.645 4.522-32.676 5.866-45.03c2.836.885 6.487 1.29 10.434 1.289c8.232 0 17.731-1.749 23.688-4.514c6.692-3.108 18.768-10.734 16.578-17.36m-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414c-.573 3.717-1.165 7.56-1.314 12.225c-.147 4.54.42 9.26.968 13.825c1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404c-6.399-11.476-21.384-38.35-13.713-49.316c2.285-3.264 8.084-6.62 22.64-4.813m-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72c9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738c-.54-4.488-1.05-8.727-.92-12.709c.134-4.22.692-7.84 1.232-11.34c.663-4.313 1.338-8.776 1.152-14.037c.139-.552.195-1.204.122-1.978c-.475-5.045-6.235-20.144-17.975-33.81c-6.422-7.475-15.787-15.84-28.574-21.482c5.5-1.14 13.021-2.203 21.442-2.016M66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288c-8.73-2.912-18.86-21.364-27.791-50.624c-7.728-25.318-12.244-50.777-12.602-57.916c-1.128-22.578 4.345-38.313 16.268-46.769c19.404-13.76 51.306-5.524 64.125-1.347c-.184.182-.376.352-.558.537c-21.036 21.244-20.537 57.54-20.485 59.759c-.002.856.07 2.068.168 3.735c.362 6.105 1.036 17.467-.764 30.334c-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426m22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99c1.9-13.592 1.199-25.43.822-31.79c-.053-.89-.1-1.67-.127-2.285c3.073-2.725 17.314-10.355 27.47-8.028c4.634 1.061 7.458 4.217 8.632 9.645c6.076 28.103.804 39.816-3.432 49.229c-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424c-6.938-.02-13.687-2.984-18.819-8.34m1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114c.893-.42 2.482-.992 5.238-1.56c13.337-2.745 15.397-4.683 19.895-10.394c1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412c1.621.67 3.2 2.702 3.84 4.938c.303 1.056.643 3.06-.47 4.62c-9.396 13.156-23.088 12.987-32.921 10.526m69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346c-2.457-6.144-3.665-33.85-2.808-64.447c.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72c-1.48-.613-4.196-1.738-7.46-.903c.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21c4.433-9.848 10.504-23.337 3.915-53.81c-2.468-11.414-10.71-16.988-23.204-15.693c-7.49.775-14.343 3.797-17.761 5.53c-.735.372-1.407.732-2.035 1.082c.954-11.5 4.558-32.992 18.04-46.59c8.489-8.56 19.794-12.788 33.568-12.56c27.14.444 44.544 14.372 54.366 25.979c8.464 10.001 13.047 20.076 14.876 25.51c-13.755-1.399-23.11 1.316-27.852 8.096c-10.317 14.748 5.644 43.372 13.315 57.129c1.407 2.521 2.621 4.7 3.003 5.626c2.498 6.054 5.732 10.096 8.093 13.046c.724.904 1.426 1.781 1.96 2.547c-4.166 1.201-11.649 3.976-10.967 17.847c-.55 6.96-4.461 39.546-6.448 51.059c-2.623 15.21-8.22 20.875-23.957 24.25m68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779c-7.48.35-11.288-.838-12.184-1.569c-.42-8.644 2.797-9.547 6.202-10.503c.535-.15 1.057-.297 1.561-.473c.313.255.656.508 1.032.756c6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772"/></svg>`
          );
        }
        else if (e.target.lastChild.nodeValue
          === "EXPRESS") {
          e.target.style.color = "rgba(0,0,0,0)";
          e.target.style.userSelect = "none";
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M228 182.937a12.732 12.732 0 0 1-15.791-6.005c-9.063-13.567-19.071-26.522-28.69-39.755l-4.171-5.56c-11.454 15.346-22.908 30.08-33.361 45.371a12.23 12.23 0 0 1-15.012 5.894l42.98-57.659l-39.978-52.1a13.289 13.289 0 0 1 15.847 5.56c9.285 13.568 19.572 26.523 29.802 40.257c10.287-13.623 20.462-26.634 29.97-40.09a11.952 11.952 0 0 1 14.901-5.56l-15.513 20.573c-6.95 9.174-13.789 18.404-21.017 27.356a5.558 5.558 0 0 0 0 8.285c13.289 17.626 26.466 35.307 40.033 53.433M28 124.5c1.168-5.56 1.89-11.621 3.503-17.292c9.619-34.195 48.818-48.43 75.785-27.245c15.791 12.4 19.739 29.97 18.961 49.764H37.286c-1.446 35.363 24.075 56.714 56.713 45.816a33.864 33.864 0 0 0 21.518-23.965c1.724-5.56 4.504-6.505 9.786-4.893a45.145 45.145 0 0 1-21.573 32.972a52.263 52.263 0 0 1-60.884-7.784a54.767 54.767 0 0 1-13.678-32.138c0-1.89-.723-3.781-1.112-5.56A860.69 860.69 0 0 1 28 124.5m9.397-2.391h80.456c-.501-25.632-16.681-43.814-38.254-43.98c-24.02-.334-41.201 17.458-42.258 43.869z"/></g></svg>`
          );
        }
        e.target.classList.add("done");
      }
    }
  }

});

//To change the color of text randomly

// Giving color to each text in sphere
</script>
<style lang="scss" scoped>
.logo {
  position: absolute;
  height: 100px;
  width: 100px;
}

.addImage {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676209/CricaDev/ambitious_ceck8y.png");
}

.tagcloud {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 650;
  margin-left: 30%;
}

.tagcloud--item:hover {
  color: #36454f;
}

.about-container {
  display: grid;
  grid-template-rows: repeat(8, minmax(10px, 1fr));
  grid-template-columns: 15% 85%;
  place-content: start;
  place-items: center;
  height: 100vh;
  width: 100%;
  gap: 20px;

  @media (max-height: 850px) and (min-width: 1100px) {
    font-size: 10.5rem;
  }

  @media (min-width: 386px) {
    grid-template-columns: 20% 80%;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(8, minmax(10px, 1fr));
    grid-template-rows: 30% 70%;
  }

  .tech-titles {
    @media (min-width: 1100px) {
      position: relative;
      place-self: start center;
      top: 0;
      left: 0;
      font-style: italic;
      letter-spacing: 0.1rem;
    }
  }

  .tech-1 {
    grid-row: 2/3;
    grid-column: 1/4;
  }

  .tech-1 {
    @media (min-width: 1100px) {
      grid-row: 2/3;
      grid-column: 2/5;
    }
  }

  .tech-2 {
    @media (min-width: 1100px) {
      grid-row: 2/3;
      grid-column: 5/8;
    }
  }

  .meaning-container {
    grid-column: 2/3;
    width: 80%;
    place-self: start;
    padding-left: 20px;
    opacity: 0;
    transition: 0.4s all ease-in-out;

    p {
      padding-top: 20px;
      line-height: 1;

      @media (max-height: 850px) and (min-width: 1100px) {
        font-size: 1.25rem;
      }
    }
  }

  .meaning-01 {
    grid-row: 2/7;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 2/5;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-02 {
    grid-row: 3/7;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 3/6;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-03 {
    grid-row: 4/7;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 4/7;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-04 {
    grid-row: 5/7;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 5/8;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-05 {
    grid-row: 1/5;
    place-self: end start;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 2/5;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-06 {
    grid-row: 2/7;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 3/6;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-07 {
    grid-row: 3/8;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 4/7;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .meaning-08 {
    grid-row: 3/8;
    place-self: end start;

    @media (min-width: 1100px) {
      width: 80%;
      grid-column: 5/8;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .letter {
    cursor: pointer;
    grid-column: 1/2;
    place-self: center;
    transition: 0.4s all ease-in-out;
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    -webkit-background-clip: text;

    background-clip: text;
    object-fit: center;
    background-size: contain;
    background-position: center;
  }

  .about-link {
    padding-left: 20px;
    grid-column: 2/3;
    place-self: center start;
    opacity: 0;
    transition: 0.4s all ease-in-out;

    @media (min-width: 1100px) {
      letter-spacing: -0.2em;
    }

    @media (max-height: 900px) and (min-width: 1100px) {
      font-size: 2.75rem;
    }

    @media (max-height: 2000px) and (min-width: 1100px) {
      font-size: 3.25rem;
    }
  }

  .content,
  .content1,
  .tech-titles {
    transition: all 0.4s ease-in-out;
  }

  .c1,
  .r,
  .i,
  .c2,
  .a,
  .d,
  .e,
  .v {

    &:hover~.content,
    &:hover~.content1,
    &:hover~.tech-titles {
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }
  }

  .c1 {

    &:hover~.meaning-01,
    &:hover~.link-01 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .r {

    &:hover~.meaning-02,
    &:hover~.link-02 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .i {

    &:hover~.meaning-03,
    &:hover~.link-03 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .c2 {

    &:hover~.meaning-04,
    &:hover~.link-04 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .a {

    &:hover~.meaning-05,
    &:hover~.link-05 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .d {

    &:hover~.meaning-06,
    &:hover~.link-06 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .e {

    &:hover~.meaning-07,
    &:hover~.link-07 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .v {

    &:hover~.meaning-08,
    &:hover~.link-08 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }

  .c1,
  .link-01 {
    grid-row: 1/2;

    @media (min-width: 1100px) {
      grid-column: 1/2;
    }
  }

  .r,
  .link-02 {
    grid-row: 2/3;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 2/3;
    }
  }

  .i,
  .link-03 {
    grid-row: 3/4;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 3/4;
    }
  }

  .c2,
  .link-04 {
    grid-row: 4/5;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 4/5;
    }
  }

  .a,
  .link-05 {
    grid-row: 5/6;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 5/6;
    }
  }

  .d,
  .link-06 {
    grid-row: 6/7;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 6/7;
    }
  }

  .e,
  .link-07 {
    grid-row: 7/8;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 7/8;
    }
  }

  .v,
  .link-08 {
    grid-row: 8/9;

    @media (min-width: 1100px) {
      grid-row: 1/2;
      grid-column: 8/9;
    }
  }

  .link-01 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 1/2;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .link-02 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 2/3;
      grid-row: 2/3;
      place-self: start center;
      font-size: 2.75rem;
    }
  }

  .link-03 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 3/4;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .link-04 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 4/5;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .link-05 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 5/6;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .link-06 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 6/7;
      grid-row: 2/3;
      place-self: start center;
    }
  }

  .link-07 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 7/8;
      grid-row: 2/3;
      place-self: start center;
      font-size: 2.75rem;
    }
  }

  .link-08 {
    @media (min-width: 1100px) {
      writing-mode: vertical-rl;
      text-orientation: upright;
      grid-column: 8/9;
      grid-row: 2/3;
      place-self: start center;
    }
  }
}

.dark .i {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676220/CricaDev/I-bg_r97pxh.png");

  color: transparent;

  @media (min-width: 1100px) {
    color: #f6f6f6;
  }
}

.i {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676221/CricaDev/I-bg-dark_jzazu0.png");

  color: transparent;

  @media (min-width: 1100px) {
    color: #00010d;
  }
}

.dark .c2 {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676210/CricaDev/c-bg_wg9f0w.png");

  color: transparent;

  @media (min-width: 1100px) {
    background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676211/CricaDev/c-bg-desktop_jelhuf.png");
  }
}

.c2 {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676210/CricaDev/c-bg-dark_u12i2t.png");
  color: transparent;

  @media (min-width: 1100px) {
    background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676210/CricaDev/c-bg-dark-desktop_qtxlmt.png");
  }
}

.dark .a {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676208/CricaDev/a-bg_jyxrwl.png");
  color: transparent;

  @media (min-width: 1100px) {
    background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676208/CricaDev/a-bg-desktop_xcokrq.png");
  }
}

.a {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676207/CricaDev/a-bg-dark_yiphjg.pngg");
  color: transparent;

  @media (min-width: 1100px) {
    background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676208/CricaDev/a-bg-dark-desktop_q7fmnd.png");
  }
}

.dark .d {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676216/CricaDev/d-bg_azrqej.png");
  color: transparent;

  @media (min-width: 1100px) {
    color: #f6f6f6;
  }
}

.d {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676216/CricaDev/d-bg-dark_wufjzj.png");
  color: transparent;

  @media (min-width: 1100px) {
    color: #00010d;
  }
}

.dark .e {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676218/CricaDev/e-bg_wcmk1u.png");
  color: transparent;

  @media (min-width: 1100px) {
    color: #f6f6f6;
  }
}

.e {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676218/CricaDev/e-bg-dark_tn0mam.png");
  color: transparent;

  @media (min-width: 1100px) {
    color: #00010d;
  }
}

.dark .v {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676227/CricaDev/v-bg_dn6nd3.png");
  color: transparent;

  @media (min-width: 1100px) {
    color: #f6f6f6;
  }
}

.v {
  background-image: url("https://res.cloudinary.com/ddc0cce3m/image/upload/v1695676228/CricaDev/v-bg-dark_la2rro.png");
  color: transparent;

  @media (min-width: 1100px) {
    color: #00010d;
  }
}
</style>
