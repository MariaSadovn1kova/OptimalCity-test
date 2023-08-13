<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MessageBox from './components/MessageBox.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="box message">
        <MessageBox />
      </div>
      <div class="box info">
        <img class="info__img" src="./assets/img/robot_avatar.jpg" />
        <h3 class="info__name">Пиксель</h3>
        <p class="info__content">
          Пиксель - маленький, округлый и забавный чат-бот. Он может помочь заказать пиццу,
          установить будильник и узнать актуальную информацию о погоде.
        </p>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 0rem;
  background: var(--vt-gradient);
  min-height: 100vh;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    .message {
      width: 40%;
      max-width: 1000px;
      max-height: 800px;
    }
    .info {
      width: 20%;
      max-width: 500px;
      margin-left: 2rem;
      max-height: 800px;
    }
  }
  @media screen and (max-width: 1399px) and (min-width: 630px) {
    flex-direction: column;
    .message {
      width: 50%;
      margin-left: 25%;
      max-height: 600px;
    }
    .info {
      margin-left: 25%;
      margin-top: 2rem;
      width: 50%;
      max-height: 600px;
    }
  }
  @media screen and (max-width: 629px) {
    flex-direction: column;
    font-size: 13px;
    .message {
      width: 90%;
      margin-left: 5%;
      max-height: 600px;
    }
    .info {
      width: 90%;
      margin-left: 5%;
      margin-top: 2rem;
      max-height: 600px;
    }
  }
  .box {
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--vt-shadow);
    background-color: var(--vt-white);
  }

  .info {
    &__img {
      width: 60%;
      border-radius: 100%;
      margin-left: 20%;
    }
    &__name {
      margin-top: 1rem;
      color: var(--vt-dark-blue);
      font-weight: bold;
      text-align: center;
    }
    &__content {
      margin-top: 2rem;
      text-align: center;
    }
  }
}
</style>
