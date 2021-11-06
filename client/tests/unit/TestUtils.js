import { createLocalVue } from '@vue/test-utils';
import VueI18n from 'vue-i18n';
import store from '../../src/plugins/store';
import dayjs from '../../src/plugins/dayjs';
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

import localesEn from '../../src/plugins/i18n/locales/en.json';
const en = { en: localesEn };

// Use a local vue
const localVue = createLocalVue();
localVue.use(dayjs);
localVue.use(store);
localVue.use(VueI18n);

const app = document.createElement('div');
app.setAttribute('data-app', 'true');
document.body.appendChild(app);

// Create new i18n instance
module.exports = {
  localVue,
  i18n: new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: en,
  }),
};
