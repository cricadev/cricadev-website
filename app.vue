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
<script setup>

useHead({
  script: [
    {
      hid: "hotjar-tracking-script",
      innerHTML: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3296207,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      type: "text/javascript",
      charset: "utf-8",
    },
  ],
});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
