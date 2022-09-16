<template lang="">
  <div class="">
    <div
      class="pt-20 pb-8 ml-6 font-black text-left text-xl3_m xss-m:text-xl4_m about-container"
    >
      <span class="content text-base_m"></span>

      <span class="letter c1">C </span>
      <span class="about-link link-01">urious</span>

      <div class="meaning-container meaning-01">
        <img src="../images/curious.png" alt="" />
        <p class="font-light text-sm_m">
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
        <img src="../images/risktaking.png" alt="" />
        <p class="font-light text-sm_m">
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
        <img src="../images/innovative.png" alt="" />
        <p class="font-light text-sm_m">
          Innovation promotes development, new idea adoption, and overcoming
          change's obstacles. We must always innovate in order to compete in the
          modern world because if we don't, we stagnate.
        </p>
      </div>
      <span class="letter c2">C </span>

      <span class="about-link link-04">reative</span>
      <div class="meaning-container meaning-04">
        <img src="../images/creative.png" alt="" />
        <p class="font-light text-sm_m">
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
        <img src="../images/ambitious.png" alt="" />
        <p class="font-light text-sm_m">
          To create a goal and pursue it normally takes a lot of effort and
          labor, but ambition may keep us motivated and will be crucial to
          achieving what we want. Ambition is a key component in getting what we
          want.
        </p>
      </div>
      <span class="letter d">D </span>

      <span class="about-link link-06">etermined</span>
      <div class="meaning-container meaning-06">
        <img src="../images/determined.png" alt="" />
        <p class="font-light text-sm_m">
          Determination is crucial because it enables us to persevere in the
          face of challenges. We are motivated to move forward fearlessly
          because we want to succeed. Although there are many challenges in
          life, we can conquer them all if we are persistent.
        </p>
      </div>
      <span class="letter e">E </span>

      <span class="about-link link-07">nthusistic</span>
      <div class="meaning-container meaning-07">
        <img src="../images/enthusiastic.png" alt="" />
        <p class="font-light text-sm_m">
          Numerous advantages come from being enthusiastic, including increased
          productivity, safety, the ability to inspire others by being so
          upbeat, and the finest benefit of all: wonderful peace at the end of
          the day. Enthusiasm is also necessary to keep our motivation high.
        </p>
      </div>
      <span class="letter v">V </span>

      <span class="about-link link-08">aluable</span>
      <div class="meaning-container meaning-08">
        <img src="../images/valuable.png" alt="" />
        <p class="font-light text-sm_m">
          There is much more to you than what you possess that gives you value
          and a purpose; you were born with both. We all have a purpose, and if
          we still don't know what it is, we need to go out and search for it.
          Once we do, we'll employ the seven qualities that identify me, and the
          eighth one will show up: you'll think well of yourself.
        </p>
      </div>
    </div>

    <div class="tech">
      <div class="working">
        <h3 class="italic font-extrabold tracking-wider text-lg_m">Working</h3>
        <div class="icons">
          <div class="option">
            <Icon name="logos:sass" />
            <span>Sass</span>
          </div>
          <div class="option">
            <Icon name="vscode-icons:file-type-vite" />
            <span>Vite</span>
          </div>
          <div class="option">
            <Icon name="logos:npm" />
            <span>NPM</span>
          </div>
          <div class="option">
            <Icon name="logos:git-icon" />
            <span>Git</span>
          </div>
          <div class="option">
            <Icon name="logos:github-octocat" />
            <span>Github</span>
          </div>
          <div class="option">
            <Icon name="logos:javascript" />
            <span>Javascript</span>
          </div>
          <div class="option">
            <Icon name="logos:vue" />
            <span>VUE</span>
          </div>
          <div class="option">
            <Icon name="logos:nuxt-icon" />
            <span>Nuxt</span>
          </div>
        </div>
      </div>
      <div class="learning">
        <h3 class="italic font-extrabold tracking-wider text-lg_m">Learning</h3>
        <div class="icons">
          <div class="option">
            <Icon name="logos:react" />
            <span>React</span>
          </div>
          <div class="option">
            <Icon name="logos:react" />
            <span>React</span>
          </div>
          <div class="option">
            <Icon name="logos:react" />
            <span>React</span>
          </div>
          <div class="option">
            <Icon name="logos:react" />
            <span>React</span>
          </div>
        </div>
      </div>
    </div>
    <span class="content1"></span>

    <NuxtPage />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";

useHead({
  title: "CricaDev | About me",
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js",
      body: true,
    },
  ],
});
const myTags = ["JAVASCRIPT", "CSS", "HTML", "GIT", "GITHUB"];

onBeforeMount(async () => {
  var tagCloud = TagCloud(".content", myTags, {
    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });
  function mouseOverHandler(e) {
    if (e.target.className === "tagcloud--item") {
      if (!e.target.classList.contains("done")) {
        if (e.target.lastChild.nodeValue === "JAVASCRIPT") {
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#F7DF1E" d="M0 0h256v256H0V0Z"/><path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></svg>`
          );
        }
        if (e.target.lastChild.nodeValue === "GIT") {
          e.target.insertAdjacentHTML(
            "afterbegin",
            `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="#DE4C36" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21l29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693c5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657c7.663 7.66 7.663 20.075 0 27.74c-7.665 7.666-20.08 7.666-27.749 0c-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462l-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747c-7.665 7.662-20.086 7.662-27.74 0c-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442L4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"/></svg>`
          );
        }
        e.target.classList.add("done");
      }
    }
  }

  let rootEl = document.querySelector(".content");
  rootEl.style.gridRow = "1/6";
  rootEl.style.gridColumn = "2/3";
  rootEl.addEventListener("mouseover", mouseOverHandler);
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
  background-image: url("../images/ambitious.png");
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
.tech {
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-evenly;
  height: 100vh;
  width: 80%;
  top: 0;
  right: 0;
  align-items: center;
  .option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.about-container {
  display: grid;
  grid-template-rows: repeat(8, minmax(10px, 1fr));
  grid-template-columns: 15% 85%;
  place-content: start;
  place-items: center;
  height: 100vh;
  width: 100%;

  @media (min-width: 386px) {
    grid-template-columns: 20% 80%;
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
    }
  }
  .meaning-01 {
    grid-row: 2/7;
  }
  .meaning-02 {
    grid-row: 3/7;
  }
  .meaning-03 {
    grid-row: 4/7;
  }
  .meaning-04 {
    grid-row: 5/7;
  }
  .meaning-05 {
    grid-row: 1/5;
    place-self: end start;
  }
  .meaning-06 {
    grid-row: 2/7;
  }
  .meaning-07 {
    grid-row: 3/8;
  }
  .meaning-08 {
    grid-row: 3/8;
    place-self: end start;
  }
  .letter {
    cursor: pointer;
    grid-column: 1/2;
    place-self: center;
    transition: 0.4s all ease-in-out;
    /*
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: url("https://s3.amazonaws.com/usefulangle/news/95-5f6cc1ad5575e.jpg");*/
  }

  .about-link {
    padding-left: 20px;
    grid-column: 2/3;
    place-self: center start;
    opacity: 0;
    transition: 0.4s all ease-in-out;
  }

  .c1,
  .link-01 {
    grid-row: 1/2;
  }
  .c1 {
    &:hover ~ .meaning-01,
    &:hover ~ .link-01 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .r {
    &:hover ~ .meaning-02,
    &:hover ~ .link-02 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .i {
    &:hover ~ .meaning-03,
    &:hover ~ .link-03 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .c2 {
    &:hover ~ .meaning-04,
    &:hover ~ .link-04 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .a {
    &:hover ~ .meaning-05,
    &:hover ~ .link-05 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .d {
    &:hover ~ .meaning-06,
    &:hover ~ .link-06 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .e {
    &:hover ~ .meaning-07,
    &:hover ~ .link-07 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .v {
    &:hover ~ .meaning-08,
    &:hover ~ .link-08 {
      opacity: 1;
      transition: 0.2s all ease-in-out;
    }
  }
  .r,
  .link-02 {
    grid-row: 2/3;
  }
  .i,
  .link-03 {
    grid-row: 3/4;
  }
  .c2,
  .link-04 {
    grid-row: 4/5;
  }
  .a,
  .link-05 {
    grid-row: 5/6;
  }
  .d,
  .link-06 {
    grid-row: 6/7;
  }
  .e,
  .link-07 {
    grid-row: 7/8;
  }
  .v,
  .link-08 {
    grid-row: 8/9;
  }
}
</style>
