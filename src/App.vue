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
        v-bind:message="message"
      />

      <!-- Product List Component -->
      <ProductList
        v-bind:products="products"
        @clickedOnProduct="select"
      />

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
import ProductList      from "./components/ProductList";
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
      message:              fetchedProducts.Message,
      selectedProduct:      undefined
    };
  },
  components: {
    ProductList,
    ProductDetail,
    ManufacturerInfo,
    SalesRepInfo
  },
  methods: {
    select(item) {
      console.warn('APP.VUE SELECT FIRED', item);
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
  background-color: #f5f5f5;
}

#app {
  font-family: 'Avenir Black','Roboto', Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555555;
}

#header {
  overflow-y: auto;
}

#body {
  overflow-y: auto;
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
  /* clear: both; */
}

.break {
  width: 1rem;
  border: 1px solid #898989;
  margin: 10px auto;
}
</style>
