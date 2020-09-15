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
  description: 'A quick-witted, professor with a bow tie and glasse',
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
  irstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A frazzled domestic sever, appears as a guest',
  age: 37,
  image: 'assets/white.png',
  occupation: 'Maid'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
}
const knife = {
  name: 'knife',
  weight: 3,
}
const candlestick = {
  name: 'candlestick',
  weight: 5,
}
const dumbbell = {
  name: 'dumbbell',
  weight: 28,
}
const poison = {
  name: 'poison',
  weight: 1,
}
const axe = {
  name: 'axe',
  weight: 15,
}
const bat = {
  name: 'bat',
  weight: 13,
}
const trophy = {
  name: 'trophy',
  weight: 17,
}
const pistol = {
  name: 'pistol',
  weight: 9,
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
  killer: 'null',
  weapon: 'null',
  room: 'null',
}
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} " " ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years young`
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
  document.getElementById('killerImage').src = mystery.killer.image
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').innerHTML = mystery.killer.weapon
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
