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
const proffessorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'Violet',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/plum.png',
  occupation: 'Entrepreneur'
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/scarlet.png',
  occupation: 'Entrepreneur'
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'purple',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Entrepreneur'
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'Yellow',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/mustard.png',
  occupation: 'Entrepreneur'
}
const mrsWhite = {
  firstName: 'mrs',
  lastName: 'white',
  color: 'white',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/white.png',
  occupation: 'Entrepreneur'
}



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 9
}
const candlestick = {
  name: 'candlestick',
  weight: 8
}
const dumbbell = {
  name: 'dumbbell',
  weight: 7
}
const poison = {
  name: 'poison',
  weight: 6
}
const axe = {
  name: 'axe',
  weight: 5
}
const bat = {
  name: 'bat',
  weight: 4
}
const trophy = {
  name: 'trophy',
  weight: 3
}
const pistol = {
  name: 'pistol',
  weight: 2
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. 

const theRooms = [
  'diningroom',
  'conservatory',
  'kitchen',
  'study',
  'library',
  'billiard',
  'lounge',
  'ballroom',
  'hall',
  'spa',
  'living',
  'observatory',
  'theater',
  'guestHouse',
  'patio'
]
console.log(mrsWhite.firstName)

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

// const suspects = [
//   mrGreen,
//   mrsWhite
// ]

// const weapons = []

// const rooms = []

// // THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// // YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
// const randomSelector = array => {
//   return array[Math.floor(Math.random() * array.length)]
// }

// // CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// // With a killer, a weapon and a room.
// // The values will be set later.

// // This function will be invoked when you click on the killer card.
// const pickKiller = () => {
//   // This will randomly select a killer from the suspects. And add that to the mystery object.
//   mystery.killer = randomSelector(suspects)

//   // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
//   document.getElementById('killerCard').style.background = mystery.killer.color
//   document.getElementById(
//     'killerName'
// //   ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}``


// // // CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
// // // STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// // // 'The murder was committed by Jacob Green, in the living room with a rope'