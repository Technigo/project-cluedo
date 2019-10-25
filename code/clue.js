// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "olivedrab",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "darkorchid",
  description: "He is quick-witted and intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "crimson",
  description: "She is weird but beautiful",
  age: 28,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "cornflowerblue",
  description: "She always maintains her dignity",
  age: 65,
  image: "assets/peacock.png",
  occupation: "Senior Citizen"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "gold",
  description: "He is dignified, dapper and dangerous",
  age: 50,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Eulalia",
  lastName: "White",
  color: "white",
  description: "She is a kind, grandmotherly servant",
  age: 70,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "a rope",
  weight: 100,
  color: "sienna",
  image: "assets/rope.png"
}
const knife = {
  name: "a knife",
  weight: 50,
  color: "grey",
  image: "assets/knife.png"
}
const candlestick = {
  name: "a candlestick",
  weight: 500,
  color: "silver",
  image: "assets/candlestick.png"
}
const dumbbell = {
  name: "a dumbbell",
  weight: 1000,
  color: "blue",
  image: "assets/dumbbell.png"
}
const poison = {
  name: "poison",
  weight: 10,
  color: "yellowgreen",
  image: "assets/poison.png"
}
const axe = {
  name: "an axe",
  weight: 800,
  color: "tan",
  image: "assets/axe.png"
}
const bat = {
  name: "a bat",
  weight: 300,
  color: "burlywood",
  image: "assets/bat.png"
}
const trophy = {
  name: "a trophy",
  weight: 500,
  color: "gold",
  image: "assets/trophy.png"
}
const pistol = {
  name: "a pistol",
  weight: 200,
  color: "silver",
  image: "assets/pistol.png"
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
  "dining room",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "living room",
  "observatory",
  "theater",
  "guest House",
  "patio"
]
const times = [
  "in the morning",
  "at noon",
  "in the afternoon",
  "in the evening",
  "during the night"
]



// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: "",
  time: "",
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = `Age: ${mystery.killer.age} years`
  theKillerOccupation.innerHTML = `Occupation: ${mystery.killer.occupation}`
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  //const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponColor = document.getElementById("weaponColor")
  const theWeaponImage = document.getElementById("weaponImage")
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = `Weight: ${mystery.weapon.weight} gram`
  theWeaponColor.innerHTML = "COLOR OF WEAPON"
  theWeaponColor.style.background = mystery.weapon.color
  theWeaponImage.src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName")
  theRoomName.innerHTML = mystery.room
}
//const mystery = {
//  killer: pickKiller(),
//  weapon: pickWeapon(),
//  room: pickRoom(),
// }

const pickTime = () => {
  mystery.time = randomSelector(times)

  const theTimeOfDay = document.getElementById("timeOfDay")
  theTimeOfDay.innerHTML = mystery.time
}




// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const mysteryAnswer = document.getElementById("mystery")
  if (mystery.killer.firstName === undefined || mystery.weapon.name === undefined || mystery.time === null) {
    mysteryAnswer.innerHTML = "No mystery is yet to be revealed"
  }
  else {
    mysteryAnswer.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room}, ${mystery.time} with ${mystery.weapon.name}.`
  }

}

/*if () {
  mysteryAnswer.innerHTML = "No mystery is yet to be revealed"
}
else {
}*/