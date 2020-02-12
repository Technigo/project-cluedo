// *******  SUSPECTS  *********

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

// *******  WEAPONS  *********

const rope = {
  name: 'Rope',
  weight: 1.5,
  image: 'assets/Rope_Full.jpg',
  color: '#394042'
}

const knife = {
  name: 'Knife',
  weight: 0.2,
  image: 'assets/Dagger_Full.jpg',
  color: '#394042'
}

const candlestick = {
  name: 'Candlestick',
  weight: 12,
  image: 'assets/candlestick.jpg',
  color: '#394042'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 30,
  image: 'assets/dumbbell.jpg',
  color: '#394042'
}

const poison = {
  name: 'Poison',
  weight: 0.02,
  image: 'assets/poison.jpg',
  color: '#394042'
}

const axe = {
  name: 'Axe',
  weight: 3,
  image: 'assets/axe.jpg',
  color: '#394042'
}

const bat = {
  name: 'Bat',
  weight: 2,
  image: 'assets/bat.jpg',
  color: '#394042'
}

const trophy = {
  name: 'Trophy',
  weight: 8,
  image: 'assets/trophy.jpeg',
  color: '#394042'
}

const pistol = {
  name: 'Pistol',
  weight: 0.7,
  image: 'assets/pistol.jpg',
  color: '#394042'
}

// *****  THE ROOMS  ****** //

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/dining-room.jpg',
  color: '#ad5f47'
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.jpg',
  color: '#ad5f47'
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.jpg',
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

// ***** ARRAYS *****

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

// *******  THE RANDOM SELECTOR  *********

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// *******  THE MYSTERY OBJECT  *********

let mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined
}

// *******  PICKKILLER FUNCTION  *********

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
}

// *******  PICKWEAPON FUNCTION  *********

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} kg.`
  document.getElementById('weaponImage').src = mystery.weapon.image
}


// *******  PICKROOM FUNCTION  *********

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room.name}` 
}

// *******  REVEALMYSTERY FUNCTION  *********

const revealMystery = () => {
  if (
      mystery.killer === undefined || 
      mystery.weapon === undefined ||
      mystery.room === undefined
    ) {
      document.getElementById('exp').innerHTML = `There is no mystery to reveal yet. Click the cards to see the culprit, the murder weapon and the scene of the crime.`
    } else {
      document.getElementById('exp').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with the ${mystery.weapon.name}`
}
}



