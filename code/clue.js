// STEP 1 - Objects

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "rgb(86, 145, 81)",
  description: "He has a lot of connections",
  age: 45,
  image: "images/green.jpg",
  occupation: "Entrepreneur",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "rgb(68, 48, 97)",
  description: "He has a tendency to over explain things",
  age: 45,
  image: "images/plum.jpg",
  occupation: "Professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "rgb(207, 68, 71)",
  description: "Used to getting her ways",
  age: 49,
  image: "images/scarlett.jpg",
  occupation: "Art dealer",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "rgb(103, 174, 188)",
  description: "A nuanced yet bold woman",
  age: 55,
  image: "images/peacock.jpg",
  occupation: "CEO of an oil company",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "rgb(222, 194, 96)",
  description: "Stubborn know-it-all gentleman",
  age: 65,
  image: "images/mustard.jpg",
  occupation: "Retired colonel",
};

const mrsWhite = {
  firstName: "Rosie",
  lastName: "White",
  color: "rgb(226, 223, 214)",
  description: "Loyal, observant and to the point",
  age: 65,
  image: "images/white.jpg",
  occupation: "Head Maid",
};


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

//STEP 2 - arrays

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

const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const mystery = {
  killer: "",
  weapons: "",
  room: "",
};

//STEP 3 - Functions

const pickKiller = () => {

  mystery.killer = randomSelector(suspects);

  document.getElementById("killerCard").style.background = mystery.killer.color;

  document.getElementById("killerName").innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById("killerImage").src = `${mystery.killer.image}`;
  document.getElementById("killerOccupation").innerHTML = `${mystery.killer.occupation}`;
  document.getElementById("killerDescription").innerHTML = `${mystery.killer.description}`;
  document.getElementById("killerCard").onclick = pickKiller;
};


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

// STEP 4 
const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was comitted by ${mystery.killer.firstName} in the ${mystery.room} with a ${mystery.weapon.name}`;
  document.getElementById("mysteryBtn").onclick = revealMystery;
  //Function that reloads page 10s after revalMystery button is clicked
  setTimeout(() => window.location.reload(), 10000);
};
