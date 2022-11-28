<script setup lang="ts">
interface IBaseButton {
  variant: "primary-color" | "secondary-color"
  onClick?: () => void
  disable?: boolean
}

defineProps<IBaseButton>()
</script>

<template>
  <button :class="variant" @click="onClick" :disabled="disable">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 16px 12px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
}

button:disabled {
  opacity: 0.7;
  cursor: no-drop;
}

.primary-color {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}

.secondary-color {
  background-color: var(--color-secondary);
  color: var(--color-text);
}
</style>
