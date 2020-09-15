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

// TODO: Add images to each fruit/ingredient
// Saving this to be able to see 'image'
// const mrGreen = {
//   image: 'assets/green.png',
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
  mainFruit: 'NotSelected',
  mixer: 'NotSelected',
  superBooster: 'NotSelected'
}

//Check if the smoothie-button should change color
// based on if all object properties of smoothie is set
const colorCheck = () => {
  if (smoothie.mainFruit == 'NotSelected') {
  } else {
  document.getElementById('mixer-button').classList.add('active')
  }
}


// 3 x Display random value from each category 
// + add value to smoothie-object
// + check if smoothie-button color should be changed
const pickMainFruit = () => {
  mainFruit = randomSelector(mainFruits)

  document.getElementById(
    'main-fruit-box'
  ).innerHTML = `${mainFruit.name}`

  smoothie.mainFruit = mainFruit.name
  console.log(smoothie)
  colorCheck()
}

const pickMixer = () => {
  mixer = randomSelector(mixers)

  document.getElementById(
    'mixer-box'
  ).innerHTML = `${mixer.name}`
  
  smoothie.mixer = mixer.name
  console.log(smoothie)
  colorCheck()
}

const pickSuperBooster = () => {
  superBooster = randomSelector(superBoosters)

  document.getElementById(
    'superbooster-box'
  ).innerHTML = `${superBooster.name}`

  smoothie.superBooster = superBooster.name
  console.log(smoothie)
  colorCheck()
}


// Display the summary of what smoothie 
// + details makes depending on ingredients
const mixSmoothie = () => {  
  if (smoothie.mainFruit == 'NotSelected') {
    document.getElementById('finished-smoothie').innerHTML = "Please select a main fruit"
  } else if (smoothie.mixer == 'NotSelected') {
    document.getElementById('finished-smoothie').innerHTML = "Please select a mixer"
  } else if (smoothie.superBooster == 'NotSelected') {
    document.getElementById('finished-smoothie').innerHTML = "Please select a superbooster"
  } else {
    document.getElementById('finished-smoothie').innerHTML = `A ${mainFruit.category} ${mainFruit.name} smoothie mixed with ${mixer.name} and spiced up with ${superBooster.name}.`
  }
}

// Not finished. TODO: Fix function that will 
// display what day, date, month and year it is
document.getElementById('date').innerText = `<Day>, <date> of <month> <year>`


// Randomize-button in the header 
// - to quickly randomize a smoothie
const randomizeSmoothie = () => {
  pickMainFruit()
  pickMixer()
  pickSuperBooster()
}