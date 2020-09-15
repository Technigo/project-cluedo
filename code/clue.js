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
  color: 'white',
  description: 'She knows the gossip',
  age: 52,
  image: 'assets/white.png',
  occupation: 'Maid'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  easilyOperated: false,
  danger: 'medium',
}

const knife = {
  name: 'knife',
  weight: 0.5,
  easilyOperated: true,
  danger: 'high',
}

const candlestick = {
  name: 'candlestick',
  weight: 0.2,
  easilyOperated: false,
  danger: 'low',
}

const dumbbell = {
  name: 'dumbbell',
  weight: 8,
  easilyOperated: false,
  danger: 'medium',
}

const poison = {
  name: 'poison',
  weight: 0.3,
  easilyOperated: true,
  danger: 'high',
}

const axe = {
  name: 'axe',
  weight: 5,
  easilyOperated: false,
  danger: 'high',
}

const bat = {
  name: 'bat',
  weight: 2,
  easilyOperated: true,
  danger: 'medium',
}

const trophy = {
  name: 'trophy',
  weight: 3,
  easilyOperated: true,
  danger: 'medium',
}

const pistol = {
  name: 'pistol',
  weight: 1,
  easilyOperated: false,
  danger: 'high',
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite
  // ...  and the rest
]

const weapons = []

const rooms = []

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
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
