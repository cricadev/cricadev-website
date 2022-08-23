<template lang="">
  <div>
    <nav
      class="fixed z-10 flex justify-between w-full p-4 px-32 mx-auto lg:px-16 lg:p-4"
    >
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/portfolio" class="link">Portfolio</NuxtLink>
      <NuxtLink to="/about" class="link">About me</NuxtLink>
      <NuxtLink to="/blog" class="link">Blog</NuxtLink>
    </nav>
    <header class="fixed z-10 flex justify-center w-full mx-auto top-16">
      <img
        src="../images/logo-logo-cricadev.png"
        alt="CricaDev"
        class="h-[63px] w-[50px] lg:h-[32px] lg:w-[25px]"
      />
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css"></style>
