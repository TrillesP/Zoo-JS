const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let pessoa = {};
  const achou = data.employees.find(element => element.firstName === employeeName || element.lastName === employeeName)
  achou === undefined ? pessoa : pessoa = Object.assign(achou)
  return pessoa
}

module.exports = getEmployeeByName;