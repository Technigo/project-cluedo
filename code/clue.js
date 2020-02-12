const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He is very popular in the community.',
  age: 35,
  image: 'assets/green.png',
  occupation: 'Reverend'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a genious in the lab but awkward in the cab.',
  age: 62,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a maneater and knows what she wants.',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She knows a lot of secrets.',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a colonial imperialist and a dangerous military man.',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'lightgrey',
  description: 'She has been with the household for over 30 years.',
  age: 57,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const rope = {
  name: 'Rope',
  weight: 3,
  twoHanded: true,
  color: 'darkblue',
}

const knife = {
  name: 'Knife',
  weight: 2,
  twoHanded: false,
  color: 'darkgreen'
}

const candlestick = {
  name: 'Candlestick',
  weight: 5,
  twoHanded: false,
  color: 'gold'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 10,
  twoHanded: false,
  color: 'blue'
}

const poison = {
  name: 'Poison',
  weight: 1,
  twoHanded: true,
  color: 'orange'
}

const axe = {
  name: 'Axe',
  weight: 8,
  twoHanded: true,
  color: 'red'
}

const bat = {
  name: 'Bat',
  weight: 2,
  twoHanded: true,
  color: 'brown'
}

const trophy = {
  name: 'Trophy',
  weight: 4,
  twoHanded: false,
  color: 'gold'
}

const pistol = {
  name: 'Pistol',
  weight: 1,
  twoHanded: false,
  color: 'purple'
}

const suspects = [
  mrGreen,
  profPlum,
  msScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite,
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
  pistol,
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

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {
  killer: "",
  weapon: "",
  room: ""
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  if (mystery.weapon.twoHanded === false) {
    document.getElementById('weaponWeight').innerHTML = `It weighs ${mystery.weapon.weight} kg and is a one-handed weapon.`
  }
  else if (mystery.weapon.twoHanded === true) {
    document.getElementById('weaponWeight').innerHTML = `It weighs ${mystery.weapon.weight} kg and is a two-handed weapon.`
  }
  
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.room
}


document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
