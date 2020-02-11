// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He has made controversial claims over Egyptian history.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She will do anything to stay in the spotlight.",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is a formidable politician.",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite"
};

const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a retired military man.",
  age: 55,
  image: "assets/mustard.png",
  occupation: "Colonel"
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "#F1F1F1",
  description: "She will do anything for justice, including turning vigilante.",
  age: 60,
  image: "assets/white.png",
  occupation: "Housekeeper"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 5,
  image: "assets/weapon-rope.png"
};

const knife = {
  name: "knife",
  weight: 0.5,
  image: "assets/weapon-knife.png"
};

const candleStick = {
  name: "candlestick",
  weight: 3,
  image: "assets/weapon-candle.png"
};

const dumbBell = {
  name: "dumbbell",
  weight: 20,
  image: "assets/weapon-dumbbell.png"
};

const poison = {
  name: "poison",
  weight: 0,
  image: "assets/weapon-poison.png"
};

const axe = {
  name: "axe",
  weight: 4,
  image: "assets/weapon-axe.png"
};

const bat = {
  name: "bat",
  weight: 3,
  image: "assets/weapon-bat.png"
};

const trophy = {
  name: "trophy",
  weight: 4,
  image: "assets/weapon-trophy.png"
};

const pistol = {
  name: "pistol",
  weight: 0.6,
  image: "assets/weapon-pistol.png"
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colMustard,
  mrsWhite
];

const weapons = [
  rope,
  knife,
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

const rooms = [
  "Dining Room",
  "Conservatory",
  "Kitchen",
  "Study Room",
  "Library",
  "Billiard Room",
  "Lounge Area",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];
// ************************ REMOVE this ***************************
// console.log(suspects, weapons, rooms);
// console.log(typeof suspects)
// console.log(rooms[0]);
// console.log('The suspect is' + ': ' +suspects[3].lastName);
// console.log('The victim was murdered using' + ' ' + weapons[4].name);
// console.log(`The victim is ${suspects[0].firstName} ${suspects[4].lastName} ha, ha! `);
// ************************ REMOVE this ***************************

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: "",
  weapon: "",
  room: ""
};

// ****************************************************************************

// This function will be invoked when you click on the KILLER CARD.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);
  //mystery.weapon = randomSelector(weapons)
  //mystery.room = randomSelector(rooms)
  // console.log(mystery); // yes innehåller nu alla tre
  // console.log(weapons)
  // console.log(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  // Feel free to add more things to show about the killer.
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mystery.killer.age}`;
  document.getElementById(
    "killerOccupation"
  ).innerHTML = `${mystery.killer.occupation}`;
  document.getElementById("killerImage").src = `${mystery.killer.image}`;
  document.getElementById(
    "killerDescription"
  ).innerHTML = `${mystery.killer.description}`;
};

// ****************************************************************************
// This function will be invoked when you click on the WEAPON CARD.
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponImage").src = `${mystery.weapon.image}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `Weapon weight: ${mystery.weapon.weight}kg`;
};
// pickWeapon.onclick();

// ****************************************************************************
// This function will be invoked when you click on the ROOM CARD.
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  document.getElementById("roomName").innerHTML = `${mystery.room}`;

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  // Feel free to add more things to show about the killer.
  // document.getElementById('killerCard').style.background = mystery.killer.color
  //document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
};
// pickRoom();

// ****************************************************************************
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
// console.log(mystery);
// ****************************************************************************

// ****************************************************************************
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  mysteryText.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
};
// revealMystery();
document.getElementById("mysteryButton").onclick = revealMystery;
const mysteryText = document.getElementById("mystery");

// **********************
/*
const mysteryText = document.getElementById("mystery")
const btn = document.getElementById("button")
btn.onclick = () => {
  // alert("hej hej")
  mysteryText.innerText = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
  btn.style.backgroundColor = 'black'
  btn.style.color = 'white'
  btn.textContent = 'CRIME! ⚠️'
}
*/

// ****************************************************************************

// const revealMystery = document.getElementById("mystery")
// revealMystery.textContent = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
// document.getElementById("mystery").textContent = "Hey"

// ****************************************************************************

// To do:
// Connect the revealMystery console.log with HTML H1 mystery

// Connect the revealMystery with the button HTML
// Testar knappen genom en Alert först.

// Connect killerCard with killer - info

// Get killerCard HTML to run JS

// Duplicate to all cards

// ****************************************************************************
// Check code guide lines before PR!
