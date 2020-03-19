<template>
  <div id="sales-rep-info" :class="context">
    <div id="top-banner" v-if="context === 'header'">
      <img
        id="banner-logo"
        :src="logoUrl"
      >
      <br>
        <strong id="banner-salesrep">
          {{ fullName }} -
          <span>
            {{ (salesRepInfo.EmailAddress).charAt(0).toUpperCase() + salesRepInfo.EmailAddress.slice(1) }}
          </span>
        </strong>
    </div>

    <div class="rep-info-footer" v-else>
      <p class="footer-rep-name">{{fullName}}</p>
      <hr class="break">
      <p class="footer-rep-email">{{salesRepInfo.EmailAddress}}</p>
      <p class="rep-phones">Phone: {{salesRepInfo.Phone}} - Cel: {{formatPhone}}</p>
      <p>{{`${salesRepInfo.City}, ${salesRepInfo.State}`}}</p>
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
    },
    formatPhone: function() {
      let formattedPhone;      
      if(this.salesRepInfo.CellPhone) {
        formattedPhone = this.salesRepInfo.CellPhone.replace(/[^0-9]/g, '')
          .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
      return formattedPhone;
    }
  }
}
</script>

<style>

@media only screen and (max-width: 600px){
  #manufacturer-logo {
    width: 30vw;
  }

  #banner-logo {
    height: 5rem;
  }

  #banner-salesrep {
    /* max-height: 50%; */
    font-size: 1rem;
  }
}

@media (min-width: 600px) {
  #banner-logo {
    height: 3rem;
  }

  #banner-salesrep {
    font-size: 1rem;
  }
}

@media (min-width:  800px) {
  #top-banner {
    margin: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #banner-logo {
    float: left;
    height: 5rem;
  }

  #banner-salesrep {
    float: right;
    font-size: 2rem;
  }

  #sales-rep-info.header {
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

#top-banner {
  width: 100%;
}

#sales-rep-info {
  font-size: 1.25em;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 0px 3px rgba(0,0,0, .5);
  background-color: white;
}

#sales-rep-info.header {
  margin-bottom: 10px;
}

.header {
  background-color: white;
}

#sales-rep-info.footer {
  background-color: #262122;
  font-family: 'Avenir';
  font-weight: lighter;
  color: #a4a1a3;
  padding: 30px 1rem;
}

#sales-rep-info.footer h2,p {
  margin: 0;
}

#sales-rep-info.footer hr {
  width: 10px;
}

.footer-rep-name {
  font-size: 1.60em;
}

.footer-rep-email {
  font-size: 1.25em;
}

.rep-phones {
  font-size: .9em;
}

</style>