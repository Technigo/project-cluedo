// Suspects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#4b8666',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife',
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#a361a1',
  description: 'He fancies beautiful women',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Psychiatrist',
  favouriteWeapon: 'dumbbell',
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#9f2d22',
  description: 'She is a femme fatale',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Escort girl',
  favouriteWeapon: 'poison',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#686ab5',
  description: 'She is a former miss USA',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Teacher',
  favouriteWeapon: 'trophy',
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#efb72c',
  description: 'He is a colonial imperialist',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Retired soldier',
  favouriteWeapon: 'pistol',
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#ddd4c5',
  description: 'She works at a prestigious restaurant',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Waitress',
  favouriteWeapon: 'candlestick',
}

// Weapons

const rope = {
  name: 'rope',
  weight: 10,
  id: 'rope',
  favouriteRoom: 'Hall',
  image: 'assets/rope.png',
}

const knife = {
  name: 'knife',
  weight: 5,
  id: 'knife',
  favouriteRoom: 'Kitchen',
  image: '',
}

const candlestick = {
  name: 'candlestick',
  weight: 20,
  id: 'candlestick',
  favouriteRoom: 'Ballroom',
  image: '',
}

const dumbbell = {
  name: 'dumbbell',
  weight: 50,
  id: 'dumbbell',
  favouriteRoom: 'Spa',
  image: '',
}

const poison = {
  name: 'poison',
  weight: 4,
  id: 'poison',
  favouriteRoom: 'Patio',
  image: '',
}

const axe = {
  name: 'axe',
  weight: 30,
  id: 'axe',
  favouriteRoom: 'Theater',
  image: '',
}

const bat = {
  name: 'bat',
  weight: 25,
  id: 'bat',
  favouriteRoom: 'Billiard Room',
  image: '',
}

const trophy = {
  name: 'trophy',
  weight: 15,
  id: 'trophy',
  favouriteRoom: 'Living Room',
  image: '',
}

const pistol = {
  name: 'pistol',
  weight: 16,
  id: 'pistol',
  favouriteRoom: 'Study',
  image: '',
}

// Rooms

const diningRoom = {
  name: 'Dining Room',
  image: '',
}

const conservatory = {
  name: 'Conservatory',
  image: '',
}

const kitchen = {
  name: 'Kitchen',
  image: '',
}

const study = {
  name: 'Study',
  image: '',
}

const library = {
  name: 'Library',
  image: '',
}

const billiardRoom = {
  name: 'Billiard Room',
  image: '',
}

const lounge = {
  name: 'Lounge',
  image: '',
}

const ballroom = {
  name: 'Ballroom',
  image: '',
}

const hall = {
  name: 'Hall',
  image: '',
}

const spa = {
  name: 'Spa',
  image: '',
}

const livingRoom = {
  name: 'Living Room',
  image: '',
}

const observatory = {
  name: 'Observatory',
  image: '',
}

const theater = {
  name: 'Theater',
  image: '',
}

const guestHouse = {
  name: 'Guest House',
  image: '',
}

const patio = {
  name: 'Patio',
  image: '',
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
    killerFavouriteWeapon.innerHTML = mystery.killer.favouriteWeapon;
    mystery.favouriteWeapon = mystery.killer.favouriteWeapon;
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
  killerOccupation.innerHTML = '';
  killerDescription.innerHTML = '';
  killerFavouriteWeapon.innerHTML = '';
  killerImage.src = '';
};

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  mystery.favouriteWeapon = mystery.killer.favouriteWeapon;
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

// const weaponAnimation = () => {
//   weaponLoader.style.display = "block";
//   weaponName.innerHTML = '';
//   weaponWeight.innerHTML = '';
//   setTimeout(pickWeapon, 2000);
// };

// const pickWeapon = () => {
//   mystery.weapon = randomSelector(weapons);
//   weaponLoader.style.display = "none";
//   weaponName.innerHTML = mystery.weapon.name;
//   weaponWeight.innerHTML = mystery.weapon.weight;
// };

// weaponCard.onclick = weaponAnimation;

const favouriteWeaponAnimation = () => {
  if (mystery.killer === undefined) {
    revealedMystery.innerHTML = ('Pick a killer first!');
  } else {
    weaponLoader.style.display = "block";
    weaponName.innerHTML = '';
    weaponWeight.innerHTML = '';
    setTimeout(function () {
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
  // console.log(newArrayOfWeapons);
  const randomWeapons = [
    ...newArrayOfWeapons,
    ...favouriteWeaponDuplicated(suspect.favouriteWeapon, 10)
  ];
  // console.log(favouriteWeaponDuplicated(suspect.favouriteWeapon, 10));
  // console.log(randomWeapons);
  mystery.pickedWeapon = randomSelector(randomWeapons);
  const mysteryWeapon = weapons.find((item) => {
    if (item.name === mystery.pickedWeapon) {
      return item;
    };
  });
  // console.log(mysteryWeapon);
  mystery.weapon = mysteryWeapon;
  mystery.favouriteRoom = mysteryWeapon.favouriteRoom;
  weaponLoader.style.display = "none";
  weaponName.innerHTML = mystery.weapon.name;
  weaponWeight.innerHTML = mystery.weapon.weight;
};

weaponCard.onclick = favouriteWeaponAnimation;

// Actions related to Room deck

const favouriteRoomAnimation = () => {
  if (mystery.weapon === undefined) {
    revealedMystery.innerHTML = ('Pick a weapon first!');
  } else {
    roomLoader.style.display = "block";
    roomName.innerHTML = '';
    setTimeout(function () {
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
  console.log(newArrayOfRooms);
  const randomRooms = [
    ...newArrayOfRooms,
    ...favouriteRoomDuplicated(weapon.favouriteRoom, 30)
  ];
  console.log(favouriteRoomDuplicated(weapon.favouriteRoom, 30));
  console.log(randomRooms);
  mystery.pickedRoom = randomSelector(randomRooms);
  const mysteryRoom = rooms.find((item) => {
    if (item.name === mystery.pickedRoom) {
      return item;
    };
  });
  console.log(mysteryRoom);
  mystery.room = mysteryRoom;
  roomLoader.style.display = "none";
  roomName.innerHTML = mystery.room.name;
};

roomCard.onclick = favouriteRoomAnimation;

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

// roomCard.onclick = roomAnimation;

// Functions related to revelation of mystery 

const revealMystery = () => {
  if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    revealedMystery.innerHTML = ('Make sure you have picked a killer, a weapon and a room!');
  } else {
    revealedMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}.`);
  }
};

const resetMystery = () => {
  location.reload();
};

// Buttons

revealButton.onclick = revealMystery;
resetButton.onclick = resetMystery;
shuffleButton.onclick = shuffleFavouriteWeapon;