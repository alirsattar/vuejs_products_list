<template>
  <div id="manufacturer-info">
    <h1>Manufacturer Info</h1>
    <p>Manufacturer: {{companyName}}</p>
    <img :src="this.$props.logoUrl">
  </div>
</template>

<script>
export default {
  name: "ManufacturerInfo",
  props: {
    manufacturerId: String,
    logoUrl:        String,
    companyName:    String
  }
};
</script>

<style>

img {
  max-width: 100%;
}

</style>