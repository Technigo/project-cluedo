// SUSPECT OBJECTS
const mrGreen = {
  name: "Mr Green",
  color: "#009900",
  description: "A entrepreneur who's made alot of dodgy connections",
  image: "assets/green.png",
};

const professorPlum = {
  name: "Professor Plum",
  color: "#993366",
  description: "A proffessor of murder?",
  image: "assets/plum.png",
};

const missScarlet = {
  name: "Miss Scarlet",
  color: "#e60000",
  description: "A oil heiress with alot of enemies",
  image: "assets/scarlet.png",
};

const mrsPeacock = {
  name: "Mrs Peacock",
  color: "#006666",
  description: "A successful business woman who's made some dirty deals",
  image: "assets/peacock.png",
};

const colonelMustard = {
  name: "Colonel Mustard",
  color: "#e6b800",
  description: "A colonel with a bloody past",
  image: "assets/mustard.png",
};

const mrsGrey = {
  name: "Mrs Grey",
  color: "#999999",
  description: "A housekeeper who has alot of secrets to keep",
  image: "assets/grey.png",
};

// WEAPON OBJECTS
const rope = {
  name: "Rope",
  lastseen: "Study",
  color: "#ffdd99",
  image: "assets/rope.jpg"
};

const knife = {
  name: "Knife",
  lastseen: "Kitchen",
  color: "#b3b3b3",
  image: "assets/knife.jpg",
};

const poison = {
  name: "Poison",
  lastseen: "Library",
  color:"#669999",
  image: "assets/poison.jpg"
};

const axe = {
  name: "Axe",
  lastseen: "Billiard room",
  color:"#993333",
  image: "assets/axe.jpg"
};

const pokerstick = {
  name: "Poker stick",
  lastseen: "Living Room",
  color:"#666699",
  image: "assets/pokerstick.jpg",
};

const pistol = {
  name: "Pistol",
  lastseen: "Dining room",
  color:"#4d4dff",
  image: "assets/pistol.jpg"
};

// ROOM OBJECTS
const diningRoom = {
  name: "Dining Room",
  color:"#4d4dff",
  image: "assets/diningroom.png",
  lastseen: "Proffesor Plum"
};

const kitchen = {
  name: "Kitchen",
  color:"#4d4dff",
  image: "assets/kitchen.png",
  lastseen: "Mrs Grey"
};

const study = {
  name: "Study",
  color:"#4d4dff",
  image: "assets/study.png",
  lastseen: "Mr Green"
};

const library = {
  name: "Library",
  color:"#4d4dff",
  image: "assets/library.png",
  lastseen: "Miss Scarlet"
};

const billiardRoom = {
  name: "Billiard Room",
  color:"#4d4dff",
  image: "assets/billiardroom.png",
  lastseen: "Colonel Mustard"
};

const livingRoom = {
  name: "Living room",
  color:"#4d4dff",
  image: "assets/livingroom.png", 
  lastseen: "Mrs Peacock"
};

// GROUPED SUSPECTS, WEAPONS AND ROOM OBJECTS IN ARRAYS

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsGrey, 
];

const weapons = [
  rope,
  knife,
  poison,
  axe,
  pokerstick,
  pistol
];

const rooms = [
  diningRoom,
  kitchen,
  study,
  library,
  billiardRoom,
  livingRoom,
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: {},
  weapon: {},
  room: {}
};


//----- Killer card -----//
// Function invoked when you click on the killer card.
const pickKiller = () => {
  // Will randomly select a killer from the suspects + add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // Will change the background color of the card, the first/last name, the image and descrption for the selected killer. 
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById("killerName").innerHTML = `${mystery.killer.name}`;
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById("killerDescription").innerHTML = `${mystery.killer.description}`;
  
  document.getElementById("cardDetails1").style.display = "flex";  
};

document.getElementById("killerCard").onclick = pickKiller;

//----- Weapon card -----//
// Function invoked when you click on the weapon card.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponCard").style.background = mystery.weapon.color;
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponImage").src = mystery.weapon.image;
  document.getElementById("weaponLastSeen").innerHTML = `Last seen in the ${mystery.weapon.lastseen}`;
  document.getElementById("cardDetails2").style.display = "flex";
};

document.getElementById("weaponCard").onclick = pickWeapon;

//----- Room card -----//
// Function invoked when you click on the room card.
const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("roomCard").style.background = mystery.room.color;
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`;
  document.getElementById("roomImage").src = mystery.room.image;
  document.getElementById("roomLastSeen").innerHTML = `Last seen in the ${mystery.room.name} was ${mystery.room.lastseen}`;

  document.getElementById("cardDetails3").style.display = "flex";
};

document.getElementById("roomCard").onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

//----- Reveal mystery -----//
// Function invoked when you click on the Reveal crime button.
function revealMystery() {
  document.getElementById("mystery").innerHTML = `The murder was commited by ${mystery.killer.name} with the ${mystery.weapon.name.toLowerCase()} in the ${mystery.room.name.toLowerCase()}`;
};

document.getElementById("mystery").onclick = revealMystery;

