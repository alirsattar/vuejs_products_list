<template>
  <div class="product" @click="updateSelectedProduct">
    <a href="#selected-product">
      <img :src="getProductImgSrc" alt />
      <br><span class="item-name">{{product.ItemName}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ProductThumbnail",
  props: {
    product: {
      ItemId:       Number,
      ItemName:     String,
      Description:  String,
      Dimensions:   String,
      BasePrice:    Number
    }
  },
  methods: {
    updateSelectedProduct() {
      this.$emit("updateSelectedProduct", this.product);
    }
  },
  computed: {
    // Repeated this function in a few places; in production code would refactor to a shared method
    getProductImgSrc: function() {
      return `${this.product.PhotoName}?width=300&height=300`;
    }
  }
};
</script>

<style>
.product {
  border: 1px solid black;
  border-radius: 5px;
  margin: 3px;
  padding: 5px;
  width: 30%;
  text-align: center;
}

.product img {
  max-width: 100%;
}

@media only screen and (max-width: 800px) {
  .product {
    width: 40%;
  }
}

@media only screen and (max-width: 600px) {
  .product {
    width: 100%;
  }
}
</style>