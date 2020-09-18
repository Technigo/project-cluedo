// OBJECTS FOR ALL THE SUSPECTS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#82c59c',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  weapon: 'bat',
  favouriteWeapon: 'trophy'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#ffeb7a',
  description: 'He is a dignified, dapper and dangerous military man',
  age: 54,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  weapon: 'candlestick',
  favouriteWeapon: 'knife'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#7ed4e6',
  description: 'A grande dame, an elderly, attractive woman who nearly always maintains her dignity',
  age: 63,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  weapon: 'pistol',
  favouriteWeapon: 'candlestick'
}
const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#75709e',
  description: 'A quick-witted, professor with a bow tie and glasses',
  age: 46,
  image: 'assets/plum.png',
  occupation: 'Professor',
  weapon: 'poison',
  favouriteWeapon: 'dumbbell'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#be2241',
  description: 'A stock femme fatale, as young, cunning and attractive',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actor',
  weapon: 'axe',
  favouriteWeapon: 'poison'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#fef7fb',
  description: 'A frazzled domestic sever, appears as a guest',
  age: 37,
  image: 'assets/white.png',
  occupation: 'Maid',
  weapon: 'rope',
  favouriteWeapon: 'axe'
}
// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  id: 'rope',
  fact: 'Not for the clumsy ones!',
  weight: 50,
}
const knife = {
  name: 'Knife',
  id: 'knife',
  fact: 'Handle with care',
  weight: 7,
}
const candlestick = {
  name: 'Candlestick',
  id: 'candlestick',
  fact: 'Deadlier without a candle',
  weight: 16,
}
const dumbbell = {
  name: 'Dumbbell',
  id: 'dumbbell',
  fact: 'For the gym nut',
  weight: 22,
}
const poison = {
  name: 'Poison',
  id: 'poison',
  fact: 'Deadliest of all',
  weight: .8,
}
const axe = {
  name: 'Axe',
  id: 'axe',
  fact: 'Miss at first swing',
  weight: 36,
}
const bat = {
  name: 'Bat',
  id: 'bat',
  fact: 'A fool-proof weapon',
  weight: 43,
}
const trophy = {
  name: 'Trophy',
  id: 'tropy',
  fact: 'To celebrate the wins',
  weight: 86,
}
const pistol = {
  name: 'Pistol',
  id: 'pistol',
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
let mystery = {
  killer: null,
  weapon: null,
  room: null,
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

// FUNCTIONS pickWeapon 
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponFact').innerHTML = `${mystery.weapon.fact}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} lbs`

}
document.getElementById('weaponCard').onclick = pickWeapon

//favouriteWeapon
const favouriteWeapon = () => {
  mystery.favouriteWeapon = randomSelector(weapons)
}
const shuffleFavouriteWeapon = () => {
  mystery.favouriteWeapon = randomSelector(weapons)
  document.getElementById('favouriteWeapon').innerHTML
}
shuffleFavouriteWeapon()

//This block of code is the one I really wanted to make work but somehow it never did:

// const favourite = suspects.favouriteWeapon
// const shuffleFavouriteWeaponDuplicate = new Array(6).fill(favourite)
// const randomArray = [...weapons, ...favouriteWeaponDuplicate]
// const pickNotSoRandomWeapon = () => {
//   mystery.favouriteWeapon = randomArray[Math.floor(Math.random() * randomArray.length)]
// }
// pickNotSoRandomWeapon()

// pickRoom
const pickRoom = () => {
  mystery.rooms = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.rooms}`
}
document.getElementById('roomCard').onclick = pickRoom

// FUNCTION revealMystery that will be invoked when you click that button
const thisMystery = document.getElementById('mystery')

const revealMystery = () => {
  if (mystery.killer == '' || mystery.weapon == '' || mystery.room == '') {
    //   if (mystery.killer == null || mystery.weapon == null || mystery.room == null) -this prints no mystery to be revealed yet but it prints the same when all cards chosen, too
    document.getElementById('mystery').innerHTML = `No mystery to be revealed yet!`
  } else {
    thisMystery.innerHTML = `The murder was committed by the ${mystery.killer.occupation} ${mystery.killer.firstName} ${mystery.killer.lastName} , room: ${mystery.rooms}, executed with a ${mystery.weapon.weight} lbs ${mystery.weapon.name}. ${mystery.weapon.fact}! This suspect's favourite weapon is: ${mystery.favouriteWeapon.name}. Spooky.`

  }
}
document.getElementById('crimeButton').onclick = revealMystery
