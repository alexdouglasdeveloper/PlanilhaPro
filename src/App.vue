<template>
  <div class="app">
    <nav class="navbar">
      <h2>Planilha Pro</h2>

      <div class="links">
        <router-link to="/">Dashboard</router-link>
        <router-link to="/gallery">Galeria</router-link>

        <!-- botão dark/light -->
        <ThemeToggle />
      </div>
    </nav>

    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;

  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
}

.links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.links a {
  text-decoration: none;
  font-weight: 600;
  color: var(--text);
}

.links a.router-link-active {
  color: var(--primary);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 24px;
}
</style>
