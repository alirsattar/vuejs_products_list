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
    companyName: String
  },
  computed: {
    getImgSrc: function() {
      return `http://images.repzio.com/productimages/${this.manufacturerId}/logo${this.manufacturerId}_lg.jpg?width=200`;
    }
  }
};
</script>

<style>

</style>