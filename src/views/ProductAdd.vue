<template>
  <div>
    <ProductForm />
  </div>
</template>

<script>
import ProductForm from "../components/ProductAdd/ProductForm.vue";
export default {
  data() {
    return {
      productModel: "",
    };
  },
  components: { ProductForm },
};
</script>

<style></style>
