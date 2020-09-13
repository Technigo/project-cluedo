// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'pistol'
};

const profPlum = {
  firstName: 'Professor Victor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He is an intellectual and quick wittted scholar',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'University Professor',
  favouriteWeapon: 'poison'
};

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A vivacious woman who knows what she wants',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'rope'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'purple',
  description: 'A grand dame who maintains her dignity',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'candlestick'
};

const colMustard = {
  firstName: 'Colonel Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dapper colonial imperalist and dangerous military man',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'dumbbell'
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A two-faced servant who smiles politely but sneers behind the back',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'knife'
};

// CREATE OBJECTS FOR ALL THE WEAPONS:

const rope = {
  name: 'Rope',
  weight: 5,
  damage: 2,
  image: 'assets/rope.png',
  id: 'rope'
};

const knife = {
  name: 'Knife',
  weight: 3,
  damage: 9,
  image: 'assets/knife.png',
  id: 'knife'
};

const candlestick = {
  name: 'Candlestick',
  weight: 8,
  damage: 5,
  image: 'assets/candlestick.png',
  id: 'candlestick'
};

const dumbbell = {
  name: 'Dumbbell',
  weight: 10,
  damage: 8,
  image: 'assets/dumbbell.png',
  id: 'dumbbell'
};

const poison = {
  name: 'Poison',
  weight: 1,
  damage: 10,
  image: 'assets/poison.png',
  id: 'poison'
};

const axe = {
  name: 'Axe',
  weight: 7,
  damage: 9,
  image: 'assets/axe.png',
  id: 'axe'
};

const bat = {
  name: 'Bat',
  weight: 5,
  damage: 8,
  image: 'assets/bat.png',
  id: 'bat'
};

const trophy = {
  name: 'Trophy',
  weight: 7,
  damage: 5,
  image: 'assets/trophy.png',
  id: 'trophy'
};

const pistol = {
  name: 'Pistol',
  weight: 2,
  damage: 9,
  image: 'assets/pistol.png',
  id: 'pistol'
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION:
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// OBJECT THAT KEEPS THE MYSTERY:
const mystery = {
  // The values will be set later after running the pickKiller, pickWeapon and pickRoom functions
};

// PICK KILLER FUNCTION - This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.

  if(mystery.killer === undefined) { //To check if card has been clicked already or not
    mystery.killer = randomSelector(suspects);
    mystery.killer.favouriteWeapon = randomSelector(weapons); //Randomly chooses killer's favorite weapon

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
    document.getElementById('killerCard').style.background = mystery.killer.color;
    document.getElementById('killerName').innerHTML = `Full name: ${mystery.killer.firstName} ${mystery.killer.lastName}`;
    document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`;
    document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`;
    document.getElementById('killerImage').src = `${mystery.killer.image}`;
    document.getElementById('killerDescription').innerHTML = `Description: ${mystery.killer.description}`;
    document.getElementById('killerFavWeapon').innerHTML = `Favourite Weapon: ${mystery.killer.favouriteWeapon.name}`; //Display killer's fav weapon on HTML
  }
};

// PICK WEAPON FUNCTION - This function will be invoked when you click on the weapon card.
const pickWeapon = () => {

  if(mystery.weapon === undefined) { //To check if card has been clicked already or not
  mystery.weapon = randomSelector(weapons);

  document.getElementById('weaponName').innerHTML = `Weapon name: ${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `Weapon weight: ${mystery.weapon.weight}`;
  document.getElementById('weaponDamage').innerHTML = `Weapon damage: ${mystery.weapon.damage}`;
  document.getElementById('weaponImage').src = `${mystery.weapon.image}`;
  }
};

// PICK ROOM FUNCTION - This function will be invoked when you click on the room card.
const pickRoom = () => {

  if(mystery.room === undefined) { //To check if card has been clicked already or not
  mystery.room = randomSelector(rooms);

  document.getElementById('roomName').innerHTML = `Room name: ${mystery.room}`;
  }
};

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
  document.getElementById('restartButton').style.display = 'block';
};

// Function to Restart the game
const restart = () => {
  document.location.href = "";
}