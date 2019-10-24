// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

// SUSPECTS
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is smart",
  age: 38,
  image: "assets/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "femme fatale",
  age: 20,
  image: "assets/scarlet.png",
  occupation: "Actress"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Queen-like",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Military man",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Colonel"
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "",
  age: 70,
  image: "assets/white.png",
  occupation: "Housekeeper"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10
};

const knife = {
  name: "Knife",
  weight: 20
};

const candlestick = {
  name: "Candlestick",
  weight: 5
};

const dumbbell = {
  name: "Dumbbell",
  weight: 30
};

const poison = {
  name: "Poison",
  weight: 2
};

const axe = {
  name: "Axe",
  weight: 80
};

const bat = {
  name: "Bat",
  weight: 25
};

const trophy = {
  name: "Trophy",
  weight: 45
};

const pistol = {
  name: "Pistol",
  weight: 29
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const rooms = [
  "Dinning Room",
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
  "Patio"
];

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer");
  const theKillerName = document.getElementById("killerName");

  theKiller.style.background = mystery.killer.color;
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  const theWeapon = document.getElementById("weapon");
  const theWeaponName = document.getElementById("weaponName");

  theWeapon.style.background = mystery.weapon.color;
  theWeaponName.innerHTML = mystery.weapon.name + " " + mystery.weapon.weight;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  const theRoom = document.getElementById("room");
  const theRoomName = document.getElementById("roomName");

  theRoom.style.background = mystery.room.color;
  theRoomName.innerHTML = mystery.room + " " + mystery.room;
};

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
