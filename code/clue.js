// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

let mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'bat'
}


let professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: ' bla bla bla ',
  age: 40,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'rope'

}

let missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'People always underestimate her, they dont know her occupation',
  age: 35,
  image: 'assets/scarlet.png',
  occupation: 'Undercover spy',
  favouriteWeapon: 'candlestick'
}

let mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is very rich',
  age: 43,
  image: 'assets/peacock.png',
  occupation: 'Interior Designer',
  favouriteWeapon: 'pistol'
}

let colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'loves the military',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Retired',
  favouriteWeapon: 'axe'
}

let mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She became a widower and got her freedom back',
  age: 63,
  image: 'assets/white.png',
  occupation: 'Globetrotter',
  favouriteWeapon: 'poision'
}

//console log test 
console.log(mrsWhite.description)




// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  id: 'rope',
  name: 'rope',
  weight: 6,
  color: 'brown'
}

const knife = {
  id: 'knife',
  name: 'knife',
  weight: 5,
  color: 'dark grey'

}

const candleStick = {
  id: 'candlestick',
  name: 'candlestick',
  weight: 6,
  color: 'rosegold'
}

const dumbBell = {
  id: 'dumbbell',
  name: 'dumbbell',
  weight: 10,
  color: 'grey'
}

const poision = {
  id: 'poision',
  name: 'poision',
  weight: 3,
  color: 'green'
}

const axe = {
  id: 'axe',
  name: 'axe',
  weight: 10,
  color: 'silver'
}

const bat = {
  id: 'bat',
  name: 'bat',
  weight: 7,
  color: 'black'
}

const trophy = {
  id: 'trophy',
  name: 'trophy',
  weight: 9,
  color: 'gold'
}

const pistol = {
  id: 'pistol',
  name: 'pistol',
  weight: 8,
  color: 'black'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

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
  candleStick,
  dumbBell,
  poision,
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
  "Ball room",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];


console.log(suspects);
console.log(weapons);
console.log(rooms);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.

let mystery = {
  killer: null,
  weapons: null,
  room: null
};


// This function will be invoked when you click on the killer card.

const pickKiller = () => {

  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  const killerName = document.getElementById('killerName')
  const killerOccupation = document.getElementById('killerOccupation')
  const killerCard = document.getElementById('killerCard')
  const killerImage = document.getElementById('killerImage');

  killerCard.style.background = mystery.killer.color
  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerOccupation.innerHTML = `${mystery.killer.occupation}`;
  killerImage.src = mystery.killer.image;

  // shuffel favorite weapon function.
  const shuffleFavouriteWeapon = () => {
  mystery.favouriteWeapon = randomSelector(weapons);
  document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.favouriteWeapon.name}`;
  }
  shuffleFavouriteWeapon();
};


// pickWeapon function

const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapons = randomSelector(weapons)

  const weaponCard = document.getElementById('weaponCard')
  const weaponName = document.getElementById('weaponName')

  weaponCard.style.background = mystery.weapons.color
  weaponName.innerHTML = `${mystery.weapons.name}`
}


// CREATE FUNCTION pickRoom 

const pickRoom = () => {
  // This will randomly select a room. And add that to the mystery object.
  mystery.rooms = randomSelector(rooms)

  const roomName = document.getElementById('roomName')
  roomName.innerHTML = `${mystery.rooms}`
}


//invoke function onclick
document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. 


const revealMystery = () => {
  document.getElementById(
    'mystery'
  ).innerHTML = `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.rooms} with a ${mystery.weapons.name}.`;
};

document.getElementById('revealButton').onclick = revealMystery;












