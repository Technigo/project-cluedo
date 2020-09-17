// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#557571',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'bat',
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#31112c',
  description: 'He is an excentric man',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'knife',
};
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#7d0633',
  description: 'She is a fortuneseeker',
  age: 27,
  image: 'assets/scarlet.png',
  occupation: 'Dancer',
  favouriteWeapon: 'trophy',
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#00416d',
  description: 'She is jealous and mean',
  age: 45,
  image: 'assets/peacock.png',
  occupation: 'Housewife',
  favouriteWeapon: 'rope',
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#c87941',
  description: 'He is senile and tired',
  age: 70,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'pistol',
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#dbcbbd',
  description: 'She is the grumpy old matriark',
  age: 85,
  image: 'assets/white.png',
  occupation: 'Retired',
  favouriteWeapon: 'candlestick',
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 2,
  id: 'rope',
};
const knife = {
  name: 'knife',
  weight: 1,
  id: 'knife',
};
const candlestick = {
  name: 'candlestick',
  weight: 5,
  id: 'candlestick',
};
const dumbbell = {
  name: 'dumbbell',
  weight: 20,
  id: 'dumbbell',
};
const poison = {
  name: 'poison',
  weight: 1,
  id: 'poison',
};
const axe = {
  name: 'axe',
  weight: 10,
  id: 'axe',
};
const bat = {
  name: 'bat',
  weight: 7,
  id: 'bat',
};
const trophy = {
  name: 'trophy',
  weight: 15,
  id: 'trophy',
};
const pistol = {
  name: 'pistol',
  weight: 5,
  id: 'pistol',
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
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
  pistol,
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
  'Patio',
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
let mystery = {
  killer: suspects,
  weapon: weapons,
  room: rooms,
};
//function to shuffle the suspects favourite weapon
const randomFavouriteWeapon = () => randomSelector(weapons);

//variables for the loading-animation and the changing headlines
const killerLoader = document.getElementById('load');
const weaponLoader = document.getElementById('load2');
const roomLoader = document.getElementById('load3');
const killerHeadLine = document.getElementById('killer-headline');
const weaponHeadLine = document.getElementById('weapon-headline');
const roomHeadLine = document.getElementById('room-headline');

//functions to show loaders and change the card-headline, before the information
const showKillerLoader = () => {
  killerHeadLine.innerHTML = 'Loading killer-information..';
  killerLoader.style.display = 'block';
};
const showWeaponLoader = () => {
  weaponHeadLine.innerHTML = 'Loading weapon-information..';
  weaponLoader.style.display = 'block';
};
const showRoomLoader = () => {
  roomHeadLine.innerHTML = 'Loading room..';
  roomLoader.style.display = 'block';
};
//function to show killer information
const killerInformation = () => {
  const killerCard = document.getElementById('killerCard');
  const killerName = document.getElementById('killerName');
  const killerImage = document.getElementById('killerImage');
  const killerAge = document.getElementById('killerAge');
  const killerOccupation = document.getElementById('killerOccupation');
  const killerDescription = document.getElementById('killerDescription');
  const killerFavouriteWeapon = document.getElementById(
    'killerFavouriteWeapon'
  );

  mystery.killer = randomSelector(suspects);
  killerLoader.style.display = 'none';
  killerHeadLine.innerHTML = 'Killer-information:';
  killerCard.style.background = mystery.killer.color;
  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerImage.src = mystery.killer.image;
  killerAge.innerHTML = `${mystery.killer.age} years old`;
  killerOccupation.innerHTML = `${mystery.killer.occupation}`;
  killerDescription.innerHTML = `${mystery.killer.description}`;
  killerFavouriteWeapon.innerHTML = `Favourite weapon: ${randomFavouriteWeapon.name}`;
};
//function to show weapon information
const weaponInformation = () => {
  const weaponName = document.getElementById('weaponName');
  const weaponWeight = document.getElementById('weaponWeight');

  mystery.weapon = randomSelector(weapons);
  weaponLoader.style.display = 'none';
  weaponHeadLine.innerHTML = 'Weapon-information';
  weaponName.innerHTML = `Weapon: ${mystery.weapon.name}`;
  weaponWeight.innerHTML = `Weapon weight: ${mystery.weapon.weight}`;
};
//function to show the weapon information
const roomInformation = () => {
  const roomName = document.getElementById('roomName');

  mystery.room = randomSelector(rooms);
  roomLoader.style.display = 'none';
  roomHeadLine.innerHTML = 'Room:';
  roomName.innerHTML = `${mystery.room}`;
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  showKillerLoader();
  setTimeout(killerInformation, 4000);
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  showWeaponLoader();
  setTimeout(weaponInformation, 4000);
};

const pickRoom = () => {
  showRoomLoader();
  setTimeout(roomInformation, 4000);
};

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;

//The first that shows on the cards
killerHeadLine.innerHTML = 'Pick a killer';
weaponHeadLine.innerHTML = 'Pick a weapon';
roomHeadLine.innerHTML = 'Pick a room';

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const mysteryRevealed = document.getElementById('mystery');
  const revealButton = document.getElementById('revealButton');

  mysteryRevealed.innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}.`;
  revealButton.onclick = revealMystery;
};
