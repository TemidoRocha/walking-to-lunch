import Vue from 'vue';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'leaflet/dist/leaflet.css'; // for leaflet
import i18n from './plugins/i18n';
import { routes } from './plugins/routes';
import store from './plugins/store';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  // mode: 'history',
  routes,
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
