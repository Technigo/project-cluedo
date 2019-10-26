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
  description: "He is a professor",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an actress",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is a socialite",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a colonel",
  age: 50,
  image: "assets/mustard.png",
  occupation: "Colonel"
}
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "she is a housekeeper",
  age: 70,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}
const knife = {
  name: "knife",
  weight: 7
}
const candlestick = {
  name: "candlestick",
  weight: 30
}
const dumbbell = {
  name: "dumbbell",
  weight: 20
}
const poison = {
  name: "poison",
  weight: 5
}
const axe = {
  name: "axe",
  weight: 25
}
const bat = {
  name: "bat",
  weight: 10
}
const trophy = {
  name: "trophy",
  weight: 19
}
const pistol = {
  name: "pistol",
  weight: 10
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
  "diningroom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiard",
  "room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "livingroom",
  "observatory",
  "theater",
  "guesthouse",
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
let mystery = {
  killer:"",
  weapon:"",
  room:""
}

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
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")

  theWeapon.style.background = mystery.weapon
  theWeaponName.innerHTML =
  mystery.weapon.name 
} 

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = mystery.room
  theRoomName.innerHTML =
  mystery.room
}



// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {}

//lånad kod kolla damiens video
