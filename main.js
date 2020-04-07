/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(species,period,carnivore,extinct = false){
  const dino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  };

  return dino;
}

const makeSingular = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if (dinoCopy.species.endsWith('us')){
    dinoCopy.species = dinoCopy.species.slice(0,dinoCopy.species.length - 2)
    }else {
  dinoCopy.species = dinoCopy.species
    }
  return dinoCopy
}

const truncateSpecies = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  if (dinoCopy.species.length > 10 ){
    dinoCopy.species = dinoCopy.species.slice(0,7) + "..."
    }else {
  dinoCopy.species = dinoCopy.species
    }
  return dinoCopy
}

const makeExtinct = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  dinoCopy.extinct = true
  return dinoCopy
}
const noExtinct = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  return dinoCopy.extinct === false
  
}

const isCarnivore = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.carnivore === true
}

const isHerbavore = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.carnivore === false
}

const isExtinct = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.extinct === true
}

const isTriassic = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.period === 'Triassic'
}

const isJurassic = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.period === 'Jurassic'
}

const isCretaceous = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.period === 'Cretaceous'
}

const isntTriassic = function(dino){
  const dinoCopy = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  
  return dinoCopy.period === 'Cretaceous' || dinoCopy.period === 'Jurassic'
}

const isFirstAlphabeticallyBySpecies = function (name1, name2) {
  if (name1.species > name2.species) {
    return 1;
  } else if (name1.species < name2.species) {
    return -1;
  } else {
    return 0;
  }
};

const extinctIsLast = function (name1, name2) {
  if (name1.extinct > name2.extinct) {
    return 1;
  } else if (name1.extinct < name2.extinct) {
    return -1;
  } else {
    return 0;
  }
};

const carnivoreIsFirst = function (name1, name2) {
  if (name1.carnivore > name2.carnivore) {
    return -1;
  } else if (name1.carnivore < name2.carnivore) {
    return 1;
  } else {
    return 0;
  }
};
const isInPeriodOrder = function (name1, name2) {
  if (name1.period === 'Jurassic' && name2.period === 'Triassic') {
    return 1;
  } else if (name1.period === 'Cretaceous' && name2.period === 'Triassic') {
    return 1;
  } else if (name1.period === 'Cretaceous' && name2.period === 'Jurassic'){
    return 1;
  }else if (name1.period === 'Jurassic' && name2.period === 'Cretaceous') {
    return -1;
  }else if (name1.period === 'Triassic' && name2.period === 'Cretaceous') {
    return -1
  }else if (name1.period === 'Triassic' && name2.period === 'Jurassic') {
    return -1;
  }else {
    return 0
  }
}

const singularizeDinos = function(dinos){
  return dinos.map(makeSingular)
}
const truncateDinos = function(dinos){
  return dinos.map(truncateSpecies)
}

const makeAllExtinct = function(dinos){
  return dinos.map(makeExtinct)
}

const carnivoresOnly = function(dinos){
  return dinos.filter(isCarnivore)
}

const herbivoresOnly = function(dinos){
  return dinos.filter(isHerbavore)
}
const extinctOnly = function(dinos){
  return dinos.filter(isExtinct)
}

const notExtinct = function(dinos){
  return dinos.filter(noExtinct)
}

const triassicOnly = function(dinos){
  return dinos.filter(isTriassic)
}

const notTriassic = function(dinos){
  return dinos.filter(isntTriassic)
}
const bySpecies = function(dinos){
  return dinos.slice().sort(isFirstAlphabeticallyBySpecies)
}
const byExtinctLast = function(dinos){
  return dinos.slice().sort(extinctIsLast)
  
}
const byCarnivoresFirst = function(dinos){
  return dinos.slice().sort(carnivoreIsFirst)
}
const  byPeriod = function(dinos){
  return dinos.slice().sort(isInPeriodOrder)
}






/***********************
 * ITERATION FUNCTIONS *
 **********************/



/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
