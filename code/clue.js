// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS://

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "Has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}


const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Is bit of a clever clogs",
  age: 56,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Is good to read people",
  age: 27,
  image: "assets/scarlet.png",
  occupation: "teacher"
}

const mrsPeacock = {
  firstName: "Elenor",
  lastName: "Peacock",
  color: "blue",
  description: "A good listener",
  age: 32,
  image: "assets/peacock.png",
  occupation: "accountant"
}

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A traditionalist",
  age: 55,
  image: "assets/mustard.png",
  occupation: "lawyer"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "White",
  description: "A silent observer",
  age: 36,
  image: "assets/white.png",
  occupation: "unknown"
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: "weight: 4kg"
}

const knife = {
  name: "knife",
  weight: "weight: 0.6kg"
}

const candlestick = {
  name: "candlestick",
  weight: "weight: 1kg"
}

const dumbbell = {
  name: "dumbbell",
  weight: "weight: 13kg"
}

const poison = {
  name: "poison",
  weight: "weight: 0,1kg"
}

const axe = {
  name: "axe",
  weight: "weight: 3kg"
}

const bat = {
  name: "bat",
  weight: "weight: 2kg"
}

const trophy = {
  name: "trophy",
  weight: "weight: 3,5kg"
}

const pistol = {
  name: "pistol",
  weight: "weight: 0,3kg"
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

let suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
]

// console.log(suspects)

let weapons = [
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

// console.log(weapons)

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
  "LivingRoom",
  "observatory",
  "theater",
  "guestHouse",
  "patio"
]

// console.log(rooms)


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// let mysteryKeeper{

// }

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")
  const theKillerOccupation = document.getElementById("killerOccupation")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
  theKillerOccupation.innerHTML = mystery.killer.occupation
}

const pickWeapon = () => {
  // This will randomly select a weapon from the suspects and add that to the mystery object. 
  mystery.weapon = randomSelector(weapons)

  // This will show the name of the weapon and the weight.

  // const theweapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
}

const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will show the room.

  const theRoomName = document.getElementById("roomName")

  theRoomName.innerHTML = mystery.room
}

const revealMystery = () => {
  const mysteryMessage = document.getElementById("mystery");
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    mysteryMessage.innerHTML = "No crime has yet been comitted";
    return
  }
  mysteryMessage.innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
}

document.getElementById("revealMystery").onclick = revealMystery()

//  CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
//  'The murder was committed by Jacob Green, in the living room with a rope.'
