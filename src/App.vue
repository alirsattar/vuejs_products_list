<template>
  <div id="app">

    <div id="left-column">

      <!-- Manufacturer Info -->
      <ManufacturerInfo
        v-bind:manufacturerId="manufacturerId"
        v-bind:companyName="companyName"
      />

      <div id="sales-rep-info">
        <h1>Sales Rep Info</h1>
        <hr>
        <span>{{salesRep.SalesRepID}}</span>
      </div>
    </div>

    <div id="middle-column">
      <div id="product-list">
        <h1>Product List</h1>
        <hr>
        <div id="item-list">
          <ProductThumbnail
            v-for="item of products"
            v-bind:key="item.ItemName"
            v-bind:product="item"
            @updateSelectedProduct="select"
          />
        </div>
      </div>
    </div>

    <div id="right-column">
      <ProductDetail v-bind:product="selectedProduct" />
    </div>

  </div>
</template>

<script>
import ProductThumbnail from "./components/ProductThumbnail";
import ProductDetail from "./components/ProductDetail";
import ManufacturerInfo from "./components/ManufacturerInfo";

import fetchedProducts from "./assets/products.json";

export default {
  name: "VueJSProductListDemo",
  data: () => {
    return {
      manufacturerId:   fetchedProducts.ManufacturerID,
      companyName:      fetchedProducts.CompanyName,
      salesRep:         fetchedProducts.SalesRep,
      products:         fetchedProducts.items,
      selectedProduct:  undefined
    };
  },
  components: {
    ProductThumbnail,
    ProductDetail,
    ManufacturerInfo
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
  display: flex;
}

#left-column {
  width: 25%;
}

#middle-column {
  width: 50%;
}

#right-column {
  width: 25%;
}

#product-list {
  /* width: 70%; */
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
  /* width: 30%; */
}

#sales-rep-info {
  clear: both;
}
</style>
