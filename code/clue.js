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
  description: 'Victor Plum description',
  age: 42,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Scarlet Red',
  description: 'Miss Scarlet description',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Neuroscientist'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'All of them',
  description: 'Peacock description',
  age: 58,
  image: 'assets/.png',
  occupation: 'President of the United States of America'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'Mustard description',
  age: 72,
  image: 'assets/.png',
  occupation: 'Owns a mustard farm'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'White',
  description: 'Mrs white desc',
  age: 83,
  image: 'assets/.png',
  occupation: 'Stuntwoman in "Golden Girls"'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 15
}

const candlestick = {
  name: 'candle stick',
  weight: 35
}

const dumbbell = {
  name: 'dumbbell',
  weight: 150
}

const poison = {
  name: 'novichok',
  weight: 5
}

const axe = {
  name: 'axe',
  weight: 85
}

const bat = {
  name: 'bat',
  weight: 60
}

const trophy = {
  name: 'trophy',
  weight: 75
}

const pistol = {
  name: 'pistol',
  weight: 35
}

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

const rooms = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio']


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
