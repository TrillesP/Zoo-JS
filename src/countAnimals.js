const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined){
    let objRetorno = {};
    let quantidade = 0;
    let nome;
    data.species.forEach(element => {
      quantidade = element.residents.length
      nome = element.name
      objRetorno[nome] = quantidade
    })
    return objRetorno
  }
  else if (animal.sex !== undefined){
    const achadoS = data.species.find(element2 => element2.name === animal.specie)
    let cont = 0;
    for (i=0; i<achadoS.residents.length; i++){
      if (achadoS.residents[i].sex === animal.sex){
        cont++;
      }
    }
    return cont;
  }
  else{
    const achado = data.species.find(element2 => element2.name === animal.specie)
    return achado.residents.length 
  }
}

module.exports = countAnimals;