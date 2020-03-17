<template>
  <div id="sales-rep-info">
    <!-- <h1>Sales Rep Info</h1> -->

    <div v-if="context === 'header'">
      <img
        id="manufacturer-logo"
        :src="logoUrl"
      >

      <p>{{ fullName }} - <span>{{ (salesRepInfo.EmailAddress).charAt(0).toUpperCase() + salesRepInfo.EmailAddress.slice(1) }}</span></p>
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
  #sales-rep-info {
    /* background-color: blue; */
  }

  #manufacturer-logo {
    width: 35vw;
  }

}

#sales-rep-info {
  
}

span:first-letter {
  text-transform: capitalize;
}

</style>