import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 1,
    characters: []
  },
  getters: {
    getPage: state => state.currentPage,
    getCharacters: state => state.characters
  },
  mutations: {
    setCharacters: (state, characters) => {
      state.characters = characters
    }
  },
  actions: {
    updateCharacters: async ({commit}) => {
      const data = await api.getCharactersByPage(page)
      const characters = data.results
      commit('setCharacters', characters)
    }
  },
  modules: {
  }
})
