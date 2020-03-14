<template>
  <div class="product">
    <span
    @click="updateSelectedProduct"
    >{{product.ItemName}}
    </span>
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
      this.$emit('updateSelectedProduct', this.product)
    }
  }
};
</script>