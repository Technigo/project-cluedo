// OBJECTS FOR ALL THE SUSPECTS
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
  color: 'violet',
  description: 'Loves ice cream',
  age: 45,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
  const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She knows a lot about birds',
  age: 45,
  image: 'assets/scarlet.png',
  occupation: 'Doktor'
}
  const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She went to Technigo',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Frontend developer'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He loves custard',
  age: 45,
  image: 'assets/mustard.png',
  occupation: 'Chef'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She knows karate',
  age: 45,
  image: 'assets/white.png',
  occupation: 'Headmaster'
}

// CREATED OBJECTS FOR ALL THE WEAPONS
const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 1
}
const candlestick = {
  name: 'candlestick',
  weight: 15
}
const dumbbell = {
  name: 'dumbbell',
  weight: 30
}
const poison = {
  name: 'poison',
  weight: 3
}
const axe = {
  name: 'axe',
  weight: 16
}
const bat = {
  name: 'bat',
  weight: 9
}
const trophy = {
  name: 'trophy',
  weight: 50
}
const pistol = {
  name: 'pistol',
  weight: 8
}

// SUSPECTS
const suspects = [
  mrGreen, 
  mrsWhite, 
  professorPlum, 
  missScarlet, 
  mrsPeacock, 
  colonelMustard, 
]

// WEAPONS 
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

// ROOMS
const rooms = [
  'dining room', 'conservatory', 'kitchen', 'study', 'library', 'billiard room', 'lounge', 'ballroom', 'hall', 'spa', 'living room', 'observatory', 'theater','guest house', 'patio'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATED AN OBJECT THAT KEEPS THE MYSTERY.
let mystery = { 
  killer: null,
  weapon: null,
  room: null,
}

// CREATE FUNCTIONS pickKiller
const pickKiller = () => {
  // This will randomly select a kiler from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. 
  document.getElementById("killerCard").style.background = mystery.killer.color 
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerAge').innerHTML = ` Age: ${mystery.killer.age}`
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
  document.getElementById('killerCard').removeEventListener('click', pickKiller)
}
document.getElementById('killerCard').addEventListener('click', pickKiller)


// CREATED FUNCTIONS pickWeapon 
const pickWeapon  = () => {
  // This will randomly select a weapon from the weaponslist. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
   // This will change the background color of the card to the one connected to the chosen killer and show weapon info.
   document.getElementById('weaponCard').style.background = mystery.killer.color
   document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
   document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}kg`
   document.getElementById('weaponCard').removeEventListener('click', pickWeapon)
   
}
   document.getElementById('weaponCard').addEventListener('click', pickWeapon)

// CREATED FUNCTIONS pickRoom 
const pickRoom   = () => {
 // This will randomly select a weapon from the weaponslist. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  // This will change the background color of the card to the one connected to the chosen killer and show the room.
  document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
  document.getElementById('roomCard').removeEventListener('click', pickRoom);
}
document.getElementById('roomCard').addEventListener('click', pickRoom)


// CREATED A FUNCTION revealMystery that will be invoked when you clicked all cards. 
const revealMystery = () => {
  if (mystery.killer === null || mystery.weapon === null || mystery.room === null) {
    document.getElementById('theMystery').innerHTML = 'You must pick a killer, weapon and a room first.'
  } else {
    document.getElementById('theMystery').innerHTML =`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`
  }
}
document.getElementById('revealBtn').addEventListener('click', revealMystery)

const restart = () => {  
document.location.href = ""; 
}
document.getElementById('resetBtn').addEventListener('click', restart)





