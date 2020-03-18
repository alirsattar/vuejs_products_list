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

</style>