export default {
  SET_PRODUCTS(state, data) {
    state.products = data;
  },
  SET_DELETE_PRODUCTS(state, dProducts) {
    state.dProducts = dProducts;
  },
  SET_ADD_PRODUCT(state, addProduct) {
    state.products.push(addProduct);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  },
};
