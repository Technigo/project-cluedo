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

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He knows the answer to your questions',
  age: 42,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is very persuasive',
  age: 29,
  image: 'assets/scarlet.png',
  occupation: 'Lawyer'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She cannot be trusted',
  age: 47,
  image: 'assets/peacock.png',
  occupation: 'Singer'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He makes sure the rules are followed',
  age: 47,
  image: 'assets/mustard.png',
  occupation: 'Army Officer'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'whitesmoke',
  description: 'She knows the gossip',
  age: 52,
  image: 'assets/white.png',
  occupation: 'Maid'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  danger: 'Medium',
  color: '#ffff90'
}

const knife = {
  name: 'Knife',
  weight: 0.5,
  danger: 'High',
  color: '#ff9090'
}

const candlestick = {
  name: 'Candlestick',
  weight: 0.2,
  danger: 'Low',
  color: '#cef1b2'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 8,
  danger: 'Medium',
  color: '#ffff90'
}

const poison = {
  name: 'Poison',
  weight: 0.3,
  danger: 'High',
  color: '#ff9090'
}

const axe = {
  name: 'Axe',
  weight: 5,
  danger: 'High',
  color: '#ff9090'
}

const bat = {
  name: 'Bat',
  weight: 2,
  danger: 'Medium',
  color: '#ffff90'
}

const trophy = {
  name: 'Trophy',
  weight: 3,
  danger: 'Medium',
  color: '#ffff90'
}

const pistol = {
  name: 'Pistol',
  weight: 1,
  danger: 'High',
  color: '#ff9090'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
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
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library', 
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
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
  ).innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById(
    'killerAge'
  ).innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById(
    'killerOccupation'
  ).innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById(
    'killerImage'
  ).src = mystery.killer.image
  document.getElementById(
    'killerDescription'
  ).innerHTML = mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {  
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponCard').style.background = mystery.weapon.color

  document.getElementById(
    'weaponName'
  ).innerHTML = `Type: ${mystery.weapon.name}`
  document.getElementById(
    'weaponWeight'
  ).innerHTML = `Weight: ${mystery.weapon.weight}kg`
  document.getElementById(
    'weaponDanger'
  ).innerHTML = `Danger: ${mystery.weapon.danger}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = mystery.room
}


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed by ${mrsWhite.firstName} ${mrsWhite.lastName} in the ${rooms[4].toLocaleLowerCase()} with a ${trophy.name.toLocaleLowerCase()}.`
}