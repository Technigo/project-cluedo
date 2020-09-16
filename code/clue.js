// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

//OBJECTS 
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
  color: 'pink',
  description: 'He wears sunglasses',
  age: 37,
  image: 'assets/pink.png',
  occupation: 'Project Manager' 
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She always watches instagram',
  age: 25,
  image: 'assets/red.png',
  occupation: 'Influencer' 
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'black',
  description: 'he is always late',
  age: 48,
  image: 'assets/black.png',
  occupation: 'lawyer' 
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'lila',
  description: 'She always picks up packages',
  age: 55,
  image: 'assets/lila.png',
  occupation: 'Doctor' 
}
const mrsWhite = {
  firstName: 'Ana',
  lastName: 'White',
  color: 'White',
  description: 'she is always one step behind you',
  age: 35,
  image: 'assets/white.png',
  occupation: 'garderner' 
}

console.log(mrGreen.description)

const weapons = [
'rope',
'knife',
'candlestick', 
'dumbbell', 
'poison', 
'axe', 
'bat',
'throphy', 
'pistol' 
]

console.log(weapons[3])

const rooms = [
'Dining Room', 
'Conservatory', 
'Kitchen', 
'Study', 
'Library', 
'Billiard Room', 
'Lounge', 
'Ballroom', 
'Hall', 
'Spa', 
'Living Room', 
'Observatory', 
'Theater', 
'Guest House', 
'Patio'];

console.log(rooms[5])

// Group OBJECTS (just suspects because i choosed to no give the weapons a discirption (not at least in this point)

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  colonelMustard,
  mrsPeacock,
  mrsWhite
]

console.log(suspects[5].description, weapons[3], rooms[2])


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
