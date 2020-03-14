<template>
  <div class="product" @click="updateSelectedProduct">
    <img :src="getProductImgSrc" alt="">
    <span class="item-name">{{product.ItemName}}</span>
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
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
    },
  }
};
</script>
