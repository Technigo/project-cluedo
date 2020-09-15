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

const mrMustard = {
  firstName: '',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is secretly a Dijon mustard hoarder',
  age: 60,
  image: 'assets/mustard.png',
  occupation: ''
}

const mrsPeacock= {
  firstName: '',
  lastName: 'Peacock',
  color: 'blue',
  description: '',
  age: 45,
  image: 'assets/peacock.png',
  occupation: ''
}

const mrPlum = {
  firstName: '',
  lastName: 'Plum',
  color: 'purple',
  description: '',
  age: 50,
  image: 'assets/plum.png',
  occupation: ''
}

const mrsScarlet = {
  firstName: '',
  lastName: 'Scarlett',
  color: 'red',
  description: '',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: ''
}

const mrsWhite = {
  firstName: '',
  lastName: 'White',
  color: 'green',
  description: 'He has a lot of connections',
  age: 68,
  image: 'assets/white.png',
  occupation: ''
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: '10kg',
  color: 'brown'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  mrPlum,
  mrsScarlet,
  mrsWhite 
]

const weapons = [
  rope
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {

  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.description}`
  
}
document.getElementById('killerCard').onclick = pickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => { 

  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById(
    'weaponCard'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
}
document.getElementById('weaponCard').onclick = pickWeapon;


const pickRoom = () => { 
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = '#FFFFFF'
  document.getElementById(
    'roomCard'
  ).innerHTML = `${mystery.room}`

}
document.getElementById('roomCard').onclick = pickRoom;
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
