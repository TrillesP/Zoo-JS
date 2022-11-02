const data = require('../data/zoo_data');

let childV = 0;
let adultV = 0;
let seniorV = 0;

function countEntrants(entrants) {
  for (i=0; i<entrants.length; i++){
    if (entrants[i].age < 18){
      childV++;
    }
    else if(entrants[i].age >= 50){
      seniorV++;
    }
    else{
      adultV++;
    }
  }
  return {child: childV, adult: adultV, senior: seniorV}
}

function calculateEntry(entrants) {
  if (entrants === undefined){
    return 0
  }
  const objRetornado = countEntrants(entrants);
  let total = objRetornado.child*data.prices.child +
  objRetornado.adult*data.prices.adult + objRetornado.senior*data.prices.senior;
  return total;
}


module.exports = { calculateEntry, countEntrants };