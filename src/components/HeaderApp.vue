<script setup lang="ts">
import IconLogoEstar from "@/assets/icons/IconLogoEstar.vue"
</script>

<template>
  <header>
    <IconLogoEstar />
    <span>(Desafio Boleta)</span>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

header svg {
  width: 200px;
  height: 60px;
}

header span {
  opacity: 0.7;
  font-size: 12px;
}
</style>
