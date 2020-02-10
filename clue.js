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

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a quickwitted, intellectual',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is young, cunning and ambitious',
  age: 27,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She knows all the socialite gossip',
  age: 58,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a dignified, dapper and dangerous military man',
  age: 62,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She has worked for the family all her life',
  age: 75,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'Knife',
  weight: 10
}

const candlestick = {
  name: 'Candlestick',
  weight: 10
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 10
}

const poison = {
  name: 'Poison',
  weight: 10
}

const axe = {
  name: 'Axe',
  weight: 10
}

const bat = {
  name: 'Bat',
  weight: 10
}

const trophy = {
  name: 'Trophy',
  weight: 10
}

const pistol = {
  name: 'Pistol',
  weight: 10
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
  'GuestHouse', 
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
  killer: suspects,
  weapon: weapons,
  room: rooms,
}

// This function will be invoked when you click on the killer card.

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = 'red'
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = 'red'
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

document.getElementById("killerCard").onclick = function() {
  pickKiller()
}

document.getElementById("weaponCard").onclick = function() {
  pickWeapon()
}

document.getElementById("roomCard").onclick = function() {
  pickRoom()
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

document.getElementById("button").onclick = function() {
  if (mystery.killer.firstName && mystery.killer.lastName && mystery.room && mystery.weapon.name) {
    document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  } else {
    document.getElementById("mystery").innerHTML = `No mystery is yet to be revealed`
  }
}
