<template>
  <div id="manufacturer-info">
    <!-- <h1>Manufacturer Info</h1> -->
    <h1 id="manufacturer-name">{{companyName}}</h1>
    
    <hr id="break">

    <div id="message" v-html="message"></div>

  </div>
</template>

<script>
export default {
  name: "ManufacturerInfo",
  props: {
    manufacturerId: String,
    logoUrl:        String,
    companyName:    String,
    message:        String
  }
};
</script>

<style>

#manufacturer-name {
  font-size: 2.5rem;
  margin-top: 15px;
}

#break {
  width: 1rem;
  border: 1px solid #898989;
}

#manufacturer-info {
  background-color: #f5f5f5;
  margin: 0 20px;
}

#message {
  color: #898989;
  font-family: 'Avenir';
  font-size: 1.25rem;
}

img {
  max-width: 100%;
}

</style>