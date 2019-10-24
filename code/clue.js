// All the suspects

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const mrsWhite = {
  firstName: "Daniella",
  lastName: "White",
  color: "white",
  description: "Knows every secret of the house",
  age: 74,
  image: "assets/white.png",
  occupation: "Maid"
};

const profPlum = {
  firstName: "Constantine",
  lastName: "Plum",
  color: "purple",
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
  description: "Looks that kill",
  age: 37,
  image: "assets/scarlet.png",
  occupation: "Secret agent"
};

const mrsPeacock = {
  firstName: "Agatha",
  lastName: "Peacock",
  color: "Blue",
  description: "Has a drinking problem",
  age: 57,
  image: "assets/peacock.png",
  occupation: "Stay at home wife"
};

const mrMustard = {
  firstName: "Napoleon",
  lastName: "Mustard",
  color: "yellow",
  description: "Owner of the house, married to mrs Peacock.",
  age: 73,
  image: "assets/mustard.png",
  occupation: "General"
};

// The weapons

const rope = {
  name: "Rope",
  weight: 10,
  type: "Other"
};

const knife = {
  name: "Knife",
  weight: 5,
  type: "Blade"
};

const candlestick = {
  name: "Candlestick",
  weight: 20,
  type: "Blunt"
};

const dumbbell = {
  name: "Dumbbell",
  weight: 50,
  type: "Blunt"
};

const poison = {
  name: "Poison",
  weight: 1,
  type: "Other"
};

const axe = {
  name: "Axe",
  weight: 20,
  type: "Blade"
};

const bat = {
  name: "Bat",
  weight: 15,
  type: "Blunt"
};

const trophy = {
  name: "Trophy",
  weight: 40,
  type: "Blunt"
};

const pistol = {
  name: "Pistol",
  weight: 18,
  type: "Projectile"
};

const crossbow = {
  name: "Crossbow",
  weight: 45,
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
  "diningRoom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiardRoom",
  "lounge",
  "ballRoom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theatre",
  "guestHouse",
  "patio"
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = weapons => {
  return weapons[Math.floor(Math.random() * weapons.length)];
};
console.log(randomSelector);
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

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
