<template>
  <div class="metrics">
    <div class="card">
      <h3>Com imagem</h3>
      <p>{{ store.totalWithImage }}</p>
    </div>

    <div class="card">
      <h3>Indisponíveis</h3>
      <p>{{ store.totalUnavailable }}</p>
    </div>

    <div class="card">
      <h3>Produtos OK</h3>
      <p>{{ store.totalOk }}</p>
    </div>

    <div class="card">
      <h3>Score médio</h3>
      <p>{{ store.averageScore }}</p>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from "@/stores/productsStore";

const store = useProductsStore();
</script>

<style scoped>
.metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-2px);
}
</style>
