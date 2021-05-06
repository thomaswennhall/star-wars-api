import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastPage: 9,
    currentPage: 1,
    characters: [],
    activeCharacter: {},
    planet: {},
    starships: [],
    vehicles: [],
    searchValue: "",
  },
  getters: {
    getCurrentPage: (state) => state.currentPage,
    getLastPage: (state) => state.lastPage,
    getCharacters: (state) => state.characters,
    getActiveCharacter: (state) => state.activeCharacter,
    getPlanet: (state) => state.planet,
    getStarships: (state) => state.starships,
    getVehicles: (state) => state.vehicles,
    getSearchValue: (state) => state.searchValue,
  },
  mutations: {
    setCharacters: (state, characters) => {
      state.characters = characters;
    },
    setLastPage: (state, count) => {
      state.lastPage = Math.ceil(count / 10);
    },
    setPage: (state, direction) => {
      if (direction === "next") {
        if (state.currentPage === state.lastPage) {
          state.currentPage = 1;
        } else {
          state.currentPage++;
        }
      } else if (state.currentPage === 1) {
        state.currentPage = state.lastPage;
      } else {
        state.currentPage--;
      }
    },
    resetPage: (state) => {
      state.currentPage = 1;
    },
    setSearchValue: (state, searchValue) => {
      state.searchValue = searchValue;
    },
    setActiveCharacter: (state, character) => {
      state.activeCharacter = character;
    },
    setPlanet: (state, planet) => {
      state.planet = planet;
    },
    setStarships: (state, starships) => {
      state.starships = starships;
    },
    setVehicles: (state, vehicles) => {
      state.vehicles = vehicles;
    },
  },
  actions: {
    updateCharacters: async ({ commit, getters }) => {
      const page = getters.getCurrentPage;
      const search = getters.getSearchValue;
      const data = await api.getCharactersByPage(search, page);
      commit("setLastPage", data.count);
      commit("setCharacters", data.characters);
    },
    updateSearchValue: ({ commit }, searchValue) => {
      commit("setSearchValue", searchValue);
      commit("resetPage");
    },
    updatePage: async ({ commit }, direction) => {
      commit("setPage", direction);
    },
    updateActiveCharacter: ({ dispatch, commit }, character) => {
      dispatch("updatePlanet", character.homeworld);
      dispatch("updateStarships", character.starships);
      dispatch("updateVehicles", character.vehicles);
      commit("setActiveCharacter", character);
    },
    updatePlanet: async ({ commit }, planetUrl) => {
      const planet = await api.getData(planetUrl);
      commit("setPlanet", planet);
    },
    updateStarships: async ({ commit }, urlArray) => {
      const starships = await api.getDataFromArray(urlArray);
      commit("setStarships", starships);
    },
    updateVehicles: async ({ commit }, urlArray) => {
      const vehicles = await api.getDataFromArray(urlArray);
      commit("setVehicles", vehicles);
    },
  },
});
