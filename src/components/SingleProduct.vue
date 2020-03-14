<template>
  <div class="product">
    <h1>TEST</h1>
    {{product.ItemName}}
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
  }
  // data: ()=> {
  //   return this.products;
  //   // return this.products = fetchedProducts.items;
  // },
  // beforeMount: ()=> {
  //   return this.products = fetchedProducts.items;
  // }

  // getProducts: () => {
  //   this.products = products;
  // }
};
</script>