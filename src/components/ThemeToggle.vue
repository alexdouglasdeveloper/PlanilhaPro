<template>
  <button class="theme-btn" @click="store.toggleTheme()">
    {{ store.theme === "light" ? "🌙 Dark" : "☀️ Light" }}
  </button>
</template>

<script setup>
import { useThemeStore } from "@/stores/themeStore";

const store = useThemeStore();
</script>

<style scoped>
.theme-btn {
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--card-bg);
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

.theme-btn:hover {
  opacity: 0.85;
}
</style>
