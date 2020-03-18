<template>
  <div id="main">
    <!-- Product List Component -->
    <ProductList
      v-bind:products="products"
      @clickedOnProduct="select"
    />
  </div>
</template>

<script>
import ProductList      from "./ProductList";

import fetchedProducts  from "../assets/products.json";

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
    ProductList
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

#product-list {
  margin: 0 auto;
}

#item-list {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>
