<script setup lang="ts">
import Message from './Message.vue'
import { useMessagesStore } from '../stores/messages'

const store = useMessagesStore()
</script>

<template>
  <div class="message-box">
    <div class="message-box__area">
      <Message
        v-for="item in store.messages"
        :key="item.id"
        :item="item"
        class="message-box__area__item"
      />
    </div>
    <div class="message-box__btn-box">
      <button
        class="btn"
        @click="
          store.addMessage({
            id: store.messagesLength + 1,
            content: 'Заказать пиццу',
            admin: false
          }),
            store.addMessage({
              id: store.messagesLength + 1,
              content: 'Пицца заказана. Что я еще могу для Вас сделать?',
              admin: true
            })
        "
      >
        Заказать пиццу
      </button>
      <button
        class="btn"
        @click="
          store.addMessage({
            id: store.messagesLength + 1,
            content: 'Установить будильник',
            admin: false
          }),
            store.addMessage({
              id: store.messagesLength + 1,
              content: 'Будильник утсановлен на 8:00. Что я еще могу для Вас сделать?',
              admin: true
            })
        "
      >
        Установить будильник
      </button>
      <button
        class="btn"
        @click="
          store.addMessage({
            id: store.messagesLength + 1,
            content: 'Вывести погоду',
            admin: false
          }),
            store.addMessage({
              id: store.messagesLength + 1,
              content: 'Солнечно, +20. Что я еще могу для Вас сделать?',
              admin: true
            })
        "
      >
        Вывести погоду
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes slideInLeft {
  from {
    transform: translateY(700%);
  }
  to {
    transform: translateY(0);
  }
}

.message-box {
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1400px) {
    height: 100%;
  }
  @media screen and (max-width: 1399px) {
    max-height: 500px;
  }
  &__area {
    height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding-right: 1rem;
    margin-bottom: 1rem;
    &__item {
      animation-name: slideInLeft;
      animation-duration: 0.8s;
      animation-timing-function: ease-in;
    }
  }
  &__btn-box {
    margin-top: auto;
    height: 10%;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 1400px) {
      flex-direction: row;
      .btn {
        width: 32%;
        height: 4rem;
      }
    }
    @media screen and (max-width: 1399px) {
      flex-direction: column;
      .btn {
        margin-top: 0.5rem;
        height: 3rem;
      }
    }
  }
}
</style>
