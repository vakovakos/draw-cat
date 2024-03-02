const axios = require('axios');
const catAsciiFaces = require('cat-ascii-faces');
const { absoluteValue } = require('absolute-value');

async function getRandomCat() {
  try {
    const response = await axios.get('https://aws.random.cat/meow');
    return response.data.file;
  } catch (error) {
    console.error('Error fetching cat image:', error.message);
    return null;
  }
}

function displayRandomCat() {
  const val = absoluteValue(2,444);
  console.log(val)
  
  const randomCat = catAsciiFaces();
  console.log(randomCat);
}

module.exports = {
  getRandomCat,
  displayRandomCat
};
