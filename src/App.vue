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
      <router-view></router-view>
    </div>

    <div id="footer">
      <!-- Footer Component -->
      <SalesRepInfo
        v-bind:salesRepInfo="salesRep"
        context="footer"
      />
    </div>
  </div>
</template>

<script>
import SalesRepInfo     from "./components/SalesRepInfo";
import ManufacturerInfo from './components/ManufacturerInfo';

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
    SalesRepInfo,
    ManufacturerInfo
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
@media (max-width: 600px) {
  #app {
    display: inline;
  }

  #header {
    display: inline;
    min-height: 5rem;
  }

  #header * {
    max-height: 50%;
  }

  #body {
    padding-top: 10rem;
  }
}

@media (min-width: 600px) {
  #body {
    padding-top: 10rem;
  }

  #header {    
    height: 10rem;
  }
}

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
  position: fixed;
  width: 100%;
}

#body {
  overflow-y: auto;
}

.column {
  margin: 0 20px;
}

.break {
  width: 1rem;
  border: 1px solid #898989;
  margin: 10px auto;
}

a, a:any-link {
  text-decoration: none;
  color: inherit;
}

</style>
