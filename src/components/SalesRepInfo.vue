<template>
  <div id="sales-rep-info">
    <!-- <h1>Sales Rep Info</h1> -->

    <div v-if="context === 'header'">
      <img
        id="manufacturer-logo"
        :src="logoUrl"
      >

      <br>
        <strong>
          {{ fullName }} -
          <span>
            {{ (salesRepInfo.EmailAddress).charAt(0).toUpperCase() + salesRepInfo.EmailAddress.slice(1) }}
          </span>
        </strong>
    </div>

    <div v-else>
      <p>Name: {{fullName}}</p>
      <br><span>Email: {{salesRepInfo.EmailAddress}}</span>
      <br><span>Phone: {{salesRepInfo.Phone}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesRepInfo',
  props: {
    salesRepInfo: {
      FirstName:    String,
      LastName:     String,
      SalesRepID:   Number,
      EmailAddress: String
    },
    context: String,
    logoUrl: String
  },
  computed: {
    fullName: function() {
      return `${this.salesRepInfo.FirstName} ${this.salesRepInfo.LastName}`;
    }
  }
}
</script>

<style>

@media screen and (max-width: 700px){
  #manufacturer-logo {
    width: 30vw;
  }
}

#sales-rep-info {
  width: 100%;
  color: #555555;
  font-size: 1.25em;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0px 3px rgba(0,0,0, .5);
}

</style>