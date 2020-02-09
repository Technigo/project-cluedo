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

const mrsWhite = {
  firstName: 'Helen',
  lastName: 'White',
  color: 'white',
  description: 'She hate kids',
  age: 53,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const mrMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is evil',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Military'
}

const mrsPeacock = {
  firstName: 'Mary',
  lastName: 'Peacock', 
  color: 'blue', 
  description: 'An elegant aristocrat',
  age: 66,
  image: 'assets/peacock.png',
  occupation: 'Senator'
}

const mrPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is sneeky',
  age: 37, 
  image: 'assets/plum.png',
  occupation: 'Professor in Chemestry'
}

const missScarlet = {
  firstName: 'Louise',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is highly attractive',
  age: 25, 
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: 'beige'
}

const revolver = {
  name: 'revolver',
  weight: 3,
  color: 'black'
}

const candlestick = {
  name: 'candlestick',
  weight: 4, 
  color: 'silver'
}

const knife = {
  name: 'knife',
  weight: 2,
  color: 'brown'
}

const horseshoe = {
  name: 'horseshoe',
  weight: 5,
  color: 'darkgrey'
}

const poison = {
  name: 'poison',
  weight: 0,
color: 'red'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrMustard,
  mrsPeacock,
  mrPlum,
  missScarlet
]

const weapons = [
  rope, 
  revolver,
  candlestick,
  knife, 
  horseshoe,
  poison
]

const hall='hall'
const lounge ='lounge'
const diningRoom= 'dining Room'

const rooms = [
  hall, 
  lounge, 
  diningRoom
  // 'kitchen', 
  // 'ballRoom', 
  // 'conservatory', 
  // 'billardRoom', 
  // 'library', 
  // 'study'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: '',
  weapon: '',
  room: ''
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  
}

//document.getElementById('killerCard').onclick = pickKiller();



// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon =randomSelector(weapons)
  document.getElementById('weaponCard').style.bacground = mystery.weapon.color
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight} kg`
}
//document.getElementById('weaponCard').onclick = pickWeapon();

const pickRoom = () => {
  mystery.room =randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

//document.getElementById('roomCard').onclick = pickRoom();



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

console.log(mystery)
// console.log(suspects.image)
// document.getElementById('killerImage').innerHTML =suspects.image