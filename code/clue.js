// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "images/green.jpg",
  occupation: "Entrepreneur",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He has a tendency to over explain things",
  age: 45,
  image: "images/plum.jpg",
  occupation: "Professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Used to getting her ways",
  age: 49,
  image: "images/scarlett",
  occupation: "Art dealer",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "A nuanced yet bold woman",
  age: 55,
  image: "images/peacock.jpg",
  occupation: "CEO of an oil company",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Stubborn know-it-all gentleman",
  age: 65,
  image: "images/mustard.jpg",
  occupation: "Retired colonel",
};

const mrsWhite = {
  firstName: "Rosie",
  lastName: "White",
  color: "white",
  description: "Loyal, observant and to the point",
  age: 65,
  image: "images/white.jpg",
  occupation: "Head Maid",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  material: "jute",
  image: "images/weapon/rope-coil.svg",
};

const knife = {
  name: "knife",
  weight: 5,
  material: "steel and wood",
  image: "images/weapon/sacrificial-dagger.svg",
};

const candlestick = {
  name: "candlestick",
  weight: 25,
  material: "brass",
  image: "images/weapon/unlit-candelabra.svg",
};

const dumbbell = {
  name: "dumbbell",
  weight: 50,
  material: "steel",
  image: "",
};

const poison = {
  name: "poison",
  weight: 2,
  material: "liquid",
  image: "images/weapon/poison-bottle.svg",
};

const axe = {
  name: "axe",
  weight: 15,
  material: "steel and wood",
  image: "images/weapon/wood-axe.svg",
};

const bat = {
  name: "bat",
  weight: 6,
  material: "aluminium",
  image: "images/weapon/lead-pipe.svg"
};

const trophy = {
  name: "trophy",
  weight: 30,
  material: "brass",
  image: "",
};

const pistol = {
  name: "pistol",
  weight: 10,
  material: "aluminium",
  image: "images/weapon/revolver.svg"
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
  document.getElementById("killerName").innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById("killerImage").src = `${mystery.killer.image}`;
  document.getElementById("killerOccupation").innerHTML = `${mystery.killer.occupation}`;
  document.getElementById("killerDescription").innerHTML = `${mystery.killer.description}`;
  document.getElementById("killerCard").onclick = pickKiller;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name} ${mystery.weapon.material}`;
  document.getElementById("weaponImage").src = `${mystery.weapon.image}`;
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
