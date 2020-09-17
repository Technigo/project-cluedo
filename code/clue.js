const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 70,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'A professor in history and criminal technology',
  age: 62,
  image: 'plum.png',
  occupation: 'Detective'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A famous actor, been in many movies. Love antrophology',
  age: 47,
  image: 'scarlet.png',
  occupation: 'Actor'
}
const mrsPeacock = {
  firstName: 'Eleonor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Degree in criminal history and writing. Love tea and cookies',
  age: 59,
  image: 'assets/green.png',
  occupation: 'Author'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Passion of the military and hunting on his free time',
  age: 76,
  image: 'mustard.png',
  occupation: 'Military Officer'
}
const mrsWhite = {
  firstName: 'Jane',
  lastName: 'White',
  color: 'white',
  description: 'A nurse that worked as a midwife all her life',
  age: 74,
  image: 'white.png',
  occupation: 'Nurse'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 1
}
const candlestick = {
  name: 'candlestick',
  weight: 0.1
}
const dumbbell = {
  name: 'dumbbell',
  weight: 5
}
const poison = {
  name: 'poison',
  weight: 0.2
}
const axe = {
  name: 'axe',
  weight: 6
}
const bat = {
  name: 'bat',
  weight: 1.5
}
const trophy = {
  name: 'trophy',
  weight: 4
}
const pistol = {
  name: 'pistol',
  weight: 2
}

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
  'diningRoom', 
  'conservatory', 
  'kitchen', 
  'study', 
  'library', 
  'billiardRoom', 
  'lounge', 
  'ballroom', 
  'hall', 
  'spa', 
  'livingRoom', 
  'observatory', 
  'theatre', 
  'guestHouse', 
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

const mystery = {
killer: '',
weapon: '',
room: ''
//killer: null, tex
}

// This function will be invoked when you click on the killer card.
function pickKiller(mystery) {

  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
}
document.getElementById('killerCard').addEventListener('click', pickKiller);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
