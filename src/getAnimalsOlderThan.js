const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find(element => element.name === animal)
  const idadeBoolean = especie.residents.every(element => element.age >= age)
  return idadeBoolean
}

module.exports = getAnimalsOlderThan;