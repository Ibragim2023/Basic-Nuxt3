<template>
    <div class="content">
        <h1>Products in your cart</h1>
        <h2>Kolichestvo products : {{products.length}}</h2>
        <div class="flex">
            <n-card :key="product.id" v-for="product in products">
                <div>
                    <img :src="product.image" alt="">
                </div>
                <div>
                    {{product.name}}
                </div>
                <div>
                    {{product.price}}
                </div>
            </n-card>
        </div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>

<script setup>
import { globalState } from "../globalState"
import { NCard } from "naive-ui"


let gbState = globalState()

let products = gbState.cart.value


definePageMeta({
    layout: "cart"
})
</script>