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
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'Usually a frazzled servant',
  age: 70,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'An elderly, still-attractive woman',
  age: 62,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'A quick-witted, professor with a bow tie and glasses',
  age: 38,
  image: 'assets/plum.png',
  occupation: 'professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A femme fatale',
  age: 27,
  image: 'assets/scarlet.png',
  occupation: 'actress'
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dignified, dapper and dangerous military man',
  age: 55,
  image: 'assets/mustard.png'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: 'pink'
}

const knife = {
  name: 'knife',
  weight: 8,
  color: 'pink'
}

const candlestick = {
  name: 'candlestick',
  weight: 20,
  color: 'pink'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30,
  color: 'pink'
}

const poison = {
  name: 'poison',
  weight: 0.2,
  color: 'pink'
}

const axe = {
  name: 'axe',
  weight: 18,
  color: 'pink'
}

const bat = {
  name: 'bat',
  weight: 12,
  color: 'pink'
}

const trophy = {
  name: 'trophy',
  weight: 15,
  color: 'pink'
}

const pistol = {
  name: 'pistol',
  weight: 9,
  color: 'pink'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrsPeacock,
  professorPlum,
  missScarlet,
  colMustard,
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

console.log(`This is a description of Mr Green: ${mrGreen.description}`)
console.log(`This is the weight of the axe: ${axe.weight}`)
console.log(suspects)
console.log(weapons)
console.log(rooms)
console.log(suspects[0].firstName)
console.log(rooms.slice(-1)[0])

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

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}` 
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
}

