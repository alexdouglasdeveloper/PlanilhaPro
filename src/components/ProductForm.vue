<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <header class="header">
        <h3>{{ isEditing ? "Editar Produto" : "Novo Produto" }}</h3>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </header>

      <form class="form" @submit.prevent="save">
        <div v-for="key in fields" :key="key" class="field">
          <label>{{ formatLabel(key) }}</label>
          <input v-model="localProduct[key]" />

          <!-- Preview automático de imagem -->
          <div
            v-if="isImageField(key) && localProduct[key]"
            class="image-preview"
          >
            <img
              :src="localProduct[key]"
              alt="Preview"
              @error="imageError = true"
              @load="imageError = false"
            />

            <p v-if="imageError" class="error">URL de imagem inválida</p>
          </div>
        </div>

        <footer class="actions">
          <button type="button" class="cancel" @click="$emit('close')">
            Cancelar
          </button>

          <button type="submit" class="save">Salvar</button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";

const props = defineProps({
  product: Object,
  fields: Array,
});

const emit = defineEmits(["save", "close"]);

const imageError = ref(false);

const isEditing = computed(() => !!props.product);

const localProduct = reactive(props.product ? { ...props.product } : {});

function save() {
  emit("save", { ...localProduct });
}

function formatLabel(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function isImageField(key) {
  const name = key.toLowerCase();
  return (
    name.includes("image") || name.includes("imagem") || name.includes("foto")
  );
}
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;

  overflow-y: auto;
  padding: 40px 20px;
}

.modal {
  background: var(--card-bg);
  color: var(--text);

  width: 100%;
  max-width: 520px;

  border-radius: 14px;
  border: 1px solid var(--border);

  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
  border-bottom: 1px solid var(--border);
}

.close-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: var(--text);
}

.form {
  padding: 20px;
  display: grid;
  gap: 14px;
  overflow-y: auto;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

input {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  color: var(--text);
}

input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.15);
}

/* Preview */

.image-preview {
  margin-top: 8px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
  max-height: 180px;
}

.image-preview img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.error {
  padding: 6px;
  font-size: 12px;
  color: #d33;
}

/* Botões */

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
}

.actions button {
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.cancel {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}

.save {
  background: var(--primary);
  color: white;
}
</style>
