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

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: '',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: '',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: '',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: '',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: '',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}


// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 7
}

const candlestick = {
  name: 'candlestick',
  weight: 4
}

const dumbbell = {
  name: 'dumbbell',
  weight: 20
}

const poison = {
  name: 'poison',
  weight: 1
}

const axe = {
  name: 'axe',
  weight: 15
}

const bat = {
  name: 'bat',
  weight: 9
}

const trophy = {
  name: 'trophy',
  weight: 9
}

const pistol = {
  name: 'pistol',
  weight: 6
}


// ALL SUSPECTS, WEAPONS AND ROOMS GROUPED IN ARRAYS

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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

// Rooms does not need an object because the rooms have only one property

const rooms = [
  'dining room',
  'conservatory',
  'kitchen',
  'study',
  'library',
  'billiard room',
  'lounge',
  'ball room',
  'hall',
  'spa',
  'living room',
  'observatory',
  'theater',
  'guest house',
  'patio'
]

// Function for reload of page, to play again
const reload = () => {
  location.reload();
}

document.getElementById('playAgain').onclick = reload


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT IS PASSED IN THE FUNCTION
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: 'unknown',
  weapon: '',
  room: ''
}



// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the DOM of the killer card
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
}

// This should call the function when clicking on the killer card
document.getElementById('killerCard').onclick = pickKiller


// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the DOM of the weapon card
  document.getElementById('weaponDescription').innerHTML = `A ${mystery.weapon.name} with weight ${mystery.weapon.weight}`
  document.getElementById('weaponCard').style.background = mystery.killer.color
}

// This should call the function when clicking on the weapon card (but it does not work, I had to set it in HTML)
document.getElementById('weaponCard').onclick = pickWeapon



// This function will be invoked when you click on the room card.
const pickRoom = () => {
  // This will randomly select a room from the rooms. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the DOM of the room card
  document.getElementById('roomName').innerHTML = `${mystery.room}`
  document.getElementById('roomCard').style.background = mystery.killer.color
}

// This should call the function when clicking on the weapon card (but it does not work, I had to set it in HTML)
document.getElementById('roomCard').onclick = pickRoom


// This function will be invoked when button is clicked
const revealMystery = () => {
  // This will change the DOM of the reveal button to display the mystery
  document.getElementById('revealButton').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
}

document.getElementById('revealButton').onclick = revealMystery