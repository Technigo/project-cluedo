/*** VARIABLES ***/

let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;

const suspects = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "Has a lot of connections",
    age: 45,
    image: "./assets/green.png",
    occupation: "Entrepreneur",
    favourite: "knife",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Enjoys the outdoors",
    age: 34,
    image: "./assets/plum.png",
    occupation: "Professor",
    favourite: "poison",
  },
  {
    firstName: "Cassandra",
    lastName: "Scarlet",
    color: "red",
    description: "Collects weapons",
    age: 42,
    image: "./assets/scarlet.png",
    occupation: "Recruiter",
    favourite: "pistol",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "Strong swimmer",
    age: 29,
    image: "./assets/peacock.png",
    occupation: "Novelist",
    favourite: "bat",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "Collects war memorabilia",
    age: 63,
    image: "./assets/mustard.png",
    occupation: "Colonel",
    favourite: "pistol",
  },
  {
    firstName: "Josephine",
    lastName: "White",
    color: "white",
    description: "Avid reader",
    age: 45,
    image: "./assets/white.png",
    occupation: "Chef",
    favourite: "axe",
  },
];

const weapons = [
  {
    name: "rope",
    weight: 10,
    id: "rope",
    favourite: "patio",
  },
  {
    name: "knife",
    weight: 25,
    id: "knife",
    favourite: "kitchen",
  },
  {
    name: "candlestick",
    weight: 105,
    id: "candlestick",
    favourite: "dining room",
  },
  {
    name: "dumbbell",
    weight: 150,
    id: "dumbbell",
    favourite: "spa",
  },
  {
    name: "poison",
    weight: 5,
    id: "poison",
    favourite: "conservatory",
  },
  {
    name: "axe",
    weight: 85,
    id: "axe",
    favourite: "observatory",
  },
  {
    name: "bat",
    weight: 30,
    id: "bat",
    favourite: "billiard room",
  },
  {
    name: "trophy",
    weight: 20,
    id: "trophy",
    favourite: "living room",
  },
  {
    name: "pistol",
    weight: 35,
    id: "pistol",
    favourite: "study",
  },
];

const rooms = [
  {
    name: "dining room",
    id: "dining room",
  },
  {
    name: "conservatory",
    id: "conservatory",
  },
  {
    name: "kitchen",
    id: "kitchen",
  },
  {
    name: "study",
    id: "study",
  },
  {
    name: "library",
    id: "library",
  },
  {
    name: "billiard room",
    id: "billiard room",
  },
  {
    name: "lounge",
    id: "lounge",
  },
  {
    name: "ballroom",
    id: "ballroom",
  },
  {
    name: "hall",
    id: "hall",
  },
  {
    name: "spa",
    id: "spa",
  },
  {
    name: "living room",
    id: "living room",
  },
  {
    name: "observatory",
    id: "observatory",
  },
  {
    name: "theater",
    id: "theater",
  },
  {
    name: "guest house",
    id: "guest house",
  },
  {
    name: "patio",
    id: "patio",
  },
];

const mystery = {
  killer: "",
  weapon: "",
  room: "",
};

/*** FUNCTIONS ***/

/* Called when the 'Let's Play' button is clicked, toggles the window, hides
 the Reveal button and shuffles the suspects' favourite weapon and the weapons'
  favourite room */
const startGame = (windowId) => {
  toggleWindow(windowId);
  hideButton();
  document.getElementsByTagName("BODY")[0].style.backgroundImage =
    "url(./assets/starry-sky.jpg)";
  shuffleFavourite(suspects, weapons);
  shuffleFavourite(weapons, rooms);
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
      //shuffleFavourite(suspects, weapons);
      mystery.killer = randomSelector(suspects);
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
    }, 1500);
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
      //shuffleFavourite(weapons, rooms);
      mystery.weapon = increaseChance(mystery.killer);
      style("weaponCard").background = mystery.killer.color;
      get("weaponName").innerHTML = capitalizeFirstLetter(mystery.weapon.name);
      get("weaponWeight").innerHTML = `Weight: ${mystery.weapon.weight}`;
      get(
        "weaponFavouriteRoom"
      ).innerHTML = `Likely found in: ${capitalizeFirstLetter(
        mystery.weapon.favourite
      )}`;
      weaponPicked = true;
    }, 1500);
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
    }, 1500);
  } // else show message
};

/* The function is called when the 'Reveal the Crime' button is clicked. Checks
 if all cards have been picked and then toggles window to display a message 
 with the mystery object  */
const revealMystery = (windowId) => {
  if (killerPicked && weaponPicked && roomPicked) {
    toggleWindow(windowId);
    //document.getElementsByTagName("BODY")[0].style.backgroundImage =
    //  "url(./assets/red-splatter.jpg)";
    get(
      "mystery"
    ).innerHTML = `The murder was commited by ${mystery.killer.firstName} 
    ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}`;
    style("mysteryCard").backgroundImage = "url(./assets/red-drip.jpg)";
    //("url(./assets/red-splatter.jpg)");
    // style("mysteryCard").background = mystery.killer.color;
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
  } // else show message
};

const restartGame = () => {
  location.reload();
};

/* Function to randomly select one item from the array passed as a paramater */
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/* The function is called when a killer is picked. Shuffles the suspects favourite
 weapons */
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    suspect.favourite = randomSelector(weapons).id;
  });
};

/* The function is called when the Let's play button is clicked to shuffle
 favourite weapon and favourite room */
const shuffleFavourite = (mysteryObject, favouriteObject) => {
  mysteryObject.forEach((object) => {
    object.favourite = randomSelector(favouriteObject).id;
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
  style(loaderId).display = "none";
};

/* Hides the current window and displays the next */
const toggleWindow = (windowId) => {
  const windowElement = get(windowId);
  toggleWindowClass(windowId);
  toggleWindowClass(windowElement.nextElementSibling.id);
};

/* Toggles between classes to hide/display a window */
const toggleWindowClass = (id) => {
  get(id).classList.toggle("visible");
  get(id).classList.toggle("invisible");
};

/* Hides the reveal the crime button when the game is started */
const hideButton = () => {
  const button = (style("revealButton").visibility = "hidden");
};

/* Increases the chance of the referred obeject's favourite property to be picked */
const increaseChance = (object) => {
  if (object === mystery.killer) {
    arrayDuplicated = duplicateArray(findFavourite(mystery.killer, weapons));
    return randomFavourite(weapons, arrayDuplicated);
  } else if (object === mystery.weapon) {
    arrayDuplicated = duplicateArray(findFavourite(mystery.weapon, rooms));
    return randomFavourite(rooms, arrayDuplicated);
  }
};

/* The function is called to find the favourite object that matches the id of 
the favourite property of the mystery object */
const findFavourite = (mysteryObject, favouriteObjects) => {
  const favourite = favouriteObjects.find(
    (favourite) => favourite.id === mysteryObject.favourite
  );
  return favourite;
};

/* The function creates a new array where the favourite object occurs a random
 number of times */
const duplicateArray = (favourite) => {
  const randomNumber = Math.floor(Math.random() * 11);
  const arrayDuplicated = new Array(randomNumber).fill(favourite);
  return arrayDuplicated;
};

/* The functions merges two arrays to create a new array where the favourite object occurs more than once */
const randomFavourite = (favourite, arrayDuplicated) => {
  const increasedFavourite = [...favourite, ...arrayDuplicated];
  return randomSelector(increasedFavourite);
};

/* Function that returns an object to which the id refers */
const get = (id) => {
  return document.getElementById(id);
};

/* Function that returns the style property of the referred object */
const style = (id) => {
  return get(id).style;
};

/* The fuction is called by the event listener to check which deck is clicked */
const getLoaderId = (elementId) => {
  if (elementId === "loaderKiller") {
    pickKiller(elementId);
  } else if (elementId === "loaderWeapon") {
    pickWeapon(elementId);
  } else if (elementId === "loaderRoom") {
    pickRoom(elementId);
  }
};

/* Event listener attached to the decks classes. The function loops through the
 array and attaches the event listener to each element before calling the
 getLoaderId function with the loader id as a paramater */
document.querySelectorAll(".decks").forEach((element) => {
  element.addEventListener("click", () => {
    getLoaderId(element.lastElementChild.id);
  });
});
