// Object for the suspects

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "darkseagreen",
  description: "He has a lot of connections.",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "",
};

const professorPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "thistle",
  description: "A former psychiatrist who lost his medical license for having an affair with a patient.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "indianred",
  description: "A movie star who will do anything to stay in the spotlight.",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress",
  favouriteWeapon: "",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "cornflowerblue",
  description:
    "A manners-freak who, despite her innocent appearance, is a formidable politician.",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite",
  favouriteWeapon: "",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "goldenRod",
  description: "An expert in weapons and conspiracy.",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Colonel",
  favouriteWeapon: "",
};

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "linen",
  description:
    "The widow of a nuclear physicist whose death she is suspected of being behind.",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper",
  favouriteWeapon: "",
};

// Objects for the weapons

const rope = {
  id: "rope",
  name: "Rope",
  weight: 10,
  resident: "Hall",
  image: "img/rope-1295003_640.png",
};

const knife = {
  id: "knife",
  name: "Knife",
  weight: 1,
  resident: "Kitchen",
  image: "img/knife-2930492_640.png",
};

const candlestick = {
  id: "candlestick",
  name: "Candlestick",
  weight: 6,
  resident: "Ball room",
  image: "img/candles-3913775_640.png",
};

const dumbbell = {
  id: "dumbbell",
  name: "Dumbbell",
  weight: 20,
  resident: "Spa",
  image: "img/black-1295124_640.png",
};

const poison = {
  id: "poison",
  name: "Poison",
  weight: 2,
  resident: "Conservatory",
  image: "img/poison-576608_640.png",
};

const axe = {
  id: "axe",
  name: "Axe",
  weight: 50,
  resident: "Patio",
  image: "img/axe-159659_640.png",
};

const bat = {
  id: "bat",
  name: "Bat",
  weight: 1.5,
  resident: "Billiard room",
  image: "img/base-25755_640.png",
};

const trophy = {
  id: "trophy",
  name: "Trophy",
  weight: 10,
  resident: "Lounge",
  image: "img/cup-1757500_640.png",
};

const pistol = {
  id: "pistol",
  name: "Pistol",
  weight: 2,
  resident: "Theater",
  image: "img/gun-5517424_640.png",
};

// Groups for all the suspects, weapons and rooms

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

// Empty object to store the randomly picked killer, weapon and room.
const mystery = {
  killer: null,
  weapon: null,
  room: null,
};

// Randomly select an item from an array
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// Fill an array with similar objects
const fillArray = (item, amountOfTimes) => {
  let result = [];
  for (let i = 0; i < amountOfTimes; i++) {
    result.push(item);
  }
  return result;
};

// Create new weapon array if suspect has a favourite weapon
const favouriteWeaponArray = weapons => {
  if (mystery.killer.favouriteWeapon) {
    const newWeaponArray = [
      ...weapons,
      ...fillArray(mystery.killer.favouriteWeapon, 5),
    ];
    return newWeaponArray;
  } else {
    return weapons;
  }
};

// Create new room array if a weapon is picked
const favouriteRoomArray = rooms => {
  if (mystery.weapon) {
    const onlyFavouriteRooms = fillArray(mystery.weapon, 8);
    const newRoomArray = [...rooms];

    onlyFavouriteRooms.forEach((item, index) => {
      newRoomArray.push(onlyFavouriteRooms[index].resident);
    });
    return newRoomArray;
  } else {
    return rooms;
  }
};

// Randomly select a favourite weapon from an array
const shuffleFavouriteWeapon = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// Remove active from class if it already exists, add if not
const toggleActive = (front, back) => {
  front.classList.toggle("active");
  back.classList.toggle("active");
};

// Show card back, hide card front
const showCardBack = (back, front) => {
  back.style.display = "flex";
  front.style.display = "none";
  front.style.opacity = 0;
};

// Make card front fade in, hide card back
const showCardFront = (front, back) => {
  front.style.display = "flex";
  back.style.display = "none";

  // Make card fade in
  setTimeout(() => (front.style.opacity = 1), 50);
};

// Reset reveal button and reveal message from previous reveals
const resetReveal = () => {
  const revealButton = document.getElementById("revealButton");
  const mysteryReveald = document.getElementById("mysteryReveald");
  revealButton.classList.remove("reveald");
  revealButton.innerText = "Reveal the crime";
  mysteryReveald.innerText = "Who did it?";
};

// *** PICK KILLER *** //
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // Declare variables
  const loader = document.getElementById("killerLoader");
  const killerColor = document.getElementById("killerCard");
  const killerImage = document.getElementById("killerImage");
  const killerName = document.getElementById("killerName");
  const killerAge = document.getElementById("killerAge");
  const killerOccupation = document.getElementById("killerOccupation");
  const killerFavouriteWeapon = document.getElementById(
    "killerFavouriteWeapon"
  );
  const killerDescription = document.getElementById("killerDescription");
  const killerDeckFront = document.getElementById("killerDeckFront");
  const killerDeckBack = document.getElementById("killerDeckBack");

  // Restore button and textfield from previous reveals
  resetReveal();

  // If card front - show killer details, else if card back - empty random selected killer
  if (killerDeckBack.classList.contains("active")) {
    // Add class active to card front
    toggleActive(killerDeckFront, killerDeckBack);

    // Start loader
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";

      // Select a random killer from the suspects and add to the mystery object
      mystery.killer = randomSelector(suspects);

      // Select a random favouriteWeapon and add to the suspect
      mystery.killer.favouriteWeapon = shuffleFavouriteWeapon(weapons);

      // Show killer details
      killerColor.style.background = mystery.killer.color;
      killerImage.src = mystery.killer.image;
      killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} /`;
      killerAge.innerHTML = mystery.killer.age;
      killerOccupation.innerHTML = mystery.killer.occupation;
      killerFavouriteWeapon.innerHTML = mystery.killer.favouriteWeapon.name;
      killerDescription.innerHTML = mystery.killer.description;

      // Show card front, hide card back
      showCardFront(killerDeckFront, killerDeckBack);
    }, 2000);
  } else {
    // Add class active to card back
    toggleActive(killerDeckFront, killerDeckBack);

    mystery.killer = null;

    // Show card back, hide card front
    showCardBack(killerDeckBack, killerDeckFront);
    killerColor.style.background = "#121212";
  }
};

// *** PICK WEAPON *** //
// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // Declare variables
  const loader = document.getElementById("weaponLoader");
  const weaponImage = document.getElementById("weaponImage");
  const weaponName = document.getElementById("weaponName");
  const weaponWeight = document.getElementById("weaponWeight");
  const weaponResident = document.getElementById("weaponResident");
  const weaponDeckFront = document.getElementById("weaponDeckFront");
  const weaponDeckBack = document.getElementById("weaponDeckBack");

  // Restore button and textfield from previous reveals
  resetReveal();

  // If card front - show weapon details, if card back - empty random selected weapon
  if (weaponDeckBack.classList.contains("active")) {
    // Add class active to card front
    toggleActive(weaponDeckFront, weaponDeckBack);

    // Start loader
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";

      // If killer is picked, create new array with several favourite weapon added
      const weaponsFavourite = favouriteWeaponArray(weapons);

      // Select a random weapon and add to the mystery object.
      mystery.weapon = randomSelector(weaponsFavourite);

      // Show weapon details
      weaponImage.src = mystery.weapon.image;
      weaponName.innerHTML = mystery.weapon.name;
      weaponWeight.innerHTML = mystery.weapon.weight;
      weaponResident.innerHTML = mystery.weapon.resident;

      // Show card front, hide card back
      showCardFront(weaponDeckFront, weaponDeckBack);
    }, 2000);
  } else {
    // Add class active to card back
    toggleActive(weaponDeckFront, weaponDeckBack);

    mystery.weapon = "";

    // Show card back, hide card front
    showCardBack(weaponDeckBack, weaponDeckFront);
  }
};

// *** PICK ROOM *** //
// This function will be invoked when you click on the room card.
const pickRoom = () => {
  // Declare variables
  const loader = document.getElementById("roomLoader");
  const roomName = document.getElementById("roomName");
  const roomDeckFront = document.getElementById("roomDeckFront");
  const roomDeckBack = document.getElementById("roomDeckBack");

  // Restore button and textfield from previous reveals
  resetReveal();

  // if card front - show weapon details, if card back - empty random selected weapon
  if (roomDeckBack.classList.contains("active")) {
    // Add class active to card front
    toggleActive(roomDeckFront, roomDeckBack);

    // Start loader
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";

      // If killer is picked, create new array with several resident room added
      const roomsFavourite = favouriteRoomArray(rooms);

      // Select a random room and add to the mystery object.
      mystery.room = randomSelector(roomsFavourite);

      // Show room details
      roomName.innerHTML = `${mystery.room}`;

      // Show card front, hide card back
      showCardFront(roomDeckFront, roomDeckBack);
    }, 2000);
  } else {
    // Add class active to card back
    toggleActive(roomDeckFront, roomDeckBack);

    mystery.room = "";

    // Show card back, hide card front
    showCardBack(roomDeckBack, roomDeckFront);
  }
};

// *** REVEAL THE CRIME *** //
// Will be invoked when you click reveal button.
const revealMystery = () => {
  const revealButton = document.getElementById("revealButton");

  // If mystery already is reveald once - the button have a 'Start over' function
  if (revealButton.classList.contains("reveald")) {
    // Empty mystery object
    mystery.killer = null;
    mystery.weapon = null;
    mystery.room = null;

    // Show card backs, hide card fronts
    showCardBack(killerDeckBack, killerDeckFront);
    document.getElementById("killerCard").style.background = "#121212";
    showCardBack(weaponDeckBack, weaponDeckFront);
    showCardBack(roomDeckBack, roomDeckFront);

    // Toggle class active to all decks
    toggleActive(
      document.getElementById("killerDeckFront"),
      document.getElementById("killerDeckBack")
    );
    toggleActive(
      document.getElementById("weaponDeckFront"),
      document.getElementById("weaponDeckBack")
    );
    toggleActive(
      document.getElementById("roomDeckFront"),
      document.getElementById("roomDeckBack")
    );

    // Call function to reset reveal button and reveal message
    resetReveal();
  } else {
    document.getElementById("mysteryReveald").innerHTML = "";
    let revealMessage = "";
    // Check if player has drawn cards from all decks
    if (mystery.killer && mystery.weapon && mystery.room) {
      revealMessage = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.toLowerCase()} with a ${mystery.weapon.name.toLowerCase()}.`;
      // Change text on button and add class reveald
      setTimeout(() => {
        revealButton.innerText = "Start over";
        revealButton.classList.add("reveald");
      }, 1600);
    } else {
      revealMessage = "Pick a card from each deck to reveal the mystery.";
    }

    // Type text animation
    const typedText = document.getElementById("mysteryReveald");
    const typingDelay = 20;
    let charIndex = 0;

    const type = () => {
      if (charIndex < revealMessage.length) {
        typedText.textContent += revealMessage.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      }
    };
    type();
  }
};
