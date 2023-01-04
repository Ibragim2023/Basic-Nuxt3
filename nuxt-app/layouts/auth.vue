<template>
  <div>
    <HeaderAuthVue />
    <slot />
    <FooterAuthVue />
  </div>
</template>

<script setup>
import HeaderAuthVue from "~~/components/HeaderAuth.vue";
import FooterAuthVue from "~~/components/FooterAuth.vue";
</script>
