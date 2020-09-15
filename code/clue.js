// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He has a lot of medicin knowledge",
  age: 40,
  image: "assets/plum.png",
  occupation: "professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is creative",
  age: 35,
  image: "assets/scarlet.png",
  occupation: "architect",
};

const mrsPeackok = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is free-minded",
  age: 55,
  image: "assets/peacock.png",
  occupation: "actress",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is strong",
  age: 34,
  image: "assets/mustard.png",
  occupation: "butcher",
};

const mrsWhite = {
  firstName: "Ana",
  lastName: "White",
  color: "white",
  description: "She is very weak",
  age: 28,
  image: "assets/white.png",
  occupation: "painter",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
};

const knife = {
  name: "knife",
  weight: 5,
};

const candlestick = {
  name: "candelstick",
  weight: 7,
};

const dumbbell = {
  name: "dumbell",
  weight: 30,
};

const poison = {
  name: "dumbell",
  weight: 2,
};

const axe = {
  name: "axe",
  weight: 12,
};

const bat = {
  name: "bat",
  weight: 13,
};

const trophy = {
  name: "trophy",
  weight: 20,
};

const pistol = {
  name: "pistol",
  weight: 90,
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
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.

  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById(
    "weaponCard"
  ).innerHTML = `${mystery.weapon.name} which weight is ${mystery.weapon.weight}.`;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomCard").innerHTML = mystery.room;
};

// Invoke functions

document.getElementById("killerCard").onclick = pickKiller;

document.getElementById("weaponCard").onclick = pickWeapon;

document.getElementById("roomCard").onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revalMystery = () => {
  document.getElementById(
    "reveal"
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
};

document.getElementById("reveal").onclick = revalMystery;
