const axios = require("axios");

const BASE_URL = "https://swapi.dev/api";

const getData = async (url) => {
  if (!url.startsWith("https")) {
    const path = url.split(":")[1];
    url = `https:${path}`;
  }
  console.log(url);
  const response = await axios.get(url);
  return response.data;
};

const getCharactersByPage = async (search = "", page = 1) => {
  const data = await getData(
    `${BASE_URL}/people/?search=${search}&page=${page}`
  );
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

module.exports = {
  getCharactersByPage,
  getData,
  getDataFromArray,
};
