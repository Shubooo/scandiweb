import axios from "axios";

export default {
  async getProducts({ commit }) {
    const { data } = await axios.get(
      "http://d04e-212-58-120-36.ngrok.io/products"
    );
    commit("SET_PRODUCTS", data);
  },

  async deleteProducts({ state }) {
    const { data } = await axios.post(
      "http://d04e-212-58-120-36.ngrok.io/delete",
      state.dProducts
    );
    return data;
  },
  addProduct({ state }) {
    const data = fetch("http://d04e-212-58-120-36.ngrok.io/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.addProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    return data;
  },
};
