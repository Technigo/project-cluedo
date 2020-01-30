// OBJECTS FOR ALL THE SUSPECTS:

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
  weight: 10,
  symbol: '➿' 
}
const knife = {
  name: "knife",
  weight: 7,
  symbol: '🗡' 
}
const candlestick = {
  name: "candlestick",
  weight: 30,
  symbol: '🕯'
}
const dumbbell = {
  name: "dumbbell",
  weight: 20,
  symbol: '🛎' 
}
const poison = {
  name: "poison",
  weight: 5,
  symbol: '🍸'  
}
const axe = {
  name: "axe",
  weight: 25,
  symbol: '🔨' 
}
const bat = {
  name: "bat",
  weight: 10,
  symbol: '🦇' 
}
const trophy = {
  name: "trophy",
  weight: 19,
  symbol: '🏆' 
}
const pistol = {
  name: "pistol",
  weight: 10,
  symbol: '🔫' 
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
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Livingroom",
  "Observatory",
  "Theater",
  "Guesthouse",
  "Patio"
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

// FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  const theKillerImage = document.getElementById("killerImage")
  theKillerImage.src = mystery.killer.image

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
  mystery.killer.firstName + " " + mystery.killer.lastName  
}

// OBJECTS FOR ALL THE SUSPECTS:


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponSymbol = document.getElementById("weaponSymbol")

  theWeapon.style.background = mystery.weapon
  theWeaponName.innerHTML = mystery.weapon.name 
  theWeaponSymbol.innerHTML = mystery.weapon.symbol

} 

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = mystery.room
  theRoomName.innerHTML =
  mystery.room
}



//FUNCTION revealMystery that will be invoked when you click that button. For example:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`;
}


document.getElementById("mystery").addEventListener('click, revealMystery')