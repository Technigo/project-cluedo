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
  description: 'He has very funny',
  age: 65,
  image: 'assets/purple.png',
  occupation: 'Proffesor'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  description: 'She is everywhere',
  age: 35,
  image: 'assets/red.png',
  occupation: 'Social lion'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Colorful',
  age: 75,
  image: 'assets/blue.png',
  occupation: 'None'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Takes what he wants',
  age: 50,
  image: 'assets/yellow.png',
  occupation: 'Businessman'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'Uppcoming',
  age: 25,
  image: 'assets/white.png',
  occupation: 'Studies'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 23
}

const candlestick = {
  name: 'candlestick',
  weight: 60,
}

const dumbbell = {
  name: 'dumbell',
  weight: 100
}

const poison = {
  name: 'poison',
  weight: 1
}

const axe = {
  name: 'axe',
  weight: 80,
}

const bat = {
  name: 'bat',
  weight: 55
}

const trophy = {
  name: 'trophy',
  weight: 60,
}

const pistol = {
  name: 'pistol',
  weight: 20,
}




// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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
  'theater',
  'guestHouse',
  'patio'
]

console.log(mrsPeacock.age)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]

}


//// RETURNS THE VARIABLE NAME How to get random in?
console.log(Object.keys({test})[0])

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: 's',
  weapon: '',
  room: ''
}


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
}
pickKiller();

console.log(mystery.killer)

// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
document.getElementById('killerCard').style.background = mystery.killer.color
document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
