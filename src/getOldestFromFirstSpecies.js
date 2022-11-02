const data = require('../data/zoo_data');


function getOldestFromFirstSpecies(id) {
  const empregado = data.employees.find(colab => colab.id === id)
  const animal = empregado.responsibleFor[0];
  const achou = data.species.find(element => element.id === animal)
  const obj = achou.residents.reduce((acc, curr) => 
      acc.age > curr.age ? acc : curr)
  return obj
}

module.exports = getOldestFromFirstSpecies;