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

const prPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "violet",
  description: "A quick-witted professor",
  age: 35,
  image: "assets/plump.png",
  occupation: "Professor",
};

const missScarlett = {
  firstName: "Cassandra",
  lastName: "Scarlett",
  color: "orange",
  description: "Femme Fatale",
  age: 30,
  image: "assets/scarlet.png",
  occupation: "International spy",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "An elderly, still-attractive woman",
  age: 55,
  image: "assets/peacock.png",
  occupation: "Ornithologist",
};

const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Hunter and colonial imperialist",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Colonel",
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "Widow of a nuclear physicist",
  age: 62,
  image: "assets/white.png",
  occupation: "Servant",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
};

const knife = {
  name: "knife",
  weight: 1,
};

const candlestick = {
  name: "candlestick",
  weight: 1,
};

const dumbell = {
  name: "dumbell",
  weight: 5,
};

const poison = {
  name: "poison",
  weight: 1,
};

const axe = {
  name: "axe",
  weight: 7,
};

const bat = {
  name: "bat",
  weight: 4,
};

const trophy = {
  name: "trophy",
  weight: 8,
};

const pistol = {
  name: "pistol",
  weight: 3,
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  prPlum,
  missScarlett,
  mrsPeacock,
  colMustard,
  mrsWhite,

  // ...  and the rest
];

const weapons = [
  rope,
  knife,
  candlestick,
  dumbell,
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
  "Patio"
];

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
