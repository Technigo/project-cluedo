// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'brown',
  description: '',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor'
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'blue',
  description: '',
  age: 26,
  image: 'assets/scarlet.png',
  occupation: 'model'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: '',
  age: 53,
  image: 'assets/peacock.png',
  occupation: 'Real Estate Agents'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'grey',
  description: '',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Pilot'
};

const mrsWhite = {
  firstName: '?',
  lastName: 'White',
  color: 'green',
  description: '',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Maid'
};

console.log(mrGreen.description);

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
};

const knif = {
  name: 'knife',
  weight: 8
};

const candlestick = {
  name: 'candlestick',
  weight: 3
};

const dumbbel = {
  name: 'dumbbel',
  weight: 15
};

const poison = {
  name: 'poison',
  weight: 1
};

const axe = {
  name: 'axe',
  weight: 10
};

const bat = {
  name: 'bat',
  weight: 15
};

const trophy = {
  name: 'trophy',
  weight: 7
};

const pistol = {
  name: 'pistol',
  weight: 9
};

console.log(rope.weight);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

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
  knif,
  candlestick,
  dumbbel,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  "Dining Room", 
  "Conservatory", 
  "Kitchen", 
  "Study", 
  "Library", 
  "Billiard Room", 
  "Lounge", 
  "Ballroom", 
  "Hall", 
  "Spa", 
  "Living Room", 
  "Observatory", 
  "Theater", 
  "Guest House", 
  "Patio"
]

console.log(suspects);
console.log(weapons);
console.log(rooms);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {};


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
document.getElementById('killerCard').onclick = pickKiller;


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
document.getElementById('weaponCard').onclick = pickWeapon;


const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
