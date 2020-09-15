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

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a dignified and dangerous military man',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const msScarlett = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: 'red',
  description: 'She is a femme fatale.',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsWhite = {
  firstName: 'Diane',
  lastName: 'White',
  color: 'white',
  description: 'She is a dominant housekeeper.',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is an elegant and classy aristocrat.',
  age: 42,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a quick witted professor with a dubious past',
  age: 46,
  image: './assets/plum.png',
  occupation: 'Professor'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  image: './assets/rope.jpg'
}

const candlestick = {
  name: 'candlestick',
  weight: 25,
  image: './assets/candlestick.jpg'
}

const pistol = {
  name: 'pistol',
  weight: 15,
  image: './assets/revolver.jpg'
}

const knife = {
  name: 'knife',
  weight: 12,
  image: './assets/knife.jpg'
}

const piping = {
  name: 'piping',
  weight: 19,
  image: './assets/piping.jpg'
}

const wrench = {
  name: 'wrench',
  weight: 21,
  image: './assets/wrench.jpg'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  colMustard,
  msScarlett,
  mrsPeacock,
  profPlum,
]

const weapons = [
  rope,
  candlestick,
  pistol,
  knife,
  piping,
  wrench,
]
/*
const rooms = [
  kitchen,
  ballroom,
  conservatory,
  billiardRoom,
  library,
  study,
  hall,
  lounge,
  diningRoom,
];
*/
// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: '',
  weapon: '',
  room: '',
};



// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

document.getElementById('killerCard').addEventListener("click", pickKiller);
document.getElementById('weaponCard').addEventListener("click", pickWeapon);
document.getElementById('roomCard').addEventListener("click", pickRoom);
