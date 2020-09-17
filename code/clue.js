// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "knife",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He has a lot of medicin knowledge",
  age: 40,
  image: "assets/plum.png",
  occupation: "professor",
  favouriteWeapon: "rope",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is creative",
  age: 35,
  image: "assets/scarlet.png",
  occupation: "architect",
  favouriteWeapon: "candlestick",
};

const mrsPeackok = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is free-minded",
  age: 55,
  image: "assets/peacock.png",
  occupation: "actress",
  favouriteWeapon: "dumbbell",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is strong",
  age: 34,
  image: "assets/mustard.png",
  occupation: "butcher",
  favouriteWeapon: "poison",
};

const mrsWhite = {
  firstName: "Ana",
  lastName: "White",
  color: "white",
  description: "She is very weak",
  age: 28,
  image: "assets/white.png",
  occupation: "painter",
  favouriteWeapon: "axe",
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

console.log(colonelMustard.color);
console.log(pistol.weight);

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

console.log(suspects);
console.log(suspects[3].occupation);
console.log(weapons);
console.log(rooms.indexOf("Spa"));

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
const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined,
  favWeapon: undefined,
};

// shuffleFavouriteWeapon function
const duplicateItems = (arr) => {
  let newArr = [];
  for (let i = 0; i < 10; i++) {
    newArr = newArr.concat(arr);
  }
  return newArr;
};

const favWeapons = [rope, knife, candlestick, dumbbell, poison, axe];
const shuffleFavouriteWeapon = () => {
  mystery.favWeapon = shuffle(favWeapons, weapons);
  document.getElementById(
    "mysteryName"
  ).innerHTML = `Favorite wepon is ${mystery.favWeapon.id}`;
};

const shuffle = (favArr, arr) => {
  const favDuplicated = duplicateItems(favArr);
  const concatArr = [...arr, ...favDuplicated];
  return randomSelector(concatArr);
};
// ----------------WEAPON AND ROOM

const shuffleFavRoom = () => {
  if (mystery.weapon !== undefined) {
    const roomList = weaponRooms[mystery.weapon.id];
    mystery.room = shuffle(roomList, rooms);
    document.getElementById("roomName").innerHTML = mystery.room;
  } else {
    mystery.room = randomSelector(rooms);
    document.getElementById("roomName").innerHTML = mystery.room;
  }
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.

  document.getElementById("killerCard").style.background = mystery.killer.color;

  document.getElementById("killerName").innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;

  document.getElementById("killerOccupation").innerHTML =
    mystery.killer.occupation;

  document.getElementById(
    "killerImage"
  ).innerHTML = `<img src="${mystery.killer.image}">`;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById(
    "weaponName"
  ).innerHTML = `${mystery.weapon.name} which weight is ${mystery.weapon.weight}.`;
};

// LOADER

document.getElementById("loaderItem").style.display = "none";

// Invoke function

document.getElementById("killerCard").onclick = () => {
  loader();
  pickKiller();
};

document.getElementById("weaponCard").onclick = () => {
  loader();
  pickWeapon();
};
document.getElementById("roomCard").onclick = () => {
  loader();
  // pickRoom();
  shuffleFavRoom();
};

document.getElementById("mysteryCard").onclick = shuffleFavouriteWeapon;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope. '

const revalMystery = () => {
  document.getElementById(
    "reveal"
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}. Favorite wapon is ${mystery.favWeapon.id}`;
};

document.getElementById("reveal").onclick = () => {
  revalMystery();
  document.getElementById("loaderItem").style.display = "none";
};

// LOADER

function loader() {
  document.getElementById("loaderItem").style.display = "block";
}

// Defaoult function
const reset = () => {
  delete mystery.killer;
  delete mystery.weapon;
  delete mystery.room;
  delete mystery.favWeapon;
  document.getElementById("mysteryName").innerHTML = "";
  document.getElementById("killerCard").style.background = "";
  document.getElementById("killerName").innerHTML = "";
  document.getElementById("killerOccupation").innerHTML = "";
  document.getElementById("killerImage").innerHTML = "";
  document.getElementById("weaponName").innerHTML = "";
  document.getElementById("roomName").innerHTML = "";
  document.getElementById("reveal").innerHTML = "REVEAL THE CRIME";
};

const deleteValue = () => {};

document.getElementById("resetBtn").onclick = reset;
