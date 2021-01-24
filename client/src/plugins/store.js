import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    publicPath: process.env.BASE_URL,
    userId: null,
    userEmail: null,
    userName: null,
    // from the api
    hikingSpotsApi: [],
    // for leaflet
    hikingSpots: [],
    //for cards
    showAll: false,
    hikingCards: [],
  },
  getters: {
    getPublicPath(state) {
      return state.publicPath;
    },
    getUserId(state) {
      return state.userId;
    },
    getUserName(state) {
      return state.userEmail;
    },
    getUserEmail(state) {
      return state.userName;
    },
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
    // login settings
    setUser(state, payload) {
      state.userId = payload._id;
      state.userEmail = payload.email;
      state.userName = payload.name;
    },
    logout(state) {
      state.userId = null;
      state.userEmail = null;
      state.userName = null;
    },
    // hiking spots
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
    // loginSettings
    async signUp({ commit }, payload) {
      try {
        const submitRes = await axios.post('/api/authentication/sign-up', payload);
        commit('setUser', submitRes.data.user);
      } catch (error) {
        console.dir(error);
      }
    },
    async login({ commit }, payload) {
      try {
        const submitRes = await axios.post('/api/authentication/sign-in', payload);
        commit('setUser', submitRes.data.user);
      } catch (error) {
        console.dir(error);
      }
    },
    // hiking spots sttings
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
