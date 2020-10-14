// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife',
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is quick-witted, who lost his medical license for having an affair with one of his patients.',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'rope',
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A stock femme fatale, she is typically portrayed as young, cunning and attractive.',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: 'Runs an underground brothel',
  favouriteWeapon: 'candlestick',
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'A grand madame, the wife of a U.S. Senator who is accused of taking bribes',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Housewife',
  favouriteWeapon: 'dumbbell',
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dignified, dapper and dangerous military man.',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'War profiteer',
  favouriteWeapon: 'poison',
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A frazzled servant. Depicted as the widow of a nuclear physicist whose death she is suspected of being behind',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Nurse',
  favouriteWeapon: 'axe',
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  material: 'textile',
  id: 'rope',
  image: 'assets/rope.png',
}

const knife = {
  name: 'Knife',
  material: 'metal',
  id: 'knife',
  image: 'assets/knife.png',
}

const candlestick = {
  name: 'Candlestick',
  material: 'gold',
  id: 'candlestick',
  image: 'assets/candlestick.png',
}

const dumbbell = {
  name: 'Dumbbell',
  material: 'iron',
  id: 'dumbbell',
  image: 'assets/dumbbell.png',
}

const poison = {
  name: 'Poison',
  material: 'liquid',
  id: 'poison',
  image: 'assets/poison.png'
}

const axe = {
  name: 'Axe',
  material: 'metal',
  id: 'axe',
  image: 'assets/axe.png',
}

const bat = {
  name: 'Bat',
  material: 'wood',
  id: 'bat',
  image: 'assets/bat.png',
}

const trophy = {
  name: 'Trophy',
  material: 'silver',
  id: 'trophy',
  image: 'assets/trophy.png',
}

const pistol = {
  name: 'Pistol',
  material: 'metal',
  id: 'pistol',
  image: 'assets/pistol.png',
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]

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
]

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
  "Patio"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room, the values will be set later.
let mystery = {
  killer: null,
  weapons: null,
  rooms: null,
};

// Function to shuffle the suspects favorite weapon
const shuffleFavouriteWeapon = () => {
  randomFavouriteWeapon = weapons[Math.floor(Math.random() * weapons.length)];
  mystery.killer.favouriteWeapon = randomFavouriteWeapon.name;
  document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // Tells the animation to not be shown until card is clicked 
  document.getElementById('loader-wrapper-killer').style.display = "none";
  document.getElementById('killer-card-wrapper').style.display = "block";

  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = '#e7cb96'; //mystery.killer.color; (commented out because it looks awful)
  let killerImage = document.getElementById('killerImage');
  killerImage.src = mystery.killer.image;
  document.getElementById('killerName').style.padding = '15px';
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerOccupation').innerHTML
  document.getElementById('killerAge').innerHTML = `${mystery.killer.occupation}, ${mystery.killer.age}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
  shuffleFavouriteWeapon();
};

const loadingPickKiller = () => {
  //Decides animation timer
  const loaderTime = setTimeout(pickKiller, 1500);
  //Hides the cards first side 
  document.getElementById("start-display-card-killer").style.display = "none";
  //Hides the card information when first when clicked (because the animation will be shown first)
  document.getElementById('killer-card-wrapper').style.display = "none";
  //Displays the animation
  document.getElementById('loader-wrapper-killer').style.display = "flex";
  document.getElementById('killerCard').style.background = '#900d0d';
}

// Telling the function to start when card onclicks
document.getElementById("killerCard").onclick = loadingPickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // Tells the animation to not be shown until card is clicked
  document.getElementById('loader-wrapper-weapon').style.display = "none";
  document.getElementById('weapon-card-wrapper').style.display = "block";
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapons = randomSelector(weapons);

  // This will change styling 
  document.getElementById('weaponCard').style.background = '#e7cb96';
  document.getElementById('weaponName').style.padding = '15px';
  document.getElementById('weaponName').innerHTML = `${mystery.weapons.name}`;
  let weaponsImage = document.getElementById('weaponsImage');
  weaponsImage.src = mystery.weapons.image;
  document.getElementById('weaponMaterial').innerHTML = `Made of ${mystery.weapons.material}`
};

const loadingpickWeapon = () => {

  //Decides animation timer
  const loaderTime = setTimeout(pickWeapon, 1500);
  //Hides the cards first side 
  document.getElementById('start-display-card-weapon').style.display = "none";
  //Hides the card information when first when clicked (because the animation will be shown first)
  document.getElementById('weapon-card-wrapper').style.display = "none";
  //Displays the animation
  document.getElementById('loader-wrapper-weapon').style.display = "flex";
  document.getElementById('weaponCard').style.background = '#900d0d';
}
// Telling the function to start when card onclicks
document.getElementById("weaponCard").onclick = loadingpickWeapon;


// CREATE FUNCTIONS pickRoom
const pickRoom = () => {
  // Tells the animation to not be shown until card is clicked
  document.getElementById('loader-wrapper-room').style.display = "none";
  document.getElementById('room-card-wrapper').style.display = "block";

  // This will randomly select a room from the rooms. And add that to the mystery object.
  mystery.rooms = randomSelector(rooms);

  //This will change styling 
  document.getElementById('roomCard').style.background = '#e7cb96';
  document.getElementById('roomName').style.padding = '15px';
  document.getElementById('roomName').innerHTML = `In the ${mystery.rooms}`;
  let roomName = document.getElementById('roomName');
};

const loadingpickRoom = () => {
  //Decides animation timer
  const loaderTime = setTimeout(pickRoom, 1500);
  //Hides the cards first side 
  document.getElementById('start-display-card-room').style.display = "none";
  //Hides the card information when first when clicked (because the animation will be shown first)
  document.getElementById('room-card-wrapper').style.display = "none";
  //Displays the animation
  document.getElementById('loader-wrapper-room').style.display = "flex";
  document.getElementById('roomCard').style.background = "#900d0d";
}
// Telling the function to start when card onclicks
document.getElementById("roomCard").onclick = loadingpickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
// Get open modal button
const mysteryImage = document.getElementById('mystery.Image');

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.rooms} with a ${mystery.weapons.name}.`;
  document.getElementById('restartButton').style.display = 'block';
}
document.getElementById('reveal').onclick = revealMystery;

// Function to Restart the game
const restart = () => {
  document.location.href = ""
};