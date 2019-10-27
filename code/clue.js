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
  color: "plum",
  description: "He has a lot of connections",
  age: 51,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "scarlet",
  description: "She has a lot of connections",
  age: 29,
  image: "assets/scarlet.png",
  occupation: "Headchef"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "peacock",
  description: "She has a lot of connections",
  age: 40,
  image: "assets/peacock.png",
  occupation: "Owner of a Zoo"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "mustard",
  description: "He has a lot of connections",
  age: 63,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She has a lot of connections",
  age: 67,
  image: "assets/white.png",
  occupation: "CEO"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}

const knife = {
  name: "knife",
  weight: 7,
  length: 40
}

const candlestick = {
  name: "candlestick",
  weight: 15
}

const dumbbell = {
  name : "dumbbell",
  weight: 25
}

const poison = {
  name: "poison"
}

const axe = {
  name : "axe"
}

const bat = {
  name: "bat"
}

const trophy = {
  name: "trohpy"
}

const pistol = {
  name: "pistol"
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

console.log(suspects)

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

console.log(weapons)

let rooms = [
  "diningRoom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiardRoom",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theater",
  "guestHouse",
  "patio"
]

console.log(rooms)

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
