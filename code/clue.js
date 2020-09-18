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
  color: "plum",
  description: "He has a tendency to over explain things",
  age: 45,
  image: "assets/plum.png",
  occupation: "Professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Used to getting her ways",
  age: 49,
  image: "assets/scarlet.png",
  occupation: "Art dealer",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "A nuanced yet bold woman",
  age: 55,
  image: "assets/peacock.png",
  occupation: "CEO of an oil company",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Stubborn know-it-all gentleman",
  age: 65,
  image: "assets/mustard.png",
  occupation: "Retired colonel",
};

const mrsWhite = {
  firstName: "Rosie",
  lastName: "White",
  color: "white",
  description: "Loyal, observant and to the point",
  age: 65,
  image: "assets/white.png",
  occupation: "Butler",
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
  name: "candlestick",
  weight: 25,
};

const dumbbell = {
  name: "dumbbell",
  weight: 50,
};

const poison = {
  name: "poison",
  weight: 2,
};

const axe = {
  name: "axe",
  weight: 15,
};

const bat = {
  name: "bat",
  weight: 6,
};

const trophy = {
  name: "trophy",
  weight: 30,
};

const pistol = {
  name: "pistol",
  weight: 10,
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
let rooms = [
  "diningRoom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiardRoom",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theater",
  "guestHouse",
  "patio",
];

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
  // ...  and the rest
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
  weapons: "",
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
  document.getElementById("killerage").innerHTML = `${mystery.killer.age}`;
  document.getElementById("killerCard").onclick = pickKiller;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  document.getElementById(
    "weaponName"
  ).innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`;
  document.getElementById("weaponCard").onclick = pickWeapon;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  document.getElementById("roomName").innerHTML = `${mystery.room}`;
  document.getElementById("roomCard").onclick = pickRoom;
};

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById(
    "mystery"
  ).innerHTML = `The murder was comitted by ${mystery.killer.firstName} in the ${mystery.room} with a ${mystery.weapon.name}`;
  document.getElementById("mysteryBtn").onclick = revealMystery;
};
