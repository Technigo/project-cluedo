// OBJECTS:

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

const rope = {
  name: 'Rope',
  image: 'assets/rope.jpg'
}

const knife = {
  name: 'Knife',
  image: 'assets/knife.jpg'
}

const candlestick = {
  name: 'Candlestick',
  image: 'assets/candlestick.jpg'
}

const dumbbell = {
  name: 'Dumbbell',
  image: 'assets/dumbbell.jpg'
}

const poison = {
  name: 'Poison',
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'Axe',
  image: 'assets/axe.jpg'
}

const golfclub = {
  name: 'Golf club',
  image: 'assets/bat.jpg'
}

const trophy = {
  name: 'Trophy',
  image: 'assets/trophy.jpg'
}

const pistol = {
  name: 'Pistol',
  image: 'assets/pistol.jpg'
}

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/diningroom.jpg'
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
  image: 'assets/billiardroom.jpg'
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
  image: 'assets/livingroom.jpg'
} 

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.jpg'
} 

const theater = {
  name: 'Theater',
  image: 'assets/theater.jpg'
} 

const guestHouse = {
  name: 'Guest House',
  image: 'assets/guesthouse.jpg'
} 

const patio = {
  name: 'Patio',
  image: 'assets/patio.jpg'
} 

// ARRAYS:

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
  golfclub,
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

// FUNCTIONS:

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  killer: null,
  weapon: null,
  room: null,
}

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = '#ffefcf'
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById(
    'killerAge'
  ).innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById(
    'killerOccupation'
  ).innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById(
    'killerImage'
  ).src = mystery.killer.image
  document.getElementById(
    'killerDescription'
  ).innerHTML = `${mystery.killer.description}`
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = '#ffefcf'
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
  document.getElementById(
    'weaponImage'
  ).src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = '#ffefcf'
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room.name}`
  document.getElementById(
    'roomImage'
  ).src =mystery.room.image
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

document.getElementById("button").onclick = function() {
  if (mystery.killer && mystery.room && mystery.weapon) {
    document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`
  } else {
    document.getElementById("mystery").innerHTML = `No mystery is yet to be revealed`
  }
}
