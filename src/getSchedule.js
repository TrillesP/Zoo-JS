const data = require('../data/zoo_data');


function getSchedule(scheduleTarget) {
  const animal = data.species.find(animal => animal.name === scheduleTarget)
  const diaDaSemana = Object.keys(data.hours).find(dia => dia === scheduleTarget)

  const objHorario = {}
  Object.keys(data.hours).forEach(key => {
    listaEx = [];
    data.species.forEach(animal => {
      if (animal.availability.includes(key) === true) {
        listaEx.push(animal.name)
      }
    })
    if (data.hours[key].open === 0 && data.hours[key].close === 0) {
      Object.assign(objHorario, { [key]: { officeHour: 'Closed', exhibition: 'No exhibitions this day' } })
    }
    else {
      Object.assign(objHorario, {
        [key]: {
          officeHour: `Open from ${data.hours[key].open}am until ${data.hours[key].close}pm`,
          exhibition: listaEx
        }
      })
    }
  })

  if (scheduleTarget === undefined) {
    return objHorario
  }
  else if (animal === undefined && diaDaSemana === undefined) {
    return objHorario
  }
  else if (animal !== undefined) {
    const animalAchado = data.species.find(element => element.name === animal.name)
    return animalAchado.availability
  }
  else {
    const diaRetornado = Object.keys(objHorario).find(dia => dia === diaDaSemana)
    return `${diaRetornado}: ${objHorario[diaRetornado]}`
  }
}


module.exports = getSchedule;