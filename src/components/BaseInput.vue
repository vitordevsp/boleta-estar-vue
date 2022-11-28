<script setup lang="ts">
import { typingFormatReal } from "@/utils/masks"

interface IBaseInput {
  title: string
  modelValue?: string
  type?: string
  disabled?: boolean
  mask?: "money"
}

const props = defineProps<IBaseInput>()
const emit = defineEmits(["update:modelValue"])

const onInput = (event: Event) => {
  let value = (event.target as HTMLInputElement).value

  if (props.mask) {
    const format = typingFormatReal(value)
    value = `R$ ${format}`
  }

  emit("update:modelValue", value)
}

</script>

<template>
  <div>
    <span>{{ title }}</span>
    <input :type="type" :disabled="disabled" :value="modelValue" @input="onInput">
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
