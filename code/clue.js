
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'brown',
  description: '',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'axe'
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'blue',
  description: '',
  age: 26,
  image: 'assets/scarlet.png',
  occupation: 'model',
  favouriteWeapon: 'bat'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: '',
  age: 53,
  image: 'assets/peacock.png',
  occupation: 'Real Estate Agents',
  favouriteWeapon: 'trophy'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'grey',
  description: '',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Pilot',
  favouriteWeapon: 'poison'
};

const mrsWhite = {
  firstName: '?',
  lastName: 'White',
  color: 'green',
  description: '',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Maid',
  favouriteWeapon: 'pistol'
};


const rope = {
  name: 'Rope',
  weight: 10,
  id: 'rope'
};

const knife = {
  name: 'Knife',
  weight: 8,
  id: 'knife'
};

const candlestick = {
  name: 'Candlestick',
  weight: 3,
  id: 'candlestick'
};

const dumbbel = {
  name: 'Dumbbel',
  weight: 15,
  id: 'dumbbel'
};

const poison = {
  name: 'Poison',
  weight: 1,
  id: 'poison'
};

const axe = {
  name: 'Axe',
  weight: 10,
  id: 'axe'
};

const bat = {
  name: 'Bat',
  weight: 15,
  id: 'bat'
};

const trophy = {
  name: 'Trophy',
  weight: 7,
  id: 'trophy'
};

const pistol = {
  name: 'Pistol',
  weight: 9,
  id: 'pistol'
};


const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite 
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbel,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  "Dining Room", 
  "Conservatory", 
  "Kitchen", 
  "Study", 
  "Library", 
  "Billiard Room", 
  "Lounge", 
  "Ballroom", 
  "Hall", 
  "Spa", 
  "Living Room", 
  "Observatory", 
  "Theater", 
  "Guest House", 
  "Patio"
]


const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const shuffleFavouriteWeapon = (arrayOfSuspects) => {
  arrayOfSuspects.forEach(suspect => {
    suspect.favouriteWeapon = randomSelector(weapons);
  });
};

shuffleFavouriteWeapon(suspects);

const killerLoading =  document.getElementById('killerLoading');
const weaponLoading = document.getElementById('weaponLoading');
const roomLoading = document.getElementById('roomLoading');

const killerCard = document.getElementById('killerCard');
const weaponCard = document.getElementById('weaponCard');
const roomCard = document.getElementById('roomCard');

const killerInfo = document.getElementById('killerInfo');
const weaponInfo = document.getElementById('weaponInfo');
const roomInfo = document.getElementById('roomInfo');

let mystery = {};


const showKillerLoading = () => {
  killerLoading.style.display = 'inline-block';
  killerInfo.style.display = 'none';
  setTimeout(pickKiller, 1000);
};

const showWeaponLoading = () => {
  weaponLoading.style.display = 'inline-block';
  weaponInfo.style.display = 'none';
  setTimeout(pickWeapon, 1000);
};

const showRoomLoading = () => {
  roomLoading.style.display = 'inline-block';
  roomInfo.style.display = 'none';
  setTimeout(pickRoom, 1000);
};

killerCard.onclick = showKillerLoading;
weaponCard.onclick = showWeaponLoading;
roomCard.onclick = showRoomLoading;



const pickKiller = () => {
  killerLoading.style.display = 'none';
  killerInfo.style.display = 'block';
  mystery.killer = randomSelector(suspects)

  document.getElementById(
    'killerName'
  ).innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`

  document.getElementById(
    'killerAge'
  ).innerHTML = `Age: ${mystery.killer.age}`

  document.getElementById(
    'favoriteWeapon'
  ).innerHTML = `Favorite weapon: ${mystery.killer.favouriteWeapon.name}`

  document.getElementById(
    'killerImage'
  ).src = mystery.killer.image;


};


const pickWeapon = () => {
  weaponLoading.style.display = 'none';
  weaponInfo.style.display = 'block';
  mystery.weapon = randomSelector(weapons)

  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
  document.getElementById(
    'weaponWeight'
  ).innerHTML = `Weight: ${mystery.weapon.weight}`

};


const pickRoom = () => {
  roomLoading.style.display = 'none';
  roomInfo.style.display = 'block';
  mystery.room = randomSelector(rooms)

  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
};


const revealMystery = () => {
  document.getElementById(
    'revealText'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
};
document.getElementById('reveal').onclick = revealMystery;




