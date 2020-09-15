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

const prPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'Collage professor with a black belt',
  Age: 31,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const mrsScarlet = {
  firstName: 'Sarah',
  lastName: 'Scarlet',
  color: 'red',
  description: 'The widowmaker',
  Age: 65,
  image: 'assets/scarlet.png',
  occupation: 'Retired doctor'
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Mastermind in the art of war',
  Age: 56,
  image: 'assets/mustard.png',
  occupation: 'Senior military officer'
}

const mrsPeacock = {
  firstName: 'Angie',
  lastName: 'Peacock',
  color: 'skyblue',
  description: 'Young and well connected politician',
  Age: 27,
  image: 'assets/peacock.png',
  occupation: 'Politician'
}

const mrsWhite = {
  firstName: 'Margaret',
  lastName: 'White',
  color: 'white',
  description: 'The hardest one to trick',
  Age: 50,
  image: 'assets/white.png',
  occupation: 'chef'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  image: 'assets/rope.png',
}

const knife = {
  name: 'knife'
  weight: 4,
  image: 'assets/knife.png',
}

const candlestick {
  name: 'Candlestick',
  weight: 5,
  image: 'assets/candlestick.png',
}

const dumbbell {
  name: 'Dumbbell',
  weight: 20,
  image: 'assets/dumbbell.png',
}

const poison {
  name: 'Poison',
  weight: 1,
  image: 'assets/poison.png',
}

const axe {
  name: 'Axe',
  weight: 30,
  image: 'assets/axe.png',
}

const bat {
  name: 'bat',
  weight: 25,
  image: 'assets/bat.png',
}

const trophy {
  name: 'Trophy',
  weight: 12,
  image: 'assets/trophy.png',
}

const pistol {
  name: 'Pistol',
  weight: 7,
  image: 'assets/pistol.png',
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom {
  name: 'Dining room',
  image: 'assets/diningroom.jpg',
}

const conservatory {
  name: 'Conservatory',
  image: 'assets/conservatory.png',
}

const kitchen {
  name: 'Kitchen',
  image: 'assets/kitchen.png',
}

const study {
  name: 'study',
  image: 'assets/study.png',
}

const library {
  name: 'Library',
  image: 'assets/library.png',
}

const billiardRoom {
  name: 'Billiard room',
  image: 'assets/billiardroom.png',
}

const lounge {
  name: 'Lounge',
  image: 'assets/lounge.jpg',
}

const ballroom {
  name: 'Ballroom',
  image: 'assets/ballroom.png',
}

const hall {
  name: 'Hall',
  image: 'assets/hall.jpg',
}

const spa {
  name: 'Spa',
  image: 'assets/spa.jpg',
}

const livingRoom {
  name: 'Living room',
  image: 'assets/livingroom.jpg',
}

const observatory {
  name: 'Observatory',
  image: 'assets/observatory.png',
}

const theater {
  name: 'Theater',
  image: 'assets/theater.jpg',
}

const guestHouse {
  name: 'Guest house',
  image: 'assets/guesthouse.png',
}

const patio {
  name: 'Patio',
  image: 'assets/patio.jpg',
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  prPlum,
  mrsScarlet,
  colMustard,
  mrsPeacock,
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: '',
  weapon: '',
  room: '',
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

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
