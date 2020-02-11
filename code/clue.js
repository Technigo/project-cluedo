// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#3cab6a',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#ededed',
  description: 'Usually a frazzled servant',
  age: 70,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: '#476dcc',
  description: 'An elderly, still-attractive woman',
  age: 62,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#7d41b5',
  description: 'A quick-witted, professor with a bow tie and glasses',
  age: 38,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#c4162d',
  description: 'A femme fatale',
  age: 27,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#d1a00d',
  description: 'A dignified, dapper and dangerous military man',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 1.5,
  color: '#394042'
}

const knife = {
  name: 'Knife',
  weight: 0.2,
  color: '#394042'
}

const candlestick = {
  name: 'Candlestick',
  weight: 12,
  color: '#394042'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 30,
  color: '#394042'
}

const poison = {
  name: 'Poison',
  weight: 0.02,
  color: '#394042'
}

const axe = {
  name: 'Axe',
  weight: 3,
  color: '#394042'
}

const bat = {
  name: 'Bat',
  weight: 2,
  color: '#394042'
}

const trophy = {
  name: 'Trophy',
  weight: 8,
  color: '#394042'
}

const pistol = {
  name: 'Pistol',
  weight: 0.7,
  color: '#394042'
}

// *****  THE ROOMS  ****** //

const diningRoom = {
  name: 'Dining Room',
  color: '#ad5f47'
}

const conservatory = {
  name: 'Conservatory',
  color: '#ad5f47'
}

const kitchen = {
  name: 'Kitchen',
  color: '#ad5f47'
}

const study = {
  name: 'Study',
  color: '#ad5f47'
}

const library = {
  name: 'Library',
  color: '#ad5f47'
}

const billiardRoom = {
  name: 'Billiard Room',
  color: '#ad5f47'
}

const lounge = {
  name: 'Lounge',
  color: '#ad5f47'
}

const ballroom = {
  name: 'Ballroom',
  color: '#ad5f47'
}

const hall = {
  name: 'Hall',
  color: '#ad5f47'
}

const spa = {
  name: 'Spa',
  color: '#ad5f47'
}

const livingRoom = {
  name: 'Living Room',
  color: '#ad5f47'
}

const observatory = {
  name: 'Observatory',
  color: '#ad5f47'
}

const theater = {
  name: 'Theater',
  color: '#ad5f47'
}

const guestHouse = {
  name: 'Guest House',
  color: '#ad5f47'
}

const patio = {
  name: 'Patio',
  color: '#ad5f47'
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

console.log(`This is a description of Mr Green: ${mrGreen.description}`)
console.log(`This is the weight of the axe: ${axe.weight}`)
console.log(suspects)
console.log(weapons)
console.log(rooms)
console.log(suspects[0].firstName)
console.log(rooms.slice(-1)[0].name)

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
  room: '',
  background: '#ff4f4f'
}
console.log(`This is the mystery killer: ${mystery.killer}`)

// const toggle = () => {
//   this.classList.toggle('active')
// }

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
}

// const theKillerImage = document.getElementById('killerImage')theKillerImage.scr = mystery.killer.image

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} kg.`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room.name}` 
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  // if ( mystery.killer === undefined ||
  //       mystery.weapon === undefined ||
  //       mystery.room === undefined
  //   ) {
  //     document.getElementById('mystery').innerHTML = `There is no mystery to reveal yet. Click the cards to see the culprit, the murder weapon and the scene of the crime.`
  //   } else {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with the ${mystery.weapon.name}`
  // document.getElementsByTagName('body').style.background-color = mystery.background
}
  // document.getElementById('mystery').onclick = toggle
  // document.getElementById('background-color.body').onclick = toggle


