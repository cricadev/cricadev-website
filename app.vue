import { ToggleTheme } from './.nuxt/components';
<template lang="">
  <div>
    <NuxtLayout>
      <HeaderComp></HeaderComp>
      <NuxtPage />
      <FooterComp></FooterComp>
      <ToggleTheme></ToggleTheme>
    </NuxtLayout>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
