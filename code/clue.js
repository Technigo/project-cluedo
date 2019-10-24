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
  firstName: "Vicor",
  lastName: "Plum",
  color: "violet",
  description: "He knows alot",
  age: 55,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "scarlet",
  description: "She is smart",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Moviestar"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "peacock",
  description: "She is smart",
  age: 65,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "mustard",
  description: "He is in the army",
  age: 35,
  image: "assets/mustard.png",
  occupation: "Colonel"
}

const mrsWhite = {
  firstName: "Eben",
  lastName: "White",
  color: "white",
  description: "She is a frazzled servant",
  age: 35,
  image: "assets/white.png",
  occupation: "Servant"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}

const knife = {
  name: "Knife",
  weight: 15
}
const candlestick = {
  name: "Candlestick",
  weight: 30
}
const dumbbell = {
  name: "Dumbbell",
  weight: 10
}
const poison = {
  name: "Poison",
  weight: 5
}
const axe = {
  name: "Axe",
  weight: 20
}
const bat = {
  name: "Bat",
  weight: 1
}
const trophy = {
  name: "Trophy",
  weight: 25
}
const pistol = {
  name: "Pistol",
  weight: 15
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
  "dinningRoom",
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

//IS EVERYTHING THERE?
console.log(suspects, weapons, rooms)

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
  room: ""
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
//PICKKILLER
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + "" + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
//PICKWEAPON
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML =
    mystery.weapon.name + " " + mystery.weapon.weight
}

//PICKROOM
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = mystery.room.color
  theRoomName.innerHTML =
    mystery.room
}



// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
