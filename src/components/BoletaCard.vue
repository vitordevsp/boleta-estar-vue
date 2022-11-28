<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue"
import BaseButton from "@/components/BaseButton.vue"
import IconLightning from "@/assets/icons/IconLightning.vue"
</script>

<template>
  <section id="boleta-card">
    <header>
      <IconLightning />
    </header>

    <BaseInput title="Ativo" />

    <BaseInput title="Quantidade" type="number" />

    <BaseInput title="Valor da Ordem" />

    <BaseInput title="Assinatura eletrônica" />

    <div id="container-actions">
      <BaseButton variant="primary-color" disable>
        Comprar
      </BaseButton>

      <BaseButton variant="secondary-color" disable>
        Vender
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
#boleta-card {
  min-height: 400px;
  padding: 0 24px 24px;
  background-color: var(--color-gray-dark);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

header {
  padding: 16px 0;
  display: flex;
  justify-content: center;
}

#container-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
