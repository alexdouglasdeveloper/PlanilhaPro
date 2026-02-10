<template>
  <div>
    <h1>Dashboard</h1>

    <FileUploader />
    <ExportButton />
    <MetricsCards />
    <ProductsTable />
  </div>
</template>

<script setup>
import FileUploader from "@/components/FileUploader.vue";
import ExportButton from "@/components/ExportButton.vue";
import MetricsCards from "@/components/MetricsCards.vue";
import ProductsTable from "@/components/ProductsTable.vue";
</script>
