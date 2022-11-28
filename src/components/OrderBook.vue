<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "vuex"
import OfferList, { type IOfferListData } from "./OfferList.vue"
import type { IStore } from "@/types/store"

const store = useStore<IStore>()

const purchaseOrders = computed(() => {
  const arrayPurchaseOrders = store.state.orders
    .filter(order => order.type === "purchase")

  const maxOrder = arrayPurchaseOrders.reduce((maxOrder, order) => {
    const maxOrderPrice = maxOrder.quantity * maxOrder.amount
    const orderPrice = order.quantity * order.amount

    return orderPrice > maxOrderPrice ? order : maxOrder
  }, {
    quantity: 0,
    amount: 0,
  })

  const maxPrice = maxOrder.quantity * maxOrder.amount

  return arrayPurchaseOrders.map(order => {
    const orderPrice = order.quantity * order.amount
    const percentage = (orderPrice * 100) / maxPrice

    const obj: IOfferListData = {
      id: order.id,
      qnt: String(order.quantity),
      price: String(order.amount),
      percentage,
    }

    return obj
  })
})

const saleOrders = computed(() => {
  const arraySaleOrders = store.state.orders
    .filter(order => order.type === "sale")

  const maxOrder = arraySaleOrders.reduce((maxOrder, order) => {
    const maxOrderPrice = maxOrder.quantity * maxOrder.amount
    const orderPrice = order.quantity * order.amount

    return orderPrice > maxOrderPrice ? order : maxOrder
  }, {
    quantity: 0,
    amount: 0,
  })

  const maxPrice = maxOrder.quantity * maxOrder.amount

  return arraySaleOrders.map(order => {
    const orderPrice = order.quantity * order.amount
    const percentage = (orderPrice * 100) / maxPrice

    const obj: IOfferListData = {
      id: order.id,
      qnt: String(order.quantity),
      price: String(order.amount),
      percentage,
    }

    return obj
  })
})
</script>

<template>
  <section id="order-book">
    <header>
      <h2>Livro de Ofertas</h2>
    </header>

    <main>
      <OfferList offerType="purchase" emptyListMessage="Ainda não há ordens de compra." :data="purchaseOrders" />
      <OfferList offerType="sale" emptyListMessage="Ainda não há ordens de venda." :data="saleOrders" />
    </main>
  </section>
</template>

<style scoped>
#order-book {
  min-height: 400px;
  background-color: var(--color-gray-dark);
  border-radius: 12px;
  overflow: hidden;
}

header {
  padding: 12px;
  background-color: var(--color-gray-light);
}

header h2 {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

main {
  display: flex;
}
</style>
