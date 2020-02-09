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

const mrsWhite = {
  firstName: 'Grace',
  lastName: 'White',
  color: 'white',
  description: 'She is wealthy',
  age: 82,
  image: 'assets/white.png',
  occupation: 'Housewife'
}

const mrMustard = {
  firstName: 'James',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is not who you think he is',
  age: 59,
  image: 'assets/mustard.png',
  occupation: 'Captain'
}

const msPeacock = {
  firstName: 'Jane',
  lastName: 'Peacock',
  color: 'light green',
  description: 'She talkes a lot',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Shop owner'

}

const drPlum = {
  firstName: 'Christopher',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is afraid of the dark',
  age: 53,
  image: 'assets/plum.png',
  occupation: 'Medical doctor'
}

const msScarlet = {
  firstName: 'Rita',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a master of seduction',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Dancer'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 50
}

const poison = {
  name: 'poison'
  weight: 15
}

const axe = {
  name: 'axe'
  weight: 70
}

const plasticBag = {
  name: 'plastic bag'
  weight: 4
}

const machete = {
  name: 'machete'
  weight: 65
}



// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  mrMustard,
  msPeacock,
  drPlum,
  msScarlet
]

const weapons = [
  rope,
  knife,
  poison,
  axe,
  plasticBag,
  machete
]

const rooms = [
  kitchen,
  livingroom,
  hallway,
  bathroom,
  basement,
  bedroom
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
