<template>
  <div class="upload-container">
    <h2>Importar planilha</h2>

    <input type="file" @change="handleFileUpload" accept=".xlsx,.xls,.csv" />
  </div>
</template>

<script setup>
import { readExcel } from "@/services/excelService";
import { useProductsStore } from "@/stores/productsStore";

const store = useProductsStore();

// 🔍 função que encontra campos automaticamente
function findField(item, keywords) {
  const key = Object.keys(item).find((k) =>
    keywords.some((word) => k.toLowerCase().includes(word)),
  );

  return key ? item[key] : "";
}

async function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const data = await readExcel(file);

    const formatted = data.map((item, index) => ({
      id: index + 1,

      // detecta automaticamente os campos
      name: findField(item, ["nome", "name"]),

      image: findField(item, ["imagem", "image", "foto", "url"]),

      status: findField(item, ["status", "dispon"]),

      score: Number(
        String(findField(item, ["score", "nota", "avalia"])).replace(",", "."),
      ),
    }));

    store.setProducts(formatted);

    console.log("Produtos carregados:", store.products);
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
  }
}
</script>

<style scoped>
.upload-container {
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 8px;
  max-width: 400px;
  background: var(--card-bg);
  color: var(--text);
}
</style>
