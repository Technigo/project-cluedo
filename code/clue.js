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
  favourite: "knife",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Enjoys the outdoors",
  age: 34,
  image: "./assets/plum.png",
  occupation: "Professor",
  favourite: "poison",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Collects weapons",
  age: 42,
  image: "./assets/scarlet.png",
  occupation: "Recruiter",
  favourite: "pistol",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Strong swimmer",
  age: 29,
  image: "./assets/peacock.png",
  occupation: "Novelist",
  favourite: "bat",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Collects war memorabilia",
  age: 63,
  image: "./assets/mustard.png",
  occupation: "Colonel",
  favourite: "pistol",
};

const mrsWhite = {
  firstName: "Josephine",
  lastName: "White",
  color: "white",
  description: "Avid reader",
  age: 45,
  image: "./assets/white.png",
  occupation: "Chef",
  favourite: "axe",
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  id: "rope",
  favourite: "patio",
};

const knife = {
  name: "knife",
  weight: 25,
  id: "knife",
  favourite: "kitchen",
};

const candlestick = {
  name: "candlestick",
  weight: 105,
  id: "candlestick",
  favourite: "dining room",
};

const dumbbell = {
  name: "dumbbell",
  weight: 150,
  id: "dumbbell",
  favourite: "spa",
};

const poison = {
  name: "poison",
  weight: 5,
  id: "poison",
  favourite: "conservatory",
};

const axe = {
  name: "axe",
  weight: 85,
  id: "axe",
  favourite: "observatory",
};

const bat = {
  name: "bat",
  weight: 30,
  id: "bat",
  favourite: "billiard room",
};

const trophy = {
  name: "trophy",
  weight: 20,
  id: "trophy",
  favourite: "living room",
};

const pistol = {
  name: "pistol",
  weight: 35,
  id: "pistol",
  favourite: "study",
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = {
  name: "dining room",
  id: "dining room",
};

const conservatory = {
  name: "conservatory",
  id: "conservatory",
};

const kitchen = {
  name: "kitchen",
  id: "kitchen",
};

const study = {
  name: "study",
  id: "study",
};

const library = {
  name: "library",
  id: "library",
};

const billiardRoom = {
  name: "billiard room",
  id: "billiard room",
};

const lounge = {
  name: "lounge",
  id: "lounge",
};

const ballroom = {
  name: "ballroom",
  id: "ballroom",
};

const hall = {
  name: "hall",
  id: "hall",
};

const spa = {
  name: "spa",
  id: "spa",
};

const livingRoom = {
  name: "living room",
  id: "living room",
};

const observatory = {
  name: "observatory",
  id: "observatory",
};

const theater = {
  name: "theater",
  id: "theater",
};

const guestHouse = {
  name: "guest house",
  id: "guest house",
};

const patio = {
  name: "patio",
  id: "patio",
};

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
  ballroom,
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

/* Called when the 'Let's Play' button is clicked, toggles the window, hides
 the Reveal button and shuffles the suspects' favourite weapon */
const startGame = (windowId) => {
  toggleWindow(windowId);
  //shuffleFavouriteWeapon();
  hideButton();
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
      shuffleFavourite(suspects, weapons);
      mystery.killer = randomSelector(suspects);
      console.log(mystery.killer.favourite);
      style("killerCard").background = mystery.killer.color;
      get(
        "killerNameAge"
      ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}, ${mystery.killer.age}`;
      get(
        "killerOccupation"
      ).innerHTML = `Occupation: ${mystery.killer.occupation}`;
      get("killerImage").src = mystery.killer.image;
      get(
        "killerDescription"
      ).innerHTML = `Description: ${mystery.killer.description}`;
      get(
        "killerFavouriteWeapon"
      ).innerHTML = `Weapon of choice: ${capitalizeFirstLetter(
        mystery.killer.favourite
      )}`;
      killerPicked = true;
    }, 2000);
  }
};

/* The function is evoked when the user clicks on the weapon card deck. Checks
 that a killer but no weapon or room has been picked, then works like the 
 pickKiller function */
const pickWeapon = (loaderId) => {
  if (killerPicked && !weaponPicked) {
    toggleAnimation(loaderId);
    setTimeout(function () {
      toggleLoader(loaderId);
      shuffleFavourite(weapons, rooms);
      mystery.weapon = increaseChance(mystery.killer);
      console.log(mystery.weapon);
      style("weaponCard").background = mystery.killer.color;
      get("weaponName").innerHTML = capitalizeFirstLetter(mystery.weapon.name);
      get("weaponWeight").innerHTML = `Weight: ${mystery.weapon.weight}`;
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
      mystery.room = increaseChance(mystery.weapon);
      style("roomCard").background = mystery.killer.color;
      get("roomName").innerHTML = `${capitalizeFirstLetter(mystery.room.name)}`;
      roomPicked = true;
      style("revealButton").visibility = "visible";
    }, 2000);
  } // else show message
};

/* The function is called when the 'Reveal the Crime' button is clicked. Checks
 if all cards have been picked and then toggles window to display a message 
 with the mystery object  */
const revealMystery = (windowId) => {
  if (killerPicked && weaponPicked && roomPicked) {
    toggleWindow(windowId);
    get(
      "mystery"
    ).innerHTML = `The murder was commited by ${mystery.killer.firstName} 
    ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}`;
    style("mysteryCard").background = mystery.killer.color;
    get(
      "mysteryKiller"
    ).innerHTML = `Mystery Killer: ${mystery.killer.firstName} 
    ${mystery.killer.lastName}`;
    get("mysteryKillerImage").src = mystery.killer.image;
    get("mysteryRoom").innerHTML = `Room: ${capitalizeFirstLetter(
      mystery.room.name
    )}`;
    get("mysteryWeapon").innerHTML = `Weapon: ${capitalizeFirstLetter(
      mystery.weapon.name
    )}`;
    console.log();
  } // else show message
};

/* The function is called when a killer is picked. Shuffles the suspects favourite
 weapons */
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favourite = randomSelector(weapons).id;
  });
};

const shuffleFavourite = (mysteryObject, favouriteObject) => {
  mysteryObject.forEach((object) => {
    object.favourite = randomSelector(favouriteObject).id;
    console.log(object.favourite);
  });
};

/* Capitalizes the first letter */
const capitalizeFirstLetter = (inputToCheck) => {
  return inputToCheck[0].toUpperCase() + inputToCheck.slice(1);
};

/* Toggles the loader animation */
const toggleAnimation = (loaderId) => {
  get(loaderId).classList.toggle("loader-container-animation");
};

/* Hides the loader image when a card is picked */
const toggleLoader = (loaderId) => {
  get(loaderId).style.display = "none";
};

/* Hides the current window and displays the next */
const toggleWindow = (windowId) => {
  let windowElement = get(windowId);
  toggleWindowClass(windowId);
  toggleWindowClass(windowElement.nextElementSibling.id);
};

/* Toggles between classes to hide/display a window */
const toggleWindowClass = (id) => {
  get(id).classList.toggle("visible");
  get(id).classList.toggle("invisible");
};

const hideButton = () => {
  const button = (style("revealButton").visibility = "hidden");
  // if (button.style.visibility === "hidden"){
  //   button.style.visibility = "visible";
  // } else {
  //   button.style.visibility = "hidden"
  // }
};

const increaseChance = (object) => {
  // find objects favourite weapon
  if (object === mystery.killer) {
    arrayDuplicated = duplicateArray(findFavourite(mystery.killer, weapons));
    console.log(arrayDuplicated);
    return randomFavourite(weapons, arrayDuplicated);
  } else if (object === mystery.weapon) {
    arrayDuplicated = duplicateArray(findFavourite(mystery.weapon, rooms));
    console.log(arrayDuplicated);
    return randomFavourite(rooms, arrayDuplicated);
  }
};

/* The function is called to find the favourite object that matches the id of 
the favourite property of the mystery object */
const findFavourite = (mysteryObject, favouriteObjects) => {
  console.log(mysteryObject);
  console.log(favouriteObjects);
  const favourite = favouriteObjects.find(
    (favourite) => favourite.id === mysteryObject.favourite
  );
  return favourite;
};

const duplicateArray = (favourite) => {
  //create a random number between 0 and 10
  const randomNumber = Math.floor(Math.random() * 11);
  console.log(randomNumber);
  const arrayDuplicated = new Array(randomNumber).fill(favourite);
  console.log("weapons duplicated: " + JSON.stringify(arrayDuplicated));
  return arrayDuplicated;
};

const randomFavourite = (favourite, arrayDuplicated) => {
  const increasedFavourite = [...favourite, ...arrayDuplicated];
  console.log(increasedFavourite);
  return randomSelector(increasedFavourite);
};

/* Function that returns an object to which the id refers */
const get = (id) => {
  return document.getElementById(id);
};

/* Function that returns the style property of the object referred to */
const style = (id) => {
  return get(id).style;
};
