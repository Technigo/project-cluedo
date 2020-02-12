const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#A8BA9A",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "bla bla bla",
  age: 20,
  image: "assets/white.png",
  occupation: "Accountant"
}

const missScalett = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#F03A47",
  description: "bla bla bla",
  age: 20,
  image: "assets/scarlet.png",
  occupation: "Chef"
}

const ColonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#E0C879",
  description: "bla bla bla",
  age: 50,
  image: "assets/mustard.png",
  occupation: "Plumpber"
}

const ProffessorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#4A314D",
  description: "bla bla bla",
  age: 70,
  image: "assets/plum.png",
  occupation: "Proffessor"
}

const MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#276FBF",
  description: "bla bla bla",
  age: 75,
  image: "assets/peacock.png",
  occupation: "Proffessor"
}

const rope = {
  name: "Rope",
  weight: 10
}

const candlestick = {
  name: "Candlestick",
  weight: 15
}

const knife = {
  name: "Knife",
  weight: 5
}

const dumbbell = {
  name: "Dumbbell",
  weight: 7
}

const poison = {
  name: "Poison",
  weight: 2
}

const axe = {
  name: "Axe",
  weight: 2
}

const bat = {
  name: "Bat",
  weight: 2
}

const trophy = {
  name: "Trophy",
  weight: 2
}

const pistol = {
  name: "Pistol",
  weight: 2
}

const conservatory = "Conservatory"
const diningRoom = "Dining Room"
const kitchen = "Kitchen"
const study = "Study"
const billiardRoom = "Billiard Room"
const lounge = "Lounge"
const ballroom = "Ballroom"
const hall = "Hall"
const spa = "Spa"
const livingRoom = "Living Room"
const observatory = "Observatory"
const theater = "Theater"
const guestHouse = "Guest House"
const patio = "Patio"


const suspects = [
  mrGreen,
  mrsWhite,
  missScalett,
  ColonelMustard,
  ProffessorPlum,
  MrsPeacock
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
  conservatory,
  diningRoom,
  kitchen,
  study,
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

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  killer: " ",
  weapon: " ",
  room: " "
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = mystery.killer.age
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
}

document.getElementById('killerCard').onclick = pickKiller

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
}
document.getElementById('weaponCard').onclick = pickWeapon

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom

const reveal = () => {
  document.getElementById('reveal').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}

document.getElementById('reveal-button').onclick = reveal

