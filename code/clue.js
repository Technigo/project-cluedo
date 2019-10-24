// All the suspects

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  trait: "Intellegent",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const mrsWhite = {
  firstName: "Daniella",
  lastName: "White",
  color: "white",
  trait: "Eavesdropper",
  description: "Knows every secret of the house",
  age: 74,
  image: "assets/white.png",
  occupation: "Maid"
};

const profPlum = {
  firstName: "Constantine",
  lastName: "Plum",
  color: "purple",
  trait: "Cultleader",
  description:
    "Graduate from arkham community college with great interest for the occult",
  age: 37,
  image: "assets/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Johansson",
  lastName: "Scarlet",
  color: "red",
  trait: "Charm",
  description: "Looks that kill",
  age: 37,
  image: "assets/scarlet.png",
  occupation: "Secret agent"
};

const mrsPeacock = {
  firstName: "Agatha",
  lastName: "Peacock",
  color: "Blue",
  trait: "Cunning",
  description: "Has a drinking problem",
  age: 57,
  image: "assets/peacock.png",
  occupation: "Housewife"
};

const mrMustard = {
  firstName: "Napoleon",
  lastName: "Mustard",
  color: "yellow",
  trait: "Strength",
  description: "Owner of the house, married to mrs Peacock.",
  age: 73,
  image: "assets/mustard.png",
  occupation: "General"
};

// The weapons

const rope = {
  name: "Rope",
  weight: 1,
  type: "Strangulation"
};

const knife = {
  name: "Knife",
  weight: 0.5,
  type: "Blade"
};

const candlestick = {
  name: "Candlestick",
  weight: 2,
  type: "Blunt"
};

const dumbbell = {
  name: "Dumbbell",
  weight: 5,
  type: "Blunt"
};

const poison = {
  name: "Poison",
  weight: 0.1,
  type: "Cunning"
};

const axe = {
  name: "Axe",
  weight: 2,
  type: "Blade"
};

const bat = {
  name: "Bat",
  weight: 1.5,
  type: "Blunt"
};

const trophy = {
  name: "Trophy",
  weight: 4,
  type: "Blunt"
};

const pistol = {
  name: "Pistol",
  weight: 1.8,
  type: "Projectile"
};

const crossbow = {
  name: "Crossbow",
  weight: 4.5,
  type: "Projectile"
};

//Arrays for suspects, weapons and the rooms

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
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
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living room",
  "Observatory",
  "Theatre",
  "Guest house",
  "Patio"
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {};

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer");
  theKiller.style.background = mystery.killer.color;

  const theKillerName = document.getElementById("killerName");
  const theKillerTrait = document.getElementById("killerTrait");
  const theKillerImage = document.getElementById("killerImage");
  const theKillerOccupation = document.getElementById("killerOccupation");
  const theKillerDescription = document.getElementById("killerDescription");
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;
  theKillerTrait.innerHTML = mystery.killer.trait;
  theKillerImage.src = mystery.killer.image;
  theKillerOccupation.innerHTML = mystery.killer.occupation;
  theKillerDescription.innerHTML = mystery.killer.description;
};

// Randomly picks a Weapon
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  const theWeaponName = document.getElementById("weaponName");
  const theWeaponWeight = document.getElementById("weaponWeight");
  const theWeaponType = document.getElementById("weaponType");

  theWeaponName.innerHTML = mystery.weapon.name;
  theWeaponWeight.innerHTML = mystery.weapon.weight;
  theWeaponType.innerHTML = mystery.weapon.type;
};

// Randomly picks a room
const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  const theRoomName = document.getElementById("roomName");

  theRoomName.innerHTML = mystery.room;
};

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `It was the ${
    mystery.killer.occupation
  }, ${mystery.killer.firstName +
    " " +
    mystery.killer.lastName} who did it! Using a ${
    mystery.weapon.name
  } wich is a ${mystery.weapon.type} weapon and weighs ${
    mystery.weapon.weight
  }kg. The gruesome murder took place in the ${mystery.room} `;
};

document.getElementById("mystery").addEventListener("click", randomSelector);
