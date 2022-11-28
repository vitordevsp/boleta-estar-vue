<script setup lang="ts">
import { ref } from "vue"
import IconEye from "@/assets/icons/IconEye.vue"
import IconEyeSlash from "@/assets/icons/IconEyeSlash.vue"

interface IBaseInput {
  title: string
  modelValue?: string
  disabled?: boolean
}

defineProps<IBaseInput>()
defineEmits(["update:modelValue"])

const type = ref("password")

const toggleInputType = () => {
  type.value = type.value === "password" ? "text" : "password"
}
</script>

<template>
  <div id="container">
    <span>{{ title }}</span>

    <div id="container-input">
      <input :type="type" :disabled="disabled" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">

      <IconEye v-if="type === 'password'" @click="toggleInputType" />
      <IconEyeSlash v-else @click="toggleInputType" />
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

#container-input {
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  padding: 14px 12px;
}

#container-input:has(> input:focus) {
  outline: 1px solid #fff;
}

#container-input input {
  flex-grow: 1;
  color: var(--text-color);
  background: none;
  font-size: 18px;
  border: none;
  outline: none;
}

#container-input svg {
  cursor: pointer;
  margin: 2px 4px;
}
</style>
