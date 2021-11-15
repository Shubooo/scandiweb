import axios from "axios";

export default {
  async getProducts({ commit }) {
    const { data } = await axios.get(
      "https://scandiwebtest2022.000webhostapp.com/index.php/products"
    );
    commit("SET_PRODUCTS", data);
  },

  async deleteProducts({ state }) {
    const { data } = await axios.post(
      "https://scandiwebtest2022.000webhostapp.com/index.php/delete",
      state.dProducts
    );
    return data;
  },
  async addProduct({ state }) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: state.addProduct }),
    };
    const response = await fetch(
      "https://scandiwebtest2022.000webhostapp.com/index.php/add",
      requestOptions
    );
    const data = await response.json();
    return data;
  },
};
