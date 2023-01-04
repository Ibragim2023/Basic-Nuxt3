<template>
  <div class="wrapper">
    <NuxtLayout>
      <n-message-provider>
        <NuxtPage />
      </n-message-provider>
    </NuxtLayout>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  background: url("https://s3.ap-south-1.amazonaws.com/townscript-production/images/c91d474b-5f09-4eb4-aea2-765ac54f7b6d.jpg")
    0 0 no-repeat;
  background-size: 100% 100%;
}

.wrapper {
  width: 1500px;
  min-height: 100vh;
  margin: 20px auto;
  text-align: center;
  background-color: white;
  font-family: monospace;
  border-radius: 20px;
  overflow: hidden;
}

h3 {
  font-size: 35px;
}

svg {
  width: 100%;
  height: 100%;
}

.icon {
  width: 100px;
  height: 40px;
}

.link {
  color: white;
  font-size: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.link:hover {
  color: red;
}

.desc {
  text-align: unset;
  font-size: 25px;
}

img {
  width: 100%;
  height: 100%;
}

.n-input {
  border: 1px solid black;
}

.n-button {
  border: 1px solid black;
}
</style>

<script setup>
import { NMessageProvider } from "naive-ui";
</script>
