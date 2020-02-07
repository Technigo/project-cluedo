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
  color: 'purple',
  description: 'He can throw plums',
  age: 60,
  image: 'assets/plum.png',
  occupation: 'Farmer'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She can be invisable',
  age: 30,
  image: '/assets/scarlet.png',
  occupation: 'Detective'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'yellow',
  description: 'She knows medicine',
  age: 65,
  image: '/assets/peacock.png',
  occupation: 'Doctor'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'White',
  description: 'He is a proffesional thief',
  age: 25,
  image: '/assets/mustard.png',
  occupation: 'Thief'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'Green',
  description: 'She knows the law',
  age: 80,
  image: '/assets/white.png',
  occupation: 'Lawyer'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 15
}

const candlestick = {
  name: 'candlestick',
  weight: 20
}

const dumbbell = {
  name: 'dumbbell',
  weight: 10
}

const poison = {
  name: 'poison',
  weight: 5
}

const axe = {
  name: 'axe',
  weight: 10
}

const bat = {
  name: 'bat',
  weight: 25
}

const trophy = {
  name: 'trophy',
  weight: 50
}

const pistol = {
  name: 'pistol',
  weight: 30
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

/*console.log(suspects.firstname)
console.log(mrsWhite.description)*/


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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
];

/*console.log(rooms[0])
console.log(rooms[9])
console.log(weapons[5])*/

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const theMystery = {
  killer: 'pistol',
  weapon: 30,
  room: 'something'
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

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
