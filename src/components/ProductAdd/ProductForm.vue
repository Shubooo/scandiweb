<template>
  <div class="errors_box" v-if="errors">
    <div v-for="(error, key) in errors" :key="key" class="errors">
      <span>{{ error }}</span>
    </div>
  </div>
  <form id="product_form">
    <div class="field">
      <label>SKU</label>
      <input type="text" v-model="product.sku" />
    </div>
    <div class="field">
      <label>Name</label>
      <input type="text" v-model="product.name" />
    </div>
    <div class="field">
      <label>Price</label>
      <input type="text" v-model="product.price" />
    </div>
    <div class="field">
      <label>Type Switcher</label>
      <select name="productType" id="productType" v-model="product.type">
        <option value="dvd">DvD</option>
        <option value="furniture">Furniture</option>
        <option value="book">Book</option>
      </select>
    </div>
    <span v-if="product.type === 'book'" class="byType">
      <div class="desc">Please, provide weight</div>
      <div class="field">
        <label>Weight</label>
        <input type="text" v-model="product.weight" />
      </div>
    </span>
    <span v-else-if="product.type === 'furniture'" class="byType">
      <div class="desc">Please, provide dimensions</div>
      <div class="field">
        <label>Length</label>
        <input type="text" v-model="product.length" />
      </div>
      <div class="field">
        <label>Widtht</label>
        <input type="text" v-model="product.width" />
      </div>
      <div class="field">
        <label>Height</label>
        <input type="text" v-model="product.height" />
      </div>
    </span>
    <span v-else-if="product.type === 'dvd'" class="byType">
      <div class="desc">Please, provide size</div>
      <div class="field">
        <label>Size</label>
        <input type="text" v-model="product.size" />
      </div>
    </span>
  </form>
</template>

<script>
export default {
  computed: {
    errors() {
      return this.$store.getters["getErrors"];
    },
    product: {
      get() {
        return this.$store.getters["addProduct"];
      },
      set(value) {
        this.$store.commit("SET_ADD_PRODUCT", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  margin: 0 auto;
  align-items: flex-start;
  margin-bottom: 200px;
}
select {
  width: 215px;
  height: 30px;
  border: 2px black solid;
  border-radius: 3%;
}
.desc {
  font-weight: bold;
  margin: 30px 0;
}
.field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
}
input {
  border: 2px black solid;
  border-radius: 2%;
  width: 200px;
  height: 20px;
  padding: 4px 6px;
}
label {
  font-weight: bold;
}
.byType {
  min-width: 350px;
}
.errors_box {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.errors {
  margin: 3px auto;
  text-align: start;
  min-width: 300px;
  background-color: #f0f0f0;
  border-radius: 30px;
  padding: 10px 40px;
}
</style>
