import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

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
Vue.component('star-rating', StarRating);

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.component('loading', Loading);

function formatDate(data){
  if(!data){
    return null;
  }
  let date = new Date(`${data}`);
  return `${date.toLocaleDateString()}`;
}

Vue.filter('formatDate', formatDate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
