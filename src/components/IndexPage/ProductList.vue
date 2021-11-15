<template>
  <div class="products">
    <div class="products_item" v-for="product in products" :key="product.id">
      <input
        type="checkbox"
        class="products_item_checkbox delete-checkbox"
        :value="product.sku"
        v-model="dProducts"
      />
      <span>{{ product.sku }}</span>
      <span>{{ product.name }}</span>
      <span>{{ product.price }} $</span>
      <span v-if="product.weight">Weight: {{ product.weight }}KG</span>
      <span v-if="product.height"
        >Dimension: {{ product.length }}x{{ product.width }}x{{
          product.height
        }}</span
      >
      <span v-if="product.size">Size: {{ product.size }} MB</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},

  computed: {
    dProducts: {
      get() {
        return this.$store.getters["dProducts"];
      },
      set(value) {
        this.$store.commit("SET_DELETE_PRODUCTS", value);
      },
    },
    products() {
      return this.$store.getters["products"];
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 20%);
  justify-content: space-between;
  grid-row-gap: 10px;
  padding: 40px 0;
  &_item {
    border: 2px black solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 30px 0;
    min-height: 120px;
    justify-content: space-between;
    font-weight: bold;
    &_checkbox {
      position: absolute;
      top: 10px;
      left: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
