// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'brown',
  description: '',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'axe'
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'blue',
  description: '',
  age: 26,
  image: 'assets/scarlet.png',
  occupation: 'model',
  favouriteWeapon: 'bat'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: '',
  age: 53,
  image: 'assets/peacock.png',
  occupation: 'Real Estate Agents',
  favouriteWeapon: 'trophy'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'grey',
  description: '',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Pilot',
  favouriteWeapon: 'poison'
};

const mrsWhite = {
  firstName: '?',
  lastName: 'White',
  color: 'green',
  description: '',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Maid',
  favouriteWeapon: 'pistol'
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  id: 'rope'
};

const knif = {
  name: 'knife',
  weight: 8,
  id: 'knife'
};

const candlestick = {
  name: 'candlestick',
  weight: 3,
  id: 'candlestick'
};

const dumbbel = {
  name: 'dumbbel',
  weight: 15,
  id: 'dumbbel'
};

const poison = {
  name: 'poison',
  weight: 1,
  id: 'poison'
};

const axe = {
  name: 'axe',
  weight: 10,
  id: 'axe'
};

const bat = {
  name: 'bat',
  weight: 15,
  id: 'bat'
};

const trophy = {
  name: 'trophy',
  weight: 7,
  id: 'trophy'
};

const pistol = {
  name: 'pistol',
  weight: 9,
  id: 'pistol'
};


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
  // document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`

  document.getElementById(
    'favoriteWeapon'
  ).innerHTML = `${mystery.favouriteWeapon}`
}
document.getElementById('killerCard').onclick = pickKiller;


const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  // document.getElementById('weaponCard').style.background = mystery.killer.color
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
  document.getElementById(
    'weaponWeight'
  ).innerHTML = `${mystery.weapon.weight}`
}
document.getElementById('weaponCard').onclick = pickWeapon;


const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  // document.getElementById('roomCard').style.background = mystery.killer.color
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}
document.getElementById('roomCard').onclick = pickRoom;

const revealMystery = () => {
  
  document.getElementById(
    'revealText'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
}
document.getElementById('reveal').onclick = revealMystery;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const shuffleFavouriteWeapon = () => {
  suspects.favouriteWeapon = randomSelector(weapons)
}

