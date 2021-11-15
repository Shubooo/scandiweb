import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      products: [],
      dProducts: [],
      addProduct: {
        sku: null,
        name: null,
        price: null,
        weight: null,
        height: null,
        length: null,
        size: null,
        width: null,
        type: "book",
      },
      errors: [],
    };
  },
  mutations,
  getters,
  actions,
};
