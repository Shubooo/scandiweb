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
  addProduct({ state }) {
    const data = fetch(
      "https://scandiwebtest2022.000webhostapp.com/index.php/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Host: "https://scandiwebtest2022.000webhostapp.com",
        },
        body: JSON.stringify(state.addProduct),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data;
      });

    return data;
  },
};
