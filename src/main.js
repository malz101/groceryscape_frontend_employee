import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';

Vue.config.productionTip = false;


Vue.component('toolbar', Toolbar);
Vue.component('app-footer', Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
