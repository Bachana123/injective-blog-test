<script setup lang="ts">
import Footer from '~/components/common/Footer.vue';
import Header from '~/components/common/Header.vue';

</script>

<template>
    <div>
      <Header variant="white-bg" />
      <slot />
      <Footer />
    </div>
</template>