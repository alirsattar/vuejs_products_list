<template>
  <div id="product-list">
  <h1>TEST</h1>

  {{productList}}

  <ul>
    <li v-for="item of productList" v-bind:key="item">
      {{item}}
    </li>
  </ul>

  </div>
</template>

<script>

export default {
  name: 'SingleProduct',
  props: ['productList'],
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
}
</script>