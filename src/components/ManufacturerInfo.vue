<template>
  <div id="manufacturer-info">
    <!-- <h1>Manufacturer Info</h1> -->
    <h1>{{companyName}}</h1>
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

#manufacturer-info {
  background-color: #f5f5f5;
}

img {
  max-width: 100%;
}

</style>