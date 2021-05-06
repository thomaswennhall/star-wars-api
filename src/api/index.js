const axios = require("axios");

const BASE_URL = "https://swapi.dev/api";

const getData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getCharactersByPage = async (page = 1) => {
  const data = await getData(`${BASE_URL}/people/?page=${page}`);
  const characters = data.results;
  const { count } = data;
  return { characters, count };
};

const getDataFromArray = (urlArray) => {
  let data = [];
  urlArray.forEach(async (url) => {
    const response = await getData(url);
    data.push(response);
  });
  return data;
};

/* const getCharactersByName = async (search) => {
  const characters = await getData(`${BASE_URL}/people/?search=${search}`);
  return characters;
}; */

module.exports = {
  getCharactersByPage,
  getData,
  getDataFromArray,
};
