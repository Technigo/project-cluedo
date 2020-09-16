// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "darkseagreen",
  description: "He has a lot of connections.",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "thistle",
  description:
    // "An archaeologist seeking funding for his next expedition to Egypt.",
    "A former psychiatrist who lost his medical license for having an affair with a patient.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "indianred",
  description: "A movie star who will do anything to stay in the spotlight.",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "cornflowerblue",
  description:
    "A manners-freak who, despite her innocent appearance, is a formidable politician.",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "goldenRod",
  description: "An expert in weapons and conspiracy.",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Colonel",
};

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "linen",
  description:
    "The widow of a nuclear physicist whose death she is suspected of being behind.",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10,
  image: "img/rope-1295003_640.png",
};

const knife = {
  name: "Knife",
  weight: 1,
  image: "img/knife-2930492_640.png",
};

const candlestick = {
  name: "Candlestick",
  weight: 6,
  image: "img/candles-3913775_640.png",
};

const dumbbell = {
  name: "Dumbbell",
  weight: 20,
  image: "img/black-1295124_640.png",
};

const poison = {
  name: "Poison",
  weight: 2,
  image: "img/poison-576608_640.png",
};

const axe = {
  name: "Axe",
  weight: 50,
  image: "img/axe-159659_640.png",
};

const bat = {
  name: "Bat",
  weight: 1.5,
  image: "img/base-25755_640.png",
};

const trophy = {
  name: "Trophy",
  weight: 10,
  image: "img/cup-1757500_640.png",
};

const pistol = {
  name: "Pistol",
  weight: 2,
  image: "img/gun-5517424_640.png",
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
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

const rooms = [
  "Dining Room",
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
  "Patio",
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
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
  document.getElementById("killerAge").innerHTML = mystery.killer.age;

  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById("killerDescription").innerHTML =
    mystery.killer.description;
  document.getElementById("killerOccupation").innerHTML =
    mystery.killer.occupation;
  console.log(mystery.killer.occupation);
};
pickKiller();

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a weapon from the array. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  // document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById("weaponName").innerHTML = mystery.weapon.name;
  document.getElementById("weaponWeight").innerHTML = mystery.weapon.weight;
  document.getElementById("weaponImage").src = mystery.weapon.image;
};
pickWeapon();

// This function will be invoked when you click on the room card.
const pickRoom = () => {
  // This will randomly select a room from the array. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  //document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};
pickRoom();

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById(
    "mystery"
  ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
};
