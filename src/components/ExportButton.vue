<template>
  <button class="export-btn" @click="download">
    Baixar planilha atualizada
  </button>
</template>

<script setup>
import { useProductsStore } from "@/stores/productsStore";
import { exportExcel } from "@/services/excelService";

const store = useProductsStore();

function download() {
  exportExcel(store.products);
}
</script>

<style scoped>
.export-btn {
  padding: 10px 15px;
  margin: 10px 0;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.export-btn:hover {
  opacity: 0.9;
}
</style>
