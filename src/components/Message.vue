<script setup lang="ts">
const props = defineProps({
  item: Object
})
</script>

<template>
  <div class="message">
    <div class="message__content" :class="{ 'message__content-admin': item.admin }">
      {{ item.content }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.message {
  display: flex;
  margin-top: 1rem;
  &__content {
    background-color: var(--vt-message-grey);
    padding: 1rem;
    min-width: 20%;
    max-width: 50%;
    margin-left: auto;
    border-radius: 1rem;
  }
  &__content-admin {
    margin-left: 0;
    background-color: var(--vt-message-blue);
  }
}
</style>
