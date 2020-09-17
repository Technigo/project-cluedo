// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

let mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#0b6623',
  description: 'He has a lot of connections',
  age: 48,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: ''
};

let professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#4e1245',
  description: 'He is a quick witted person',
  age: 45,
  image: 'assets/plum.png',
  occupation: 'College professor',
  favouriteWeapon: ''
};

let missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#bc0000',
  description: 'She is a sassy femme fatale',
  age: 29,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: ''
};

let mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#111e6c',
  description: 'She is an intellectual well dressed woman',
  age: 51,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: ''
};

let colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#e1ad01',
  description: 'He is a dapper ex military man',
  age: 63,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: ''
};

let mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#d8d8d8',
  description: 'She is a widow and a long serving cleaner',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: ''
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  image: 'assets/rope.png',
  id: 'rope'
};

const knife = {
  name: 'Knife',
  weight: 2,
  image: 'assets/knife.png',
  id: 'knife'
};

const candlestick = {
  name: 'Candlestick',
  weight: 4,
  image: 'assets/candlestick.png',
  id: 'candlestick'
};

const dumbbell = {
  name: 'Dumbbell',
  weight: 12,
  image: 'assets/dumbbell.png',
  id: 'dumbbell'
};

const poison = {
  name: 'Poison',
  weight: 0.5,
  image: 'assets/poison.png',
  id: 'poison'
};

const axe = {
  name: 'Axe',
  weight: 15,
  image: 'assets/axe.png',
  id: 'axe'
};

const bat = {
  name: 'Bat',
  weight: 9,
  image: 'assets/bat.png',
  id: 'bat'
};

const trophy = {  
  name: 'Trophy',
  weight: 4,
  image: 'assets/trophy.png',
  id: 'trophy'
};

const pistol = {
  name: 'Pistol',
  weight: 8,
  image: 'assets/pistol.png',
  id: 'pistol'
};

// Room objects

const diningRoom = {
  name: 'Dining Room',
  image: 'assets/dining-room.png'
}; 
  
const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.png' 
};

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.png'
};

const study = {
  name: 'Study',
  image: 'assets/study.png' 
};

const library = {
  name: 'Library',
  image: 'assets/library.png'
};

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiard-room.png'
};

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.png'
};

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.png'
};

const hall = {
  name: 'Hall', 
  image: 'assets/hall.png'
};

const spa = {
  name: 'Spa',
  image: 'assets/spa.png'
};
 
const livingRoom = {
  name: 'Living Room',
  image: 'assets/living-room.png'
};

const observatory = {
  name: 'Observatory',
  image: 'assets/observatory.png'
};

const theater = {
  name: 'Theater',
  image: 'assets/theater.png'
};
 
 const guestHouse = {
   name: 'Guest House',
   image: 'assets/guest-house.png'
 };

 const patio = {
   name: 'Patio',
   image: 'assets/patio.png'
 };

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
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
  lounge, 
  ballroom, 
  hall, 
  spa, 
  livingRoom, 
  observatory, 
  theater,
  guestHouse,
  patio
];

/*console.log(mrsPeacock.description);
console.log(rope.weight);
console.log(suspects[suspects.length-2]);

suspects.forEach((suspects) => {
  console.log(suspects.description);
});

console.log(weapons);*/


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mysteryCards = {
  killer: "",
  weapon: "",
  room: ""
};

let favouriteWeapon = {
  killer: "",
  weapon: "",
  room: ""
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  const loader = document.querySelector('.loader');
  const cardLoad = document.querySelector('.killer-deck');

  const cardLoader = () => {
    setTimeout(() => {
      loader.style.opactity = 0;
      loader.style.display = 'none';

      cardLoad.style.display = 'block';
      setTimeout(() => (main.style.opactity = 1), 50);
    }), 4000;
  }

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = mystery.killer.age;
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation;
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerDescription').innerHTML = mystery.killer.description;
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons); 
  document.getElementById('weaponImage').src = mystery.weapon.image;
  document.getElementById('weaponName').innerHTML = mystery.weapon.name;
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}kg`;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById('roomName').innerHTML = mystery.room.name;
  document.getElementById('roomImage').src = mystery.room.image;
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with the ${mystery.weapon.name}`;
}

const clearMystery = () => {
  mystery.killer = "";
  mystery.weapon = "";
  mystery.room = "";
  document.getElementById('killerCard').style.background = "";
  document.getElementById('killerName').innerHTML = "";
  document.getElementById('killerAge').innerHTML = "";
  document.getElementById('killerOccupation').innerHTML = "";
  document.getElementById('killerImage').src = ""
  document.getElementById('killerDescription').innerHTML = "";
  document.getElementById('favoriteWeapon').innerHTML = "";
  document.getElementById('weaponImage').src = "";
  document.getElementById('weaponName').innerHTML = "";
  document.getElementById('weaponWeight').innerHTML = "";
  document.getElementById('roomName').innerHTML = "";
  document.getElementById('roomImage').src = "";
  document.getElementById('mystery').innerHTML = "";
};

const shuffleFavouriteWeapon = () => {
  // This will randomly select a favourite weapon.
  mystery.killer.favoriteWeapon = randomSelector(weapons);
  //document.getElementById('favoriteWeapon').innerHTML = mystery.killer.favoriteWeapon;
  document.getElementById('favoriteWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
};
