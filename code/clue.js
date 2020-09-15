// OBJECTS FOR ALL THE SUSPECTS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a dignified, dapper and dangerous military man',
  age: 54,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'A grande dame, an elderly, attractive woman who nearly always maintains her dignity',
  age: 63,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}
const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'A quick-witted, professor with a bow tie and glasses',
  age: 46,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A stock femme fatale, as young, cunning and attractive',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actor'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A frazzled domestic sever, appears as a guest',
  age: 37,
  image: 'assets/white.png',
  occupation: 'Maid'
}
// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  fact: 'Not for the clumsy ones!',
  weight: 50,
}
const knife = {
  name: 'Knife',
  fact: 'Handle with care',
  weight: 7,
}
const candlestick = {
  name: 'Candlestick',
  fact: 'Deadlier without a candle',
  weight: 16,
}
const dumbbell = {
  name: 'Dumbbell',
  fact: 'For the gym nut',
  weight: 22,
}
const poison = {
  name: 'Poison',
  fact: 'Deadliest of all',
  weight: .8,
}
const axe = {
  name: 'Axe',
  fact: 'Miss at first swing',
  weight: 36,
}
const bat = {
  name: 'Bat',
  fact: 'A fool-proof weapon',
  weight: 43,
}
const trophy = {
  name: 'Trophy',
  fact: 'To celebrate the wins',
  weight: 86,
}
const pistol = {
  name: 'Pistol',
  fact: 'Loaded or not',
  weight: 17,
}

// SUSPECTS, WEAPONS AND ROOMS IN ARRAYS:

const suspects = [
  mrGreen,
  colonelMustard,
  mrsPeacock,
  professorPlum,
  missScarlet,
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

const rooms = ['Dining Room',
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
  'Patio',]

const adjectives = [
  'bitter',
  'clumsy',
  'witty',
  'dramatic',
  'one of a kind',
  'unformidable',
  'clueless',
  'sour',
  'over-the-top',
  'hopeless',
  'laughable',
  'mastermind'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
  killer: 'null',
  weapon: 'null',
  room: 'null',
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years young`
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
  document.getElementById('killerImage').src = mystery.killer.image
}
document.getElementById('killerCard').onclick = pickKiller

// FUNCTIONS pickWeapon and pickRoom 
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponFact').innerHTML = `${mystery.weapon.fact}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} lbs`

}
document.getElementById('weaponCard').onclick = pickWeapon


const pickRoom = () => {
  mystery.rooms = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.rooms}`
}
document.getElementById('roomCard').onclick = pickRoom
// FUNCTION revealMystery that will be invoked when you click that button
const thisMystery = document.getElementById('mystery')

const revealMystery = () => {
  thisMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} , room: ${mystery.rooms}, executed with a ${mystery.weapon.weight} lbs ${mystery.weapon.name}. ${mystery.weapon.fact}!`
}
document.getElementById('crimeButton').onclick = revealMystery