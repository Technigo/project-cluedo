// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const proessorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is good at lying',
  age: 29,
  image: 'assets/plum.png',
  occupation: 'Developer'
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is clever',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Nurse'
};

const mrsPeacock = {
  firstName: 'Elenor',
  lastName: 'Peacock',
  color: 'pink',
  description: 'She is fast',
  age: 42,
  image: 'assets/peacock.png',
  occupation: 'Police officer'
};
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'black',
  description: 'He is funny',
  age: 56,
  image: 'assets/mustard.png',
  occupation: 'Teacher'
};
const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She is fast',
  age: 33,
  image: 'assets/white.png',
  occupation: 'chef'
};
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: 'knife',
  weight: 100
}
const candelstick = {
  name: 'candelstick',
  weight: 200
}
const dumbbell = {
  name: 'dumbbell',
  weight: 300
}
const poison = {
  name: 'poison',
  weight: 2
}
const axe = {
  name: 'axe',
  weight: 400
}
const bat = {
  name: 'bat',
  weight: 110
}
const trophy = {
  name: 'trophy',
  weight: 500
}
const pistol = {
  name: 'pistol',
  weight: 150
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  proessorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]
console.log(suspects.toString())

const weapons = [
  rope,
  knife,
  candelstick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  'dining rooms',
  'conservatory',
  'kitchen',
  'study',
  'library',
  'billiard room',
  'lounge',
  'ballroom',
  'hall',
  'spa',
  'living room',
  'observatory',
  'theater',
  'guest house',
  'patio'
]
console.log(mrGreen.description) 
console.log(rope.name)
console.log(rooms.toString())
weapons.forEach((element) => console.log(element));


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