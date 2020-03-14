<template>
  <div id="app">
    
    <div id="product-list">
      <h1>Product List</h1>
      <div id="item-list">
        <ProductThumbnail
          v-for="item of products"
          v-bind:key="item.ItemName"
          v-bind:product="item"
          @updateSelectedProduct="select"
        />
      </div>
    </div>
    
    <ProductDetail
      v-bind:product="selectedProduct"
    />
  
    <div id="sales-rep-info">
      <hr>
      <span>{{salesRep.SalesRepID}}</span>
    </div>
  </div>
</template>

<script>
import ProductThumbnail from "./components/ProductThumbnail";
import ProductDetail from "./components/ProductDetail";

import fetchedProducts from "./assets/products.json";

export default {
  name: "VueJSProductListDemo",
  data: () => {
    return {
      manufacturerId:   fetchedProducts.ManufacturerId,
      companyName:      fetchedProducts.CompanyName,
      salesRep:         fetchedProducts.SalesRep,
      products:         fetchedProducts.items,
      selectedProduct:  undefined
    };
  },
  components: {
    ProductThumbnail,
    ProductDetail
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
  margin: 50px;
}

#product-list {
  width: 70%;
  float: left;
}

#item-list {
  display: flex;
  flex-wrap: wrap;
}

.product {
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  width: 30%;
  text-align: center;
}

#selected-product {
  float: right;
  width: 30%;
}

#sales-rep-info {
  clear: both;
}

</style>
