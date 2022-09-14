<template lang="">
  <div class="">
    <div
      class="pt-20 pb-8 ml-6 font-black text-left text-xl3_m xss-m:text-xl4_m about-container"
    >
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

    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: "CricaDev | About me",
});
</script>
<style lang="scss" scoped>
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
