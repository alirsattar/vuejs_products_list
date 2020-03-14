<template>
  <div id="app">
    <div id="product-list">
      <SingleProduct
        v-for="item of products"
        v-bind:key="item.ItemName"
        v-bind:product="item"
        v-model="selectedProduct"
        @updateSelectedProduct="select"
      />
    </div>
    <div id="detail-view">
      <h1>DETAIL VIEW</h1>
      <div id="selected-product">
        <div v-if="selectedProduct">
          {{selectedProduct.ItemName}}
        </div>
        <div v-else>
          <span>NO SELECTED PRODUCT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProduct from "./components/SingleProduct";
import fetchedProducts from "./assets/products.json";

export default {
  name: "VueJSProductListDemo",
  data: () => {
    return {
      products: fetchedProducts.items,
      selectedProduct: undefined
    };
  },
  components: {
    SingleProduct
  },
  methods: {
    select(item) {
      this.$data.selectedProduct = item;
    }
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

#product-list {
  float: left;
  width: 50%;
}

#detail-view {
  float: right;
  width: 50%;
}

</style>
