<template>
    <div class="header">
      <div class="logo">
        <n-avatar
          :style="{
            width: '120px',
            height: '100px',
            backgroundColor: 'white',
            marginLeft: '50px',
            borderRadius: '0px',
          }"
          src="https://cdn-icons-png.flaticon.com/128/2832/2832495.png"
        />
      </div>
      <nav>
        <NuxtLink class="link" to="/Catalog">Go back</NuxtLink>
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
    width: 100px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  </style>
  
  <script setup>
  import { NAvatar } from "naive-ui";
  </script>