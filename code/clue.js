const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 32,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "Purple",
  description: "He is a mansplainer",
  age: 45,
  image: "assets/green.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "Red",
  description: "She knows all the winners in Eurovision Song Contest",
  age: 36,
  image: "assets/green.png",
  occupation: "Kennel owner"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "Blue",
  description: "She is the riches of them all",
  age: 49,
  image: "assets/green.png",
  occupation: "Ceo and founder of a big bank"
}

const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "Yellow",
  description: "He is a ventriloquist",
  age: 54,
  image: "assets/green.png",
  occupation: "Some secret army stuff"
}

const mrsWhite = {
  firstName: "Andrea",
  lastName: "White",
  color: "White",
  description: "She is a freediver",
  age: 54,
  image: "assets/green.png",
  occupation: "Some secret army stuff"
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  color: "brown"
}

const knife = {
  name: "knife",
  weight: 3,
  color: "metal"
}

const candlestick = {
  name: "candlestick",
  weight: 20,
  color: "gold"
}

const dumbbell = {
  name: "dumbbell",
  weight: 15,
  color: "black"
}

const poison = {
  name: "poison",
  weight: 0.1,
  color: "green"
}

const axe = {
  name: "axe",
  weight: 12,
  color: "steely"
}

const bat = {
  name: "bat",
  weight: 3,
  color: "wood"
}

const trophy = {
  name: "trophy",
  weight: 8,
  color: "silver"
}

const pistol = {
  name: "pistol",
  weight: 2,
  color: "metal"
}

let diningRoom
// göra const eller let eller nåt helt tredje?
let conservatory
let kitchen
let study
let library
let billiardRoom
let lounge
let ballroom
let hall
let spa
let livingRoom
let observatory
let theater
let guestHouse
let patio


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
