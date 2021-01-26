import Vue from 'vue';
const global = {
  install(Vue, options) {
    Vue.prototype.globalHelper = () => {
      function capitalizeFLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
      }
    };
  },
};
Vue.use(global);
