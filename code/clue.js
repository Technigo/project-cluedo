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

const colonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He has a lot of connections',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'He has a lot of connections',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const peterPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'blue',
  description: 'He has a lot of connections',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: 'red',
  description: 'He has a lot of connections',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'He has a lot of connections',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}


// OBJECTS FOR WEAPONS

const candlestick = {
  name: 'Candlestick',
  weight: 1,
  color: 'red'
}

const dagger = {
  name: 'Dagger',
  weight: 2,
  color: 'blue'
}

const leadPipe = {
  name: 'Lead Pipe',
  weight: 3,
  color: 'green'
}

const revolver = {
  name: 'Revolver',
  weight: 4,
  color: 'purple'
}

const rope = {
  name: 'Rope',
  weight: 5,
  color: 'pink'
}

const wrench = {
  name: 'Wrench',
  weight: 6,
  color: 'turqoise'
}



// THE ROOMS

/*const kitchen = 'Kitchen'
const ballroom = 'Ballroom'
const conservatory = 'Conservatory'
const diningRoom = 'Dining Room'
const cellar = 'Cellar'
const billiardRoom = 'Billiard Room'
const library = 'Library'
const lounge = 'Lounge'
const hall = 'Hall'
const study = 'Study'*/

// SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
  mrGreen,
  colonelMustard,
  mrsPeacock,
  peterPlum,
  missScarlet,
  mrsWhite,
]

const theSuspects = suspects.forEach((item) => {
  console.log(item)
})



const weapons = [
  candlestick,
  dagger,
  leadPipe,
  revolver,
  rope,
  wrench,
]

const theWeapons = weapons.forEach((item) => {
  console.log(item)
})


const rooms = [
  'Kitchen',
  'Ballroom',
  'Conservatory',
  'Diningroom',
  'Cellar',
  'Billiardroom',
  'Library',
  'Lounge',
  'Hall',
  'Study',
]

const theRooms = rooms.forEach((item) => {
  console.log(item)
})


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mystery = {
  killer: mrsPeacock,
  weapon: rope,
  room: 'study'
}



//KILLER:
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = mystery.killer.age
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation
  document.getElementById('killerImage').src = mystery.killer.image
}

document.getElementById('killerCard').onclick = pickKiller

//WEAPON:
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponWeight').innerHTML = mystery.weapon.weight
}

document.getElementById('weaponCard').onclick = pickWeapon


//ROOM:

const pickRoom = () => {
  mystery.rooms = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.rooms
}

document.getElementById('roomCard').onclick = pickRoom



//MYSTERY:
const theMystery = document.getElementById('mystery');

const revealMystery = () => {

  theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} 
  ${mystery.killer.lastName} in the ${mystery.rooms} with the ${mystery.weapon.name}.`;
};
document.getElementById('revealButton').onclick = revealMystery