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
  image: 'assets/Rope_Full.jpg'
}

const knife = {
  name: 'Knife',
  weight: 0.2,
  image: 'assets/Dagger_Full.jpg'
}

const candlestick = {
  name: 'Candlestick',
  weight: 12,
  image: 'assets/candlestick.jpg'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 30,
  image: 'assets/dumbbell.jpg'
}

const poison = {
  name: 'Poison',
  weight: 0.02,
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'Axe',
  weight: 3,
  image: 'assets/axe.jpg'
}

const bat = {
  name: 'Bat',
  weight: 2,
  image: 'assets/bat.jpg'
}

const trophy = {
  name: 'Trophy',
  weight: 8,
  image: 'assets/trophy.jpeg'
}

const pistol = {
  name: 'Pistol',
  weight: 0.7,
  image: 'assets/pistol.jpg'
}

// *****  THE ROOMS  ****** //

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/dining-room.jpg'
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.jpg'
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.jpg'
}

const study = {
  name: 'Study',
  image: 'assets/study.jpg'
}

const library = {
  name: 'Library',
  image: 'assets/library.jpg'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiard-room.jpg'
}

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.jpg'
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.jpg'
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.jpg'
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.jpg'
}

const livingRoom = {
  name: 'Living Room',
  image: 'assets/living-room.jpg'
}

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.jpeg'
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.jpg'
}

const guestHouse = {
  name: 'Guest House',
  image: 'assets/guest_house.jpg'
}

const patio = {
  name: 'Patio',
  image: 'assets/patio.jpg'
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

// *******  ADDING COLOR TO THE OBJECTS  *********

weapons.forEach(weapon =>
  weapon.color = '#394042')


rooms.forEach(room => 
  room.color = '#ad5f47')



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
  document.getElementById('roomImage').src = mystery.room.image
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



