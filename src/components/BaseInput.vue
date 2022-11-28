<script setup lang="ts">
interface IBaseInput {
  title: string
  modelValue?: string
  type?: string
  disabled?: boolean
}

defineProps<IBaseInput>()
defineEmits(["update:modelValue"])
</script>

<template>
  <div>
    <span>{{ title }}</span>
    <input :type="type" :disabled="disabled" :value="modelValue"
      @input="$emit('update:modelValue', ($event as any).target.value)">
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input {
  color: var(--text-color);
  background: none;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  padding: 14px 12px;
  font-size: 18px;
}
</style>
