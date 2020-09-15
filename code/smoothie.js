// ------------------ Main Fruits ------------------
const apple = {
  name: 'Apple',
  color: 'green',
  category: 'fresh',
  image: './images/apple.jpg'
}

const banana = {
  name: 'Banana',
  color: 'yellow',
  category: 'sweet',
  image: './images/banana.jpg'
}

const mango = {
  name: 'Mango',
  color: 'yellow',
  category: 'sweet',
  image: './images/mango.jpg'
}

const orange = {
  name: 'Orange',
  color: 'orange',
  category: 'tangy',
  image: './images/orange.jpg'
}

const raspberry = {
  name: 'Raspberry',
  color: 'red',
  category: 'fresh',
  image: './images/raspberry.jpg'
}

const lemon = {
  name: 'Lemon',
  color: 'yellow',
  category: 'sour',
  image: './images/lemon.jpg'
}

// ------------------ Mixer ------------------
const almondMilk = {
  name: 'almond milk',
  image: './images/almondmilk.jpg'
}

const yoghurt = {
  name: 'Yoghurt',
  image: './images/yoghurt.jpg'
}

const coconutWater = {
  name: 'coconut water',
  image: './images/coconutwater.jpg'
}

const milkOats = {
  name: 'milk and oats',
  image: './images/oat.jpg'
}

// ------------------ Superboosters ------------------
const spirulina = {
  name: 'Spirulina',
  amount: '1 tsp',
  image: './images/spirulina.jpg'
}

const ginger = {
  name: 'ginger',
  amount: '2 cm',
  image: './images/ginger.jpg'
}

const kale = {
  name: 'kale',
  amount: 'a fist',
  image: './images/kale.jpg'
}

const chiaSeeds = {
  name: 'Chia seeds',
  amount: '2 tablespoons',
  image: './images/chia.jpg'
}

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


//TODO: Add name of each value to header when generated

// 3 x Display random value + image from each category 
// + add value to smoothie-object
// + check if smoothie-button color should be changed
const pickMainFruit = () => {
  mainFruit = randomSelector(mainFruits)

  // document.getElementById(
  //   'main-fruit-box'
  // ).innerHTML = `${mainFruit.name}`

  document.getElementById(
    'main-fruit-box'
  ).style.background = `url('${mainFruit.image}')`

  smoothie.mainFruit = mainFruit.name
  console.log(smoothie)
  colorCheck()
}

const pickMixer = () => {
  mixer = randomSelector(mixers)

  // document.getElementById(
  //   'mixer-box'
  // ).innerHTML = `${mixer.name}`
  
  document.getElementById(
    'mixer-box'
  ).style.background = `url('${mixer.image}')`
  
  smoothie.mixer = mixer.name
  console.log(smoothie)
  colorCheck()
}

const pickSuperBooster = () => {
  superBooster = randomSelector(superBoosters)

  // document.getElementById(
  //   'superbooster-box'
  // ).innerHTML = `${superBooster.name}`

  document.getElementById(
    'superbooster-box'
  ).style.background = `url('${superBooster.image}')`

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