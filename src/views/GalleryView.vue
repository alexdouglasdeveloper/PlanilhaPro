<template>
  <div>
    <h1>Galeria de Produtos</h1>

    <div class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @edit="openEdit"
      />
    </div>

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
import ProductCard from "@/components/ProductCard.vue";
import ProductForm from "@/components/ProductForm.vue";

const store = useProductsStore();

const products = computed(() => store.products);

const headers = computed(() => {
  if (!products.value.length) return [];
  return Object.keys(products.value[0]);
});

const showForm = ref(false);
const editingProduct = ref(null);

function openEdit(product) {
  editingProduct.value = product;
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

function handleSave(product) {
  store.updateProduct(product);
  closeForm();
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 24px;
}
</style>
