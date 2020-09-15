// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'Green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'mustard',
  description: 'x',
  age: 1,
  image: 'assets/mustard.png',
  occupation: 'x'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'Plum',
  description: 'x',
  age: 2,
  image: 'assets/plum.png',
  occupation: 'x'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'Scarlet',
  description: 'x',
  age: 1,
  image: 'assets/scarlet.png',
  occupation: 'x'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'White',
  description: 'x',
  age: 1,
  image: 'assets/white.png',
  occupation: 'x'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'Peacock',
  description: 'x',
  age: 1,
  image: 'assets/peacock.png',
  occupation: 'x'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 10
}

const candlestick = {
  name: 'candlestick',
  weight: 10
}

const dumbbell = {
  name: 'dumbbell',
  weight: 10
}

const poison = {
  name: 'poison',
  weight: 10
}

const axe = {
  name: 'axe',
  weight: 10
}

const bat = {
  name: 'bat',
  weight: 10
}

const trophy = {
  name: 'trophy',
  weight: 10
}

const pistol = {
  name: 'pistol',
  weight: 10
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = 'Dining Room'
const observatory = 'Observatory'
const kitchen = 'Kitchen'
const study = 'Study'
const library = 'Library'
const billiardRoom = 'billiard Room'
const lounge = 'Lounge'
const ballRoom = 'Ballroom'
const hall = 'Hall'
const spa = 'Spa'
const livingRoom = 'Living Room'
const observatory = 'Observatory'
const theater = 'Theater'
const guestHouse = 'Guest House'
const patio = 'Patio'
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
