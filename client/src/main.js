import Vue from 'vue';
import App from './App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'leaflet/dist/leaflet.css'; // for leaflet
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
