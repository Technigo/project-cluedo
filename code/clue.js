//killers objects
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
  occupation: "An antique boutique owner",
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

// weapons objects

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

// grouping killers, weapons and rooms in arrays

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  peacock,
  mrMustard,
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
  "diningroom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiardroom",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "livingroom",
  "observatory",
  "theater",
  "guesthouse",
  "patio",
];

// function that randomly selecting one item from the array that you pass into the function
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

//object mystery that will store new random values
const mystery = {};

// This function randomly selects a killer from the suspects. And add that to the mystery object.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer,age,occupation and description
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById(
    "killerOccupation"
  ).innerHTML = `${mystery.killer.occupation}`;
  document.getElementById(
    "killerDescription"
  ).innerHTML = `${mystery.killer.description}`;
};
//when you click on the killerCard card it will call pickKiller function

document.getElementById("killerCard").onclick = pickKiller;

// This will randomly select a weapon from the weapons. And add that to the mystery object.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  //This will show the weapon name and weight on the card

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;

  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight}`;
};
//when you click on the weaponCard card it will call pickWeapon function
document.getElementById("weaponCard").onclick = pickWeapon;

// This will randomly select a room from the rooms. And add that to the mystery object.
const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  //This will show the room name on the card
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};
//when you click on the roomCard card it will call pickRoom function
document.getElementById("roomCard").onclick = pickRoom;

// This is revealMystery function that will be invoked when you click that button.
const revealMystery = () => {
  pickKiller();
  pickWeapon();
  pickRoom();
  document.getElementById(
    "noclue"
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
};
document.getElementById("lastbutton").onclick = revealMystery;
