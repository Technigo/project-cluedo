// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  nickName: "Mr. Green",
  firstName: "Jacob",
  lastName: "Green",
  color: "rgba(13, 102, 0, 0.66)",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  nickName: "Proffessor Plum",
  firstName: "Victor",
  lastName: "Plum",
  color: "rgba(62, 0, 102, 0.66)",
  description: "He is quick-witted",
  age: 40,
  image: "assets/plum.png",
  occupation: "Proffessor"
}

const missScarlet = {
  nickName: "Miss Scarlet",
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "rgba(239, 0, 11, 0.66)",
  description: "She is beautiful and seductive.",
  age: 28,
  image: "assets/scarlet.png",
  occupation: "Actress"
}
const mrsPeacock = {
  nickName: "Mrs Peacock",
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "rgba(2, 82, 180, 0.66)",
  description: "She is a natural leader",
  age: 35,
  image: "assets/peacock.png",
  occupation: "Social butterfly"
}

const mrMustard = {
  nickName: "Colonel Mustard",
  firstName: "Jack",
  lastName: "Mustard",
  color: "rgba(218, 228, 15, 0.66)",
  description: "He knows a lot abuout weapons",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Officer"
}
const mrsWhite = {
  nickName: "Mrs White",
  firstName: "Blanche",
  lastName: "White",
  color: "rgba(253, 123, 197, 0.06)",
  description: "She is strict and thorough",
  age: 55,
  image: "assets/white.png",
  occupation: "Nurse"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "a rope",
  weight: 10,
}
const knife = {
  name: "a knife",
  weight: 0.7,
}
const candlestick = {
  name: "a candlestick",
  weight: 2,
}
const dumbbell = {
  name: "a dumbbell",
  weight: 5,
}
const poison = {
  name: "poison",
  weight: 0.5,
}
const axe = {
  name: "an axe",
  weight: 4,
}
const bat = {
  name: "a bat",
  weight: 2.5,
}
const trophy = {
  name: "a trophy",
  weight: 3,
}
const pistol = {
  name: "a pistol",
  weight: 4.5,
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const dinningRoom = "Dinig Room"
const conservatory = "Conservatory"
const kitchen = "Kitchen"
const study = "Study Room"
const library = "Library"
const billiardRoom = "Billiard Room"
const lounge = "Lounge"
const ballroom = "Ballroom"
const hall = "Hall"
const spa = "Spa"
const livingRoom = "Living Room"
const observatory = "Observatory"
const theater = "Theatre"
const guestHouse = "Guest House"
const patio = "Patio"

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
const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  const theKiller = document.getElementById("killer")
  theKiller.style.background = mystery.killer.color

  const theKillerName = document.getElementById("killerName")
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName

  const killerAge = document.getElementById("killerAge")
  killerAge.innerHTML = mystery.killer.age

  const killerOccupation = document.getElementById("killerOccupation")
  killerOccupation.innerHTML = mystery.killer.occupation

  const killerImage = document.getElementById("killerImage")
  killerImage.src = mystery.killer.image

  const killerDescription = document.getElementById("killerDescription")
  killerDescription.innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeaponName = document.getElementById("weaponName")
  theWeaponName.innerHTML = mystery.weapon.name

  const theweaponWeight = document.getElementById("weaponWeight")
  theweaponWeight.innerHTML = mystery.weapon.weight + " kg"
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName")
  theRoomName.innerHTML = mystery.room
}

// This will randomly select a killer from the suspects. And add that to the mystery object.
// mystery.killer = randomSelector(suspects)

// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.

// document.getElementById("order-button").onclick = startOrdering;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const mysteryAnswer = document.getElementById("mysteryAnswer")
  mysteryAnswer.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with ${mystery.weapon.name}.`
  document.getElementById("mysteryButton").style.visibility = 'hidden'
}