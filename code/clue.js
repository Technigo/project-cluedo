const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He specialises in chemistry',
  age: 53,
  image: 'assets/plum.png',
  occupation: 'Academic'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'scarlet',
  description: 'She has a way with words',
  age: 38,
  image: 'assets/scarlet.png',
  occupation: 'Divorce lawyer'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'peacock',
  description: 'She is a woman of property',
  age: 51,
  image: 'assets/peacock.png',
  occupation: 'Philanthropist'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'mustard',
  description: 'He can handle his weapons alright',
  age: 68,
  image: 'assets/mustard.png',
  occupation: 'colonel'
}
const mrsWhite = {
  firstName: 'unknown',
  lastName: 'White',
  color: 'white',
  description: 'She is good at cleaning up',
  age: 66,
  image: 'assets/white.png',
  occupation: 'housekeeper'
}

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 5
}
const candlestick = {
  name: 'candlestick',
  weight: 11
}
const dumbbell = {
  name: 'dumbbell',
  weight: 20
}
const poison = {
  name: 'poison',
  weight: 3
}
const axe = {
  name: 'axe',
  weight: 17
}
const bat = {
  name: 'bat',
  weight: 13
}
const trophy = {
  name: 'trophy',
  weight: 12
}
const pistol = {
  name: 'pistol',
  weight: 9
}

console.log(mrsWhite.firstName)
console.log(mrsPeacock.occupation)
console.log(missScarlet.description)
console.log(pistol.weight)


const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
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
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

console.log(rooms[0])
console.log(weapons[2])


const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {
  killer: '',
  weapon: '',
  room: ''
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  document.getElementById('killerCard').style.background = mystery.killer.color;
  killerImage.src = mystery.killer.image;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `age: ${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `occupation: ${mystery.killer.occupation}`;
  document.getElementById('killerDescription').innerHTML = mystery.killer.description;
}
document.getElementById('killerCard').addEventListener('click', pickKiller)

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.killer.color;
  document.getElementById('weaponName').innerHTML = mystery.weapon.name;
  document.getElementById('weaponWeight').innerHTML = `weight: ${mystery.weapon.weight}`;
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon)

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.killer.color;
  document.getElementById('roomName').innerHTML = mystery.room;
}
document.getElementById('roomCard').addEventListener('click', pickRoom)

const revealMystery = () => {
  if (Object.values(mystery).includes('')) {
    document.getElementById('revealAnswer').innerHTML = 'Choose all your cards first!'
  } else {
    document.getElementById('revealAnswer').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  }
}
document.getElementById('revealAnswer').addEventListener('click', revealMystery)




