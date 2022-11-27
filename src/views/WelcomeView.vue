<script setup lang="ts">
import HeaderApp from "@/components/HeaderApp.vue"
import IconChevronRight from "@/assets/icons/IconChevronRight.vue"
</script>

<template>
  <main>
    <HeaderApp />

    <section id="text-welcome">
      <p>
        Esse desafio está sendo submetido ao processo seletivo da empresa
        <a href="https://smu.com.vc/" target="_blank">SMU</a>.
      </p>
      <p>Clique no botão e siga para a boleta.</p>
    </section>

    <router-link to="/boleta">
      <button id="btn-navigate">
        <IconChevronRight />
      </button>
    </router-link>

    <footer>
      <span>Desenvolvido por <a href="https://vitordevsp.com.br" target="_blank">Vitor DevSP</a></span>
    </footer>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
}

#text-welcome p {
  margin: 8px 0;
  text-align: center;
}

#btn-navigate {
  padding: 24px 32px;
  border-radius: 8px;
  background-color: var(--color-gray-light);
  transition: 400ms;
}

#btn-navigate:hover {
  opacity: 0.7;
}

footer span {
  opacity: 0.8;
  font-size: 12px;
}
</style>
