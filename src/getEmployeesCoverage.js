const data = require('../data/zoo_data');

function getSpecies(idColab){
  const colaborador = data.employees.find(colab => colab.id === idColab)
  const animaisDoColab = colaborador.responsibleFor
  let nomesAnimais = [];
  let locais = [];
  animaisDoColab.forEach(idsAnimais => {
    const nomePorID = data.species.find(animal => animal.id === idsAnimais).name
    const local = data.species.find(animal => animal.id === idsAnimais).location
    nomesAnimais.push(nomePorID)
    if (locais.includes(local) === true){}
    else{
      locais.push(local)
    }
  })
  return [nomesAnimais,locais]
}

function getEmployeesCoverage(objeto) {
  let arrayTodos = [];
  data.employees.forEach(empregado => 
  {
    arrayTodos.push({
      id: empregado.id,
      fullName: `${empregado.firstName} ${empregado.lastName}`,
      species: getSpecies(empregado.id)[0],
      locations: getSpecies(empregado.id)[1]
    })
  })
  if (objeto === undefined){
    return arrayTodos
  }
  if (objeto.name === undefined && objeto.id === undefined){
    return arrayTodos
  }
  let nomeColab = arrayTodos.find(colab => {
    if (colab.fullName.includes(objeto.name) === true || colab.id === objeto.id){
      return colab
    }
  })
  if (nomeColab === undefined){
    throw new Error('Informações inválidas')
  }
  else{
    return nomeColab
  }
}

module.exports = getEmployeesCoverage;