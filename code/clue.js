// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

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
  color: 'purple',
  description: 'He is very quiet',
  age: 39,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is very smart',
  age: 37,
  image: 'assets/scarlet.png',
  occupation: 'Lawyer'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is very rich',
  age: 58,
  image: 'assets/peacock.png',
  occupation: 'Doctor'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is very loyal',
  age: 62,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She is very kind',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Actress'
}

const rope = {
  name: 'rope',
  weight: 10,
  color: 'black',
  image: 'assets/rope.png'
}

const knife = {
  name: 'knife',
  weight: 4,
  color: 'black',
  image: 'assets/knife.png'
}

const candlestick = {
  name: 'candestick',
  weight: 8,
  color: 'black',
  image: 'assets/candlestick.png',
}

const dumbbell = {
  name: 'dumbbell',
  weight: 14,
  color: 'black',
  image: 'assets/dumbbell.png'
}

const poison = {
  name: 'poison',
  weight: 1,
  color: 'black',
  image: 'assets/poison.png'
}

const axe = {
  name: 'axe',
  weight: 12,
  color: 'black',
  image: 'assets/axe.png'
}

const bat = {
  name: 'bat',
  weight: 9,
  color: 'black',
  image: 'assets/bat.png'
}

const trophy = {
  name: 'trophy',
  weight: 7,
  color: 'black',
  image: 'assets/trophy.png'
}

const pistol = {
  name: 'pistol',
  weight: 5,
  color: 'black',
  image: 'assets/pistol.png'
}

const suspects = [
  mrGreen,
  mrsWhite,
  mrsPeacock,
  colonelMustard,
  professorPlum,
  missScarlet
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
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
]

console.log(suspects)
console.log(weapons)
console.log(rooms)


const randomSelector = array => {
  const randomArrayIndex = Math.floor(Math.random() * array.length)
  return array[randomArrayIndex]
}

const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
}
document.getElementById('killerCard').addEventListener('click', pickKiller)

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
  document.getElementById('weaponImage').src = mystery.weapon.image
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon)

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').addEventListener('click', pickRoom)

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}

document.getElementById('reveal').addEventListener('click', revealMystery)