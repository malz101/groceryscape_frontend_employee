import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop';
import About from '../views/About';
import Cart from '../views/Cart';
import Login from '../views/Login';
import Checkout from '../views/Checkout';
import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/shop',
    component: Shop,
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/checkout',
    component: Checkout
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next)=>{
  // if (to.path !== '/login' && !store.getters.isLoggedIn) {
  //   next({ path: '/login' });
  // }
  if (to.path === '/login' && store.getters.isLoggedIn){
    next({path: '/'});
  }
  else{
    next();
  }
});


export default router;
