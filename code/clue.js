// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrFGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 39,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}
/// console.log(mrgreen.firstName) //////

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is a small fat man",
  age: 56,
  image: "assets/plum.png",
  occupation: "Lawyer"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "orange",
  description: "She is a tall intelligent woman",
  age: 33,
  image: "assets/scarlet.png",
  occupation: "Tech entrepreneur"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "purple",
  description: "She devious middle aged woman",
  age: 56,
  image: "assets/peacock.png",
  occupation: "Media woman"
}

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a handsome former Navy Seal",
  age: 61,
  image: "assets/mustard.png",
  occupation: "Retired Navy SEAL"
}

const mrsWhite = {
  firstName: "Alice",
  lastName: "White",
  color: "white",
  description: "She is a nurse",
  age: 24,
  image: "assets/white.png",
  occupation: "Nurse at County General Hospital Chicago "
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  color: "brown"
}

const knife = {
  name: "knife",
  weight: 25,
  color: "brown"
}

const candlestick = {
  name: "candlestick",
  weight: 20,
  color: "silver"
}

const dumbbell = {
  name: "dumbbell",
  weight: 40,
  color: "pink"
}

const poison = {
  name: "poison",
  weight: 2,
  color: "black"
}

const axe = {
  name: "axe",
  weight: 35,
  color: "lightbrown"
}

const bat = {
  name: "bat",
  weight: 35,
  color: "red"
}

const trophy = {
  name: "trophy",
  weight: 60,
  color: "gold"
}

const pistol = {
  name: "pistol",
  weight: 30,
  color: "black"
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. //KONTROLLERA KOMMATECKEN PÅ RUMMEN?


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

const weapons = []

const rooms = []

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
