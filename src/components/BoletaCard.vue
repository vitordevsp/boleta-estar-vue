<script setup lang="ts">
import { watch, ref } from "vue"
import { useStore } from "vuex"
import BaseInput from "@/components/BaseInput.vue"
import BasePasswordInput from "./BasePasswordInput.vue"
import BaseButton from "@/components/BaseButton.vue"
import { containsOnlyNumbers } from "@/utils/validators"
import { formatFloat } from "@/utils/masks"
import type { IStore } from "@/types/store"
import type { IOrderSubmit, IOrderType } from "@/types/order"
import IconLightning from "@/assets/icons/IconLightning.vue"

const store = useStore<IStore>()

const order = ref({
  active: "SMU",
  quantity: "",
  amount: "",
})

const password = ref("")

const isBlockedActions = ref(true)

watch(order, () => {
  const quantityNumber = Number(order.value.quantity)

  if (!Number.isInteger(quantityNumber)) {
    isBlockedActions.value = true
    return
  }

  if (order.value.amount.length <= 0) {
    isBlockedActions.value = true
    return
  }

  isBlockedActions.value = false
}, {
  deep: true
})

const submitOrder = (type: IOrderType) => {
  const onlyNumbers = containsOnlyNumbers(password.value)

  if (password.value.length !== 8 || !onlyNumbers) {
    alert("Assinatura eletrônica deve conter 8 digitos númericos.")
    return
  }

  const newOrder: IOrderSubmit = {
    active: order.value.active,
    quantity: Number(order.value.quantity),
    amount: formatFloat(order.value.amount),
    type,
  }

  store.dispatch("sendOrder", newOrder)

  order.value = {
    active: "SMU",
    quantity: "",
    amount: "",
  }

  password.value = ""
}
</script>

<template>
  <section id="boleta-card">
    <header>
      <IconLightning />
    </header>

    <BaseInput title="Ativo" v-model="order.active" disabled />

    <BaseInput title="Quantidade" v-model="order.quantity" type="number" />

    <BaseInput title="Valor da Ordem" v-model="order.amount" mask="money" />

    <BasePasswordInput title="Assinatura eletrônica" v-model="password" />

    <div id="container-actions">
      <BaseButton variant="primary-color" :onClick="() => submitOrder('purchase')" :disable="isBlockedActions">
        Comprar
      </BaseButton>

      <BaseButton variant="secondary-color" :onClick="() => submitOrder('sale')" :disable="isBlockedActions">
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
