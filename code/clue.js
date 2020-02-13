const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#7abf88',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const prPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#9b62b5',
  description: 'Knows a lot of things.',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
const msScarlett = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: '#c42b0c',
  description: 'Wraps everyone around her little finger.',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#628ab5',
  description: 'Would never raise an eyebrow. ',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Widow'
}
const clMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#c2a94e',
  description: 'Always has a plan.',
  age: 54,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#f5f4f2',
  description: 'Knows all the gossip.',
  age: 62,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 21
}

const candlestick = {
  name: 'candlestick',
  weight: 41
}

const dumbbell = {
  name: 'dumbbell',
  weight: 82
}

const poison = {
  name: 'poison',
  weight: 8
}

const axe = {
  name: 'axe',
  weight: 56
}
const bat = {
  name: 'bat',
  weight: 38
}
const trophy = {
  name: 'trophy',
  weight: 47
}
const pistol = {
  name: 'pistol',
  weight: 32
}

const suspects = [
  mrGreen,
  prPlum,
  msScarlett,
  mrsPeacock,
  clMustard,
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
  pistol,
]

const rooms = [
  'dining room',
  'conservatory',
  'kitchen',
  'study',
  'library',
  'billiard room',
  'lounge',
  'ballroom',
  'hall',
  'spa',
  'living room',
  'observatory',
  'theater',
  'guest house',
  'patio'
]

console.log(weapons[0])

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

let mystery = {}

const pickKiller = () => {

  mystery.killer = randomSelector(suspects)

  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerAge').innerHTML = mystery.killer.age
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

document.getElementById('killerCard').onclick = pickKiller

const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponWeight').innerHTML = mystery.weapon.weight
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}

document.getElementById('weaponCard').onclick = pickWeapon

console.log(mystery)

const pickRoom = () => {

  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

document.getElementById('roomCard').onclick = pickRoom

console.log(mystery)

const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}

document.getElementById('button').onclick = revealMystery