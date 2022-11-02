const data = require('../data/zoo_data');

let listaNE = [], listaNW = [], listaSE = [], listaSW = [];
data.species.forEach(animal => {
  if (animal.location === 'NE') {
    listaNE.push(animal.name);
  }
  if (animal.location === 'NW') {
    listaNW.push(animal.name);
  }
  if (animal.location === 'SE') {
    listaSE.push(animal.name);
  }
  if (animal.location === 'SW') {
    listaSW.push(animal.name);
  }
})
const categorizaLocal = {
  NE: listaNE,
  NW: listaNW,
  SE: listaSE,
  SW: listaSW
}

const montaLista = (lista, sexo, sort) => {
  let listaMontada = [];
  lista.forEach(elemento => {
    const animalAchado = data.species.find(animal => animal.name === elemento);
    let nomes = [];
    if (sexo === undefined) {
      animalAchado.residents.forEach(bicho => {
        nomes.push(bicho.name)
      })
    }
    else {
      animalAchado.residents.forEach(bicho => {
        if (bicho.sex === sexo) {
          nomes.push(bicho.name)
        }
      })
    }
    if (sort !== undefined) {
      nomes.sort();
    }
    listaMontada.push({ [animalAchado.name]: nomes })
  })
  return listaMontada
}

const preencheNomes = (sexo, sort) => {
  const modificador = {
    NE: montaLista(listaNE, sexo, sort),
    NW: montaLista(listaNW, sexo, sort),
    SE: montaLista(listaSE, sexo, sort),
    SW: montaLista(listaSW, sexo, sort)
  }
  const modificaObj = { ...categorizaLocal, ...modificador }
  return modificaObj
}

function getAnimalMap(options) {
  if (options === undefined) {
    return categorizaLocal
  }
  else if (options.includeNames !== true) {
    return categorizaLocal
  }
  else if (options.sorted !== true) {
    if (options.sex !== 'male' && options.sex !== 'female') {
      return preencheNomes();
    }
    else {
      return preencheNomes(options.sex);
    }
  }
  else if (options.sex === 'male' || options.sex === 'female') {
    return preencheNomes(options.sex, 'sort')
  }
  else {
    return preencheNomes(undefined, 'sort')
  }
}

module.exports = getAnimalMap;