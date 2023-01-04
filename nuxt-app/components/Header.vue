<template>
  <div class="header">
    <div class="logo">
      <n-avatar
        :style="{
          width: '120px',
          height: '100px',
          marginLeft: '50px',
          borderRadius: '0px',
          backgroundColor: 'white',
        }"
        src="https://cdn-icons-png.flaticon.com/128/5785/5785483.png"
      />
    </div>
    <nav>
      <NuxtLink class="link" to="/">Home</NuxtLink>
      <NuxtLink class="link" to="/About">About Vue</NuxtLink>
      <NuxtLink class="link" to="/LogUp">SignUp</NuxtLink>
      <NuxtLink class="link" to="/logIn">SignIn</NuxtLink>
      <NuxtLink class="link" to="/Catalog">Catalog</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 100px;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}

nav {
  width: 500px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<script setup>
import { NAvatar } from "naive-ui";
</script>
