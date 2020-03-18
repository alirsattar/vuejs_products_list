import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue';
import ProductDetail from './components/ProductDetail';
import Main from './components/Main';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main
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
