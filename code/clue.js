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

const conoelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'An army veteran with blood on his hands',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Veteran'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacook',
  color: 'blue',
  description: 'A beautiful lady with dirty tricks up her sleeve',
  age: 42,
  image: 'assets/peacock.png',
  occupation: 'Art Gallery owner'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He has great knowledge of the world',
  age: 52,
  image: 'assets/plum.png',
  occupation: 'Professor in History'
}

const mrsWhite = {
  firstName: 'Veronica',
  lastName: 'White',
  color: 'white',
  description: 'Can hear a whisper from miles away',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Housemaid'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Never reveal here feelings or smiles',
  age: 34,
  image: 'assets/scarlet.png',
  occupation: 'actress'
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 2
}

const knife = {
  name: 'Knife',
  weight: 1

}

const candlestick = {
  name: 'Candlestick',
  weight: 2
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 20
}

const poison = {
  name: 'Poison',
  weight: 0.1
}

const axe = {
  name: 'Axe',
  weight: 13
}

const bat = {
  name: 'Bat',
  weight: 4
}

const trophy = {
  name: 'Trophy',
  weight: 8
}

const pistol = {
  name: 'Pistol',
  weight: 1
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  conoelMustard,
  mrsPeacock,
  msScarlet,
  professorPlum
];

const weapons = [
  pistol,
  trophy,
  bat,
  dumbbell,
  rope,
  knife,
  axe,
  poison,
  candlestick
];

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
  'Patio'
];


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: '',
  weapon: '',
  room: ''
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description} `
  document.getElementById('killerImage').src = `${mystery.killer.image}`
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapons = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapons.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapons.weight}`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapons.name} that weighted ${mystery.weapons.weight} kg. `
};