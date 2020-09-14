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
const mrMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is good at weapons',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Hunter'
}
const mrsPeacock = {
  firstName: 'Lena',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She has a lot of money',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Rich Mama'
}
const professorPlum = {
  firstName: 'Lennart',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a genius',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Genius'
}
const missScarlet = {
  firstName: 'Scarlet',
  lastName: 'Johansson',
  color: 'red',
  description: 'She is beautiful',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: 'Beauty'
}
const mrsWhite = {
  firstName: 'Edna',
  lastName: 'White',
  color: 'white',
  description: 'She knows everything',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Know it all'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 5
}
const gun = {
  name: 'gun',
  weight: 40
}
const knife = {
  name: 'knife',
  weight: 20
}
const wrench = {
  name: 'wrench',
  weight: 50
}
const candlestick = {
  name: 'candlestick',
  weight: 30
}
const pipe = {
  name: 'pipe',
  weight: 10
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  professorPlum,
  missScarlet,
  mrsWhite
]

const weapons = [
  rope,
  gun,
  knife,
  wrench,
  candlestick,
  pipe
]

const rooms = [
  hall,
  lounge,
  study,
  library,
  kitchen,
  ballroom
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const crime = {
  
}

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
