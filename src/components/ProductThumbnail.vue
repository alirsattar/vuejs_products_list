<template>
  <div class="product" @click="updateSelectedProduct">
    <a href="#selected-product">
      <img :src="getProductImgSrc" alt />
      <span class="item-name">{{product.ItemName}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductThumbnail",
  props: {
    product: {
      ItemId: Number,
      ItemName: String,
      Description: String,
      Dimensions: String,
      BasePrice: Number
    }
  },
  methods: {
    updateSelectedProduct() {
      this.$emit("updateSelectedProduct", this.product);
    }
  },
  computed: {
    getProductImgSrc: function() {
      return `${this.product.PhotoName}?width=300&height=300`;
    }
  }
};
</script>
