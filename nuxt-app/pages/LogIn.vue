<template>
  <div class="content">
    <div class="flex">
      <div class="topBlock">
        <div class="titleLogInMail">
          <h3>Mail</h3>
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div class="mail">
          <n-input
            v-model:value="changeMailHandler"
            type="text"
            placeholder="Enter your Mail"
          />
        </div>
      </div>
      <div class="botBlock">
        <div class="titleLogInPassword">
          <h3>Password</h3>
          <div class="icon">
            <svg
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
        </div>
        <div class="password">
          <n-input
            v-model:value="changePassHandler"
            type="password"
            placeholder="Enter your Password"
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

.mail {
  width: 300px;
  margin: 40px 0;
}

.password {
  width: 300px;
  margin: 40px 0;
}

.titleLogInPassword {
  display: flex;
  align-items: center;
}

.titleLogInMail {
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

let changePassHandler = ref("");

let changeMailHandler = ref("");

const myMethod = () => {
  if (changeMailHandler.value && changePassHandler.value) {
    changeMailHandler.value.split("");
    if (
      changeMailHandler.value.includes("@mail.ru") &&
      changePassHandler.value.length >= 6
    ) {
      changeMailHandler.value = "";
      changePassHandler.value = "";
      message.success("Authorization was successful");
    } else {
      message.error("Authorization was not successful");
    }
  } else {
    message.error("Authorization was not successful");
  }
};

definePageMeta({
  layout: "auth",
});
</script>
