// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: null,
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He has a lot of medicin knowledge",
  age: 40,
  image: "assets/plum.png",
  occupation: "professor",
  favouriteWeapon: null,
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is creative",
  age: 35,
  image: "assets/scarlet.png",
  occupation: "architect",
  favouriteWeapon: null,
};

const mrsPeackok = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is free-minded",
  age: 55,
  image: "assets/peacock.png",
  occupation: "actress",
  favouriteWeapon: null,
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is strong",
  age: 34,
  image: "assets/mustard.png",
  occupation: "butcher",
  favouriteWeapon: null,
};

const mrsWhite = {
  firstName: "Ana",
  lastName: "White",
  color: "white",
  description: "She is very weak",
  age: 28,
  image: "assets/white.png",
  occupation: "painter",
  favouriteWeapon: null,
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  id: "rope",
};

const knife = {
  name: "knife",
  weight: 5,
  id: "knife",
};

const candlestick = {
  name: "candlestick",
  weight: 7,
  id: "candlestick",
};

const dumbbell = {
  name: "dumbbell",
  weight: 30,
  id: "dumbbell",
};

const poison = {
  name: "poison",
  weight: 2,
  id: "poison",
};

const axe = {
  name: "axe",
  weight: 12,
  id: "axe",
};

const bat = {
  name: "bat",
  weight: 13,
  id: "bat",
};

const trophy = {
  name: "trophy",
  weight: 20,
  id: "trophy",
};

const pistol = {
  name: "pistol",
  weight: 90,
  id: "pistol",
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeackok,
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
  "Patio",
];

const weaponRooms = {
  rope: ["Conservatory", "Hall", "Theater", "Patio", "Observatory"],
  knife: ["Kitchen"],
  candlestick: [
    "Dining Room",
    "Conservatory",
    "Study",
    "Library",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Guest House",
    "Patio",
    "Theater",
  ],
  dumbbell: ["Guest House"],
  poison: [
    "Dining Room",
    "Conservatory",
    "Kitchen",
    "Living Room",
    "Guest House",
    "Patio",
  ],
  axe: ["Conservatory", "Billiard Room", "Hall", "Patio"],
  bat: ["Billiard Room", "Guest House"],
  trophy: ["Living Room", "Guest House"],
  pistol: ["Living Room", "Gest House"],
};

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.

const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const initMystery = () => {
  return {
    killer: null,
    weapon: null,
    room: null,
    favoriteWeapon: null,
  };
};

let mystery = initMystery();

// shuffleFavouriteWeapon function with supporting functions duplicateItems and shuffle
const multiplyItems = (arr) => {
  let newArr = [];
  for (let i = 0; i < 30; i++) {
    newArr = newArr.concat(arr);
  }
  return newArr;
};

const randomSelectorWithFav = (favArr, array) => {
  const multiplyFav = multiplyItems(favArr);
  const concatArr = [...array, ...multiplyFav];
  return randomSelector(concatArr);
};

const shuffleFavouriteWeapon = (person) => {
  person.favouriteWeapon = randomSelector(weapons).id;
};

// ----------------WEAPON AND ROOM
const pickRoom = () => {
  if (mystery.weapon) {
    const roomList = weaponRooms[mystery.weapon.id];
    mystery.room = randomSelectorWithFav(roomList, rooms);
    document.getElementById("roomName").innerHTML = mystery.room;
  } else {
    mystery.room = randomSelector(rooms);
    document.getElementById("roomName").innerHTML = mystery.room;
  }
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  const suspect = randomSelector(suspects);
  shuffleFavouriteWeapon(suspect);
  mystery.killer = suspect;

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.

  document.getElementById("killerCard").style.background = mystery.killer.color;

  document.getElementById("killerName").innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;

  document.getElementById("killerOccupation").innerHTML =
    mystery.killer.occupation;

  document.getElementById(
    "killerImage"
  ).innerHTML = `<img src="${mystery.killer.image}">`;

  document.getElementById(
    "mysteryName"
  ).innerHTML = `Favorite weapon is ${mystery.killer.favouriteWeapon}`;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  if (!mystery.killer) {
    mystery.weapon = randomSelector(weapons);
  } else {
    let favWeapon = weapons.find(
      (x) => x.id === mystery.killer.favouriteWeapon
    );
    mystery.weapon = randomSelectorWithFav([favWeapon], weapons);
  }

  document.getElementById(
    "weaponName"
  ).innerHTML = `${mystery.weapon.name} which weight is ${mystery.weapon.weight}.`;
};

// LOADER
const loader = () => {
  var loaderItem = document.getElementById("loader");

  loaderItem.classList.toggle("active");
  setTimeout(() => {
    loaderItem.classList.toggle("active");
  }, 1000);
};

// Invoke function
document.getElementById("killerCard").onclick = () => {
  loader();
  resetRevealInfo();
  pickKiller();
};

document.getElementById("weaponCard").onclick = () => {
  loader();
  resetRevealInfo();
  pickWeapon();
};

document.getElementById("roomCard").onclick = () => {
  loader();
  resetRevealInfo();
  pickRoom();
};

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope. '

const revalMystery = () => {
  if (mystery.killer && mystery.room && mystery.weapon) {
    document.getElementById(
      "reveal"
    ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}. Favorite wapon is ${mystery.killer.favouriteWeapon}`;
  }
};

document.getElementById("reveal").onclick = revalMystery;

// Default function
const reset = () => {
  mystery = initMystery();
  document.getElementById("mysteryName").innerHTML = "";
  document.getElementById("killerCard").style.background = "";
  document.getElementById("killerName").innerHTML = "";
  document.getElementById("killerOccupation").innerHTML = "";
  document.getElementById("killerImage").innerHTML = "";
  document.getElementById("weaponName").innerHTML = "";
  document.getElementById("roomName").innerHTML = "";

  resetRevealInfo();
};

document.getElementById("resetBtn").onclick = reset;

const resetRevealInfo = () => {
  document.getElementById("reveal").innerHTML =
    "REVEAL THE CRIME (Please select all of the cards)";
};
