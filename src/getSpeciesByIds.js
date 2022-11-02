const data = require('../data/zoo_data');


function getSpeciesByIds(...ids) {
  let resultado = [];
  ids.forEach(idEspecie => {
    resultado.push(data.species.find(animal => animal.id === idEspecie))
  })
  return resultado
}

module.exports = getSpeciesByIds;