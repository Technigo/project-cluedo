// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#008060',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#47476b',
  description: 'He loves plums',
  age: 30,
  image: 'assets/plum.png',
  occupation: 'Cook'
}

const missScarlet = {
  firstName: 'Casandra',
  lastName: 'Scarlet',
  color: '#ac3939',
  description: 'She is dangerous.',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Thief'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#336699',
  description: 'She likes hats.',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Fashionista'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#d9d926',
  description: 'He is a captain.',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Captain'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'grey',
  description: 'She is cool.',
  age: 80,
  image: 'assets/white.png',
  occupation: 'Teacher'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 20
}

const candlestick = {
  name: 'candlestick',
  weight: 100
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30
}

const poison = {
  name: 'poison',
  weight: 1000
}

const axe = {
  name: 'axe',
  weight: 500
}

const bat = {
  name: 'bat',
  weight: 200
}

const trophy = {
  name: 'trophy',
  weight: 300
}

const pistol = {
  name: 'pistol',
  weight: 600
}

// STEP 2 - ARRAYS
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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
  pistol  
]

const rooms = [
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living room",
  "Observatory",
  "Theater",
  "Guest house",
  "Patio"
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
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

document.getElementById('killerCard').addEventListener('click', pickKiller)


// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('weaponCard').style.background = mystery.killer.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}

document.getElementById('weaponCard').addEventListener('click', pickWeapon)

// This function will be invoked when you click on the rooms card.
const pickRooms = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}

document.getElementById('roomCard').addEventListener('click', pickRooms)

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {
  
  document.getElementById('message').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`;
  }
