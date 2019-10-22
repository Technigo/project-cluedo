// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  nickName: "Mr. Green",
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const mrPlum = {
  nickName: "Proffessor Plum",
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is quick-witted",
  age: 40,
  image: "assets/plum.png",
  occupation: "Proffessor"
}

const missScarlet = {
  nickName: "Miss Scarlet",
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is beautiful and seductive.",
  age: 28,
  image: "assets/scarlet.png",
  occupation: "Actress"
}
const mrsPeacock = {
  nickName: "Mrs Peacock",
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is flirtatious but descreet",
  age: 35,
  image: "assets/peacock.png",
  occupation: "Social butterfly"
}

const mrMustard = {
  nickName: "Colonel Mustard",
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He knows how to handle a gun",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Officer"
}
const mrsWhite = {
  nickName: "Mrs White",
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She is strict and thorough",
  age: 55,
  image: "assets/white.png",
  occupation: "Nurse"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
}
const knife = {
  name: "knife",
  weight: 0.7,
}
const candlestick = {
  name: "candlestick",
  weight: 2,
}
const dumbbell = {
  name: "dumbbell",
  weight: 5,
}
const poison = {
  name: "poison",
  weight: 0.5,
}
const axe = {
  name: "axe",
  weight: 4,
}
const bat = {
  name: "bat",
  weight: 2.5,
}
const trophy = {
  name: "trophy",
  weight: 3,
}
const pistol = {
  name: "pistol",
  weight: 4.5,
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const dinningRoom = "Dinig Room"
const conservatory = "Conservatory"
const kitchen = "Kitchen"
const study = "Study"
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
  killer: randomSelector(suspects),
  weapon: randomSelector(weapons),
  room: randomSelector(rooms)
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {

}

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