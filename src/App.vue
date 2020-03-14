<template>
  <div id="app">
    <div id="product-list">
      <h1>Product List</h1>
      <div id="item-list">
        <SingleProduct
          v-for="item of products"
          v-bind:key="item.ItemName"
          v-bind:product="item"
          @updateSelectedProduct="select"
        />
      </div>
    </div>
    <div id="detail-view">
      <h1>Detail View</h1>
      <div id="selected-product">
        <div v-if="selectedProduct">
          {{selectedProduct.ItemName}}
        </div>
        <div v-else>
          <span>NO SELECTED PRODUCT</span>
        </div>
      </div>
    </div>
    <div id="sales-rep-info">
      <hr>
      <span>{{salesRep.SalesRepID}}</span>
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
      manufacturerId:   fetchedProducts.ManufacturerId,
      companyName:      fetchedProducts.CompanyName,
      salesRep:         fetchedProducts.SalesRep,
      products:         fetchedProducts.items,
      selectedProduct:  undefined
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
  margin: 50px;
}

#product-list {
  width: 70%;
  /* display: flex; */
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

#detail-view {
  float: right;
  width: 30%;
}

#sales-rep-info {
  clear: both;
}

</style>
