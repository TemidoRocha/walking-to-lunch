import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hikingSpotsApi: [],
    hikingSpots: [],
  },
  getters: {
    getHikingsSpotsApi(state) {
      return state.hikingSpotsApi;
    },
    getHikingsSpots(state) {
      return state.hikingSpots;
    },
  },
  mutations: {
    setAllHikingSpots(state, payload) {
      state.hikingSpotsApi = [...payload];
      state.hikingSpots = [...payload];
    },
    filterHikes(state, searchText) {
      if (searchText) {
        state.hikingSpots = state.hikingSpotsApi.filter((x) =>
          x.searchWords.some((e) => e.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
        );
      } else {
        state.hikingSpots = state.hikingSpotsApi;
      }
    },
  },
  actions: {
    async setAllHikingSpots({ commit }) {
      try {
        const hikesData = await axios.get('/api/all-hikings');
        commit('setAllHikingSpots', hikesData.data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
