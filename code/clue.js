// STEP 1

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

// STEP 2

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

// STEP 3

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  document.getElementById("killerCard").classList.add("flip");

  // HÄNDER DIREKT

  setTimeout(() => {
    // HÄNDER EFTER 1.5 SEKUNDER

    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects);

    // killerCard.onclick = rotateCard

    // function rotateCard() {
    //   this.classList.add('rotate')
    //   // the word "this" refers to the element that is the selector.
    // }

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
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
  }, 300);
};

document.getElementById("killerCard").addEventListener("click", pickKiller);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// Random weapon picker
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById("weaponCard");
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `${mystery.weapon.weight}`;
};

document.getElementById("weaponCard").addEventListener("click", pickWeapon);

// Random room picker
const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomCard");
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};

document.getElementById("roomCard").addEventListener("click", pickRoom);

// Favourite weapon
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favouriteWeapon = randomSelector(weapons).name;
  });
};

// STEP 4 + validation

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
