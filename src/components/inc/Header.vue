<template>
  <div class="header">
    <h1 v-if="isAddPage">Product Add</h1>
    <h1 v-else>Product List</h1>
    <div class="header-right">
      <AddActions v-if="isAddPage" />
      <IndexActions v-else />
    </div>
  </div>
</template>

<script>
import IndexActions from "../IndexPage/IndexActions";
import AddActions from "../ProductAdd/AddActions";

export default {
  components: { IndexActions, AddActions },
  computed: {
    isAddPage() {
      return this.$route.path === "/add-product";
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px black solid;
  padding-bottom: 10px;
  &-right {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 170px;
    &_action {
      border: 2px black solid;
      padding: 4px 10px;
      font-size: 14px;
      color: black;
      background-color: white;
      &:hover {
        cursor: pointer;
        background-color: lightgray;
      }
    }
  }
}
</style>
