const axios = require('axios')

const BASE_URL = 'https://swapi.dev/api'

const getData = async (url) => {
  const response = await axios.get(url)
  return response.data
}

const getCharactersByPage = async (page = 1) => {
  const data = await getData(`${BASE_URL}/people/?page=${page}`)
  return data
}

module.exports = {
  getCharactersByPage,
  getData
}