<template>
  <button class="header-right_action" @click="addProduct">Save</button>

  <router-link class="header-right_action" to="/" @click="emptyErrors"
    >Cancel</router-link
  >
</template>

<script>
export default {
  methods: {
    emptyErrors() {
      this.$store.commit("SET_ERRORS", []);
    },
    async addProduct() {
      this.$store.commit("SET_ERRORS", []);
      const data = await this.$store.dispatch("addProduct");
      if (data.code === 400) {
        this.$store.commit("SET_ERRORS", data.message);
      } else {
        this.$router.push({ name: "IndexPage" });
      }
    },
  },
};
</script>
