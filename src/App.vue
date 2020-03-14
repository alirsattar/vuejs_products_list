<template>
  <div id="app">
    <div id="product-list" v-for="item of products" v-bind:key="item.ItemName">
      <SingleProduct v-bind:product="item" />
    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SingleProduct from "./components/SingleProduct";
import fetchedProducts from "./assets/products.json";

export default {
  name: "VueJSProductListDemo",
  data: () => {
    return {
      products: fetchedProducts.items
    };
  },
  components: {
    SingleProduct
    // HelloWorld
  }
};
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
