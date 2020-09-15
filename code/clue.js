let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;
// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "Has a lot of connections",
  age: 45,
  image: "./assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "knife",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Enjoys the outdoors",
  age: 34,
  image: "./assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "poison",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Collects weapons",
  age: 42,
  image: "./assets/scarlet.png",
  occupation: "Recruiter",
  favouriteWeapon: "pistol",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Strong swimmer",
  age: 29,
  image: "./assets/peacock.png",
  occupation: "Novelist",
  favouriteWeapon: "bat",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Collects war memorabilia",
  age: 63,
  image: "./assets/mustard.png",
  occupation: "Colonel",
  favouriteWeapon: "pistol",
};

const mrsWhite = {
  firstName: "Josephine",
  lastName: "White",
  color: "white",
  description: "Avid reader",
  age: 45,
  image: "./assets/white.png",
  occupation: "Chef",
  favouriteWeapon: "axe",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  id: "rope",
};

const knife = {
  name: "knife",
  weight: 25,
  id: "knife",
};

const candlestick = {
  name: "candlestick",
  weight: 105,
  id: "candlestick",
};

const dumbbell = {
  name: "dumbbell",
  weight: 150,
  id: "dumbbell",
};

const poison = {
  name: "poison",
  weight: 5,
  id: "poison",
};

const axe = {
  name: "axe",
  weight: 85,
  id: "axe",
};

const bat = {
  name: "bat",
  weight: 30,
  id: "bat",
};

const trophy = {
  name: "trophy",
  weight: 20,
  id: "trophy",
};

const pistol = {
  name: "pistol",
  weight: 35,
  id: "pistol",
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
const pickKiller = (loaderId) => {
  if (!killerPicked) {
    console.log(loaderId);
    toggleAnimation(loaderId);
    console.log(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      console.log(loaderId);
      // This will randomly select a killer from the suspects. And add that to the mystery object.
      mystery.killer = randomSelector(suspects);
      shuffleFavouriteWeapon();
      console.log(mystery);
      // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
      document.getElementById("killerCard").style.background =
        mystery.killer.color;
      document.getElementById(
        "killerNameAge"
      ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}, ${mystery.killer.age}`;
      document.getElementById(
        "killerOccupation"
      ).innerHTML = `Occupation: ${mystery.killer.occupation}`;
      document.getElementById("killerImage").src = mystery.killer.image;
      document.getElementById(
        "killerDescription"
      ).innerHTML = `${mystery.killer.description}`;
      mystery.killer.favouriteWeapon = capitalizeFirstLetter(
        mystery.killer.favouriteWeapon
      );
      console.log(mystery.killer.favouriteWeapon);
      document.getElementById(
        "killerFavouriteWeapon"
      ).innerHTML = `Weapon of choice: ${mystery.killer.favouriteWeapon}`;
      console.log(mystery.killer.favouriteWeapon);
      killerPicked = true;
    }, 3000);
  }
};

const pickWeapon = (loaderId) => {
  if (killerPicked && !weaponPicked && !roomPicked) {
    toggleAnimation(loaderId);
    console.log(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      console.log(loaderId);
      console.log(loaderId);
      // This will randomly select a weapon from the suspects. And add that to the mystery object.
      mystery.weapon = randomSelector(weapons);
      console.log(mystery);
      // This will change the background color of the card to the one connected to the chosen killer.
      document.getElementById("weaponCard").style.background =
        mystery.killer.color;
      console.log(mystery.killer.color);
      mystery.weapon.name = capitalizeFirstLetter(mystery.weapon.name);
      document.getElementById(
        "weaponName"
      ).innerHTML = `${mystery.weapon.name}`;
      document.getElementById(
        "weaponWeight"
      ).innerHTML = `Weight: ${mystery.weapon.weight}`;
      weaponPicked = true;
    }, 3000);
  } // else show message
};

const pickRoom = (loaderId) => {
  if (weaponPicked && !roomPicked) {
    toggleAnimation(loaderId);
    console.log(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      console.log(loaderId);
      // This will randomly select a room from the rooms and add that to the mystery object.
      mystery.room = randomSelector(rooms);
      console.log(mystery);
      // This will change the background color of the card to the one connected to the chosen killer.
      document.getElementById("roomCard").style.background =
        mystery.killer.color;
      document.getElementById("roomName").innerHTML = `${mystery.room}`;
      roomPicked = true;
    }, 3000);
  } // else show message
};

const revealMystery = (mystery) => {
  if (killerPicked && weaponPicked && roomPicked) {
    document.getElementById(
      "mystery"
    ).innerHTML = `The murder was commited by ${mystery.killer.firstName} 
  ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`;
  } // else show message
};

const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favouriteWeapon = randomSelector(weapons).id;
    console.log(suspect.favouriteWeapon);
  });
};

/* Capitalizes the first letter */
const capitalizeFirstLetter = (inputToCheck) => {
  const inputToCapitalize =
    inputToCheck[0].toUpperCase() + inputToCheck.slice(1);
  console.log(inputToCapitalize);
  return inputToCapitalize;
};

/* Toggles the loader animation */
const toggleAnimation = (loaderId) => {
  document
    .getElementById(loaderId)
    .classList.toggle("loader-container-animation");
};

/* Hides the loader image when a card is picked */
const toggleLoader = (loaderId) => {
  document.getElementById(loaderId).style.display = "none";
};
