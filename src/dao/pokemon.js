const pokemon = require('../data/pokemon.json');

const getDocuments = () => Promise.resolve(pokemon);

const getByID = pokemonID => Promise.resolve(pokemon.find(({ id }) => id === pokemonID));

module.exports = { getDocuments, getByID };
