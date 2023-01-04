<template>
  <div>
    <HeaderCartVue />
    <slot />
    <FooterCartVue />
  </div>
</template>

<script setup>
import HeaderCartVue from "~~/components/HeaderCart.vue";
import FooterCartVue from "~~/components/FooterCart.vue";
</script>
