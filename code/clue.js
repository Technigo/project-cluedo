// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS

// OBJECTS FOR ALL THE SUSPECTS

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
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is widely seen as quick-witted',
  age: 36,
  image: 'assets/green.png',
  occupation: 'Professor'
}

const colonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is usually a dignified, dapper and dangerous military man',
  age: 55,
  image: 'assets/green.png',
  occupation: 'Colonel'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is an elderly, still-attractive woman who nearly always maintains her dignity',
  age: 32,
  image: 'assets/green.png',
  occupation: 'Socialite'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'She is usually a frazzled servant',
  age: 65,
  image: 'assets/green.png',
  occupation: 'Housekeeper'
}

const missScarlett = {
  firstName: 'Josephine',
  lastName: 'Scarlett',
  color: 'red',
  description: 'She is a femme fatale',
  age: 25,
  image: 'assets/green.png',
  occupation: 'Actress'
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'rope',
  material: 'textile'
}

const knife = {
  name: 'knife',
  material: 'metal'
}

const candlestick = {
  name: 'candlestick',
  material: 'silver'
}

const dumbbell = {
  name: 'dumbbell',
  material: 'iron'
}

const poison = {
  name: 'poison',
  material: 'liquid'
}

const axe = {
  name: 'axe',
  material: 'metal'
}

const bat = {
  name: 'bat',
  material: 'wood'
}

const trophy = {
  name: 'trophy',
  material: 'silver'
}

const pistol = {
  name: 'pistol',
  material: 'metal'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// STEP 2 - CREATE ARRAYS TO SUSPECTS, WEAPONS AND ROOMS 

const suspects = [
  mrGreen,
  professorPlum,
  colonelMustard,
  mrsPeacock,
  mrsWhite,
  missScarlett
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

// STEP 3 - PICK A MURDERER, A WEAPON AND A ROOM

// OBJECT THAT KEEPS THE MYSTERY (with a killer, a weapon and a room)

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerText').style.background = mystery.killer.color
  document.getElementById(
    'killerText'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponText'
  ).innerHTML = `${mystery.weapon.name}`
}

// This function will be invoked when you click on the room card.
const pickRoom = () => {

  mystery.room = randomSelector(rooms)

  document.getElementById(
    'roomText'
  ).innerHTML = `${mystery.room}`
}

document.getElementById('killer').addEventListener('click', pickKiller)
document.getElementById('weapon').addEventListener('click', pickWeapon)
document.getElementById('room').addEventListener('click', pickRoom)


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const reveal = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}

document.getElementById('reveal').addEventListener('click', reveal)
