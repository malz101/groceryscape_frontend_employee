import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Toolbar from './components/Toolbar';
import ToolbarLogin from './components/ToolbarLogin';
import Footer from './components/Footer';
import StarRating from 'vue-star-rating';
import Sidebar from './components/Sidebar';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';

Vue.config.productionTip = false;

Vue.component('toolbar', Sidebar);
Vue.component('toolbar-login', ToolbarLogin);
Vue.component('app-footer', Footer);
Vue.component('side-bar', Sidebar);
Vue.component('star-rating', StarRating);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
