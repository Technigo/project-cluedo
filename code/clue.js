// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
firstName: 'Victor',
lastName: 'Plum',
color: 'purple',
description: 'Has a talent for solving crimes.',
age: 35,
image: 'assets/plum.png',
occupation: 'Professor'
}

const missScarlet = {
firstName: 'Cassandra',
lastName: 'Scarlet',
color: 'red',
description: 'Young, cunning and attractive.',
age: 31,
image: 'assets/scarlet.png',
occupation: 'brothel mami'
}

const mrsPeacock = {
firstName: 'Eleanor',
lastName: 'Peacock',
color: 'blue',
description: 'Royal-like appearance.',
age: 55,
image: 'assets/peacock.png',
occupation: 'rich lady'
}

const colonelMustard = {
firstName: 'Jack',
lastName: 'Mustard',
color: 'yellow',
description: 'Very dangerous and cunning relying on his military training.',
age: 65,
image: 'assets/mustard.png',
occupation: 'Colonel'
}

const mrsWhite = {
firstName: 'Mrs',
lastName: 'White',
color: 'white',
description: 'Domestic worker and cook.',
age: 40,
image: 'assets/white.png',
occupation: 'Cook'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}
const knife ={
  name:'Knife',
  weight: 2
}
const candlestick = { 
  name: 'Candlestick',
  weight: 30
}
const dumbbell = {
name: 'Dumbbell',
weight: 90
}
const poison = {
  name: 'Poison',
  weight: 3
}
const axe = {
  name: 'Axe',
  weight: 45
}
const bat = {
  name: 'Bat',
  weight: 30
}
const trophy = {
  name: 'Trophy',
  weight: 50
}
const pistol = {
  name: 'Pistol',
  weight: 70
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

let diningRoom = 'Dining Room'
let conservatory = 'Conservatory'
let kitchen = 'Kitchen'
let study = 'Study' 
let library = 'Library' 
let billiardRoom = 'Billiard Room'
let lounge = 'Lounge'
let ballroom = 'Ballroom'
let hall = 'Hall' 
let spa = 'Spa' 
let livingRoom = 'Living Room'
let observatory = 'Observatory' 
let theater = 'Theater'
let guestHouse = 'Guest House'
let patio = 'Patio'


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard

]
  console.log(suspects)

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
console.log(weapons)

const rooms = [
  diningRoom, 
  conservatory,
  kitchen,
  study, 
  library, 
  billiardRoom,
  lounge,
  ballroom, 
  hall, 
  spa, 
  livingRoom, 
  observatory, 
  theater, 
  guestHouse, 
  patio
]
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer:'',
  weapon:'',
  room:''
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
document.getElementById('killerCard').onclick = pickKiller

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}

document.getElementById('weaponCard').onclick = pickWeapon
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
