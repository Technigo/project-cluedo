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
  color: 'purple',
  description: 'Knows a lot of things.',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
const msScarlett = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  description: 'Wraps everyone around her little finger.',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Would never raise an eyebrow. ',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Widow'
}
const clMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Always has a plan.',
  age: 54,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'Knows all the gossip.',
  age: 62,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 21
}

const candlestick = {
  name: 'candlestick',
  weight: 41
}

const dumbbell = {
  name: 'dumbbell',
  weight: 82
}

const poison = {
  name: 'poison',
  weight: 8
}

const axe = {
  name: 'axe',
  weight: 56
}
const bat = {
  name: 'bat',
  weight: 38
}
const trophy = {
  name: 'trophy',
  weight: 47
}
const pistol = {
  name: 'pistol',
  weight: 32
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  prPlum,
  msScarlett,
  mrsPeacock,
  clMustard,
  mrsWhite
  // ...  and the rest
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

const rooms = ['dining Room',
  'conservatory',
  'kitchen',
  'study',
  'library',
  'billiard Room',
  'lounge',
  'ballroom',
  'hall',
  'spa',
  'living Room',
  'observatory',
  'theater',
  'guest House',
  'patio'
]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mystery = {}

// pickKiller
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

document.getElementById('killerCard').onclick = pickKiller


//pickWeapon

const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}

document.getElementById('weaponCard').onclick = pickWeapon

console.log(mystery)


//pickRoom

const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

document.getElementById('roomCard').onclick = pickRoom

console.log(mystery)


// revealMystery

const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}

document.getElementById('button').onclick = revealMystery