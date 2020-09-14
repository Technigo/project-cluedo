// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:


// ------------------ Main Fruits ------------------
const apple = {
  name: 'Apple',
  color: 'green',
  category: 'fresh'
}

const banana = {
  name: 'Banana',
  color: 'yellow',
  category: 'sweet'
}

const mango = {
  name: 'Mango',
  color: 'yellow',
  category: 'sweet'
}

const orange = {
  name: 'Orange',
  color: 'orange',
  category: 'tangy'
}

const raspberry = {
  name: 'Raspberry',
  color: 'red',
  category: 'fresh'
}

const lemon = {
  name: 'Lemon',
  color: 'yellow',
  category: 'sour'
}

// ------------------ Mixer ------------------
const almondMilk = {
  name: 'almond milk'
}

const yoghurt = {
  name: 'Yoghurt'
}

const coconutWater = {
  name: 'coconut water'
}

const milkOats = {
  name: 'milk and oats'
}

// ------------------ Superboosters ------------------
const spirulina = {
  name: 'Spirulina',
  amount: '1 tsp',
}

const ginger = {
  name: 'ginger',
  amount: '2 cm',
}

const kale = {
  name: 'kale',
  amount: 'a fist'
}

const chiaSeeds = {
  name: 'Chia seeds',
  amount: '2 tablespoons'
}


// const mrGreen = {
//   firstName: 'Jacob',
//   lastName: 'Green',
//   color: 'green',
//   description: 'He has a lot of connections',
//   age: 45,
//   image: 'assets/green.png',
//   occupation: 'Entrepreneur'
// }


// Arrays made with all ingredients separated into 3 groups
const mainFruits = [
  apple, 
  banana,
  mango,
  orange, 
  raspberry,
  lemon
]

const mixers = [
  almondMilk,
  yoghurt,
  coconutWater,
  milkOats
]

const superBoosters = [
  spirulina,
  ginger,
  kale,
  chiaSeeds
]

// Function that selects a random object from chosen array
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Object that will define all ingredients currently selected in the smoothie
let smoothie = {
  mainFruit: ''.name,
  mixer: ''.name,
  superBooster: ''.name
}

// These functions will be invoked when you click one of the cards.
const pickMainFruit = () => {
  mainFruit = randomSelector(mainFruits)

  document.getElementById('killerCard').style.background = '#fff'
  document.getElementById(
    'killerName'
  ).innerHTML = `${mainFruit.name}`

  smoothie.mainFruit = mainFruit.name
  console.log(smoothie)
}


const pickMixer = () => {
  mixer = randomSelector(mixers)

  document.getElementById('weaponCard').style.background = '#fff'
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mixer.name}`
  
  smoothie.mixer = mixer.name
  console.log(smoothie)
}


const pickSuperBooster = () => {
  superBooster = randomSelector(superBoosters)

  document.getElementById('roomCard').style.background = '#fff'
  document.getElementById(
    'roomName'
  ).innerHTML = `${superBooster.name}`

  smoothie.superBooster = superBooster.name
  console.log(smoothie)
}


// TODO Add an if-statement to make button sense if smoothie-variable is completely filled in- then change color of button

const mixSmoothie = () => {
  document.getElementById('finishedSmoothie').innerHTML = `A ${mainFruit.category} ${mainFruit.name} smoothie mixed with ${mixer.name}, spiced up with ${superBooster.name}.`
}



