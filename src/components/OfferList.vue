<script setup lang="ts">
export interface IOfferListData {
  id: string
  qnt: string
  price: string
  percentage: number
}

interface IOfferList {
  offerType: "purchase" | "sale"
  emptyListMessage: string
  data: IOfferListData[]
}

defineProps<IOfferList>()
</script>

<template>
  <section id="container-offer-list">
    <header :class="[`container-row`, `${offerType === `purchase` ? `` : `row-reverse`}`]">
      <div class="container-item">
        <span>Qtd.</span>
      </div>

      <div class="container-item">
        <span>Preço</span>
      </div>

      <div class="container-item">
        <span>{{ offerType === "purchase" ? "Compra" : "venda" }}</span>
      </div>
    </header>

    <ul v-if="data.length > 0">
      <li v-for="item in data" :key="item.id"
        :class="[`container-row`, `${offerType === `purchase` ? `primary-style` : `secondary-style`}`]">
        <div class="container-item">
          <span>{{ item.qnt }}</span>
        </div>

        <div class="container-item">
          <span>{{ item.price }}</span>
        </div>

        <div class="container-item">
          <div :class="[`progress`, `progress-variant-${offerType === `purchase` ? `primary` : `secondary`}`]"
            :style="{ width: `${item.percentage}%` }">
          </div>
        </div>
      </li>
    </ul>

    <ul v-else>
      <li
        :class="[`container-row`, `empty-list-message`, `${offerType === `purchase` ? `primary-style` : `secondary-style`}`]">
        <span>{{ emptyListMessage }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
* {
  font-size: 14px;
}

.row-reverse {
  flex-direction: row-reverse;
}

#container-offer-list {
  width: 100%;
}

header {
  background: var(--color-gray);
}

.container-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
}

.primary-style:hover {
  background: var(--color-primary-opacity);
}

.secondary-style {
  flex-direction: row-reverse;
}

.secondary-style:hover {
  background: var(--color-secondary-opacity);
}

.container-item {
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress {
  width: 100px;
  height: 16px;
}

.progress-variant-primary {
  background: var(--color-primary);
  margin-left: auto;
}

.progress-variant-secondary {
  background: var(--color-secondary);
  margin-right: auto;
}

.empty-list-message span {
  margin: auto;
}
</style>
