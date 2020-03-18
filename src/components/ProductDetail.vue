<template>
  <div id="selected-product">    
    <table id="breadcrumb">
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

    <div id="product-container" v-if="product">

      <div id="product-image-container">
        <img id="product-img" :src="getProductImgSrc">
      </div>

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
      return `${this.product.PhotoName}?width=800&height=600&scale=canvas`;
    }
  }
};
</script>

<style>
@media (max-width: 600px) {
  #selected-product {
    margin: 0;
  }
}

@media (min-width: 600px) {
  #selected-product {
    margin: 0 100px;
  }

  #breadcrumb * {
    font-size: 1.5rem;
  }

  #detail-name {
    margin-top: 0;
  }

  #detail-text {
    text-align: left;
    margin-left: 50px;
  }
}

@media (min-width: 800px) {
  #product-image-container {
    max-width: 50%;
    scale: 100%;
  }
  
  #product-container {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  
  #detail-text {
    max-width: 50%;
  }
}

@media (min-width: 1024px) {
  #selected-product {
    margin: 0 150px;
  }

  #detail-text {
    margin-left: 50px;
  }
}

@media (min-width: 1440px) {
  #selected-product {
    margin: 0 300px;
  }

  #detail-text {
    margin-left: 5rem;
  }
}

#product-img {
  box-shadow: 1px 1px 5px rgba(0,0,0, .10);
}

#product-container {
  margin-bottom: 5rem;
}

#selected-product {
  text-align: center;
  font-family: 'Avenir';
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
  margin: 1.75rem 0 0;
}
</style>