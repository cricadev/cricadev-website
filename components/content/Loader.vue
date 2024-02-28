<script setup lang="ts">

</script>
<template>
  <div class="flex items-center justify-around">
    <div class="lds-heart">
      <div></div>
    </div>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <div class="">
      <div class="lds-dual-ring"></div>
    </div>
  </div>
</template>
<style>
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
  z-index: 10;
}

.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  @apply bg-[#0059E0];
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  @apply bg-[#0059E0];
}

.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}

.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}

@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }

  5% {
    transform: scale(1.1);
  }

  39% {
    transform: scale(0.85);
  }

  45% {
    transform: scale(1);
  }

  60% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(0.9);
  }
}

.lds-ripple {
  display: inline-block;
  position: absolute;
  width: 70px;
  height: 70px;
  transform-origin: 40px 40px;
}

.lds-ripple div {
  position: absolute;
  border: 4px solid #7EB0DF;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 40px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  4.9% {
    top: 36px;
    left: 40px;
    width: 0;
    height: 0;
    opacity: 0;
  }

  5% {
    top: 36px;
    left: 40px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>