<template>
  <div id="sales-rep-info">
    <h1>Sales Rep Info</h1>
    <p>Name: {{fullName}}</p>
    <br><span>Email: {{salesRepInfo.EmailAddress}}</span>
    <br><span>Phone: {{salesRepInfo.Phone}}</span>
  </div>
</template>

<script>
export default {
  name: 'SalesRepInfo',
  props: {
    salesRepInfo: {
      FirstName: String,
      LastName: String,
      SalesRepID: Number,
      EmailAddress: String
    }
  },
  computed: {
    fullName: function() {
      return `${this.salesRepInfo.FirstName} ${this.salesRepInfo.LastName}`;
    }
  }
}
</script>

<style>

</style>