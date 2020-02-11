// STEP 1 - OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'A quick-witted, young professor with a bow tie and glasses',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'scarlet',
  description: ' A stock femme fatale; young, cunning and attractive',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'CEO'
}

const mrsPeacock = {     
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: ' A grande dame; an elderly, still-attractive woman who nearly always maintains her dignity.',
  age: 72,
  image: 'assets/peacock.png',
  occupation: 'Carpenter'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustartd',
  color: 'yellow',
  description: 'A stock great white hunter and colonial imperialist, he is usually a dignified, dapper and dangerous military man.',
  age: 61,
  image: 'assets/plum.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Margreth',
  lastName: 'White',
  color: 'white',
  description: 'The maid, that lives in the mansion',
  age: 70,
  image: 'assets/white.png',
  occupation: '	Housekeeper'
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
  name: 'candelstick',
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
  weight: 6
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = []

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
