// SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
}

const prPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'Collage professor with a black belt',
  age: 31,
  image: 'assets/plum.png',
  occupation: 'Professor',
}

const mrsScarlet = {
  firstName: 'Sarah',
  lastName: 'Scarlet',
  color: 'red',
  description: 'The widowmaker',
  age: 65,
  image: 'assets/scarlet.png',
  occupation: 'Retired doctor',
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Mastermind in the art of war',
  age: 56,
  image: 'assets/mustard.png',
  occupation: 'Senior military officer',
}

const mrsPeacock = {
  firstName: 'Angie',
  lastName: 'Peacock',
  color: 'skyblue',
  description: 'Young and well connected politician',
  age: 27,
  image: 'assets/peacock.png',
  occupation: 'Politician',
}

const mrsWhite = {
  firstName: 'Margaret',
  lastName: 'White',
  color: 'white',
  description: 'The hardest one to trick',
  age: 50,
  image: 'assets/white.png',
  occupation: 'chef',
}

// WEAPONS

const rope = {
  name: 'Rope',
  weight: 10,
  image: 'assets/rope.png',
}

const knife = {
  name: 'Knife',
  weight: 4,
  image: 'assets/knife.png',
}

const candlestick = {
  name: 'Candlestick',
  weight: 6,
  image: 'assets/candlestick.png',
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 20,
  image: 'assets/dumbbell.png',
}

const poison = {
  name: 'Poison',
  weight: 1,
  image: 'assets/poison.png',
}

const axe = {
  name: 'Axe',
  weight: 30,
  image: 'assets/axe.png',
}

const bat = {
  name: 'bat',
  weight: 25,
  image: 'assets/bat.png',
}

const trophy = {
  name: 'Trophy',
  weight: 12,
  image: 'assets/trophy.png',
}

const pistol = {
  name: 'Pistol',
  weight: 7,
  image: 'assets/pistol.jpg',
}

// THE ROOMS 

const diningRoom = {
  name: 'Dining room',
  image: 'assets/diningroom.jpg',
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.png',
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.png',
}

const study = {
  name: 'study',
  image: 'assets/study.png',
}

const library = {
  name: 'Library',
  image: 'assets/library.png',
}

const billiardRoom = {
  name: 'Billiard room',
  image: 'assets/billiardroom.png',
}

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.jpg',
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.png',
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.jpg',
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.jpg',
}

const livingRoom = {
  name: 'Living room',
  image: 'assets/livingroom.jpg',
}

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.png',
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.jpg',
}

const guestHouse = {
  name: 'Guest house',
  image: 'assets/guesthouse.png',
}

const patio = {
  name: 'Patio',
  image: 'assets/patio.jpg',
}

// ARRAYS

const suspects = [
  mrGreen,
  prPlum,
  mrsScarlet,
  colMustard,
  mrsPeacock,
  mrsWhite,
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
  pistol,
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
  patio,
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
  killer: '',
  weapon: '',
  room: '',
}

// Random killer function
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.age} ${mystery.killer.occupation}`
}
document.getElementById('killerCard').onclick = pickKiller;

// Random weapon function
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponImage').src = mystery.weapon.image
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight} lbs`
}
document.getElementById('weaponCard').onclick = pickWeapon;

// Random room function
const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomImage').src = mystery.room.image
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room.name}`
}
document.getElementById('roomCard').onclick = pickRoom;


// revealMystery function

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}.`
}
document.getElementById('revealButton').onclick = revealMysteryg