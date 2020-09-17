// Objects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife',
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He fancies beautiful women',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Psychiatrist',
  favouriteWeapon: 'dumbbell',
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a femme fatale',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Escort girl',
  favouriteWeapon: 'poison',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is a former miss USA',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Teacher',
  favouriteWeapon: 'trophy',
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a colonial imperialist',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Retired soldier',
  favouriteWeapon: 'pistol',
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She works at a prestigious restaurant',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Waitress',
  favouriteWeapon: 'candlestick',
}

const rope = {
  name: 'rope',
  weight: 10,
  id: 'rope',
}

const knife = {
  name: 'knife',
  weight: 5,
  id: 'knife',
}

const candlestick = {
  name: 'candlestick',
  weight: 20,
  id: 'candlestick',
}

const dumbbell = {
  name: 'dumbbell',
  weight: 50,
  id: 'dumbbell',
}

const poison = {
  name: 'poison',
  weight: 4,
  id: 'poison',
}

const axe = {
  name: 'axe',
  weight: 30,
  id: 'axe',
}

const bat = {
  name: 'bat',
  weight: 25,
  id: 'bat',
}

const trophy = {
  name: 'trophy',
  weight: 15,
  id: 'trophy',
}

const pistol = {
  name: 'pistol',
  weight: 16,
  id: 'pistol',
}

const diningRoom = 'Dining Room'

const conservatory = 'Conservatory'

const kitchen = 'Kitchen'

const study = 'Study'

const library = 'Library'

const billiardRoom = 'Billiard Room'

const lounge = 'Lounge'

const ballroom = 'Ballroom'

const hall = 'Hall'

const spa = 'Spa'

const livingRoom = 'Living Room'

const observatory = 'Observatory'

const theater = 'Theater'

const guestHouse = 'Guest House'

const patio = 'Patio'

// Arrays

const suspects = [
  mrGreen,
  profPlum,
  msScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite
]

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
]

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
]

// Variables

const killerCard = document.getElementById('killerCard');
const killerName = document.getElementById('killerName');
const killerAge = document.getElementById('killerAge');
const killerOccupation = document.getElementById('killerOccupation');
const killerImage = document.getElementById('killerImage');
const killerDescription = document.getElementById('killerDescription');
const killerFavouriteWeapon = document.getElementById('killerFavouriteWeapon');
const weaponCard = document.getElementById('weaponCard');
const weaponName = document.getElementById('weaponName');
const weaponWeight = document.getElementById('weaponWeight');
const roomCard = document.getElementById('roomCard');
const roomName = document.getElementById('roomName');
const revealedMystery = document.getElementById('mystery');
const revealButton = document.getElementById('revealButton');
const resetButton = document.getElementById('resetButton');
const shuffleButton = document.getElementById('shuffleButton');
const killerLoader = document.getElementById('killerLoader');
const weaponLoader = document.getElementById('weaponLoader');
const roomLoader = document.getElementById('roomLoader');

// Shuffle function

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Mystery storage

const mystery = {
  killer: '',
  weapon: '',
  room: '',
};

// Actions related to Killer deck

const killerAnimation = () => {
  killerLoader.style.display = "block";
  setTimeout(pickKiller, 2000);
  killerCard.style.background = "#000";
  killerName.innerHTML = '';
  killerAge.innerHTML = '';
  killerOccupation.innerHTML = '';
  killerDescription.innerHTML = '';
  killerFavouriteWeapon.innerHTML = '';
  killerImage.src = '';
};

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  killerLoader.style.display = "none";
  killerCard.style.background = mystery.killer.color;
  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerAge.innerHTML = mystery.killer.age;
  killerOccupation.innerHTML = mystery.killer.occupation;
  killerDescription.innerHTML = mystery.killer.description;
  killerFavouriteWeapon.innerHTML = mystery.killer.favouriteWeapon;
  killerImage.src = mystery.killer.image;
};

killerCard.onclick = killerAnimation;

// Actions related to Weapon deck

const weaponAnimation = () => {
  weaponLoader.style.display = "block";
  setTimeout(pickWeapon, 2000);
  weaponName.innerHTML = '';
  weaponWeight.innerHTML = '';
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  weaponLoader.style.display = "none";
  weaponName.innerHTML = mystery.weapon.name;
  weaponWeight.innerHTML = mystery.weapon.weight;
};

weaponCard.onclick = weaponAnimation;

// Actions related to Room deck

const roomAnimation = () => {
  roomLoader.style.display = "block";
  setTimeout(pickRoom, 2000);
  roomName.innerHTML = '';
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  roomLoader.style.display = "none";
  roomName.innerHTML = mystery.room;
};

roomCard.onclick = roomAnimation;

// Functions related to revelation of mystery 

const revealMystery = () => {
  if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '') {
    revealedMystery.innerHTML = ('Make sure you have picked a killer, a weapon and a room!');
  } else {
    revealedMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}.`);
  }
};

const resetMystery = () => {
  location.reload();
};

// This function will change favourite weapons of each person

const shuffleFavouriteWeapon = () => {
  suspects.forEach((item) => {
    item.favouriteWeapon = randomSelector(weapons).name;
  });
  killerFavouriteWeapon.innerHTML = mystery.killer.favouriteWeapon;
};

// Buttons

revealButton.onclick = revealMystery;
resetButton.onclick = resetMystery;
shuffleButton.onclick = shuffleFavouriteWeapon;