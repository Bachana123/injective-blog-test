<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import Logo from '../icons/Logo.vue';

withDefaults(defineProps<{
  variant?: 'default' | 'white-bg';
}>(), {
  variant: 'default'
})

const isHidden = ref(false);
const scrollY = ref(0);
let lastScrollY = window?.scrollY;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  scrollY.value = currentScrollY;

  if (currentScrollY > lastScrollY + 5) {
    isHidden.value = true;
  } else if (currentScrollY < lastScrollY - 5) {
    isHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <header class="" 
    :class="twMerge('fixed w-full z-[1000] px-7 md:px-9 nav-container transition-transform duration-300', 
    isHidden && '-translate-y-full', 
    scrollY > 500 &&  'bg-white !text-black shadow-md',
    scrollY <= 500 && 'bg-transparent text-white',
    variant === 'white-bg' && 'bg-white !text-black')">
      <div class="container mx-auto py-4 flex justify-between items-center">
          <NuxtLink to="/">
              <Logo />
          </NuxtLink>
          <CommonLangSwitcher />
      </div>
    </header>
</template>