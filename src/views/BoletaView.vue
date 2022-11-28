<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp.vue"
import OrderBook from "@/components/OrderBook.vue"
import BoletaCard from "@/components/BoletaCard.vue"
</script>

<template>
  <main>
    <HeaderApp />

    <section id="home-broker">
      <OrderBook />
      <BoletaCard />
    </section>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  padding: 32px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

#home-broker {
  display: flex;
  gap: 24px;
}

#order-book {
  flex-grow: 4;
}

#boleta-card {
  flex-grow: 1;
}
</style>
