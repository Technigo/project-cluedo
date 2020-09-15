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
  color: 'violet',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/plum.png',
  occupation: 'Professor'
}
  const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/scarlet.png',
  occupation: 'Doktor'
}
  const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Frontend developer'
}
const ColonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/mustard.png',
  occupation: 'Chef'
}
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/white.png',
  occupation: 'Headmaster'
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const Rope = {
  name: 'Rope',
  weight: 10
}
const Knife = {
  name: 'Knife',
  weight: 1
}
const Candlestick = {
  name: 'Candlestick',
  weight: 15
}
const Dumbbell = {
  name: 'Dumbbell',
  weight: 30
}
const Poison = {
  name: 'Poison',
  weight: 3
}
const Axe = {
  name: 'Axe',
  weight: 16
}
const Bat = {
  name: 'Bat',
  weight: 9
}
const Trophy = {
  name: 'Trophy',
  weight: 50
}
const Pistol = {
  name: 'Pistol',
  weight: 8
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
// dessa har jag klistrat in själv
// Dining Room, Conservatory, Kitchen, Study, Library, Billiard Room, Lounge, Ballroom, Hall, Spa, Living Room, Observatory, Theater, Guest House, Patio 

// ARRAY SUSPECTS
const suspects = [
  mrGreen, mrsWhite, professorPlum, missScarlet, mrsPeacock, ColonelMustard, 
]

// ARRAY WEAPONS 
const weapons = [
   Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol
]

// // ARRAY ROOMS  ------fortsätt med rooms =)
// const rooms = [ 
//   Dining Room, Conservatory, Kitchen, Study, Library, Billiard Room, Lounge, Ballroom, Hall, Spa, Living Room, Observatory, Theater, Guest House, Patio 
// ]

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
