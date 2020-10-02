//variables to prevent clicking cards in wrong order. 
let isKillerPicked = false;
let isWeaponPicked = false;
let isRoomPicked = false; 

//objects for suspects
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#008000',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'rope' 
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#8B008B', 
  description: 'He is a nuclear specialist',
  age: 84,
  image: 'assets/plum.png',
  occupation: 'Retired',
  favouriteWeapon: 'pistol' 
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#DC143C', 
  description: 'She is a specialist in freelance espionage',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'knife'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#0000CD', 
  description: 'She always maintains her dignity',
  age: 57,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'candlestick' 
};

const colonelMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: '#FCE38E', 
  description: 'He is a great hunter',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'axe' 
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#FFFAF0	', 
  description: 'Loyal and confidant',
  age: 72,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'posion' 
};

//objects for weapons
const rope = {
  name: 'rope',
  weight: 10,
  article: 'a',
  id: 'rope',
  foundIn: 'guestHouse'
};

const knife = {
  name: 'knife',
  weight: 7,
  article: 'a',
  id: 'knife',
  foundIn: 'kitchen'
};

const candelstick = {
  name: 'candelstick',
  weight: 12,
  article: 'a',
  id: 'candelstick',
  foundIn: 'hall'
};

const dumbbell = {
  name: 'dumbbell',
  weight: 24,
  article: 'a',
  id: 'dumbbell',
  foundIn: 'spa'
};

const poison = {
  name: 'poison',
  weight: 1,
  article: '',
  id: 'poison',
  foundIn: 'library'
};

const axe = {
  name: 'axe',
  weight: 17,
  article: 'an',
  id: 'axe',
  foundIn: 'patio'
};

const bat = {
  name: 'bat',
  weight: 4,
  article: 'a',
  id: 'bat',
  foundIn: 'billiardRoom'
};

const trophy = {
  name: 'trophy',
  weight: 29,
  article: 'a',
  id: 'trophy',
  foundIn: 'livingRoom'
};

const pistol = {
  name: 'pistol',
  weight: 11,
  article: 'a',
  id: 'pistol',
  foundIn: 'lounge'
};

//objects for rooms
const diningRoom = {
  name: 'dining Room',
  id: 'diningRoom'
};

const conservatory = {
  name: 'conservatory',
  id: 'conservatory'
};

const kitchen = {
  name: 'kitchen',
  id: 'kitchen'
};

const study = {
  name: 'study',
  id: 'study'
};

const library = {
  name: 'library',
  id: 'library'
};

const billiardRoom = {
  name: 'billiard Room',
  id: 'billiardRoom'
};

const lounge = {
  name: 'lounge',
  id: 'lounge'
};

const ballroom = {
  name: 'ballroom',
  id: 'ballroom'
};

const hall = {
  name: 'hall',
  id: 'hall'
};

const spa = {
  name: 'spa',
  id: 'spa'
};

const livingRoom = {
  name: 'living Room',
  id: 'livingRoom'
};

const observatory = {
  name: 'observatory',
  id: 'observatory'
};

const theater = {
  name: 'theater',
  id: 'theater'
};

const guestHouse = {
  name: 'guest House',
  id: 'guestHouse'
};

const patio = {
  name: 'patio',
  id: 'patio'
};
 
const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

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
];

const rooms = [
  diningRoom, 
  conservatory, 
  kitchen, 
  study, 
  library, 
  billiardRoom, 
  lounge, 
  ballroom, 
  hall, 
  spa, 
  livingRoom, 
  observatory, 
  theater, 
  guestHouse, 
  patio
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

//object that keeps mystery 
const mystery = {
  killer: null,
  weapon: null,
  room: null
};

// This function will be invoked when you click the killer card.
const pickKiller = () => {
  if (!isKillerPicked) {
    document.getElementById('loaderKiller').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('loaderKiller').style.opacity = 0;
      shuffleFavoriteWeapon();
      mystery.killer = randomSelector(suspects);
      document.getElementById('killerName').style.background = mystery.killer.color;
      document.getElementById(
        'killerName'
      ).innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`;
      document.getElementById('killerAge').innerHTML = (`Age: ${mystery.killer.age}`);
      document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`;
      document.getElementById('killerDescription').innerHTML = `Descripton: ${mystery.killer.description}`;
      document.getElementById('killerFavouriteWeapon').innerHTML = `Preferred weapon: ${mystery.killer.favouriteWeapon}`; //red level to check that the fav-weap changes by using function "shuffleFavouriteWeapon"
      document.getElementById('killerImage').src = mystery.killer.image;
      document.getElementById('killerImage').style.opacity = 1;
      isKillerPicked = true;
    }, 2500);
  };
};

// This function will be invoked when you click the weapon card.
const pickWeapon = () => {
  if (isKillerPicked && !isWeaponPicked) {
    document.getElementById('loaderWeapon').style.opacity = 1;
    setTimeout(() => {
      document.getElementById('loaderWeapon').style.opacity = 0;
      let chanceFavWeapon = chanceOfFavouriteWeapon();
      mystery.weapon = randomSelector(chanceFavWeapon);
      document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`;
      document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`;
      isWeaponPicked = true;
    }, 2500);
  }else alert('Found out who the killer is first');
};

//This function will be invoked when you click  the room card.
const pickRoom = () => {
  if (isWeaponPicked && !isRoomPicked) {
    document.getElementById('loaderRoom').style.opacity = 1;
    setTimeout(() => { 
      document.getElementById('loaderRoom').style.opacity = 0;
      let chanceForSuspectedRoom = chanceOfRoom();
      mystery.room = randomSelector(chanceForSuspectedRoom);
      document.getElementById('roomName').innerHTML = `Where murder was commited: ${mystery.room.name}`;
      roomsIsPicked = true;
    },2500);
  } else alert('Look at the other cards first!');
};

//select a random weapon from the weapons array and assigns it to suspects favouriteWeapon. 
const shuffleFavoriteWeapon = () => {
  suspects.forEach(suspect => {
    let randomWeapon = randomSelector(weapons).id;
    suspect.favouriteWeapon = randomWeapon;
  });
};

//function to increase the probabilty of favourite weapon to be picked. 
const chanceOfFavouriteWeapon = () => {
  const favWeapon = weapons.find(weapon => weapon.id === mystery.killer.favouriteWeapon);
  const favWeaponArray = new Array(7).fill(favWeapon);
  const calculatedWeapon = [...weapons, ...favWeaponArray];
  return calculatedWeapon;
};

//function to increase the probability that the room is picked where weapon was found.
const chanceOfRoom = () => {
  const suspectedRoom = rooms.find(room => room.name === mystery.weapon.foundIn);
  const suspectedRoomArray = new Array(7).fill(suspectedRoom);
  const calculatedRooms = [...rooms, ...suspectedRoomArray];
  return calculatedRooms;
};

//revealMystery  will be invoked when you click the 'reveal the crime' button.
const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    document.getElementById('mystery').innerHTML = `No mystery has been solved`;
    } else {
      let killer = mystery.killer.firstName + " " + mystery.killer.lastName;
      let weapon = mystery.weapon.article + " " + mystery.weapon.name;
      let room = mystery.room.name;
    document.getElementById('mystery').innerHTML = `The murder was comitted by ${killer} using ${weapon} in the ${room}!`; 
    };
};

//Function will be invoked when you click 'resume game' button
const restartGame = () => {
  let confirmation = confirm(`Click OK if you want to restart the game?`);
  if (confirmation) {location.reload()};
};