// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: " A quick-witted, young professor with a bow tie",
  age: 35,
  image: "assets/plum.png",
  occupation: "Professor"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "An attractive young woman, who allegedly is a femme fatale.",
  age: 22,
  image: "assets/scarlet.png",
  occupation: "Spy"
}
const mrsPeacock = {
  firstName: "Eleonor",
  lastName: "Peacock",
  color: "blue",
  description: "A grande dame, an elderly yet still attractive woman who maintains her dignity in almost all cases.",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a military man both dignified and dangerous.",
  age: 50,
  image: "assets/mustard.png",
  occupation: "Colonel"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "A frazzled servant.",
  age: 62,
  image: "assets/white.png",
  occupation: "Colonel"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  material: "hamp",
  weight: 7
}
const knife = {
  name: "knife",
  material: "steel",
  weight: 7
}
const candlestick = {
  name: "candelstick",
  material: "wax",
  weight: 3
}
const dumbbell = {
  name: "dumbbell",
  material: "iron",
  weight: 15
}
const poison = {
  name: "poison",
  material: "plant",
  weight: 0.5
}
const axe = {
  name: "axe",
  material: "iron and wood",
  weight: 10
}
const bat = {
  name: "bat",
  material: "wood",
  weight: 8
}
const throphy = {
  name: "throphy",
  material: "plastic",
  weight: 2
}
const pistol = {
    name: "pistol",
    material: "steel",
    weight: 6
  }
  // THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  throphy,
  pistol
]

const rooms = [
  dinningRoom,
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