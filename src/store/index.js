import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lastPage: 9,
    currentPage: 1,
    characters: []
  },
  getters: {
    getCurrentPage: state => state.currentPage,
    getLastPage: state => state.lastPage,
    getCharacters: state => state.characters
  },
  mutations: {
    setCharacters: (state, characters) => {
      state.characters = characters
    },
    setPage: (state, direction) => {
      if(direction === 'next'){
        if(state.currentPage === state.lastPage){
          state.currentPage = 1
        }else{
          state.currentPage++
        }
      }else if(state.currentPage === 1){
        state.currentPage = state.lastPage
      }else{
        state.currentPage--
      }
    }
  },
  actions: {
    updateCharacters: async ({commit, getters}) => {
      const page = getters.getCurrentPage
      const data = await api.getCharactersByPage(page)
      const characters = data.results
      commit('setCharacters', characters)
    },
    updatePage: async ({commit}, direction) => {
      commit('setPage', direction)
    }
  },
  modules: {
  }
})
