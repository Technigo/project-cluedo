// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

// SUSPECTS
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/suspects/green.png",
  occupation: "Entrepreneur"
};

const mrFluffy = {
  firstName: "Grumpy",
  lastName: "Cat",
  color: "black",
  description: "He just grumpy",
  age: 5,
  image: "assets/suspects/cat.jpg",
  occupation: "Cat"
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is smart",
  age: 38,
  image: "assets/suspects/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "pink",
  description: "femme fatale",
  age: 20,
  image: "assets/suspects/scarlet.png",
  occupation: "Actress"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Queen-like",
  age: 32,
  image: "assets/suspects/peacock.png",
  occupation: "Socialite"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Military man",
  age: 60,
  image: "assets/suspects/mustard.png",
  occupation: "Colonel"
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "",
  age: 70,
  image: "assets/suspects/white.png",
  occupation: "Housekeeper"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10,
  image: "assets/weapons/rope.png"
};

const knife = {
  name: "Knife",
  weight: 20,
  image: "assets/weapons/knife.png"
};

const candlestick = {
  name: "Candlestick",
  weight: 5,
  image: "assets/weapons/candlestick.png"
};

const dumbbell = {
  name: "Dumbbell",
  weight: 30,
  image: "assets/weapons/dumbbell.png"
};

const poison = {
  name: "Poison",
  weight: 2,
  image: "assets/weapons/poison.png"
};

const axe = {
  name: "Axe",
  weight: 80,
  image: "assets/weapons/axe.png"
};

const bat = {
  name: "Bat",
  weight: 25,
  image: "assets/weapons/bat.png"
};

const trophy = {
  name: "Trophy",
  weight: 45,
  image: "assets/weapons/trophy.png"
};

const pistol = {
  name: "Pistol",
  weight: 29,
  image: "assets/weapons/gun.png"
};

// THE ROOMS

const dinningRoom = {
  name: "Dinning Room",
  image: "assets/rooms/living-room.png"
};

const conservatory = {
  name: "Conservatory",
  image: "assets/rooms/conservatory.png"
};

const kitchen = {
  name: "Kitchen",
  image: "assets/rooms/kitchen.png"
};

const study = {
  name: "Study",
  image: "assets/rooms/study.png"
};

const library = {
  name: "Library",
  image: "assets/rooms/study.png"
};

const billiardRoom = {
  name: "Billiard Room",
  image: "assets/rooms/living-room.png"
};

const lounge = {
  name: "Lounge",
  image: "assets/rooms/study.png"
};

const ballroom = {
  name: "Ballroom",
  image: "assets/rooms/study.png"
};

const hall = {
  name: "Hall",
  image: "assets/rooms/hall.png"
};

const spa = {
  name: "Spa",
  image: "assets/rooms/spa.png"
};
const livingRoom = {
  name: "Living Room",
  image: "assets/rooms/living-room.png"
};

const observatory = {
  name: "Observatory",
  image: "assets/rooms/study.png"
};

const theater = {
  name: "Theater",
  image: "assets/rooms/study.png"
};

const guestHouse = {
  name: "Guest House",
  image: "assets/rooms/guest-house.png"
};

const patio = {
  name: "Patio",
  image: "assets/rooms/study.png"
};

/*TIME OF THE MURDER*/

const morning = {
  name: "in the break of dawn",
  image: "assets/time/morningsun.png"
};

const day = {
  name: "at noon",
  image: "assets/time/sun.png"
};

const night = {
  name: "in the evening",
  image: "assets/time/moon.png"
};

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrFluffy,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
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
  dinningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
];

const times = [morning, day, night];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {};

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer");
  const theKillerName = document.getElementById("killerName");
  const theKillerImage = document.getElementById("killerImage");
  const thekillerOccupation = document.getElementById("killerOccupation");

  theKiller.style.background = mystery.killer.color;
  theKillerImage.src = mystery.killer.image;
  thekillerOccupation.innerHTML = mystery.killer.occupation;
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  const theWeapon = document.getElementById("weapon");
  const theWeaponName = document.getElementById("weaponName");
  const theWeaponImage = document.getElementById("weaponImage");

  theWeapon.style.background = mystery.weapon.color;
  theWeaponImage.src = mystery.weapon.image;
  theWeaponName.innerHTML = mystery.weapon.name + " " + mystery.weapon.weight;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  const theRoom = document.getElementById("room");
  const theRoomName = document.getElementById("roomName");
  const theRoomImage = document.getElementById("roomImage");

  // theRoom.style.background = mystery.room.color;
  theRoomName.innerHTML = mystery.room.name;
  theRoomImage.src = mystery.room.image;
};

const pickTime = () => {
  mystery.time = randomSelector(times);
  const theTime = document.getElementById("times");
  const theTimeName = document.getElementById("timeName");
  const theTimeImage = document.getElementById("timeImage");

  theTimeName.innerHTML = mystery.time.name;
  theTimeImage.src = mystery.time.image;
};

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  if (!mystery.killer || !mystery.room || !mystery.weapon || !mystery.time) {
    document.getElementById("mystery").innerHTML =
      '<img src="https://media.giphy.com/media/26DN6iTo6WZoROvDi/source.gif" />';
  } else {
    document.getElementById(
      "mystery"
    ).innerHTML = `<p>The murder was comitted by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name}, ${mystery.time.name}  with a ${mystery.weapon.name}.</p>`;
  }
};
