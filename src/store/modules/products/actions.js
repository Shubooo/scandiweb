import axios from "axios";

export default {
  async getProducts({ commit }) {
    const { data } = await axios.get(
      "https://scanditest2021.000webhostapp.com/index.php/products"
    );
    commit("SET_PRODUCTS", data);
  },

  async deleteProducts({ state }) {
    const { data } = await axios.post(
      "https://scanditest2021.000webhostapp.com/index.php/delete",
      state.dProducts
    );
    return data;
  },
  async addProduct({ state }) {
    const { data } = await axios.post(
      "https://scanditest2021.000webhostapp.com/index.php/add",
      state.addProduct
    );
    return data;
  },
};
