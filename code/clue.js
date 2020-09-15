// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#165209', // Green
  description: 'He has a lot of connections.',
  age: 45,
  image: './assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#5a3278', // Purple
  description: 'He is widely seen as the intellectual.',
  age: 36,
  image: './assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#b30e0e', // Red
  description: 'She is a real femme fatale.',
  age: 25,
  image: './assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#110557', // Blue
  description: 'She maintains her dignity in almost all cases.',
  age: 32,
  image: './assets/peacock.png',
  occupation: 'Socialite'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#b3870e', // Mustard yellow
  description: 'A military man both dignified and dangerous.',
  age: 56,
  image: './assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#f5f3f0', // White
  description: 'She has a grandmotherly appearance.',
  age: 67,
  image: './assets/white.png',
  occupation: 'Housekeeper'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, 
//ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'Knife',
  weight: 18
}

const candlestick = {
  name: 'Candlestick',
  weight: 48
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 98
}

const poison = {
  name: 'Poison',
  weight: 3
}

const axe = {
  name: 'Axe',
  weight: 91
}

const bat = {
  name: 'Bat',
  weight: 43
}

const trophy = {
  name: 'Trophy',
  weight: 33
}

const pistol = {
  name: 'Pistol',
  weight: 57
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

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
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study Room",
  "Library Room",
  "Billiard Room",
  "Lounge",
  "Ball Room",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.  With a killer, a weapon and a room. The values will be set later.
let theMystery = {
 killer: '',
 weapon: '',
 room: ''
}

const killerImage = document.getElementById('killerImage');

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects and add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  killerImage.src = mystery.killer.image
  document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`
}
document.getElementById('killerCard').onclick = pickKiller

// Function to be invoked when you click on Weapon card - in the similar way as pickKiller.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight} pounds`
}
document.getElementById('weaponCard').onclick = pickWeapon

// Function to be invoked when you click on Room card - in the similar way as pickKiller.
const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. 
// It should show something like: 'The murder was committed by Jacob Green, in the living room with a rope.'
const mysteryImage = document.getElementById('mysteryImage');

revealMystery = () => {
 
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`
  
}
