import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import AllProducts from '../views/AllProducts.vue';
import AllEmployees from '../views/AllEmployees.vue';
import AddProduct from '../views/AddProduct.vue';
import Product from '../views/Product.vue'
import Login from '../views/Login';
import Delivery from '../views/Delivery'
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/all_products',
    component: AllProducts,
  },
  {
    path:'/product:product_id',
    component: Product
  },
  {
    path:'/add_product',
    component: AddProduct
  },
  {
    path:'/view_all_employees',
    component: AllEmployees
  },
  {
    path:'/delivery',
    component: Delivery
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next)=>{
  if (to.path !== '/login' && !store.getters.isLoggedIn) {
    next({ path: '/login' });
  }
  else if (to.path === '/login' && store.getters.isLoggedIn){
    next({path: '/'});
  }
  else{
    next();
  }
});


export default router;
