let gameStarted = false;
let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#539853',
  description: 'He is a very serious man.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Priest',
  favoriteWeapon: ''
};

const clMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#fbd460',
  description: 'Has fought many wars and knows how to handle a gun.',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Military man',
  favoriteWeapon: ''
};

const mrsPeacock = {
  firstName: 'Petunia',
  lastName: 'Peacock',
  color: '#5656b3',
  description: 'World famous',
  age: 34,
  image: 'assets/peacock.png',
  occupation: 'Senators wife',
  favoriteWeapon: ''
};

const prPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#8b5195',
  description: 'Smooth-talker',
  age: 41,
  image: 'assets/plum.png',
  occupation: 'Psychiatry Professor',
  favoriteWeapon: ''
};

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#f84b3e',
  description: 'You never know if she is telling you the truth.',
  age: 23,
  image: 'assets/scarlet.png',
  occupation: 'Runs a underground brothel',
  favoriteWeapon: ''
};

const mrsWhite = {
  firstName: 'Wendy',
  lastName: 'White',
  color: '#ebebe9',
  description: 'A sweet old lady',
  age: 73,
  image: 'assets/white.png',
  occupation: 'Servant',
  favoriteWeapon: ''
};

const rope = {
  name: 'Rope',
  id: 'rope',
  weight: 10,
  color: '#f84b3e',
  article: 'a',
  increasedChanceOfDraw: 6,
  likelyFoundIn: 'Guest House'
};

const knife = {
  name: 'Knife',
  id: 'knife',
  weight: 7,
  color: '#fff',
  article: 'a',
  increasedChanceOfDraw: 5,
  likelyFoundIn: 'Kitchen'
};

const candleStick = {
  name: 'Candle stick',
  id: 'candleStick',
  weight: 4,
  color: '#8b5195',
  article: 'a',
  increasedChanceOfDraw: 10,
  likelyFoundIn: 'Hall'
};

const dumbBell = {
  name: 'Dumbbell',
  id: 'dumbBell',
  weight: 12,
  color: '#ebebe9',
  article: 'a',
  increasedChanceOfDraw: 9,
  likelyFoundIn: 'Spa'
};

const poison = {
  name: 'Poison',
  id: 'poison',
  weight: 3,
  color: '#5656b3',
  article: '',
  increasedChanceOfDraw: 7,
  likelyFoundIn: 'Study'
};

const axe = {
  name: 'Axe',
  id: 'axe',
  weight: 6,
  color: '#fff',
  article: 'an',
  increasedChanceOfDraw: 10,
  likelyFoundIn: 'Billiard Room'
};

const bat = {
  name: 'Bat',
  id: 'bat',
  weight: 2,
  color: '#fff',
  article: 'a',
  increasedChanceOfDraw: 20,
  likelyFoundIn: 'Lounge'
};

const trophy = {
  name: 'Trophy',
  id: 'trophy',
  weight: 2,
  color: '#539853',
  article: 'a',
  increasedChanceOfDraw: 8,
  likelyFoundIn: 'Theater'
};

const pistol = {
  name: 'Pistol',
  id: 'pistol',
  weight: 2,
  color: '#fbd460',
  article: 'a',
  increasedChanceOfDraw: 25,
  likelyFoundIn: 'Living Room'
};

const suspects = [
  mrGreen,
  clMustard,
  mrsPeacock,
  prPlum,
  msScarlet,
  mrsWhite
]

const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
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
];

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  killer: null,
  weapon: null,
  room: null
};

const pickKiller = (loadID) => {
  if (gameStarted && !killerPicked) {
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      mystery.killer = randomSelector(suspects);
      document.getElementById('killerName').style.background = mystery.killer.color;
      document.getElementById('killerImage').src = mystery.killer.image;
      document.getElementById('killerName').innerHTML = (`${mystery.killer.firstName} ${mystery.killer.lastName}`);
      const weaponID = mystery.killer.favoriteWeapon;
      const weaponName = weapons.find(weapon => weapon.id === weaponID).name;
      document.getElementById('killerFavoriteWeapon').innerHTML = (`Preferred weapon: ${weaponName}`);
      document.getElementById('killerAge').innerHTML = (`Age: ${mystery.killer.age}`);
      document.getElementById('killerOccupation').innerHTML = (`Occupation: ${mystery.killer.occupation}`);
      document.getElementById('killerDescription').innerHTML = (`Description: ${mystery.killer.description}`);
      killerPicked = true;
      checkScroll();
    }, 2000);
  }
}

const pickWeapon = (loadID) => {
  if (killerPicked) {
    const weaponsIncreased = increaseChanceForFavWeapon(mystery.killer);
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      mystery.weapon = randomSelector(weaponsIncreased);
      document.getElementById('weaponName').style.background = mystery.weapon.color;
      document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`;
      document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`;
      weaponPicked = true;
      checkScroll();
    }, 2000);
  } else if (showInfoMessage("pickWeapon"));
}

const pickRoom = (loadID) => {
  if (killerPicked && weaponPicked) {
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      const increasedRoom = increaseChanceForRoom(mystery.weapon);
      mystery.room = randomSelector(increasedRoom);
      document.getElementById('roomName').innerHTML = mystery.room;
      roomPicked = true;
      checkScroll();
    }, 2000);
  } else(showInfoMessage("pickRoom"));
}

const showInfoMessage = (callerFunctionName) => {
  if (callerFunctionName === "pickWeapon" || (callerFunctionName === "pickRoom" && !killerPicked)) {
    document.getElementById("killerInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("killerInfoMessage").style.opacity = 0;
    }, 2000);
  } else if (callerFunctionName === "pickRoom" && killerPicked) {
    document.getElementById("weaponInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("weaponInfoMessage").style.opacity = 0;
    }, 2000);
  } else if (callerFunctionName === "revealMystery") {
    document.getElementById("mysteryInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("mysteryInfoMessage").style.opacity = 0;
    }, 2000);
  }
}

const shuffleFavoriteWeapon = () => {
  suspects.forEach(suspect => {
    const selectedRandomWeapon = randomSelector(weapons).id;
    suspect.favoriteWeapon = selectedRandomWeapon;
  });
}

const increaseChanceForFavWeapon = (killerObject) => {
  let weaponsIncreased = new Array();
  const preferredWeapon = killerObject.favoriteWeapon;
  const weaponObject = weapons.find(weapon => weapon.id === preferredWeapon);
  const increaseChance = weaponObject.increasedChanceOfDraw;
  for (i = 0; i < increaseChance; i++) {
    weaponsIncreased.push(weaponObject);
  }
  weaponsIncreased = weaponsIncreased.concat(weapons);
  return weaponsIncreased;
}

const increaseChanceForRoom = (weaponObject) => {
  let roomsIncreased = new Array();
  const preferredRoom = weaponObject.likelyFoundIn;
  const increaseChance = Math.floor(Math.random() * 10) + 1;
  for (i = 0; i < increaseChance; i++) {
    roomsIncreased.push(preferredRoom);
  }
  roomsIncreased = roomsIncreased.concat(rooms);
  return roomsIncreased;
}

const startGame = () => {
  gameStarted = true;
  toggleGameBoard();
  shuffleFavoriteWeapon();
}

const revealMystery = () => {
  if (killerPicked && weaponPicked && roomPicked) {
    const killer = mystery.killer.firstName + " " + mystery.killer.lastName;
    const weapon = mystery.weapon.article + " " + mystery.weapon.name;
    const room = mystery.room;
    const mysteryString = (`
                It was ${
                  killer
                }
                using ${
                  weapon
                } in the ${
                  room
                }!`);
    document.getElementById('mystery-reveal').innerHTML = mysteryString;
  } else(showInfoMessage("revealMystery"));
}

const restartGame = () => {
  const check = confirm("Are you sure? Window will reload");
  if (check == true) {
    window.location.reload();
  }
}

const toggleGameBoard = () => {
  document.getElementById("gameBoard").classList.remove("inactive");
  document.getElementById("gameBoard").classList.add("active");
  document.getElementById("start-button").classList.remove("active");
  document.getElementById("start-button").classList.add("inactive");
}

const checkScroll = () => {
  const x = window.matchMedia("(max-width: 600px)");
  const y = window.matchMedia("(max-width: 769px)");
  if (x.matches) {
    setTimeout(function () {
      window.scrollBy(0, window.innerHeight / 1.3);
    }, 1500);
  } else if (y.matches) {
    setTimeout(function () {
      window.scrollBy(0, window.innerHeight / 1.5);
    }, 1500);
  }
}