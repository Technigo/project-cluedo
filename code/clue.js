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

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'Purple',
  description: 'He is smart',
  age: 39,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is young',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She comes from a wealthy family',
  age: 53,
  image: 'assets/peacock.png',
  occupation: 'Senator'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He comes from the military',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'lemonchiffon',
  description: 'She murdered her previous five husbands',
  age: 62,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'Knife',
  weight: 2
}

const candlestick = {
  name: 'Candlestick',
  weight: 6
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 12
}

const poison = {
  name: 'Poison',
  weight: 1
}

const axe = {
  name: 'Axe',
  weight: 7
}

const bat = {
  name: 'Bat',
  weight: 6
}

const trophy = {
  name: 'Trophy',
  weight: 9
}

const pistol = {
  name: 'Pistol',
  weight: 2
}


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
const mystery = {
  killer: undefined,
  weapon: undefined,
  rooms: undefined
};

// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age:${mystery.killer.age}`
  document.getElementById('killerImage').src = mystery.killer.image;
}
document.getElementById('killerCard').onclick = pickKiller


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

//WEAPON
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weight:${mystery.weapon.weight}`
}
document.getElementById('weaponCard').onclick = pickWeapon

//ROOM

const pickRoom = () => {
  mystery.rooms = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `The ${mystery.rooms}`
}
document.getElementById('roomCard').onclick = pickRoom


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


//const theMystery = document.getElementById('mystery');

const revealMystery = () => {
  if (mystery.killer === undefined ||
    mystery.weapon === undefined ||
    mystery.rooms === undefined)
    document.getElementById('mystery').innerHTML = 'No mystery has been revealed yet.'
  else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.rooms} with the ${mystery.weapon.name}.`
  }
}
document.getElementById('revealButton').onclick = revealMystery


const refreshPage = () => {
  location.reload();
}
document.getElementById('headingRefresh').onclick = refreshPage