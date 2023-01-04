<template>
  <div>
    <h1>Pick some products</h1>
    <client-only>
      <div class="catalogFlex">
        <NuxtLink
          :key="product.id"
          v-for="product in currentPageList"
          :to="`/Catalog/${product.id}`"
        >
          <n-card>
            <div>
              <img :src="product.image" alt="" />
            </div>
            <div>
              {{ product.name }}
            </div>
            <div>
              {{ product.price }}
            </div>
          </n-card>
        </NuxtLink>
      </div>
      <n-pagination v-model:page="page" :page-count="pageCount" />
    </client-only>
  </div>
</template>

<style>
.n-card {
  width: 300px;
  height: 350px;
  background-color: rgb(0, 0, 0);
  margin: 20px;
  color: white;
}

.catalogFlex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.n-pagination {
  margin-top: 30px;
  font-size: 25px;
}
</style>

<script setup>
import { NPagination } from "naive-ui";
import { NCard } from "naive-ui";
import { ref, computed } from "vue";
import { globalState } from "~~/globalState";
import list from "../../data/products.json";

let gbState = globalState();
let page = gbState.page;
let perPage = ref(20);
let pageCount = computed(() => list.length / perPage.value);

let offset = computed(() => (page.value - 1) * perPage.value);
let currentPageList = computed(() =>
  list.slice(offset.value, offset.value + perPage.value)
);

definePageMeta({
  layout: "shop",
});
</script>
