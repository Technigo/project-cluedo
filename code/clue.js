// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'Green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife'
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'x',
  age: 1,
  image: 'assets/mustard.png',
  occupation: 'x',
  favouriteWeapon: 'rope'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'Plum',
  description: 'x',
  age: 2,
  image: 'assets/plum.png',
  occupation: 'x',
  favouriteWeapon: 'candlestick'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Red',
  description: 'x',
  age: 1,
  image: 'assets/scarlet.png',
  occupation: 'x',
  favouriteWeapon: 'bat'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'White',
  description: 'x',
  age: 1,
  image: 'assets/white.png',
  occupation: 'x',
  favouriteWeapon: 'poison'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Brown',
  description: 'x',
  age: 1,
  image: 'assets/peacock.png',
  occupation: 'x',
  favouriteWeapon: 'axe'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  id: 'rope'
}

const knife = {
  name: 'knife',
  weight: 10,
  id: 'knife'
}

const candlestick = {
  name: 'candlestick',
  weight: 10,
  id: 'candlestick'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 10,
  id: 'dumbbell'
}

const poison = {
  name: 'poison',
  weight: 10,
  id: 'poison'
}

const axe = {
  name: 'axe',
  weight: 10,
  id: 'axe'
}

const bat = {
  name: 'bat',
  weight: 10,
  id: 'bat'
}

const trophy = {
  name: 'trophy',
  weight: 10,
  id: 'trophy'
}

const pistol = {
  name: 'pistol',
  weight: 10,
  id: 'pistol'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = 'Dining Room'
const conservatory = 'Conservatory'
const kitchen = 'Kitchen'
const study = 'Study'
const library = 'Library'
const billiardRoom = 'billiard Room'
const lounge = 'Lounge'
const ballRoom = 'Ballroom'
const hall = 'Hall'
const spa = 'Spa'
const livingRoom = 'Living Room'
const observatory = 'Observatory'
const theater = 'Theater'
const guestHouse = 'Guest House'
const patio = 'Patio'
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrPlum,
  mrsPeacock,
  mrMustard,
  missScarlet
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
  ballRoom,
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

let mystery = {
  killer: null,
  weapon: null,
  room: null
}

// Shuffle weapon function
const shuffleFavouriteWeapon = () => {
  mystery.killer.favouriteWeapon = randomSelector(weapons); 
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  
    shuffleFavouriteWeapon();
    console.log(mystery.killer.favouriteWeapon.name)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerFavoriteWeapon').innerHTML = `${mystery.killer.favouriteWeapon.name}`
}
document.getElementById('killerCard').addEventListener('click', pickKiller)

//  pickWeapon 
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('weaponCard').style.background = mystery.killer.color
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
  document.getElementById(
    'weaponWeight'
  ).innerHTML = `${mystery.weapon.weight}`
  
}
document.getElementById('weaponCard').addEventListener('click', pickWeapon)

// pickRoom
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').addEventListener('click', pickRoom)


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`
}