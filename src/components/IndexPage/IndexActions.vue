<template>
  <router-link class="header-right_action" to="/add-product">Add</router-link>
  <button
    class="header-right_action"
    id="delete-product"
    @click="deleteProducts()"
  >
    Mass Delete
  </button>
</template>

<script>
export default {
  methods: {
    async deleteProducts() {
      const response = await this.$store.dispatch("deleteProducts");
      if (response.code == 200) {
        this.$store.dispatch("getProducts");
      }
    },
  },
};
</script>
