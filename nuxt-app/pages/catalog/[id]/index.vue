<template>
  <div class="content">
    <client-only>
      <n-card>
        <div>
          <img :src="currentProduct.image" alt="" />
        </div>
        <div>
          {{ currentProduct.name }}
        </div>
        <div>
          {{ currentProduct.price }}
        </div>
      </n-card>
      <n-button @click="method">Put in the basket</n-button>
      <NuxtLink class="link block" to="/Catalog">Go to Catalog</NuxtLink>
      <p class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam
        assumenda minus illo quos, nihil labore in quae commodi, culpa soluta
        consequuntur, ipsa ipsum. Veniam maxime, recusandae non maiores neque
        illo quidem ipsum porro quibusdam temporibus, consequuntur architecto
        tenetur molestiae voluptate facilis cupiditate eius expedita, sequi sit
        nemo omnis molestias!
      </p>
    </client-only>
  </div>
</template>

<style scoped>
.content {
  padding: 30px;
}

.n-card {
  width: 450px;
  height: 400px;
  margin: auto;
  margin-bottom: 30px;
  padding: 10px;
}

.block {
  display: block;
  color: black;
  margin-bottom: 100px;
}

.n-button {
  margin-bottom: 20px;
}
</style>

<script setup>
import { NCard, NButton, useMessage } from "naive-ui";
import { ref } from "vue";
import list from "../../../data/products.json";
import { useRoute } from "vue-router";
import { globalState } from "../../../globalState"

let gbState = globalState()
let route = useRoute();
let currentProductId = ref(route.params.id);
let currentProduct = list.find(
  (product) => product.id == currentProductId.value
);

const message = useMessage();

const method = () => {
  gbState.cart.value.push({
    id: currentProduct.id,
    image: currentProduct.image,
    name: currentProduct.name,
    price: currentProduct.price,
  })
  message.success("Product in the cart");
  console.log(gbState.cart.value);
};

definePageMeta({
  layout: "shop",
});
</script>
