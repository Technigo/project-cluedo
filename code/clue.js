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

const colonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He has a lot of connections',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'He has a lot of connections',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const peterPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'blue',
  description: 'He has a lot of connections',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: 'red',
  description: 'He has a lot of connections',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'He has a lot of connections',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}


// OBJECTS FOR WEAPONS

const candlestick = {
  name: 'Candlestick',
  weight: 1
}

const dagger = {
  name: 'Dagger',
  weight: 2
}

const leadPipe = {
  name: 'Lead Pipe',
  weight: 3
}

const revolver = {
  name: 'Revolver',
  weight: 4
}

const rope = {
  name: 'Rope',
  weight: 5
}

const wrench = {
  name: 'Wrench',
  weight: 6
}



// THE ROOMS

/*const kitchen = 'Kitchen'
const ballroom = 'Ballroom'
const conservatory = 'Conservatory'
const diningRoom = 'Dining Room'
const cellar = 'Cellar'
const billiardRoom = 'Billiard Room'
const library = 'Library'
const lounge = 'Lounge'
const hall = 'Hall'
const study = 'Study'*/

// SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
  mrGreen,
  colonelMustard,
  mrsPeacock,
  peterPlum,
  missScarlet,
  mrsWhite,
]

const theSuspects = suspects.forEach((item) => {
  console.log(item)
})


const weapons = [
  candlestick,
  dagger,
  leadPipe,
  revolver,
  rope,
  wrench,
]

const theWeapons = weapons.forEach((item) => {
  console.log(item)
})


const rooms = [
  'kitchen',
  'ballroom',
  'conservatory',
  'diningRoom',
  'cellar',
  'billiardRoom',
  'library',
  'lounge',
  'hall',
  'study',
]

console.log(rooms)


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
