const data = require('../data/zoo_data');

var funcionarios = data.employees.map(colab => colab.managers)

const isManager = (id) => funcionarios.some(managers => managers.includes(id) === true)

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false){
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!')
  }
  else{
    let colaboradores = []
    for (let i = 0; i < funcionarios.length; i++){
      const result2 = data.employees[i].managers.some(index => index === managerId)
      if (result2 === true){
        colaboradores.push(`${data.employees[i].firstName} ${data.employees[i].lastName}`)
      }
    }
    return colaboradores
  }
}

module.exports = { isManager, getRelatedEmployees };