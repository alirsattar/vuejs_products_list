import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue';
import ProductDetail from './components/ProductDetail';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/detail',
    component: ProductDetail
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
