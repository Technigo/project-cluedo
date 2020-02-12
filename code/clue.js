// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He is very popular in the community.',
  age: 35,
  image: 'assets/green.png',
  occupation: 'Reverend'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a genious in the lab but awkward in the cab.',
  age: 62,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a maneater and knows what she wants.',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She knows a lot of secrets.',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a colonial imperialist and a dangerous military man.',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: "",
  lastName: 'White',
  color: 'white',
  description: 'She has been with the household for over 30 years.',
  age: 57,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 3,
  twoHanded: true
}

const knife = {
  name: 'knife',
  weight: 2,
  twoHanded: false
}

const candlestick = {
  name: 'Candlestick',
  weight: 5,
  twoHanded: false
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 10,
  twoHanded: false
}

const poison = {
  name: 'Poison',
  weight: 1,
  twoHanded: true
}

const axe = {
  name: 'Axe',
  weight: 8,
  twoHanded: true,
}

const bat = {
  name: 'Bat',
  weight: 2,
  twoHanded: true,
}

const trophy = {
  name: 'Trophy',
  weight: 4,
  twoHanded: false,
}

const pistol = {
  name: 'Pistol',
  weight: 1,
  twoHanded: false,
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  msScarlet,
  mrsPeacock,
  colMustard,
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
  pistol,
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

console.log(mrGreen.description)
console.log(rope.twoHanded)

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
