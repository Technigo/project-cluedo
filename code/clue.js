// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'Rope',

};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'Red',
  description: 'He has a lot knowledge',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Teacher',
  favouriteWeapon: 'Knife',
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Black',
  description: 'She is a great actress.',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'Poison',
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Blue',
  description: 'She is a Rich Socialite',
  age: 40,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'Pistol',
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'He is a well decorated Army Officer',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Army Officer',
  favouriteWeapon: 'Pistol',
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'White',
  description: 'She is a well educated woman',
  age: 35,
  image: 'assets/white.png',
  occupation: 'Teacher',
  favouriteWeapon: 'Axe',
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
};

const knife = {
  name: 'Knife',
  weight: 5,
};

const candleStick = {
  name: 'Candle-Stick',
  weight: 2
};

const dumbBell = {
  name: 'Dumb-Bell',
  weight: 20
};

const poison = {
  name: 'Poison',
  weight: 1
};

const axe = {
  name: 'Axe',
  weight: 12
};

const bat = {
  name: 'bat',
  weight: 12
};

const trophy = {
  name: 'Trophy',
  weight: 8
};

const pistol = {
  name: 'Pistol',
  weight: 12
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = 'Dining Room'
const conservatory = 'Conservatory'
const kitchen = 'Kitchen'
const study = 'Study'
const library = 'Library'
const billiardRoom = 'Billiard Room'
const lounge = 'Lounge'
const ballroom = 'Ballroom'
const hall = 'Hall'
const spa = 'Spa'
const livingRoom = 'Living Room'
const observatory = 'Observatory'
const theater = 'Theater'
const guestHouse = 'Guest House'
const patio = 'Patio'

console.log(mrGreen.description)
console.log(rope.weight)

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
];

const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
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

console.log(suspects);
console.log(weapons);
console.log(rooms);
console.log()

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
  room: '',
  weapon: ''
}
console.log(mystery)
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerImage').src = mystery.killer.image
}
document.getElementById('killerCard').onclick = pickKiller //Pick Killer

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}
document.getElementById('weaponCard').onclick = pickWeapon //Pick Weapon
const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom // Pick Room

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`)
}
document.querySelector('button').onclick = revealMystery
