let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;

// Suspects objects
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 69,
  image: "./assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "rope",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He likes to philosophize",
  age: 55,
  image: "./assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "knife",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlett",
  color: "#e97171",
  description: "She likes to create nail paintings",
  age: 48,
  image: "./assets/scarlet.png",
  occupation: "Nail painter",
  favouriteWeapon: "candlestick",
};

const mrsPeacock = {
  firstName: "Elenor",
  lastName: "Peacock",
  color: "blue",
  description: "She likes to teach kids history",
  age: 58,
  image: "./assets/peacock.png",
  occupation: "Teacher",
  favouriteWeapon: "dumbbell",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He has just one leg",
  age: 74,
  image: "./assets/mustard.png",
  occupation: "Plummer",
  favouriteWeapon: "poison",
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She do as little as possible",
  age: 82,
  image: "./assets/white.png",
  occupation: "Relaxing",
  favouriteWeapon: "axe",
};

// Weapon objects
const rope = {
  name: "rope",
  id: "rope",
  weight: 10,
};

const knife = {
  name: "knife",
  id: "knife",
  weight: 2,
};

const candleStick = {
  name: "candlestick",
  id: "candlestick",
  weight: 6,
};

const dumbBell = {
  name: "dumbbell",
  id: "dumbbell",
  weight: 4,
};

const poison = {
  name: "poison",
  id: "poison",
  weight: 1,
};

const axe = {
  name: "axe",
  id: "axe",
  weight: 5,
};

const bat = {
  name: "bat",
  id: "axe",
  weight: 3,
};

const throphy = {
  name: "throphy",
  id: "throphy",
  weight: 8,
};

const pistol = {
  name: "pistol",
  id: "pistol",
  weight: 7,
};

// Arrays for suspects, weapons and rooms
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
  candleStick,
  dumbBell,
  poison,
  bat,
  throphy,
  pistol,
];

const rooms = [
  "Dinning Room",
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

const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Mystery object
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

// This randomly change favourite weapons of each person
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    const randomWeapon = randomSelector(weapons);
    suspect.favouriteWeapon = randomWeapon.id;
  });
};

const cleanRevealMysteryMessage = () => {
  document.getElementById("mystery").innerHTML = "";
};

const toggleAnimationDeckCard = (id) => {
  document.getElementById(id).classList.toggle("deck-heartbeat");
};

// Pick killer function
const pickKiller = () => {
  if (!killerPicked) {
    cleanRevealMysteryMessage(); // Removes "Reveal the crime" message if any
    toggleAnimationDeckCard("killerCard");
    setTimeout(() => {
      shuffleFavouriteWeapon();
      mystery.killer = randomSelector(suspects);
      document.getElementById("killerCard").style.background =
        mystery.killer.color;
      document.getElementById(
        "killerName"
      ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
      document.getElementById(
        "killerAge"
      ).innerHTML = `Age: ${mystery.killer.age}`;
      document.getElementById(
        "killerOccupation"
      ).innerHTML = `Occupation: ${mystery.killer.occupation}`;
      document.getElementById("killerImage").src = `${mystery.killer.image}`;
      document.getElementById(
        "killerDescription"
      ).innerHTML = `${mystery.killer.description}`;
      document.getElementById(
        "killerFavouriteWeapon"
      ).innerHTML = `Favourite Weapon: ${mystery.killer.favouriteWeapon}`;
    }, 2000);
    killerPicked = true;
  }
};

// Pick weapon function
const pickWeapon = () => {
  if (!weaponPicked) {
    cleanRevealMysteryMessage(); // Removes "Reveal the crime" message if any
    toggleAnimationDeckCard("weaponCard");
    setTimeout(() => {
      mystery.weapon = randomSelector(weapons);
      document.getElementById(
        "weaponName"
      ).innerHTML = `${mystery.weapon.name}`;
      document.getElementById(
        "weaponWeight"
      ).innerHTML = `Weight: ${mystery.weapon.weight} lbs`;
    }, 2000);
    weaponPicked = true;
  }
};

// Pick room function
const pickRoom = () => {
  if (!roomPicked) {
    cleanRevealMysteryMessage(); // Removes "Reveal the crime" message if any
    toggleAnimationDeckCard("roomCard");
    setTimeout(() => {
      mystery.room = randomSelector(rooms);
      document.getElementById("roomName").innerHTML = `${mystery.room}`;
    }, 2000);
    roomPicked = true;
  }
};

// Reveal function
const revealMystery = () => {
  if (
    mystery.killer === null ||
    mystery.weapon === null ||
    mystery.room === null
  ) {
    document.getElementById("mystery").innerHTML =
      "Click all cards above to reveal the crime!";
  } else {
    document.getElementById(
      "mystery"
    ).innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} room with a ${mystery.weapon.name}!`;
  }
};

document.getElementById("killerCard").addEventListener("click", pickKiller);
document.getElementById("weaponCard").addEventListener("click", pickWeapon);
document.getElementById("roomCard").addEventListener("click", pickRoom);
document.getElementById("revealCard").addEventListener("click", revealMystery);
