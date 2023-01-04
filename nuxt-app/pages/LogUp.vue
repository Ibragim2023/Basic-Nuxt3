<template>
  <div class="content">
    <div class="flex">
      <div class="topBlock">
        <div class="titleLogUpInfo">
          <h3>Initials</h3>
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 11.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5zm6 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8c0-.29.02-.58.05-.86c2.36-1.05 4.23-2.98 5.21-5.37a9.974 9.974 0 0 0 10.41 3.97c.21.71.33 1.47.33 2.26c0 4.41-3.59 8-8 8z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="name">
          <n-input
            v-model:value="changeNameHandler"
            placeholder="Enter your Name"
          />
        </div>
        <div class="mail">
          <n-input
            v-model:value="changeMailHandler"
            placeholder="Enter your Mail"
          />
        </div>
      </div>
      <div class="botBlock">
        <div class="titleLogUpPassword">
          <h3>Password</h3>
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
          >
            <path
              d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18z"
              fill="currentColor"
            ></path>
            <circle cx="22" cy="10" r="2" fill="currentColor"></circle>
          </svg>
        </div>
        <div class="password">
          <n-input
            v-model:value="changePassHandler"
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <div class="repassword">
          <n-input
            v-model:value="changeRPassHandler"
            type="password"
            placeholder="Repeat your Password"
          />
        </div>
      </div>
    </div>
    <div class="button">
      <n-button class="btn" @click="myMethod">click me</n-button>
    </div>
    <div class="desc">
      <h2 class="mainTitle">Privacy</h2>
      <p class="mainText">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ad
        natus perspiciatis autem ullam rerum beatae veritatis fuga placeat
        cumque quasi numquam vel ea. Quasi corrupti esse quidem nostrum
        possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tenetur tempore assumenda et hic, velit fugit, nostrum officia suscipit
        numquam eum adipisci repellat, molestias delectus excepturi? Labore,
        pariatur praesentium. Vel, explicabo? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Repellat, explicabo quibusdam
        reprehenderit perspiciatis recusandae autem cum ipsam molestiae nisi
        obcaecati eum accusantium laborum, quam soluta voluptatibus voluptates
        assumenda rem dolor. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quidem, earum iste sequi ab officia ex atque nulla, doloribus quas
        nemo repellendus. Earum sunt illo tempora aliquam, veritatis dolorem
        repudiandae assumenda?
      </p>
    </div>
  </div>
</template>

<style scoped>
.content {
  flex: 1 1 auto;
}

.flex {
  margin: auto;
  width: 100%;
  height: 450px;
  padding: 50px;
  display: flex;
  justify-content: space-around;
}

.name {
  width: 300px;
  margin: 40px 0;
}

.mail {
  width: 300px;
  margin: 40px 0;
}

.password {
  width: 300px;
  margin: 40px 0;
}

.repassword {
  width: 300px;
  margin: 40px 0;
}

.titleLogUpInfo {
  display: flex;
  align-items: center;
}

.titleLogUpPassword {
  display: flex;
  align-items: center;
}

.button {
  margin-top: 30px;
}

.btn {
  width: 150px;
  padding: 20px;
}
</style>

<script setup>
import { NInput, NButton, useMessage } from "naive-ui";
import { ref } from "vue";

const message = useMessage();

let changeNameHandler = ref("");

let changeMailHandler = ref("");

let changePassHandler = ref("");

let changeRPassHandler = ref("");

const myMethod = () => {
  if (
    changeNameHandler.value &&
    changeMailHandler.value &&
    changePassHandler.value &&
    changeRPassHandler.value
  ) {
    changeMailHandler.value.split("");
    if (
      changeMailHandler.value.includes("@mail.ru") &&
      changePassHandler.value.length >= 6 &&
      changePassHandler.value == changeRPassHandler.value
    ) {
      changeNameHandler.value = "";
      changeMailHandler.value = "";
      changePassHandler.value = "";
      changeRPassHandler.value = "";
      message.success("Registration was successful");
    } else {
      message.error("Registration was not successful");
    }
  } else {
    message.error("Registration was not successful");
  }
};

definePageMeta({
  layout: "auth",
});
</script>
