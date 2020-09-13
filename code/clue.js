// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const profPlum = {
  firstName: 'Professor Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He is an intellectual and quick wittted scholar',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'University Professor'
};

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A vivacious woman who knows what she wants',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'purple',
  description: 'A grand dame who maintains her dignity',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
};

const colMustard = {
  firstName: 'Colonel Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dapper colonial imperalist and dangerous military man',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A two-faced servant who smiles politely but sneers behind the back',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
};

// CREATE OBJECTS FOR ALL THE WEAPONS:

const rope = {
  name: 'Rope',
  weight: 5,
  damage: 2
};

const knife = {
  name: 'Knife',
  weight: 3,
  damage: 9
};

const candlestick = {
  name: 'Candlestick',
  weight: 8,
  damage: 5
};

const dumbbell = {
  name: 'Dumbbell',
  weight: 10,
  damage: 8
};

const poison = {
  name: 'Poison',
  weight: 1,
  damage: 10
};

const axe = {
  name: 'Axe',
  weight: 7,
  damage: 9
};

const bat = {
  name: 'Bat',
  weight: 5,
  damage: 8
};

const trophy = {
  name: 'Trophy',
  weight: 7,
  damage: 5
};

const pistol = {
  name: 'Pistol',
  weight: 2,
  damage: 9
};

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  msScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite
];

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
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
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
