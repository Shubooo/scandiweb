import axios from "axios";

export default {
  async getProducts({ commit }) {
    const { data } = await axios.get("http://localhost:8000/products");
    commit("SET_PRODUCTS", data);
  },

  async deleteProducts({ state }) {
    const { data } = await axios.post(
      "http://localhost:8000/delete",
      state.dProducts
    );
    return data;
  },
  async addProduct({ state }) {
    const { data } = await axios.post(
      "http://localhost:8000/add",
      state.addProduct
    );
    return data;
  },
};
