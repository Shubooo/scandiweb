import axios from "axios";

export default {
  async getProducts({ commit }) {
    const { data } = await axios.get(
      "http://scandiwebtest2022.000webhostapp.com/index.php/products"
    );
    commit("SET_PRODUCTS", data);
  },

  async deleteProducts({ state }) {
    const { data } = await axios.post(
      "http://scandiwebtest2022.000webhostapp.com/index.php/delete",
      state.dProducts
    );
    return data;
  },
  addProduct({ state }) {
    const data = fetch(
      "http://scandiwebtest2022.000webhostapp.com/index.php/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
