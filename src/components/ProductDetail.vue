<template>
  <div id="selected-product">
    <h1>Detail View</h1>
    <div v-if="product">
      <table id="product-info-table">
        <tr>
          <td>ID: </td>
          <td>&nbsp;</td>
          <td>{{product.ItemID}}</td>
        </tr>
        <tr>
          <td>Name: </td>
          <td>&nbsp;</td>
          <td>{{product.ItemName}}</td>
        </tr>
        <tr>
          <td>Description: </td>
          <td>&nbsp;</td>
          <td>{{product.Description}}</td>
        </tr>
        <tr>
          <td>Dimensions: </td>
          <td>&nbsp;</td>
          <td>{{product.Dimensions}}</td>
        </tr>
        <tr>
          <td>Base Price: </td>
          <td>&nbsp;</td>
          <td>$ {{product.BasePrice.toFixed(2)}}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      Select a product for details.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductThumbnail',
  props: {
    product: Object
  }
}
</script>

<style>
#selected-product {
  /* width: 100%; */
}

#product-info-table * {
  text-align: left;
  vertical-align: top;
}

</style>