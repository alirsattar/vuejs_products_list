<template>
  <div id="app">
    
    <SingleProduct v-bind:productList="products" />

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SingleProduct from "./components/ListView";
import fetchedProducts from "./assets/products.json";

export default {
  name: 'VueJSProductListDemo',
  data: () => {
    return {
      products: [fetchedProducts.items]
    };
  },
  components: {
    SingleProduct,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
