// Suspects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#4b8666',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'Knife',
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#a361a1',
  description: 'He fancies beautiful women',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Psychiatrist',
  favouriteWeapon: 'Dumbbell',
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#990000',
  description: 'She is a femme fatale',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Escort girl',
  favouriteWeapon: 'Poison',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#686ab5',
  description: 'She is a former miss USA',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Teacher',
  favouriteWeapon: 'Trophy',
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#efb72c',
  description: 'He is a colonial imperialist',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Retired soldier',
  favouriteWeapon: 'Pistol',
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#ddd4c5',
  description: 'She works at a prestigious restaurant',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Waitress',
  favouriteWeapon: 'Candlestick',
}

// Weapons

const rope = {
  name: 'Rope',
  weight: 10,
  id: 'Rope',
  favouriteRoom: 'Hall',
  image: 'assets/rope.png',
}

const knife = {
  name: 'Knife',
  weight: 5,
  id: 'Knife',
  favouriteRoom: 'Kitchen',
  image: 'assets/knife.png',
}

const candlestick = {
  name: 'Candlestick',
  weight: 20,
  id: 'Candlestick',
  favouriteRoom: 'Ballroom',
  image: 'assets/candlestick.png',
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 50,
  id: 'Dumbbell',
  favouriteRoom: 'Spa',
  image: 'assets/dumbbell.png',
}

const poison = {
  name: 'Poison',
  weight: 4,
  id: 'Poison',
  favouriteRoom: 'Patio',
  image: 'assets/poison.png',
}

const axe = {
  name: 'Axe',
  weight: 30,
  id: 'Axe',
  favouriteRoom: 'Theater',
  image: 'assets/axe.png',
}

const bat = {
  name: 'Bat',
  weight: 25,
  id: 'Bat',
  favouriteRoom: 'Billiard Room',
  image: 'assets/bat.png',
}

const trophy = {
  name: 'Trophy',
  weight: 15,
  id: 'Trophy',
  favouriteRoom: 'Living Room',
  image: 'assets/trophy.png',
}

const pistol = {
  name: 'Pistol',
  weight: 16,
  id: 'Pistol',
  favouriteRoom: 'Study',
  image: 'assets/pistol.png',
}

// Rooms

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/dining-room.png',
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.png',
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.png',
}

const study = {
  name: 'Study',
  image: 'assets/study.png',
}

const library = {
  name: 'Library',
  image: 'assets/library.png',
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiard-room.png',
}

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.png',
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ball-room.png',
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.png',
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.png',
}

const livingRoom = {
  name: 'Living Room',
  image: 'assets/living-room.png',
}

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.png',
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.png',
}

const guestHouse = {
  name: 'Guest House',
  image: 'assets/guest-house.png',
}

const patio = {
  name: 'Patio',
  image: 'assets/patio.png',
}

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
const killerImage = document.getElementById('killerImage');
const killerFavouriteWeapon = document.getElementById('killerFavouriteWeapon');
const weaponCard = document.getElementById('weaponCard');
const weaponName = document.getElementById('weaponName');
const weaponWeight = document.getElementById('weaponWeight');
const weaponImage = document.getElementById('weaponImage');
const weaponFavouriteRoom = document.getElementById('weaponFavouriteRoom');
const roomCard = document.getElementById('roomCard');
const roomName = document.getElementById('roomName');
const roomImage = document.getElementById('roomImage');
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
  killer: undefined,
  favouriteWeapon: undefined,
  pickedWeapon: undefined,
  weapon: undefined,
  favouriteRoom: undefined,
  pickedRoom: undefined,
  room: undefined,
};

// This function will change favourite weapons of each person

const shuffleFavouriteWeapon = () => {
  suspects.forEach((item) => {
    item.favouriteWeapon = randomSelector(weapons).name;
  });
  if (mystery.killer !== undefined) {
    mystery.favouriteWeapon = mystery.killer.favouriteWeapon;
    killerFavouriteWeapon.innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
  }
};

// Actions related to Killer deck

const killerAnimation = () => {
  killerLoader.style.display = "block";
  setTimeout(pickKiller, 2000);
  revealedMystery.innerHTML = '';
  killerCard.style.background = "";
  killerName.innerHTML = '';
  killerAge.innerHTML = '';
  killerFavouriteWeapon.innerHTML = '';
  killerImage.style.display = "none";
  killerImage.src = '';
};

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  mystery.favouriteWeapon = mystery.killer.favouriteWeapon;
  killerLoader.style.display = "none";
  killerCard.style.background = mystery.killer.color;
  killerName.innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerAge.innerHTML = `Age: ${mystery.killer.age}`;
  killerFavouriteWeapon.innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
  killerImage.style.display = "inline-block";
  killerImage.src = mystery.killer.image;
};

killerCard.onclick = killerAnimation;

// Actions related to Weapon deck

const favouriteWeaponAnimation = () => {
  if (mystery.killer === undefined) {
    revealedMystery.innerHTML = ('Pick a killer first!');
  } else {
    weaponLoader.style.display = "block";
    weaponName.innerHTML = '';
    weaponWeight.innerHTML = '';
    weaponImage.src = '';
    weaponImage.style.display = "none";
    weaponFavouriteRoom.innerHTML = '';
    revealedMystery.innerHTML = '';
    setTimeout(() => {
      pickFavouriteWeapon(mystery.killer);
    }, 2000);
  };
};

const favouriteWeaponDuplicated = (elementToPopulate, howManyTimes) => {
  let result = [];
  for (let i = 0; i < howManyTimes; i++) {
    result.push(elementToPopulate);
  };
  return result;
};

const pickFavouriteWeapon = (suspect) => {
  const newArrayOfWeapons = weapons.map(a => a.name);
  const randomWeapons = [
    ...newArrayOfWeapons,
    ...favouriteWeaponDuplicated(suspect.favouriteWeapon, 10)
  ];
  mystery.pickedWeapon = randomSelector(randomWeapons);
  const mysteryWeapon = weapons.find((item) => {
    if (item.name === mystery.pickedWeapon) {
      return item;
    };
  });
  mystery.weapon = mysteryWeapon;
  mystery.favouriteRoom = mysteryWeapon.favouriteRoom;
  weaponLoader.style.display = "none";
  weaponCard.style.background = "#808080";
  weaponName.innerHTML = mystery.weapon.name;
  weaponWeight.innerHTML = `Weight: ${mystery.weapon.weight} oz`;
  weaponImage.style.display = "inline-block";
  weaponImage.src = mystery.weapon.image;
  weaponFavouriteRoom.innerHTML = `Location: ${mystery.weapon.favouriteRoom}`;
};

weaponCard.onclick = favouriteWeaponAnimation;

// Actions related to Room deck

const favouriteRoomAnimation = () => {
  if (mystery.killer === undefined) {
    revealedMystery.innerHTML = ('Pick a killer first!');
  } else if (mystery.weapon === undefined) {
    revealedMystery.innerHTML = ('Pick a weapon first!');
  } else {
    roomLoader.style.display = "block";
    roomName.innerHTML = '';
    roomImage.src = '';
    roomImage.style.display = "none";
    setTimeout(() => {
      pickFavouriteRoom(mystery.weapon);
    }, 2000);
  };
};

const favouriteRoomDuplicated = (elementToPopulate, howManyTimes) => {
  let result = [];
  for (let i = 0; i < howManyTimes; i++) {
    result.push(elementToPopulate);
  };
  return result;
};

const pickFavouriteRoom = (weapon) => {
  const newArrayOfRooms = rooms.map(a => a.name);
  const randomRooms = [
    ...newArrayOfRooms,
    ...favouriteRoomDuplicated(weapon.favouriteRoom, 30)
  ];
  mystery.pickedRoom = randomSelector(randomRooms);
  const mysteryRoom = rooms.find((item) => {
    if (item.name === mystery.pickedRoom) {
      return item;
    };
  });
  mystery.room = mysteryRoom;
  roomLoader.style.display = "none";
  roomCard.style.background = "#C0C0C0";
  roomName.innerHTML = mystery.room.name;
  roomImage.style.display = "inline-block";
  roomImage.src = mystery.room.image;
};

roomCard.onclick = favouriteRoomAnimation;

// Functions related to revelation of mystery 

const revealMystery = () => {
  if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    revealedMystery.innerHTML = ('Make sure you have picked a killer, a weapon and a room!');
  } else {
    revealedMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room.name}.`);
  }
};

const resetMystery = () => {
  location.reload();
};

// Buttons

revealButton.onclick = revealMystery;
resetButton.onclick = resetMystery;
shuffleButton.onclick = shuffleFavouriteWeapon;