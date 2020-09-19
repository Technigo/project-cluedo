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
  description:
    "A former psychiatrist, lost his medical license for having an affair with a patient.",
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
  image: "img/rope-1295003_640.png",
};

const knife = {
  id: "knife",
  name: "Knife",
  weight: 1,
  image: "img/knife-2930492_640.png",
};

const candlestick = {
  id: "candlestick",
  name: "Candlestick",
  weight: 6,
  image: "img/candles-3913775_640.png",
};

const dumbbell = {
  id: "dumbbell",
  name: "Dumbbell",
  weight: 20,
  image: "img/black-1295124_640.png",
};

const poison = {
  id: "poison",
  name: "Poison",
  weight: 2,
  image: "img/poison-576608_640.png",
};

const axe = {
  id: "axe",
  name: "Axe",
  weight: 50,
  image: "img/axe-159659_640.png",
};

const bat = {
  id: "bat",
  name: "Bat",
  weight: 1.5,
  image: "img/base-25755_640.png",
};

const trophy = {
  id: "trophy",
  name: "Trophy",
  weight: 10,
  image: "img/cup-1757500_640.png",
};

const pistol = {
  id: "pistol",
  name: "Pistol",
  weight: 2,
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

// Randomly select an item from an array
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const shuffleFavouriteWeapon = (array) => {
  return array[Math.floor(Math.random() * array.length)].name;
};

// Empty object to store the randomly picked killer,weapon and room.
let mystery = {
  killer: "",
  weapon: "",
  room: "",
};

// PICK KILLER //
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  const mysteryReveald = document.getElementById("mysteryReveald");
  const loader = document.getElementById("killerLoader");
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

  // Empty the field for old reveals
  mysteryReveald.innerHTML = "";

  // If card front - show killer details, if card back - empty random selected killer
  if (document.getElementById("killerDeckBack").classList.contains("active")) {
    // Add class active to card front
    killerDeckFront.classList.toggle("active");
    killerDeckBack.classList.toggle("active");

    // Start loader
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";

      // Show card front, hide card back
      killerDeckFront.style.display = "flex";
      killerDeckBack.style.display = "none";

      // Select a random killer from the suspects and add to the mystery object
      mystery.killer = randomSelector(suspects);

      // Select a random favouriteWeapon and add to the suspect
      mystery.killer.favouriteWeapon = shuffleFavouriteWeapon(weapons);

      // Show killer details
      document.getElementById("killerCard").style.background =
        mystery.killer.color;
      killerImage.src = mystery.killer.image;
      killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} /`;
      killerAge.innerHTML = mystery.killer.age;
      killerOccupation.innerHTML = mystery.killer.occupation;
      killerFavouriteWeapon.innerHTML = mystery.killer.favouriteWeapon;
      killerDescription.innerHTML = mystery.killer.description;

      setTimeout(() => (killerDeckFront.style.opacity = 1), 50);
    }, 3000);
  } else {
    // Add class active to card back
    killerDeckFront.classList.toggle("active");
    killerDeckBack.classList.toggle("active");

    mystery.killer = "";

    document.getElementById("killerCard").style.background = "#121212";
    // Show card back, hide card front
    killerDeckBack.style.display = "flex";
    killerDeckFront.style.display = "none";
    killerDeckFront.style.opacity = 0;
  }
};

// PICK WEAPON //
// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  const mysteryReveald = document.getElementById("mysteryReveald");
  const loader = document.getElementById("weaponLoader");
  const weaponName = document.getElementById("weaponName");
  const weaponWeight = document.getElementById("weaponWeight");
  const weaponImage = document.getElementById("weaponImage");
  const weaponDeckFront = document.getElementById("weaponDeckFront");
  const weaponDeckBack = document.getElementById("weaponDeckBack");

  // Empty the field for old reveals
  mysteryReveald.innerHTML = "";

  // if card front - show weapon details, if card back - empty random selected weapon
  if (weaponDeckBack.classList.contains("active")) {
    // Add class active to card front
    weaponDeckFront.classList.toggle("active");
    weaponDeckBack.classList.toggle("active");

    // Start loader
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";

      // Show card front, hide card back
      weaponDeckFront.style.display = "flex";
      weaponDeckBack.style.display = "none";

      // Select a random weapon and add to the mystery object.
      mystery.weapon = randomSelector(weapons);

      // Show weapon details
      weaponName.innerHTML = mystery.weapon.name;
      weaponWeight.innerHTML = mystery.weapon.weight;
      weaponImage.src = mystery.weapon.image;

      setTimeout(() => (weaponDeckFront.style.opacity = 1), 50);
    }, 3000);
  } else {
    // Add class active to card back
    weaponDeckFront.classList.toggle("active");
    weaponDeckBack.classList.toggle("active");

    mystery.weapon = "";

    // Show card back, hide card front
    weaponDeckBack.style.display = "flex";
    weaponDeckFront.style.display = "none";
    weaponDeckFront.style.opacity = 0;
  }
};

// PICK ROOM //
// This function will be invoked when you click on the room card.
const pickRoom = () => {
  const mysteryReveald = document.getElementById("mysteryReveald");
  const loader = document.getElementById("roomLoader");
  const roomName = document.getElementById("roomName");
  const roomDeckFront = document.getElementById("roomDeckFront");
  const roomDeckBack = document.getElementById("roomDeckBack");

  // Empty the field for old reveals
  mysteryReveald.innerHTML = "";

  // if card front - show weapon details, if card back - empty random selected weapon
  if (roomDeckBack.classList.contains("active")) {
    // Add class active to card front
    roomDeckFront.classList.toggle("active");
    roomDeckBack.classList.toggle("active");

    // Start loader
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";

      // Show card front, hide card back
      roomDeckFront.style.display = "flex";
      roomDeckBack.style.display = "none";

      // Select a random room and add to the mystery object.
      mystery.room = randomSelector(rooms);

      // Show room details
      roomName.innerHTML = `${mystery.room}`;

      setTimeout(() => (roomDeckFront.style.opacity = 1), 50);
    }, 3000);
  } else {
    // Add class active to card back
    roomDeckFront.classList.toggle("active");
    roomDeckBack.classList.toggle("active");

    mystery.room = "";

    // Show card back, hide card front
    roomDeckBack.style.display = "flex";
    roomDeckFront.style.display = "none";
    roomDeckFront.style.opacity = 0;
  }
};

// Will be invoked when you click that button. It should show something like:
const revealMystery = () => {
  let revealMessage = "";
  document.getElementById("mysteryReveald").innerHTML = "";

  if (mystery.killer && mystery.weapon && mystery.room) {
    // document.getElementById("mysteryReveald").innerHTML =
    revealMessage = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
  } else {
    // document.getElementById("mysteryReveald").innerHTML =
    revealMessage = "Pick a card from each deck to reveal the mystery.";
  }

  console.log("revealmessage: " + revealMessage);
  const typedTextSpan = document.querySelector(".mystery-reveald");
  const typingDelay = 20;
  let charIndex = 0;

  const type = () => {
    if (charIndex < revealMessage.length) {
      typedTextSpan.textContent += revealMessage.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
  };
  type();
};
