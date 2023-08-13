import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', () => {
  interface Message {
    id: number
    content: string
    admin: boolean
  }

  const messages = ref([
    {
      id: 1,
      content: 'Привет! Что я могу для Вас сделать?',
      admin: true
    }
  ])

  function addMessage(item: any) {
    messages.value.push(item)
  }

  function messagesLength() {
    return messages.value.length
  }

  return { messages, addMessage, messagesLength }
})
