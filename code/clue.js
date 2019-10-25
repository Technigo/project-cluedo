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

const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A dignified, dapper and dangerous military man",
  age: 62,
  image: "assets/mustard.png",
  occupation: "Colonel"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Lady of Arlington Grange and a beautiful society hostess",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Senator"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "A quick-witted, young professor with a bow tie and glasses",
  age: 43,
  image: "assets/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "A stock femme fatale, young, cunning and attractive",
  age: 36,
  image: "assets/scarlet.png",
  occupation: "Actress"
};

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "An intrusive and kind maid",
  age: 54,
  image: "assets/white.png",
  occupation: "Maid"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10
};

const knife = {
  name: "Knife",
  weight: 4
};

const candlestick = {
  name: "Candlestick",
  weight: 7
};

const dumbbell = {
  name: "Dumbbell",
  weight: 4
};

const poison = {
  name: "Poison",
  weight: 1
};

const axe = {
  name: "Axe",
  weight: 15
};

const bat = {
  name: "Bat",
  weight: 16
};

const trophy = {
  name: "Trophy",
  weight: 20
};

const pistol = {
  name: "Pistol",
  weight: 12
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite
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
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ball room",
  "Hall",
  "Spa",
  "LivingRoom",
  "Observatory",
  "Theater",
  "GuestHouse",
  "Patio"
];

console.log(suspects);
console.log(weapons);
console.log(rooms);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const Mystery = {
  killer,
  weapon,
  room
};

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.

const pickKiller = () => {
  // This will randomly select a KILLER from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  const theKiller = document.getElementById("killer");
  const theKillerName = document.getElementById("killerName");
  const theKillerAge = document.getElementById("killerAge");
  const theKillerImage = document.getElementById("killerImage");
  const theKillerOccupation = document.getElementById("killerOccupation");
  const theKillerDescription = document.getElementById("killerDescription");

  theKillerImage.src = mystery.killer.image;

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  theKiller.style.background = mystery.killer.color;
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;

  theKillerAge.innerHTML = mystery.killer.age;
  theKillerImage.innerHTML = mystery.killer.image;
  theKillerOccupation.innerHTML = mystery.killer.occupation;
  theKillerDescription.innerHTML = mystery.killer.description;
};

//FUNCTION for picking a Weapon

const pickWeapon = () => {
  // This will randomly select a WEAPON from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  const theWeaponName = document.getElementById("weaponName");

  theWeaponName.innerHTML =
    mystery.weapon.name + " " + mystery.weapon.weight + " kg";
};

//FUNCTION for picking a Room

const pickRoom = () => {
  // This will randomly select a ROOM from the rooms. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  const theRoomName = document.getElementById("roomName");

  theRoomName.innerHTML = mystery.room;
};

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const crime = document.getElementById("mystery");
  mystery.innerHTML = `The murder was committed by ${mystery.killer.firstName +
    " " +
    mystery.killer.lastName}, in the ${mystery.room} with a ${
    mystery.weapon.name
  }.`;
};
