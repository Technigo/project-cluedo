const killerCard = document.getElementById("killerCard");
const weaponCard = document.getElementById("weaponCard");
const roomCard = document.getElementById("roomCard");

const killerImage = document.getElementById("killerImage");
const favouriteWeapon = document.getElementById("favouriteWeapon");
const killerAge = document.getElementById("killerAge");
const killerName = document.getElementById("killerName");

const weaponImage = document.getElementById("weaponImage");
const weaponName = document.getElementById("weaponName");
const weaponWeight = document.getElementById("weaponWeight");

const roomName = document.getElementById("roomName");
const roomImage = document.getElementById("roomImage");

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "MediumSeaGreen",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "axe"
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He would be the smartest man on the planet if he wasn't so scatterbrained.",
  age: 50,
  image: "assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "rope"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "Indianred",
  description: "She always has to be the center of attention.",
  age: 24,
  image: "assets/scarlet.png",
  occupation: "Actress",
  favouriteWeapon: "candlestick"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "Royalblue",
  description: "She's proper and has excellent manners",
  age: 60,
  image: "assets/peacock.png",
  occupation: "None",
  favouriteWeapon: "dumbbell"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "lightyellow",
  description: "He loves to challenge people to a duel if they cross him, and he isn't afraid to speak his mind.",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Colonel",
  favouriteWeapon: "knife"
};

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She owns nothing to her name and takes her domestic duties very seriously.",
  age: 55,
  image: "assets/white.png",
  occupation: "Maid",
  favouriteWeapon: "poison"
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  color: "brown",
  weight: 10,
  image: "assets/rope.svg",
  id: "rope"
};

const knife = {
  name: "knife",
  color: "grey",
  weight: 11,
  image: "assets/knife.svg",
  id: "knife"
};

const candlestick = {
  name: "candlestick",
  color: "silver",
  weight: 12,
  image: "assets/candlestick.svg",
  id: "candlestick"
};

const dumbbell = {
  name: "dumbbell",
  color: "lightblue",
  weight: 13,
  image: "assets/gym.svg",
  id: "dumbbell"
};

const poison = {
  name: "poison",
  color: "lightgreen",
  weight: 14,
  image: "assets/potion.svg",
  id: "poison"
};

const axe = {
  name: "axe",
  color: "darkgreen",
  weight: 15,
  image: "assets/axe.svg",
  id: "axe"
};

const bat = {
  name: "bat",
  color: "pink",
  weight: 16,
  image: "assets/baseballBat.svg",
  id: "bat"
};

const trophy = {
  name: "trophy",
  color: "gold",
  weight: 17,
  image: "assets/award.svg",
  id: "trohpy"
};

const pistol = {
  name: "pistol",
  color: "orange",
  weight: 18,
  image: "assets/gun.svg",
  id: "pistol"
};

//OBJECTS FOR THE ROOMS

const diningRoom = {
  name: "Dining Room",
  image: "assets/diningRoom.svg",
  color: "darkred"
};

const conservatory = {
  name: "Conservatory",
  image: "assets/door.svg",
  color: "BlanchedAlmond"
};

const kitchen = {
  name: "Kitchen",
  image: "assets/kitchen.svg",
  color: "Coral"
};

const study = {
  name: "Study",
  image: "assets/work.svg",
  color: "Chocolate"
};

const library = {
  name: "Library",
  image: "assets/library.svg",
  color: "CadetBlue"
};

const billiardRoom = {
  name: "Billiard Room",
  image: "assets/snooker.svg",
  color: "DarkCyan"
};

const lounge = {
  name: "Lounge",
  image: "assets/lounge.svg",
  color: "DarkGoldenRod"
};

const ballroom = {
  name: "Ballroom",
  image: "assets/chandelier.svg",
  color: "DarkSlateBlue"
};

const hall = {
  name: "Hall",
  image: "assets/hanger.svg",
  color: "Khaki"
};

const spa = {
  name: "Spa",
  image: "assets/beauty.svg",
  color: "HotPink"
};

const livingRoom = {
  name: "Living Room",
  image: "assets/lamp.svg",
  color: "LavenderBlush"
};

const observatory = {
  name: "Observatory",
  image: "assets/telescope.svg",
  color: "LightSalmon"
};

const theater = {
  name: "Theater",
  image: "assets/doorStar.svg",
  color: "NavajoWhite"
};

const guestHouse = {
  name: "Guest House",
  image: "assets/realEstate.svg",
  color: "PeachPuff"
};

const patio = {
  name: "Patio",
  image: "assets/outdoor.svg",
  color: "Olive"
};

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined 
};

// FUNCTIONS

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);

  killerImage.style.display = "block";
  favouriteWeapon.style.display = "block";
  killerAge.style.display = "block";
  killerName.style.display = "block";
  killerCard.style.background = mystery.killer.color;
  document.getElementById("loadingKillerAnimation").style.display = "none";

  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerImage.src = `${mystery.killer.image}`;
  killerAge.innerHTML = `Age: ${mystery.killer.age}`;
  favouriteWeapon.innerHTML = `Favourite Weapon: ${mystery.killer.favouriteWeapon}`;
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  weaponName.style.display = "block";
  weaponWeight.style.display = "block";
  weaponImage.style.display =  "block";
  document.getElementById("loadingWeaponAnimation").style.display = "none";

  weaponCard.style.background = mystery.weapon.color;
  weaponName.innerHTML = `${mystery.weapon.name}`;
  weaponWeight.innerHTML = `${mystery.weapon.weight}`;
  weaponImage.src = `${mystery.weapon.image}`;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  roomName.style.display = "block";
  roomImage.style.display = "block";
  document.getElementById("loadingRoomAnimation").style.display = "none";

  roomCard.style.background = mystery.room.color;
  roomName.innerHTML = `${mystery.room.name}`;
  roomImage.src = `${mystery.room.image}`;
};

const startKillerAnimation = () => {
  killerImage.style.display = "none";
  favouriteWeapon.style.display = "none";
  killerAge.style.display = "none";
  killerName.style.display = "none";
  document.getElementById("loadingKillerAnimation").style.display = "block";

  setTimeout(pickKiller, 1500);
};

const startWeaponAnimation = () => {
  weaponName.style.display = "none";
  weaponWeight.style.display = "none";
  weaponImage.style.display = "none";
  document.getElementById("loadingWeaponAnimation").style.display = "block";

  setTimeout(pickWeapon, 1500);
};

const startRoomAnimation = () => {
  roomName.style.display = "none";
  roomImage.style.display = "none";
  document.getElementById("loadingRoomAnimation").style.display = "block";

  setTimeout(pickRoom, 1500);
};

// CALL FUNCTIONS WHEN CLICK ON CARDS

killerCard.onclick = startKillerAnimation;
weaponCard.onclick = startWeaponAnimation;
roomCard.onclick = startRoomAnimation;


// FINAL FUNCTION

const revealMystery = () => {
  const answerMystery = document.getElementById("mysteryAnswer")
  if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
      answerMystery.innerHTML = ("Please choose a killer, a weapon and a room.");
    } else {
      answerMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`);
      document.getElementById("revealButton").style.display = "none";
      document.getElementById("newGameButton").style.display = "block";
    }
  };
 

