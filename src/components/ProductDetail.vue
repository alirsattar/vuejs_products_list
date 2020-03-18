<template>
  <div id="selected-product">
    
    <table>
      <tr>
        <td>
          <router-link to="/">
            <span>
              All Products
            </span>
          </router-link>
        </td>
        <td class="table-spacer"></td>
        <td>
          <span>
            / {{ product.ItemName }}
          </span>
        </td>
      </tr>
    </table>

    <div v-if="product">

      <img :src="getProductImgSrc" alt="">

      <div id="detail-text">
        <h2 id="detail-name">{{product.ItemName}}</h2>
        <p id="detail-price" class="item-price">$ {{product.BasePrice.toFixed(2)}}</p>
        <p id="detail-item-id">Item ID: {{product.ItemID}}</p>
        <p id="detail-description"><span>{{product.Description}}</span></p>
        <p id="detail-dimensions">Dimensions: {{product.Dimensions}}</p>
      </div>

    </div>
    <div v-else>Select a product for details.</div>
  </div>
</template>

<script>
import productList from '../assets/products.json';

export default {
  name: "ProductDetail",
  data: ()=> {
    return {
      product: Object
    }
  },
  created() {
    if(this.$route.params.id) {
      const idFromParams = this.$route.params.id;
      this.product = productList.items.find((product) => product.ItemID === idFromParams);
    }
  },
  computed: {
    // Repeated this function in a few places; in production code would refactor to a shared method
    getProductImgSrc: function() {
      return `${this.product.PhotoName}?width=500&height=500`;
    }
  }
};
</script>

<style>
#detail-text {
  margin: 0 .4rem;
}

#selected-product {
  text-align: center;
  font-family: 'Avenir';
  margin: 0;
}

#selected-product a {
  text-decoration: underline;
}

#selected-product table {
  margin: 1rem;
  font-size: .9rem;
  text-align: left;
  padding: 10px;
}

#product-info-table * {
  text-align: left;
  vertical-align: top;
}

.table-spacer {
  width: .5rem;
}

#detail-name {
  font-family: 'Avenir Black';
  font-size: 1.75rem;
  margin-bottom: 0;
}

#detail-price {
  font-size: 2.25rem;
  font-weight: 100;
}

#detail-item-id {
  font-size: 1.25rem;
  font-weight: 585;
  margin-bottom: 1.25rem;
}

#detail-description {
  font-size: 1.5rem;
}

#detail-dimensions {
  font-size: 1.35rem;
  margin: 1.75rem 1.75rem 3rem 1.75rem;
}
</style>