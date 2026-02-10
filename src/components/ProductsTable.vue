<template>
  <div class="table-container">
    <h2>Lista de Produtos</h2>

    <button @click="openCreate">+ Novo Produto</button>

    <table v-if="products.length">
      <thead>
        <tr>
          <th v-for="key in headers" :key="key">{{ key }}</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td v-for="key in headers" :key="key">
            {{ product[key] }}
          </td>

          <td>
            <button @click="openEdit(product)">Editar</button>
            <button @click="remove(product.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ProductForm
      v-if="showForm"
      :product="editingProduct"
      :fields="headers.filter((h) => h !== 'id')"
      @save="handleSave"
      @close="closeForm"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductsStore } from "@/stores/productsStore";
import ProductForm from "./ProductForm.vue";

const store = useProductsStore();

const products = computed(() => store.products);

const headers = computed(() => {
  if (!products.value.length) return [];
  return Object.keys(products.value[0]);
});

const showForm = ref(false);
const editingProduct = ref(null);

function openCreate() {
  editingProduct.value = null;
  showForm.value = true;
}

function openEdit(product) {
  editingProduct.value = product;
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

function handleSave(product) {
  if (product.id) {
    store.updateProduct(product);
  } else {
    store.addProduct(product);
  }

  closeForm();
}

function remove(id) {
  store.deleteProduct(id);
}
</script>

<style scoped>
.table-container {
  margin-top: 20px;
}

/* filtros */

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input,
select {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  color: var(--text);
}

/* tabela */

table {
  width: 100%;
  border-collapse: collapse;
  background: var(--card-bg);
  border-radius: 10px;
  overflow: hidden;
}

th,
td {
  border: 1px solid var(--border);
  padding: 8px;
  text-align: left;
}

th {
  background: rgba(0, 0, 0, 0.05);
  font-weight: 600;
}

tr:hover {
  background: rgba(0, 0, 0, 0.06);
}

/* botões */

button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 2px 4px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>
