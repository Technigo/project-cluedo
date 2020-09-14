// SUSPECT OBJECTS
const mrGreen = {
  firstName: "Mr",
  lastName: "Green",
  color: "#009900",
  description: "He's made alot of dodgy connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const professorPlum = {
  firstName: "Victor",
  lastName: "plum",
  color: "#993366",
  description: "A proffessor of murder??",
  age: 60,
  image: "assets/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#e60000",
  description: "A oil heiress with alot of enemies",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Heiress"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#006666",
  description: "A successful business woman who's made some dirty deals",
  age: 47,
  image: "assets/peacock.png",
  occupation: "Buisness woman"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#e6b800",
  description: "A colonel with a bloody past",
  age: 72,
  image: "assets/mustard.png",
  occupation: "Retired colonel"
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "#ffffff",
  description: "A housekeeper who has alot of secrets to keep",
  age: 67,
  image: "assets/white.png",
  occupation: "Eternal housekeeper"
};

// WEAPON OBJECTS
const rope = {
  name: "Rope",
  weight: 10,
  lastseen: "Hall",
  color: "#ffdd99"
};

const knife = {
  name: "Knife",
  weight: 22,
  lastseen: "Kitchen",
  color: "#b3b3b3"
};

const candlestick = {
  name: "Candlestick",
  weight: 40,
  lastseen: "Living Room",
  color:"#ffcc66"
};

const dumbbell = {
  name: "Dumbbell",
  weight: 55,
  lastseen: "Patio",
  color:"#00ace6"
};

const poison = {
  name: "Poison",
  weight: 15,
  lastseen: "Library",
  color:"#669999"
};

const axe = {
  name: "Axe",
  weight: 75,
  lastseen: "Billiard room",
  color:"#993333"
};

const bat = {
  name: "Bat",
  weight: 66,
  lastseen: "Study",
  color:"#ff5050"
};

const trophy = {
  name: "Trophy",
  weight: 79,
  lastseen: "Conservatory",
  color:"#666699"
};

const pistol = {
  name: "Pistol",
  weight: 83,
  lastseen: "Dining room",
  color:"#4d4dff"
};

// ROOM OBJECTS
const diningRoom = {
  name: "Dining Room",
  color:"#4d4dff",
  image: "assets/white.png"
};

const conservatory = {
  name: "Conservatory",
  color:"#4d4dff",
  image: "assets/white.png"
};

const kitchen = {
  name: "Kitchen",
  color:"#4d4dff",
  image: "assets/white.png"
};

const study = {
  name: "Study",
  color:"#4d4dff",
  image: "assets/white.png"
};

const library = {
  name: "Library",
  color:"#4d4dff",
  image: "assets/white.png"
};

const billiardRoom = {
  name: "Billiard Room",
  color:"#4d4dff",
  image: "assets/white.png"
};

const hallway = {
  name: "Hallway",
  color:"#4d4dff",
  image: "assets/white.png"
};

const livingRoom = {
  name: "Living room",
  color:"#4d4dff",
  image: "assets/white.png"
};

const patio = {
  name: "Patio",
  color:"#4d4dff",
  image: "assets/white.png"
};




// THE ROOMS ONLY HAVE A NAME SO NO NEED FOR OBJECTS THERE.
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
  pistol
];

const rooms = [
  diningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  hallway,
  livingRoom,
  patio
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: colonelMustard,
  weapon: knife,
  room: "living room",
};

//----- Killer card -----//
// Function invoked when you click on the killer card.
const pickKiller = () => {
  // Will randomly select a killer from the suspects + add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // Will change the background color of the card, the first/last name, the image and descrption for the selected killer. 
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById("killerName").innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById("killerDescription").innerHTML = `${mystery.killer.description}`;
};

document.getElementById("killerCard").onclick = pickKiller;

//----- Weapon card -----//
// Function invoked when you click on the weapon card.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponCard").style.background = mystery.weapon.color;
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name} ,   weight: ${mystery.weapon.weight}`;
  // document.getElementById("weaponimage").src = mystery.weapon.image;
  document.getElementById("weaponLastSeen").innerHTML = `Last seen: ${mystery.weapon.lastseen}`;
};

document.getElementById("weaponCard").onclick = pickWeapon;

//----- Room card -----//
// Function invoked when you click on the room card.
const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomCard").style.background = mystery.room.color;
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`;
  // document.getElementById("weaponimage").src = mystery.weapon.image;
};

document.getElementById("roomCard").onclick = pickRoom;



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
