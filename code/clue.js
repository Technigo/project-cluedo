// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'A money-oriented businessman with a lot of connections in the mafia...',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const colMustard = {
  firstName: 'William',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dignified and dangerous military man. Also and big game hunter...',
  age: 72,
  image: 'assets/mustard.png',
  occupation: 'Military colonel'
}

const mrsPeacock = {
  firstName: 'Amelia',
  lastName: 'Peacock',
  color: 'pink',
  description: 'An dignified and beautiful grande dame. The richest woman in England. Her husbands all have died mysterious deaths...',
  age: 60,
  image: 'assets/peacock.png',
  occupation: 'Grande Dame'
}

const profPlum = {
  firstName: 'Oliver',
  lastName: 'Plum',
  color: 'purple',
  description: 'A quick-witted alchemy professor, maybe a little bit to interested in experimenting with different elixirs...',
  age: 46,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Eveline',
  lastName: 'Scarlett',
  color: 'red',
  description: 'An attractive, cunning and mysterious woman. A museum curator and also a master thief...',
  age: 35,
  image: 'assets/scarlett.png',
  occupation: 'Museum Curator'
}

const mrsWhite = {
  firstName: 'Charlotte',
  lastName: 'White',
  color: 'white',
  description: 'House Keeper at Scaryville Mansion. Knows every secret passage and dark corner of the house...',
  age: 73,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

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
