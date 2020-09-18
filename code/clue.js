// SUSPECT OBJECTS
const mrGreen = {
  name: "Mr Green",
  color: "#499c65",
  description: "A entrepreneur who's made alot of dodgy connections",
  image: "assets/green.png",
  favouriteWeapon: "knife"
};

const professorPlum = {
  name: "Professor Plum",
  color: "#9c4973",
  description: "A proffessor of murder??",
  image: "assets/plum.png",
  favouriteWeapon: "pistol"
};

const missScarlet = {
  name: "Miss Scarlet",
  color: "#b53030",
  description: "A oil heiress with alot of enemies",
  image: "assets/scarlet.png",
  favouriteWeapon: "poker stick"
};

const mrsPeacock = {
  name: "Mrs Peacock",
  color: "#378b8b",
  description: "A successful business woman who's made some dirty deals",
  image: "assets/peacock.png",
  favouriteWeapon: "axe"
};

const colonelMustard = {
  name: "Colonel Mustard",
  color: "#d9af08",
  description: "A colonel with a bloody past",
  image: "assets/mustard.png",
  favouriteWeapon: "rope"
};

const mrsGrey = {
  name: "Mrs Grey",
  color: "#999999",
  description: "A housekeeper who has alot of secrets to keep",
  image: "assets/grey.png",
  favouriteWeapon: "poison"
};

// WEAPON OBJECTS
const rope = {
  name: "Rope",
  lastseen: "Study",
  strength: "3",
  color: "#dd9146",
  image: "assets/rope.jpg",
  id: "rope"
};

const knife = {
  name: "Knife",
  lastseen: "Kitchen",
  strength: "8",
  color: "#c18ac1",
  image: "assets/knife.jpg",
  id: "knife"
};

const poison = {
  name: "Poison",
  strength: "8",
  lastseen: "Library",
  color:"#669999",
  image: "assets/poisonbottle.jpg",
  id: "poison"
};

const axe = {
  name: "Axe",
  strength: "6",
  lastseen: "Billiard room",
  color:"#b75757",
  image: "assets/axe.jpg",
  id: "axe"
};

const pokerstick = {
  name: "Poker stick",
  strength: "6",
  lastseen: "Living Room",
  color:"#7676b7",
  image: "assets/pokerstick.jpg",
  id: "poker stick"
};

const pistol = {
  name: "Pistol",
  strength: "10",
  lastseen: "Dining room",
  color:"#3d8abd",
  image: "assets/pistol.jpg",
  id: "pistol"
};


// ROOM OBJECTS
const diningRoom = {
  name: "Dining Room",
  color:"#50af9c",
  image: "assets/diningroom.jpg",
  lastseen: "Proffesor Plum",
  favespot: "Miss Scarlet"
};

const kitchen = {
  name: "Kitchen",
  color:"#e27eb0",
  image: "assets/kitchen.jpg",
  lastseen: "Mrs Grey",
  favespot: "Mr Green"
};

const study = {
  name: "Study",
  color:"#b4b431",
  image: "assets/study.jpg",
  lastseen: "Mr Green",
  favespot: "Mrs Peacock"
};

const library = {
  name: "Library",
  color:"#2a75c0",
  image: "assets/library.jpg",
  lastseen: "Miss Scarlet",
  favespot: "Mrs Grey"
};

const billiardRoom = {
  name: "Billiard Room",
  color:"#d78989",
  image: "assets/billiardroom.jpg",
  lastseen: "Colonel Mustard",
  favespot: "Professor Plum"
};

const livingRoom = {
  name: "Living room",
  color:"#e59e34",
  image: "assets/livingroom.jpg", 
  lastseen: "Mrs Peacock",
  favespot: "Colonel Mustard"
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

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: {},
  weapon: {},
  room: {}
};

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

//----- Killer card -----//
//Function is called when user clicks on card. The animation is run for 1.5 seconds, which delays the showPickKiller function from being called for that duration. Once over it will then call the showPickKiller function and the code inside of it e.g. show the card-details for that killer. The animation will be done by adding the animated-loader styling to the loader1 id.
const pickKillerLoader = () => {
  document.getElementById("loader1").classList.add("animated-loader");
  setTimeout(showPickKiller, 2000);
};

//On click the function pickKillerLoader will be called by using the addEventListner()
document.getElementById("killerCard").addEventListener("click", pickKillerLoader); 

// Function invoked after the pickKillerLoader has run
const showPickKiller = () => {
  mystery.killer = randomSelector(suspects);// Will randomly select a killer from the suspects + add that to the mystery object.
  document.getElementById("loader1").style.display = "none";//Will hide the loader image

  document.getElementById('killerCard').removeEventListener('click', pickKillerLoader); //Will stop the loader showing next time you click the card

  // Will change the background color of the card, the first/last name, the image and descrption for the selected killer. 
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById("killerName").innerHTML = `${mystery.killer.name}`;
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById("killerDescription").innerHTML = `${mystery.killer.description}`;
  document.getElementById("faveWeapon").innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon.name}`;
  
  //Shows the details of the killer
  document.getElementById("cardDetails1").style.display = "flex"; 
};

//----- Weapon card -----//
const pickWeaponLoader = () => {
  document.getElementById("loader2").classList.add("animated-loader");
  setTimeout(showPickWeapon, 2000);
};

document.getElementById("weaponCard").addEventListener("click", pickWeaponLoader); 

const showPickWeapon = () => {
  mystery.weapon = randomSelector(weapons);


  document.getElementById("loader2").style.display = "none"
  document.getElementById('weaponCard').removeEventListener('click', pickWeaponLoader);

  document.getElementById("weaponCard").style.background = mystery.weapon.color;
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponImage").src = mystery.weapon.image;
  document.getElementById("weaponLastSeen").innerHTML = `Last seen in the ${mystery.weapon.lastseen}`;
  document.getElementById("weaponStrength").innerHTML = `Strength: ${mystery.weapon.strength}`;

  document.getElementById("cardDetails2").style.display = "flex";
};

//----- Room card -----//
const pickRoomLoader = () => {
  document.getElementById("loader3").classList.add("animated-loader");
  setTimeout(showPickRoom, 2000);
};

document.getElementById("roomCard").addEventListener("click", pickRoomLoader); 

const showPickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById("loader3").style.display = "none"
  document.getElementById('roomCard').removeEventListener('click', pickRoomLoader);

  document.getElementById("roomCard").style.background = mystery.room.color;
  document.getElementById("roomName").innerHTML = `${mystery.room.name}`;
  document.getElementById("roomImage").src = mystery.room.image;
  document.getElementById("roomLastSeen").innerHTML = `Last seen there: ${mystery.room.lastseen}`;
  document.getElementById("roomfave").innerHTML = `Favourite room: ${mystery.room.favespot}`;

  document.getElementById("cardDetails3").style.display = "flex";
};

//----- Function for on button click reveal mystery or get a message asking you to choose each card to then beable to reveal the mystery-----//
function revealMystery() {
  if (mystery.killer.hasOwnProperty("name") === true) {
    document.getElementById("mystery").innerHTML = `The murder was commited by ${mystery.killer.name} with the ${mystery.weapon.name.toLowerCase()} in the ${mystery.room.name.toLowerCase()}`;
    document.getElementById("revealMysteryButton").innerHTML = "PLAY AGAIN!";
    document.getElementById("revealMysteryButton").onclick = resetPage;
    document.getElementById("choose-card-prompt").style.display = "none";

  } else {
    document.getElementById("choose-card-prompt").innerHTML = "Please select one of each card to reveal the mystery!";
  }
};

//----- Shuffle function -----//
// Allows for the weapons to be shuffled between the suspects
const shuffleFavouriteWeapon = () => {
  let copyWeapons = weapons.slice(0); //Creates shallow copy of weapons array
  for (let i = 0; i < suspects.length; i++ ) {
    let randomIndex = Math.floor(Math.random() * copyWeapons.length);
    let randomWeapon = copyWeapons.splice(randomIndex, 1);
    suspects[i].favouriteWeapon = randomWeapon[0];
  }
};

//Function for re-loading the page
const resetPage = () => {
  location.reload();
};

//----- Calling functions that I want to run when the page is loaded -----//
shuffleFavouriteWeapon();

