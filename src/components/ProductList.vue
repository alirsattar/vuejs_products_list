<template>
  <div id="product-list">
    <div id="item-list">
      <ProductThumbnail
        v-for="item in products"
        v-bind:key="item.ItemName"
        v-bind:product="item"
        v-bind:imgSrc="getProductImgSrc(item)"
        @clickedItem="updateSelectedProduct"
      />
    </div>
  </div>
</template>

<script>
import ProductThumbnail from "./ProductThumbnail";

export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    updateSelectedProduct: function(clickedProduct) {
      this.$emit('clickedOnProduct', clickedProduct);
    },
    getProductImgSrc: function(product) {
      return `${product.PhotoName}?width=800&height=600&scale=canvas`;
    }
  },
  components: {
    ProductThumbnail
  }
}
</script>

<style>
@media (min-width: 800px) {
  #item-list {
    /* justify-content: space-between; */
    margin: 0 2rem;
  }
}

#product-list {
  margin: 0 auto;
}

#item-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

</style>