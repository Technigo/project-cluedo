// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "Has a lot of connections",
  age: 45,
  image: "./assets/green.png",
  occupation: "Entrepreneur",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Enjoys the outdoors",
  age: 34,
  image: "./assets/plum.png",
  occupation: "Professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Collects weapons",
  age: 42,
  image: "./assets/scarlet.png",
  occupation: "Recruiter",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Strong swimmer",
  age: 29,
  image: "./assets/peacock.png",
  occupation: "Novelist",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Collects war memorabilia",
  age: 63,
  image: "./assets/mustard.png",
  occupation: "Colonel",
};

const mrsWhite = {
  firstName: "Josephine",
  lastName: "White",
  color: "white",
  description: "Avid reader",
  age: 45,
  image: "./assets/white.png",
  occupation: "Chef",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
};

const knife = {
  name: "knife",
  weight: 25,
};

const candlestick = {
  name: "candlestick",
  weight: 105,
};

const dumbbell = {
  name: "dumbbell",
  weight: 150,
};

const poison = {
  name: "poison",
  weight: 5,
};

const axe = {
  name: "axe",
  weight: 85,
};

const bat = {
  name: "bat",
  weight: 30,
};

const trophy = {
  name: "trophy",
  weight: 20,
};

const pistol = {
  name: "pistol",
  weight: 35,
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = "Dining Room";

const conservatory = "Conservatory";

const kitchen = "Kitchen";

const study = "Study";

const library = "Library";

const billiardRoom = "Billiard Room";

const lounge = "Lounge";

const ballRoom = "Ball Room";

const hall = "Hall";

const spa = "Spa";

const livingRoom = "Living Room";

const observatory = "Observatory";

const theater = "Theater";

const guestHouse = "Guest House";

const patio = "Patio";

console.log(missScarlet.firstName);
console.log(knife.name);

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
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio,
];

console.log(rooms);
console.log(weapons);
console.log(suspects);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

console.log(randomSelector(suspects));

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
  console.log(mystery);
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById(
    "killerOccupation"
  ).innerHTML = `${mystery.killer.occupation}`;
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById(
    "killerDescription"
  ).innerHTML = `${mystery.killer.description}`;
};

const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);
  console.log(mystery);
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight}`;
};

const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms);
  console.log(mystery);
  // This will change the background color of the card to the one connected to
  // the chosen killer and show the full name of the killer. Feel free to add
  // more things to show about the killer.
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};

const revealMystery = (mystery) => {
  document.getElementById(
    "mystery"
  ).innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`;
  //The murder was committed by Jacob Green, in the living room with a rope.
};

// document.getElementById("killerCard").onclick = pickKiller();
// document.getElementById("weaponCard").onclick = pickWeapon();
// document.getElementById("roomCard").onclick = pickRoom();
// document.getElementById("revealButton").onclick = revealMystery(mystery);

//console.log(mystery);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
