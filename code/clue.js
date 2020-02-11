// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#006600',
  description: 'He has a lot of connections.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#6918b4',
  description: 'He is eccentric and odd.',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#b30000',
  description: 'She is not scared to speak her mind.',
  age: 26,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#0000b3',
  description: 'The whole country is afraid of her sharp pen!',
  age: 42,
  image: 'assets/peacock.png',
  occupation: 'Journalist'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#ffa500',
  description: 'He is angry and reserved.',
  age: 67,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#ffdb99',
  description: 'No one knows what happened to Mr White...',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Cookbook author'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 40
}

const candlestick = {
  name: 'candlestick',
  weight: 90
}

const dumbbell = {
  name: 'dumbbell',
  weight: 150
}

const poison = {
  name: 'poison',
  weight: 5
}

const axe = {
  name: 'axe',
  weight: 120
}

const bat = {
  name: 'bat',
  weight: 20
}

const trophy = {
  name: 'trophy',
  weight: 100
}

const pistol = {
  name: 'pistol',
  weight: 80
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
  "Patio"]

const time = [
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 AM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
  "12 PM"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: "",
  room: "",
  weapon: "",
  time: ""
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
}

document.getElementById('killerCard').onclick = pickKiller

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
}

document.getElementById('weaponCard').onclick = pickWeapon

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
}

document.getElementById('roomCard').onclick = pickRoom


const pickTime = () => {
  mystery.time = randomSelector(time)
  document.getElementById(
    'time'
  ).innerHTML = `${mystery.time}`
}

document.getElementById('timeCard').onclick = pickTime
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {
  if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '' || mystery.time === '') {
    document.getElementById('mystery').innerHTML = 'No mystery has been revealed yet.'
  } else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name} at ${mystery.time}.`
  }
}

document.getElementById('button').onclick = revealMystery

