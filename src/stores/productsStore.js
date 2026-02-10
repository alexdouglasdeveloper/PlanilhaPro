import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  getters: {
    totalWithImage: (state) =>
      state.products.filter((p) => p.image && p.image.toString().trim() !== "")
        .length,

    totalUnavailable: (state) =>
      state.products.filter((p) => {
        const status = (p.status || "").toLowerCase();
        return status.includes("indispon");
      }).length,

    totalOk: (state) =>
      state.products.filter((p) => {
        const status = (p.status || "").toLowerCase();
        return status.includes("dispon");
      }).length,

    averageScore: (state) => {
      const scores = state.products
        .map((p) => Number(p.score))
        .filter((n) => !isNaN(n));

      if (!scores.length) return 0;

      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

      return avg.toFixed(1);
    },
  },

  actions: {
    setProducts(data) {
      this.products = data;
    },

    addProduct(product) {
      product.id = Date.now();
      this.products.push(product);
    },

    updateProduct(updatedProduct) {
      const index = this.products.findIndex((p) => p.id === updatedProduct.id);

      if (index !== -1) {
        this.products[index] = updatedProduct;
      }
    },

    deleteProduct(id) {
      this.products = this.products.filter((p) => p.id !== id);
    },
  },
});
