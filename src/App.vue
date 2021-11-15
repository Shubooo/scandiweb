<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/inc/Header";
import Footer from "./components/inc/Footer";

export default {
  components: { Footer, Header },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
