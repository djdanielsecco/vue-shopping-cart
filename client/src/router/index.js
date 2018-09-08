import VueRouter from 'vue-router';
import Products from '../components/Products.vue';
import Product from '../components/Product.vue';
import Category from '../components/Category.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true
  },
  {
    path: '/category/:category',
    name: 'category',
    component: Category,
    props: true
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;