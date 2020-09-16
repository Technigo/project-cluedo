// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: "knife"
}
console.log(mrGreen.description);

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is quick-witted, who lost his medical license for having an affair with one of his patients.',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: "rope"
}
console.log(professorPlum.description);

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'A stock femme fatale, she is typically portrayed as young, cunning and attractive.',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: 'Runs an underground brothel',
  favouriteWeapon: "candlestick"
}
console.log(missScarlet.description);

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'A grand madame, the wife of a U.S. Senator who is accused of taking bribes',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Housewife',
  favouriteWeapon: "dumbbell"
}
console.log(mrsPeacock.description);

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'A dignified, dapper and dangerous military man.',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'War profiteer',
  favouriteWeapon: "poison"
}
console.log(colonelMustard.description);

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'A frazzled servant. Depicted as the widow of a nuclear physicist whose death she is suspected of being behind',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Nurse',
  favouriteWeapon: "axe"
}
console.log(mrsWhite.description);

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  material: 'textile',
  id: "rope",
  image: 'assets/green.png',
}
console.log(rope);

const knife = {
  name: 'knife',
  material: 'metal',
  id: "knife",
  image: 'assets/green.png',
}
console.log(knife);

const candlestick = {
  name: 'candlestick',
  material: 'silver',
  id: "candlestick",
  image: 'assets/green.png',
}
console.log(candlestick);

const dumbbell = {
  name: 'dumbbell',
  material: 'iron',
  id: "dumbbell",
  image: 'assets/green.png',
}
console.log(dumbbell);

const poison = {
  name: 'poison',
  material: 'liquid',
  id: "poison",
  image: 'assets/green.png',
}
console.log(poison);

const axe = {
  name: 'axe',
  material: 'metal',
  id: "axe",
  image: 'assets/green.png',
}
console.log(axe);

const bat = {
  name: 'bat',
  material: 'wood',
  image: 'assets/green.png',
}
console.log(bat);

const trophy = {
  name: 'trophy',
  material: 'silver',
  image: 'assets/green.png',
}
console.log(trophy);

const pistol = {
  name: 'pistol',
  material: 'metal',
  image: 'assets/green.png',
}
console.log(pistol);

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
console.log(suspects);

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
console.log(weapons);

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
console.log(rooms);

const favouriteWeaponArray = [
  "rope",
  "knife",
  "candlestick",
  "dumbbell",
  "poison",
  "axe"
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: '',
  weapons: '',
  rooms: '',
};
console.log(mystery);

// Try to add shuffleFavouriteWeapon

const shuffleFavouriteWeapon = (suspects) => {
favouriteWeaponArray.favouriteWeapon = randomSelector(suspects).favouriteWeapon;
//}

console.log(shuffleFavouriteWeapon);

// This function will be invoked when you click on the killer card.

const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById(
    'killerName'
    ).innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById(
    'killerDescription'
  ).innerHTML = `${mystery.killer.description}`;
  document.getElementById(
    'killerFavouriteWeapon'
    ).innerHTML = `This persons favourite weapon is ${mystery.killer.favouriteWeapon}`;
  let killerImage = document.getElementById('killerImage');
  killerImage.src = mystery.killer.image;
};
console.log(pickKiller);

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapons = randomSelector(weapons);

  document.getElementById('weaponCard');
  document.getElementById(
    'weaponName'
  ).innerHTML = `Weapon: ${mystery.weapons.name}`;
  document.getElementById(
   'weaponMaterial' 
  ).innerHTML = `Material: ${mystery.weapons.material}`
  let weaponsImage = document.getElementById('weaponsImage');
  weaponsImage.src = mystery.weapons.Image;
};
console.log(pickWeapon);

// CREATE FUNCTIONS pickRoom
const pickRoom = () => {
  mystery.rooms = randomSelector(rooms);

  document.getElementById('roomCard');
  document.getElementById(
    'roomName'
  ).innerHTML = `In the ${mystery.rooms}`;
  let roomName = document.getElementById('roomName');
};
console.log(pickRoom);

// To show all of this cool stuff in the browser
document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
// Get open modal button

const mysteryImage = document.getElementById('mystery.Image');

const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.rooms} with a ${mystery.weapons.name}.`;
    document.getElementById('restartButton').style.display = 'block';
}

console.log(revealMystery);
document.getElementById('reveal').onclick = revealMystery;

// Function to Restart the game
const restart = () => {
  document.location.href = "";
};