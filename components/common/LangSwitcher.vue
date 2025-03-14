<script setup lang="ts">
const { setLocale, locales, locale } = useI18n();
const currentLang = ref(locale.value);
</script>

<template>
  <div>
    <USelect 
    v-if="locale" 
    v-bind:model-value="currentLang" 
    option-attribute="name" 
    value-attribute="code" 
    :options="locales" 
    @change="setLocale" 
    :ui="{
        base: '!text-gray-800 !bg-white !outline-none',
    }"
    variant="none" />
  </div>
</template>