
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife',
  weapon: null
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'brown',
  description: '',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'axe',
  weapon: null
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'blue',
  description: '',
  age: 26,
  image: 'assets/scarlet.png',
  occupation: 'model',
  favouriteWeapon: 'bat',
  weapon: null
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: '',
  age: 53,
  image: 'assets/peacock.png',
  occupation: 'Real Estate Agents',
  favouriteWeapon: 'trophy',
  weapon: null
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'grey',
  description: '',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Pilot',
  favouriteWeapon: 'poison',
  weapon: null
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'green',
  description: '',
  age: 68,
  image: 'assets/white.png',
  occupation: 'Maid',
  favouriteWeapon: 'pistol',
  weapon: null
};


const rope = {
  name: 'Rope',
  weight: 10,
  id: 'rope',
  favoritePlace: 'Conservatory',
  place: null
};

const knife = {
  name: 'Knife',
  weight: 8,
  id: 'knife',
  favoritePlace: 'Kitchen',
  place: null
};

const candlestick = {
  name: 'Candlestick',
  weight: 3,
  id: 'candlestick',
  favoritePlace: 'Living Room',
  place: null
};

const dumbbel = {
  name: 'Dumbbel',
  weight: 15,
  id: 'dumbbel',
  favoritePlace: 'Spa',
  place: null

};

const poison = {
  name: 'Poison',
  weight: 1,
  id: 'poison',
  favoritePlace: 'Dining Room',
  place: null
};

const axe = {
  name: 'Axe',
  weight: 10,
  id: 'axe',
  favoritePlace: 'Patio',
  place: null
};

const bat = {
  name: 'Bat',
  weight: 15,
  id: 'bat',
  favoritePlace: 'Billiard Room',
  place: null
};

const trophy = {
  name: 'Trophy',
  weight: 7,
  id: 'trophy',
  favoritePlace: 'Library',
  place: null
};

const pistol = {
  name: 'Pistol',
  weight: 9,
  id: 'pistol',
  favoritePlace: 'Study',
  place: null
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
]

// returns the provided suspects favourite weapon as a weapon obj
const favoriteWeapon = (suspect) => {
  return weapons.find((weapon) => {return weapon.id === suspect.favouriteWeapon});
}

 
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const shuffleWeapon = (arrayOfSuspects) => {
  arrayOfSuspects.forEach(suspect => {
    const suspectFavoriteWeapon = favoriteWeapon(suspect)
    const favoriteArray = [
        ...weapons,
        suspectFavoriteWeapon,
        suspectFavoriteWeapon,
        suspectFavoriteWeapon,
        suspectFavoriteWeapon,
        suspectFavoriteWeapon   
    ];
    suspect.weapon = randomSelector(favoriteArray);
  });
};

const shuffleRoom = (arrayOfweapons) => {
  arrayOfweapons.forEach(weapon => {
    const favoritePlace = [
      ...rooms,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace,
      weapon.favoritePlace
    ];
    weapon.place = randomSelector(favoritePlace);
  });
};



const killerLoading =  document.getElementById('killerLoading');
const weaponLoading = document.getElementById('weaponLoading');
const roomLoading = document.getElementById('roomLoading');

const killerCard = document.getElementById('killerCard');
const weaponCard = document.getElementById('weaponCard');
const roomCard = document.getElementById('roomCard');

const killerInfo = document.getElementById('killerInfo');
const weaponInfo = document.getElementById('weaponInfo');
const roomInfo = document.getElementById('roomInfo');

let mystery = {
  killer: null,
  weapon: null,
  room: null
};


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
  ).innerHTML = `<strong>Name:</strong>  ${mystery.killer.firstName} ${mystery.killer.lastName}`

  document.getElementById(
    'killerAge'
  ).innerHTML = `<strong>Age:</strong>  ${mystery.killer.age}`

  document.getElementById(
    'favoriteWeapon'
  ).innerHTML = `<strong>Favorite weapon:</strong>  ${favoriteWeapon(mystery.killer).name}`

  document.getElementById(
    'killerImage'
  ).src = mystery.killer.image;


};


const pickWeapon = () => {
  weaponLoading.style.display = 'none';
  weaponInfo.style.display = 'block';
  shuffleWeapon(suspects);
  mystery.weapon = mystery.killer.weapon;

  console.log(mystery.weapon);

  document.getElementById(
    'weaponName'
  ).innerHTML = `${mystery.weapon.name}`
  document.getElementById(
    'weaponWeight'
  ).innerHTML = `<strong> Weight: </strong> ${favoriteWeapon(mystery.killer).weight}`

};


const pickRoom = () => {
  roomLoading.style.display = 'none';
  roomInfo.style.display = 'block';
  shuffleRoom(weapons);
  mystery.room = mystery.weapon.place;

  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
};


const revealValdidation = () => {
  if (mystery.killer === null || mystery.weapon === null || mystery.room === null) {
    document.getElementById(
      'mystery'
    ).innerHTML = `Pick all three cards.`; 
  } else {
    revealMystery();
  }
}; document.getElementById('reveal').onclick = revealValdidation;

const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
};

//reset
const resetCards = () => {
  let mystery = {
    killer: null,
    weapon: null,
    room: null
  };
} ; document.getElementById('reset').onclick = resetCards;

// on load






