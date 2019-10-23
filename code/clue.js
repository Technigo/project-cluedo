// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He has glasses",
  age: 50,
  image: "assets/plum.png",
  occupation: "Biology Professor"
};

const missScarlett = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "scarlet",
  description: "She is flirtatious",
  age: 37,
  image: "assets/scarlet.png",
  occupation: "Teacher"
};

const MrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "peacock",
  description: "She is wealthy",
  age: 49,
  image: "assets/peacock.png",
  occupation: "House Wife"
};

const clMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "mustard",
  description: "He is strict",
  age: 70,
  image: "assets/mustard.png",
  occupation: "Colonel"
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She is wise",
  age: 75,
  image: "assets/white.png",
  occupation: "Retired"
};
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 500
};

const knife = {
  name: "knife",
  weight: 700
};

const candleStick = {
  name: "candlestick",
  weight: 1200
};

const dumbbell = {
  name: "dumbbell",
  weight: 4000
};

const poison = {
  name: "poison",
  weight: 600
};

const axe = {
  name: "axe",
  weight: 3000
};

const bat = {
  name: "bat",
  weight: 2000
};

const trophy = {
  name: "trophy",
  weight: 800
};

const pistol = {
  name: "pistol",
  weight: 101
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = "Dining Room";
const conservatory = "Conservatory";
const kitchen = "Kitchen";
const study = "Study";
const library = "Library";
const billiardRoom = "Billiard Room";
const lounge = "Lounge";
const ballRoom = "Ball room";
const hall = "Hall";
const spa = "Spa";
const livingRoom = "Living Room";
const observatory = "Observatory";
const theater = "Theater";
const guestHouse = "Guest House";
const patio = "Patio";

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlett,
  mrsPeacock,
  clMustard
];

const weapons = [
  rope,
  knife,
  candleStick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
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
  patio
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

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
