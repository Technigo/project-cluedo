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

const professorPlum  = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'bla bla bla ',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'People always underestimate her, they dont know her occupation',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Undercover spy'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is very rich',
  age: 43,
  image: 'assets/peacock.png',
  occupation: 'Interior Designer'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'loves the military',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Retired'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She became a widower and got her freedom back',
  age: 63,
  image: 'assets/white.png',
  occupation: 'travles the world'
}

//console log test 
console.log(mrsWhite.description) 




// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 6,
  color:'brown'
}

const knife = {
  name: 'knife',
  weight: 5,
  color:'dark grey'
}

const candleStick = {
  name: 'candlestick',
  weight: 6,
  color:'rosegold'
}

const dumbBell = {
  name: 'dumbbell',
  weight: 10,
  color:'grey'
}

const poision = {
  name: 'poision',
  weight: 3,
  color:'green'
}

const axe = {
  name: 'axe',
  weight: 10,
  color:'silver'
}

const bat = {
  name: 'bat',
  weight: 7,
  color:'wood'
}

const trophy = {
  name: 'trophy',
  weight: 9,
  color:'gold'
}

const pistol = {
  name: 'pistol',
  weight: 8, 
  color: 'black'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
]

const weapons = [
rope, 
knife, 
candleStick,
dumbBell,
poision,
axe,
bat,
trophy, 
pistol,
]

const rooms = [
  'Dining room',
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
  'Patio',  
]


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
