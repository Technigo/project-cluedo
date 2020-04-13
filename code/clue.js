// Suspects

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
  description: 'He is very wise',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is very sneeky',
  age: 23,
  image: 'assets/scarlet.png',
  occupation: 'Social butterfly'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She has a sharp tounge',
  age: 36,
  image: 'assets/peacock.png',
  occupation: 'Housewife'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is very strategic',
  age: 75,
  image: 'assets/mustard.png',
  occupation: 'Retired military'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She is a sweet old lady',
  age: 86,
  image: 'assets/white.png',
  occupation: 'Widow'
}
//Weapons
const rope = {
  name: 'rope',
  weight: 10,
  method: 'strangle',
  strenghtNeeded: 19,
  makesMess: 'no mess'
}
const knife = {
  name: 'knife',
  weight: 20,
  method: 'stab',
  strenghtNeeded: 12,
  makesMess: 'big mess'
}
const candlestick = {
  name: 'candlestick',
  weight: 15,
  method: 'strike',
  strenghtNeeded: 17,
  makesMess: 'some mess'
}
const dumbell = {
  name: 'dumbell',
  weight: 30,
  method: 'strike',
  strenghtNeeded: 19,
  makesMess: 'some mess'
}
const poison = {
  name: 'poison',
  weight: 1,
  method: 'overdose',
  strenghtNeeded: 0,
  makesMess: 'none'
}
const axe = {
  name: 'axe',
  weight: 25,
  method: 'swing',
  strenghtNeeded: 16,
  makesMess: 'big mess'
}
const bat = {
  name: 'bat',
  weight: 15,
  method: 'swing',
  strenghtNeeded: 15,
  makesMess: 'some mess'
}
const trophy = {
  name: 'trophy',
  weight: 14,
  method: 'strike',
  strenghtNeeded: 19,
  makesMess: 'some mess'
}
const pistol = {
  name: 'pistol',
  weight: 10,
  method: 'shoot',
  strenghtNeeded: 2,
  makesMess: 'big mess'
}
//Arrays of suspects, weapons and rooms
const suspects = [
  mrGreen,
  mrsWhite,
  mrsPeacock,
  professorPlum,
  missScarlet,
  colonelMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbell,
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
  'BilliardRoom',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Livingroom',
  'Observatory',
  'Theatre',
  'Guest House',
  'Patio'
]

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}
//object to store killer, weapon and room
const mystery = {
  killer: '',
  weapon: '',
  room: ''
}
//killer function
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}
  document.getElementById('killerCard').addEventListener('click', pickKiller)
//weapon function
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponMethod').innerHTML = `${mystery.weapon.method}`
}
  document.getElementById('weaponCard').addEventListener('click', pickWeapon)
//room function
const pickRoom = () => { 
  mystery.room = randomSelector(rooms)

  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
  document.getElementById('roomCard').addEventListener('click', pickRoom)
//reveal
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}
  document.getElementById('reveal').addEventListener('click', revealMystery)


