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

const mystery = {
  killer: "",
  weapon: "",
  room: "",
};

/* Called when the 'Let's Play' button is clicked, toggles the window and then
 shuffles the suspects' favourite weapon */
const startGame = (windowId) => {
  toggleWindow(windowId);
  shuffleFavouriteWeapon();
};

/* Function to randomly select one item from the array passed as a paramater */
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/* The function is invoked when the killer card deck is clicked. It checks that
 a killer hasn't already been picked, then toggles the loader animation. After 
 3 seconds a killer is randomly selected and added to the mystery object and 
 then displayed  */
const pickKiller = (loaderId) => {
  if (!killerPicked) {
    toggleAnimation(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      mystery.killer = randomSelector(suspects);
      shuffleFavouriteWeapon();
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
      ).innerHTML = `Description: ${mystery.killer.description}`;
      document.getElementById(
        "killerFavouriteWeapon"
      ).innerHTML = `Weapon of choice: ${capitalizeFirstLetter(
        mystery.killer.favouriteWeapon
      )}`;
      killerPicked = true;
    }, 2000);
  }
};

/* The function is evoked when the user clicks on the weapon card deck. Checks
 that a killer but no weapon or room has been picked, then works like the 
 pickKiller function */
const pickWeapon = (loaderId) => {
  if (killerPicked && !weaponPicked && !roomPicked) {
    toggleAnimation(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      mystery.weapon = randomSelector(weapons);
      document.getElementById("weaponCard").style.background =
        mystery.killer.color;
      document.getElementById("weaponName").innerHTML = capitalizeFirstLetter(
        mystery.weapon.name
      );
      document.getElementById(
        "weaponWeight"
      ).innerHTML = `Weight: ${mystery.weapon.weight}`;
      weaponPicked = true;
    }, 2000);
  } // else show message
};

/* The function is evoked when the user clicks on the room card deck. Checks
 that a weapon but no room has been picked, then works like pickKiller and 
 pickWeapon functions */
const pickRoom = (loaderId) => {
  if (weaponPicked && !roomPicked) {
    toggleAnimation(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      mystery.room = randomSelector(rooms);
      document.getElementById("roomCard").style.background =
        mystery.killer.color;
      document.getElementById("roomName").innerHTML = `${mystery.room}`;
      roomPicked = true;
    }, 2000);
  } // else show message
};

/* The function is called when the 'Reveal the Crime' button is clicked. Checks
 if all cards have been picked and then toggles window to display a message 
 with the mystery object  */
const revealMystery = (windowId) => {
  if (killerPicked && weaponPicked && roomPicked) {
    toggleWindow(windowId);
    document.getElementById(
      "mystery"
    ).innerHTML = `The murder was commited by ${mystery.killer.firstName} 
  ${mystery.killer.lastName} in the ${mystery.room} with a ${mystery.weapon.name}`;
  } // else show message
};

/* The function is called when the game starts. Shuffles the suspects favourite
 weapons */
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favouriteWeapon = randomSelector(weapons).id;
  });
};

/* Capitalizes the first letter */
const capitalizeFirstLetter = (inputToCheck) => {
  return inputToCheck[0].toUpperCase() + inputToCheck.slice(1);
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

/* Hides the current window and displays the next */
const toggleWindow = (windowId) => {
  let windowElement = document.getElementById(windowId);
  toggleWindowClass(windowId);
  toggleWindowClass(windowElement.nextElementSibling.id);
};

/* Toggles between classes to hide/display a window */
const toggleWindowClass = (id) => {
  document.getElementById(id).classList.toggle("visible");
  document.getElementById(id).classList.toggle("invisible");
};
