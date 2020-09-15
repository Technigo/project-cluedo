const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Heis funny",
  age: 40,
  image: "assets/plum.png",
  occupation: "Professor of Mathematics",
};
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "orange",
  description: "She is beautiful and very smart",
  age: 30,
  image: "assets/scarlet.png",
  occupation: "Writer",
};
const peacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is elegant and loves luxury",
  age: 35,
  image: "assets/peacock.png",
  occupation: "An owner of an antique boutique",
};
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is tough and stubborn",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Colonel",
};
const mrsWhite = {
  firstName: "Carol",
  lastName: "White",
  color: "white",
  description: "Perfect negotiator",
  age: 77,
  image: "assets/white.png",
  occupation: "Household manager",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
};
const knife = {
  name: "knife",
  weight: 0.2,
};
const candlestick = {
  name: "candlestick",
  weight: 5,
};
const dumbbell = {
  name: "dumbbell",
  weight: 7,
};
const poison = {
  name: "poison",
  weight: 0.1,
};
const axe = {
  name: "axe",
  weight: 2,
};
const bat = {
  name: "bat",
  weight: 3,
};
const trophy = {
  name: "trophy",
  weight: 1,
};
const pistol = {
  name: "pistol",
  weight: 0.6,
};
console.log(peacock.age);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  // ...  and the rest
];

const weapons = [];

const rooms = [];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

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

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
