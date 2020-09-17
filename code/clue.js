///////////////////////////// *** CLUEDO *** /////////////////////////////

// SUSPECTS:

// *** 1. Mr Green
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "bat", //exactly the same as weapon name, like 'name: "bat",'
};
// *** 2. Professor Plum
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is widely seen as the intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "trophy",
};
// *** 3. Miss Scarlet
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Young, cunning, and highly attractive",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress",
  favouriteWeapon: "pistol",
};
// *** 4. Mrs Peacock
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Maintains her dignity in almost all cases",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite",
  favouriteWeapon: "knife",
};
// *** 5. Colonel Mustard
const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Both dignified and dangerous",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Colonel",
  favouriteWeapon: "candlestick",
};
// *** 6. Mrs White
const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "A frazzled servant",
  age: 67,
  image: "assets/white.png",
  occupation: "Housekeeper",
  favouriteWeapon: "poison",
};

////////////////////////////////////////////////////////////////////////////////////////

// WEAPONS:

// *** 1. rope
const rope = {
  name: "rope",
  weight: 10,
};
// *** 2. knife
const knife = {
  name: "knife",
  weight: 2,
};
// *** 3. candlestick
const candlestick = {
  name: "candlestick",
  weight: 4,
};
// *** 4. dumbbel
const dumbbel = {
  name: "dumbbel",
  weight: 7,
};
// *** 5. poison
const poison = {
  name: "poison",
  weight: 1,
};
// *** 6. axe
const axe = {
  name: "axe",
  weight: 5,
};
// *** 7. bat
const bat = {
  name: "bat",
  weight: 6,
};
// *** 8. trophy
const trophy = {
  name: "trophy",
  weight: 8,
};
// *** 9. pistol
const pistol = {
  name: "pistol",
  weight: 3,
};

console.log(profPlum.occupation);
console.log(axe.weight);

////////////////////////////////////////////////////////////////////////////////////////

// ARRAYS:

// suspects array
const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite,
];

// weapons array
const weapons = [
  rope,
  knife,
  candlestick,
  dumbbel,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

// rooms array
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

console.log(suspects);
console.log(weapons);
console.log(rooms);

console.log(suspects[3]);
console.log(weapons[0]);
console.log(rooms[rooms.length - 1]);

////////////////////////////////////////////////////////////////////////////////////////

// Random selector
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Mystery object
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

////////////////////////////////////////////////////////////////////////////////////////

// *** Clicking "KILLER CARD" ***

const pickKiller = () => {
  // flips card
  document.getElementById("killerCard").classList.add("flip");

  // time delay starts
  setTimeout(() => {
    // random killer selector
    mystery.killer = randomSelector(suspects);

    // changing card info
    document.getElementById("killerCard").style.background =
      mystery.killer.color;
    document.getElementById(
      "killerName"
    ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
    document.getElementById(
      "killerAge"
    ).innerHTML = `${mystery.killer.age} yaers`;
    document.getElementById(
      "killerOccupation"
    ).innerHTML = `${mystery.killer.occupation}`;
    document.getElementById("killerImage").src = `${mystery.killer.image}`;
    document.getElementById(
      "killerDescription"
    ).innerHTML = `${mystery.killer.description}`;
    document.getElementById(
      "favouriteWeapon"
    ).innerHTML = `Favourite weapon:<br>${mystery.killer.favouriteWeapon}`;

    // time delay millisecond
  }, 300);
};

document.getElementById("killerCard").addEventListener("click", pickKiller);

////////////////////////////////////////////////////////////////////////////////////////

// *** Clicking "WEAPON CARD" ***

const pickWeapon = () => {
  // flips card
  document.getElementById("weaponCard").classList.add("flip");

  // time delay stars
  setTimeout(() => {
    // random weapon selector
    mystery.weapon = randomSelector(weapons);

    // changing card info
    document.getElementById("weaponCard");
    document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
    document.getElementById(
      "weaponWeight"
    ).innerHTML = `${mystery.weapon.weight}`;

    // time delay millisecond
  }, 300);
};

document.getElementById("weaponCard").addEventListener("click", pickWeapon);

////////////////////////////////////////////////////////////////////////////////////////

// *** Clicking "ROOM CARD" ***

const pickRoom = () => {
  // flips card
  document.getElementById("roomCard").classList.add("flip");

  // time delay starts
  setTimeout(() => {
    // random room selector
    mystery.room = randomSelector(rooms);

    // changing card info
    document.getElementById("roomCard");
    document.getElementById("roomName").innerHTML = `${mystery.room}`;

    // time delay millisecond
  }, 300);
};

document.getElementById("roomCard").addEventListener("click", pickRoom);

// *** Favourite weapon ***

const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favouriteWeapon = randomSelector(weapons).name;
  });
};

////////////////////////////////////////////////////////////////////////////////////////

// *** Reveal Mystery ***

const revealMystery = () => {
  if (mystery.killer === null) {
    document.getElementById("mystery").innerHTML = "Select a killer";
  } else if (mystery.weapon === null) {
    document.getElementById("mystery").innerHTML = "Select a weapon";
  } else if (mystery.room === null) {
    document.getElementById("mystery").innerHTML = "Select a room";
  } else {
    document.getElementById(
      "mystery"
    ).innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
  }
  //shuffleFavouriteWeapon(); in reaveal button instead!
};
