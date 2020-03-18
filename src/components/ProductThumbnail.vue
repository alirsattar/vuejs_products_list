<template>
  <div class="product" @click="clickedItem">
    <a href="#selected-product">
      <img :src="imgSrc"/>
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
    },
    imgSrc:         String
  },
  methods: {
    clickedItem: function() {
      this.$emit("clickedItem", this.product);
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