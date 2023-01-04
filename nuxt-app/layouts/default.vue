<template>
  <div>
    <HeaderVue />
    <slot />
    <FooterVue />
  </div>
</template>

<script setup>
import HeaderVue from "~~/components/Header.vue";
import FooterVue from "~~/components/Footer.vue";
</script>
