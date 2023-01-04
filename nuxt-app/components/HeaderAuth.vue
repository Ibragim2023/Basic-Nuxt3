<template>
  <div class="headerAuth">
    <div class="logo">
      <n-avatar
        :style="{
          width: '120px',
          height: '100px',
          backgroundColor: 'white',
          marginLeft: '50px',
          borderRadius: '0px',
        }"
        src="https://cdn-icons-png.flaticon.com/128/7542/7542114.png"
      />
    </div>
    <nav>
      <NuxtLink class="link" to="/">Go back</NuxtLink>
      <NuxtLink class="link" to="/LogUp">SignUp</NuxtLink>
      <NuxtLink class="link" to="/logIn">SignIn</NuxtLink>
    </nav>
  </div>
</template>

<style scoped>
.headerAuth {
  width: 100%;
  height: 100px;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}

img {
  width: 100%;
  height: 100%;
}

.logo {
  width: 150px;
  height: 100%;
}

nav {
  width: 300px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

<script setup>
import { NAvatar } from "naive-ui";
</script>
