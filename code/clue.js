//Setup some vars
let gameStarted = false;
let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS
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

// CREATE OBJECTS FOR ALL THE WEAPONS

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

//GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

//Object that keeps the mystery
const mystery = {
  killer: null,
  weapon: null,
  room: null
};

// This function will be invoked when you click on the killer card.
const pickKiller = (loadID) => {
  if (gameStarted && !killerPicked) {
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      mystery.killer = randomSelector(suspects);
      document.getElementById('killerName').style.background = mystery.killer.color;
      document.getElementById('killerImage').src = mystery.killer.image;
      document.getElementById('killerName').innerHTML = (`${mystery.killer.firstName} ${mystery.killer.lastName}`);
      //Get the name from the preferred weapon ID
      let weaponID = mystery.killer.favoriteWeapon;
      let weaponName = weapons.find(weapon => weapon.id === weaponID).name;
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
  if (killerPicked && !weaponPicked && !roomPicked) {
    //Look at the killers favorite weapon and change the prob. of it being picked
    increaseChanceForFavWeapon(mystery.killer);
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      mystery.weapon = randomSelector(weapons);
      document.getElementById('weaponName').style.background = mystery.weapon.color;
      document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`;
      document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`;
      weaponPicked = true;
      checkScroll();
    }, 2000);
  } else(showInfoMessage("pickWeapon"));
}

const pickRoom = (loadID) => {
  if (weaponPicked && !roomPicked) {
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      increaseChanceForRoom(mystery.weapon);
      mystery.room = randomSelector(rooms);
      document.getElementById('roomName').innerHTML = mystery.room;
      roomPicked = true;
      checkScroll();
    }, 2000);
  } else(showInfoMessage("pickRoom"));
}

const showInfoMessage = (callerFunctionName) => {
  if (callerFunctionName === "pickWeapon" || (callerFunctionName === "pickRoom" && !killerPicked)) {
    //If pickWeapon calls this function, it means the user hasn't picked a killer yet.
    document.getElementById("killerInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("killerInfoMessage").style.opacity = 0;
    }, 2000);
  } else if (callerFunctionName === "pickRoom" && killerPicked) {
    //Is pickRoom calls this function  and the killer has been picked, the user hasn't picked a weapon. 
    document.getElementById("weaponInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("weaponInfoMessage").style.opacity = 0;
    }, 2000);
  } else if (callerFunctionName === "revealMystery") {
    //This means that the user has clicked the reveal button before drawing all the cards.
    document.getElementById("mysteryInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("mysteryInfoMessage").style.opacity = 0;
    }, 2000);
  }
}

//Select a random weapon from the weapons array and assign in to the suspects fav-weapon property
const shuffleFavoriteWeapon = () => {
  suspects.forEach(suspect => {
    let selectedRandomWeapon = randomSelector(weapons).id;
    suspect.favoriteWeapon = selectedRandomWeapon;
  });
}

const increaseChanceForFavWeapon = (killerObject) => {
  let preferredWeapon = killerObject.favoriteWeapon;
  let weaponObject = weapons.find(weapon => weapon.id === preferredWeapon);
  let increaseChance = weaponObject.increasedChanceOfDraw;
  for (i = 0; i < increaseChance; i++) {
    weapons.push(weaponObject);
  }
}

const increaseChanceForRoom = (weaponObject) => {
  let preferredRoom = weaponObject.likelyFoundIn;
  //Increase chance for weapon in room is random(Some number between 1 and 10) every time.
  let increaseChance = Math.floor(Math.random() * 10) + 1;
  for (i = 0; i < increaseChance; i++) {
    rooms.push(preferredRoom);
  }
}

const startGame = () => {
  gameStarted = true;
  toggleGameBoard();
  shuffleFavoriteWeapon();
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button
const revealMystery = () => {
  if (killerPicked && weaponPicked && roomPicked) {
    let killer = mystery.killer.firstName + " " + mystery.killer.lastName;
    let weapon = mystery.weapon.article + " " + mystery.weapon.name;
    let room = mystery.room;
    let mysteryString = (`
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
  var check = confirm("Are you sure? Window will reload");
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
  let x = window.matchMedia("(max-width: 600px)");
  let y = window.matchMedia("(max-width: 769px)");
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