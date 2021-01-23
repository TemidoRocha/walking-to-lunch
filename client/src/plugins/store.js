import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // from the api
    hikingSpotsApi: [],
    // for leaflet
    hikingSpots: [],
    //for cards
    showAll: false,
    hikingCards: [],
  },
  getters: {
    getHikingsSpotsApi(state) {
      return state.hikingSpotsApi;
    },
    getHikingsSpots(state) {
      return state.hikingSpots;
    },
    getHikingsCards(state) {
      return state.hikingCards;
    },
    getShowAll(state) {
      return state.showAll;
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
    // hiking cards methods
    filterHikingCards(state, payload) {
      /** filter the hikingCards as per code district */
      if (payload) {
        state.showAll = false;
        state.hikingCards = state.hikingSpotsApi.filter((x) =>
          x.code.includes(payload.slice(1, 4))
        );
      } else {
        state.hikingCards = [];
      }
    },
    setHikingCardsIsShowAll(state, payload) {
      state.hikingCards = payload ? state.hikingSpotsApi : [];
    },
    updateShowAll(state, payload) {
      state.showAll = payload;
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
