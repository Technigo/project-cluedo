// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'Hypocritical Anglican priest',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Reverend'
}
const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'Disgraced former psychiatrist',
  age: 39,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Young, cunning and attractive',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Madame'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'A grande dame',
  age: 54,
  image: 'assets/peacock.png',
  occupation: 'Shady housevife'
}
const cMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dignified, dapper and dangerous military man',
  age: 61,
  image: 'assets/mustard.png',
  occupation: 'Military officer'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'He has a lot of connections',
  age: 48,
  image: 'assets/white.png',
  occupation: 'Servant'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  style: 'long',
}
const knife = {
  name: 'knife',
  weight: 10,
  style: 'sharp',
}
const candlestick = {
  name: 'candlestick',
  weight: 10,
  style: 'cemetary',
}
const dumbbell = {
  name: 'dumbbell',
  weight: 10,
  style: 'heavy',
}
const poison = {
  name: 'poison',
  weight: 10,
  style: 'deadly',
}
const axe = {
  name: 'axe',
  weight: 10,
  style: 'rusty',
}
const bat = {
  name: 'bat',
  weight: 10,
  style: 'baseball',
}
const trophy = {
  name: 'trophy',
  weight: 10,
  style: 'beautypagant',
}
const pistol = {
  name: 'pistol',
  weight: 10,
  style: 'military',
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  cMustard
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

const rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Biliard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "GuestHouse",
  "Patio",
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = arrays => {
  return arrays[Math.floor(Math.random() * arrays.length)]
}
randomSelector()

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
