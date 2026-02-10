<template>
  <div class="card" @click="$emit('edit', product)">
    <div class="image-wrapper">
      <img v-if="product.image" :src="product.image" alt="produto" />
      <div v-else class="no-image">Sem imagem</div>

      <div class="overlay">
        <span>Editar</span>
      </div>
    </div>

    <div class="info">
      <h4>{{ product.name || "Produto" }}</h4>
      <p class="price">{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>

<style scoped>
.card {
  background: var(--card-bg);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: 0.25s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.image-wrapper {
  position: relative;
  height: 200px;
  background: #e5e7eb;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.no-image {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* overlay hover */

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  opacity: 0;
  transition: 0.2s;
}

.card:hover .overlay {
  opacity: 1;
}

.info {
  padding: 14px;
}

h4 {
  margin: 0;
  font-size: 16px;
}

.price {
  margin-top: 4px;
  color: #666;
}
</style>
