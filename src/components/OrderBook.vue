<script setup lang="ts">
import OfferList from "./OfferList.vue"

const list = [
  {
    id: "1",
    qnt: "1",
    price: "R$ 900,00",
    percentage: 50,
  },
  {
    id: "2",
    qnt: "1",
    price: "R$ 400,00",
    percentage: 20,
  },
  {
    id: "3",
    qnt: "2",
    price: "R$ 300,00",
    percentage: 100,
  }
]
</script>

<template>
  <section id="order-book">
    <header>
      <h2>Livro de Ofertas</h2>
    </header>

    <main>
      <OfferList offerType="purchase" emptyListMessage="Ainda não há ordens de compra." :data="list" />
      <OfferList offerType="sale" emptyListMessage="Ainda não há ordens de venda." :data="list" />
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
