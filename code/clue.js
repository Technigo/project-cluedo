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


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

console.log(randomSelector(mainFruits).name, randomSelector(mixers).name, randomSelector(superBoosters).name)


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickMainFruit = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mainFruit = randomSelector(mainFruits)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = '#fff'
  document.getElementById(
    'killerName'
  ).innerHTML = `${mainFruit.name}`
}

const pickMixer = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mixer = randomSelector(mixers)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('weaponCard').style.background = '#fff'
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mixer.name}`
}

const pickSuperBooster = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  superBooster = randomSelector(superBoosters)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('roomCard').style.background = '#fff'
  document.getElementById(
    'roomName'
  ).innerHTML = `${superBooster.name}`
}



// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const mixSmoothie = () => {
  pickMainFruit()
  pickMixer()
  pickSuperBooster()

  document.getElementById('finishedSmoothie').innerHTML = `A ${mainFruit.category} ${mainFruit.name} smoothie mixed with ${mixer.name}, spiced up with ${superBooster.name}.`
}



