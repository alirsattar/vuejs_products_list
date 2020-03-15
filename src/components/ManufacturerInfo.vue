<template>
  <div id="manufacturer-info">
    <h1>Manufacturer Info</h1>
    <p>Manufacturer: {{companyName}}</p>
    <img :src="getImgSrc">
  </div>
</template>

<script>
export default {
  name: "ManufacturerInfo",
  props: {
    manufacturerId: String,
    companyName:    String
  },
  computed: {
    // Repeated this function in a few places; in production code would refactor to a shared method
    getImgSrc: function() {
      return `http://images.repzio.com/productimages/${this.manufacturerId}/logo${this.manufacturerId}_lg.jpg?width=200`;
    }
  }
};
</script>

<style>

img {
  max-width: 100%;
}

</style>