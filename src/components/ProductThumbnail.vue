<template>
  <div class="product"
  
  >
    <!-- <a href="#selected-product"> -->
    <router-link :to="{ path: '/detail', query: { product: product } }">
      <div class="thumbnail-container">
        <img class="thumbnail" :src="imgSrc"/>
      </div>
      <div class="item-text">
        <h2 class="item-name">{{product.ItemName}}</h2>
        <h2 class="item-price">$ {{(product.BasePrice).toFixed(2)}}</h2>
      </div>
    </router-link>
    <!-- </a> -->
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
  padding: 5px;
  text-align: left;
}

.thumbnail-container {
  text-align: center;
  margin-bottom: 10px;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0,0,0, .10);
}

.thumbnail {
  padding: 30px 0;
  max-width: 80%;
}

/* a {
  color: inherit;
  text-decoration: none;
} */

.product h2 {
  margin: 0;
  font-size: 1.60rem;
}

.item-text {
  padding: 0 5px;
  margin-bottom: 35px;
}

.item-price {
  font-family: 'Avenir';
  font-weight: lighter;
  color: #888888;
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