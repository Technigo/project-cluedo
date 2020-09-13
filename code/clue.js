// STEP 1 - KILLERS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'image/killer/green.jpg',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'Pistol',
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: ' Mustard',
  color: 'yellow',
  description: 'He is the most dangerous in the house ',
  age: 55,
  image: 'image/killer/mustard.jpg',
  occupation: 'Military man',
  favouriteWeapon: 'dumbell',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Her husband is a famous politician',
  age: 76,
  image: 'image/killer/peacock.jpg',
  occupation: 'Art collector',
  favouriteWeapon: 'knife',
}

const plum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is the smartest in the house',
  age: 56,
  image: 'image/killer/plum.jpg',
  occupation: 'Professor',
  favouriteWeapon: 'candlestick',
}
const scarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She has a rich husband',
  age: 43,
  image: 'image/killer/scarlet.jpg',
  occupation: 'Trophy-wife',
  favouriteWeapon: 'bat',
}

const wadsworth = {
  firstName: 'Mr',
  lastName: 'Boddy',
  color: 'grey',
  description: 'Trusts noone',
  age: 49,
  image: 'image/killer/wadsworth.jpg',
  occupation: 'Stockbroker',
  favouriteWeapon: 'gun',
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She knows the house like the back of her hand',
  age: 52,
  image: 'image/killer/white.jpg',
  occupation: 'Chef',
  favouriteWeapon: 'rope',
}

const yvette = {
  firstName: 'Yvette',
  color: 'brown',
  description: 'Probably the most evil villain in the house',
  age: 36,
  image: 'image/killer/yvette.jpg',
  occupation: 'Maid',
  favouriteWeapon: 'posion',
}

// STEP 2 - WEAPONS

const axe = {
  name: 'axe',
  weight: '8 kg',
  image: 'image/weapon/axe.png',
}

const bat = {
  name: 'bat',
  weight: '2 kg',
  image: 'image/weapon/bat.png',
}
const candlestick = {
  name: 'candlestick',
  weight: '1 kg',
  image: 'image/weapon/candlestick.png',
}

const dumbell = {
  name: 'dumbell',
  weight: '10 kg',
  image: 'image/weapon/dumbell.png',
}

const gun = {
  name: 'gun',
  weight: '0,5 kg',
  image: 'image/weapon/gun.png',
}

const knife = {
  name: 'knife',
  weight: '300 g',
  image: 'image/weapon/knife.png',
}

const posion = {
  name: 'poison',
  weight: '100 g kg',
  image: 'image/weapon/poison.png',
}

const rope = {
  name: 'rope',
  weight: '1 kg',
  image: 'image/weapon/rope.png',
}

const trophy = {
  name: 'trophy',
  weight: '4 kg',
  image: 'image/weapon/trophy.png',
}


// STEP 3 - ROOMS

const diningRoom = {
  name: 'Dining Room',
  image: 'image/room/dining.png',
}

const conservatory = {
  name: 'The Conservatory',
  image: 'image/room/conservatory.png',
}
const kitchen = {
  name: 'Kitchen',
  image: 'image/room/kitchen.png',
}

const study = {
  name: 'Study Room',
  image: 'image/room/study.png',
}

const library = {
  name: 'The Library',
  image: 'image/room/library.jpg',
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'image/room/biliard.png',
}

const lounge = {
  name: 'Lounge',
  image: 'image/room/lounge.jpg',
}

const ballroom = {
  name: 'Ballroom',
  image: 'image/room/ballroom.png',
}

const hall = {
  name: 'Hall',
  image: 'image/room/hall.png',
}

const spa = {
  name: 'The Spa',
  image: 'image/room/spa.png',
}

const livingRoom = {
  name: 'Living Room',
  image: 'image/room/livingroom.png',
}

const observatory = {
  name: 'Observatory',
  image: 'image/room/observatory.jpg',
}

const theatre = {
  name: 'Theatre',
  image: 'image/room/theatre.png',
}

const guestHouse = {
  name: 'Guest House',
  image: 'image/room/guesthouse.png',
}

const patio = {
  name: 'Patio',
  image: 'image/room/patio.jpg',
}

// ARRAY GROUPS
const suspects = [
  mrGreen,
  mrsWhite,
  plum,
  mrsPeacock,
  wadsworth,
  colonelMustard,
  scarlet,
  yvette,
]

const weapons = [
  axe,
  bat,
  candlestick,
  dumbell,
  gun,
  knife,
  posion,
  rope,
  trophy,
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
  theatre,
  guestHouse,
  patio,
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

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