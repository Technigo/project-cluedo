// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'ForestGreen',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'MediumPurple',
  description: 'He is widely seen as the intellectual',
  age: 	36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet  = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Crimson',
  description: 'She is typically portrayed as young, cunning, and highly attractive',
  age: 	32,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'MidnightBlue',
  description: 'She is known for being outrageous with her flamboyant life-style',
  age:  50,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'GoldenRod',
  description: 'He is a tough man to accuse, so you better be right',
  age:  50,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'FloralWhite',
  description: 'She have the keys to all the rooms.',
  age:  70,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 1,
  color: 'black',
  image: 'assets/rope.jpg',
}

const knife = {
  name: 'Knife',
  weight: 2,
  color: 'black',
  image: 'assets/knife.jpg',
}

const candlestick = {
  name: 'Candlestick',
  weight: 3,
  color: 'black',
  image: 'assets/candlestick.jpg'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 20,
  color: 'black',
  image: 'assets/dumbbell.jpg'
}

const poison = {
  name: 'Poison',
  weight: 2,
  color: 'black',
  image: 'assets/poison.jpg'
}

const axe = {
  name: 'Axe',
  weight: 20,
  color: 'black',
  image: 'assets/axe.jpg'
}

const bat = {
  name: 'Bat',
  weight: 3,
  color: 'black',
  image: 'assets/bat.jpg'
}

const trophy = {
  name: 'Trophy',
  weight: 5,
  color: 'black',
  image: 'assets/trophy.jpg'
}

const pistol = {
  name: 'Pistol',
  weight: 2,
  color: 'black',
  image: 'assets/pistol.jpg'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = 'Dining Room';
const conservatory = 'Conservatory';
const kitchen = 'Kitchen';
const study =  'Study';
const library = 'Library';
const billiardRoom = 'Billiard Room';
const lounge = 'Lounge';
const ballroom = 'Ballroom';
const hall =  'Hall';
const spa = 'Spa';
const livingRoom = 'Living Room';
const observatory = 'Observatory';
const theater = 'Theater';
const guestHouse = 'Guest House';
const patio = 'Patio';


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  trophy,
  pistol
];

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
];


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: null,
  weapons: null,
  rooms: null
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {

// This will randomly select a killer from the suspects. And add that to the mystery object.
mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage'). src = mystery.killer.image
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapons = () => {

  mystery.weapons = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapons.color
  document.getElementById('weaponImage'). src = mystery.weapons.image
  document.getElementById('weaponName').innerHTML = `${mystery.weapons.name}`
}


const pickRoom = () => {

  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapons
document.getElementById('roomCard').onclick = pickRoom

const revealMystery = () => {
  
document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapons.name} that weighed ${mystery.weapons.weight} kg.`
}



document.getElementById('crimebutton').onclick = revealMystery


