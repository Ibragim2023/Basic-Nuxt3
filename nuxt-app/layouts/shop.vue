<template>
    <div>
        <HeaderShopVue />
        <slot />
        <FooterShopVue />
    </div>
</template>

<script setup>
import HeaderShopVue from '~~/components/HeaderShop.vue';
import FooterShopVue from '~~/components/FooterShop.vue';
</script>