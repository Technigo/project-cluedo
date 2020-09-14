// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  // description: 'He has a lot of connections',
  age: 45,
  image: "./assets/green.png",
  occupation: "Entrepreneur",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  // description: 'He has a lot of connections',
  age: 48,
  image: "./assets/plum.png",
  occupation: "Professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlett",
  color: "pink",
  // description: 'He has a lot of connections',
  age: 39,
  image: "./assets/scarlet.png",
  occupation: "Nail painter",
};

const mrsPeacock = {
  firstName: "Elenor",
  lastName: "Peacock",
  color: "blue",
  // description: 'He has a lot of connections',
  age: 51,
  image: "./assets/peacock.png",
  occupation: "Teacher",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  // description: 'He has a lot of connections',
  age: 36,
  image: "./assets/mustard.png",
  occupation: "Plummer",
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  // description: 'He has a lot of connections',
  age: 54,
  image: "./assets/mustard.png",
  occupation: "Relaxing",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
};

const knife = {
  name: "knife",
  weight: 2,
};

const candleStick = {
  name: "candlestick",
  weight: 6,
};

const dumbBell = {
  name: "dumbbell",
  weight: 4,
};

const poison = {
  name: "poison",
  weight: 1,
};

const axe = {
  name: "axe",
  weight: 5,
};

const bat = {
  name: "bat",
  weight: 3,
};

const throphy = {
  name: "throphy",
  weight: 8,
};

const pistol = {
  name: "pistol",
  weight: 7,
};

//Console log information from some of the suspects and weapons objects
console.log(mrGreen.firstName);
console.log(professorPlum.lastName);
console.log(missScarlet.color);
console.log(rope.name);
console.log(knife.weight);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
];

const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  bat,
  throphy,
  pistol,
];

const rooms = [
  "Dinning Room",
  "Conservatory",
  "Conservatory",
  "Study",
  "Study",
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

//Console log the arrays
console.log(suspects);
console.log(weapons);
console.log(rooms);

//Console log and play around with console logging the first suspect in the suspects array or the last room in the rooms array
console.log(suspects[0]);
console.log(suspects[1].firstName);
console.log(weapons[5].name);
console.log(rooms[rooms.length - 1]);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: "",
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
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById(
    "killerOccupation"
  ).innerHTML = `${mystery.killer.occupation}`;
  document.getElementById("killerImage").src = `${mystery.killer.image}`;
};

document.getElementById("killerCard").addEventListener("click", pickKiller);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  // This will change the card to the one connected to the chosen weapon and show the name and weight of the weapon.
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight}`;
};

document.getElementById("weaponCard").addEventListener("click", pickWeapon);

// This function will be invoked when you click on the room card.
const pickRoom = () => {
  // This will randomly select a room from the rooms. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  // This will change the card to the one connected to the chosen room and show which room it is.
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};

document.getElementById("roomCard").addEventListener("click", pickRoom);

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
