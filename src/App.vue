<template>
  <div id="app">
    <div id="left" class="column">
      <ManufacturerInfo
        v-bind:manufacturerId="manufacturerId"
        v-bind:companyName="companyName"
      />

      <SalesRepInfo
        v-bind:salesRepInfo="salesRep"
      />
    </div>

    <div id="middle" class="column">
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
    </div>

    <div id="right" class="column">
      <ProductDetail
        v-bind:product="selectedProduct"
      />
    </div>
  </div>
</template>

<script>
import ProductThumbnail from "./components/ProductThumbnail";
import ProductDetail    from "./components/ProductDetail";
import ManufacturerInfo from "./components/ManufacturerInfo";
import SalesRepInfo     from "./components/SalesRepInfo";

import fetchedProducts  from "./assets/products.json";

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
    ManufacturerInfo,
    SalesRepInfo
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
  /* margin: 50px; */
  display: flex;
  align-content: space-between;
}

#left {
  width: 20%;
}

#middle {
  width: 60%;
}

#right {
  width: 20%;
}

#product-list {
  margin: 0 auto;
}

#item-list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.column {
  margin: 0 20px;
}

@media only screen and (max-width: 1100px) {
  body {
    background-color: lightblue;
  }

  #app {
    display: inline;
  }

  #left,
  #middle,
  #right {
    width: 100%;
  }
}

#sales-rep-info {
  clear: both;
}
</style>
