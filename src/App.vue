<template>
  <div id="app">

    <div id="header">
      
      <!-- Header Component -->
      <SalesRepInfo
        v-bind:salesRepInfo="salesRep"
        v-bind:logoUrl="logoUrl"
        context="header"
      />

    </div>

    <div id="body">

      <!-- Manufacturer Info Component -->
      <ManufacturerInfo
        v-bind:manufacturerId="manufacturerId"
        v-bind:companyName="companyName"
        v-bind:logoUrl="logoUrl"
      />

      <!-- Product List Component -->
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

    <div id="footer">

      <!-- Footer Component -->
      <SalesRepInfo
        v-bind:salesRepInfo="salesRep"
        context="footer"
      />

    </div>

      <ProductDetail
        v-bind:product="selectedProduct"
      />
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
      manufacturerId:       fetchedProducts.ManufacturerID,
      manufacturerLogoUrl:  '',
      companyName:          fetchedProducts.CompanyName,
      salesRep:             fetchedProducts.SalesRep,
      products:             fetchedProducts.items,
      selectedProduct:      undefined
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
  },
  computed: {
    logoUrl: function() {
      return `http://images.repzio.com/productimages/${this.manufacturerId}/logo${this.manufacturerId}_lg.jpg?width=200`;
    }
  }
};
</script>

<style>

body {
  margin: 0 auto;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#header {
  
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
