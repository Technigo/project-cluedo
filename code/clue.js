let killerIsPicked = false;
let weaponIsPicked = false;
let roomIsPicked = false;

//Suspect objects

let mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#0b6623',
  description: 'He has a lot of connections',
  age: 48,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'rope'
};

let professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#4e1245',
  description: 'He is a quick witted person',
  age: 45,
  image: 'assets/plum.png',
  occupation: 'College professor',
  favouriteWeapon: 'candlestick'
};

let missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#bc0000',
  description: 'She is a sassy femme fatale',
  age: 29,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'pistol'
};

let mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#111e6c',
  description: 'She is an intellectual well dressed woman',
  age: 51,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'knife'
};

let colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#e1ad01',
  description: 'He is a dapper ex military man',
  age: 63,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'bat'
};

let mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#d8d8d8',
  description: 'She is a widow and a long serving cleaner',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'poison'
};

//Weapon objects

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

// Arrays

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

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Mystery object
let mystery = {
  killer: '',
  weapon: '',
  room: ''
};

//This shuffles the favourite weapon
const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
  const randomWeapon = randomSelector(weapons);
  suspect.favouriteWeapon = randomWeapon.id;
  });
};


// Pick killer function
const pickKiller = () => {
    if (!killerIsPicked) {
    document.getElementById('killerLoader').style.visibility='visible' 
    setTimeout(function () {
      document.getElementById('killerLoader').style.visibility='hidden'
      shuffleFavouriteWeapon(suspects); //This randomly selects a favourite weapon.
      mystery.killer = randomSelector(suspects);
      document.getElementById('killerCard').style.background = mystery.killer.color;
      document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
      document.getElementById('killerAge').innerHTML = mystery.killer.age;
      document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation;
      document.getElementById('killerImage').src = mystery.killer.image;
      document.getElementById('killerDescription').innerHTML = mystery.killer.description;
      document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
      killerIsPicked = true;
      }, 2500);
    }
};

document.getElementById('killerCard').addEventListener('click', pickKiller);

// Pick weapon function
const pickWeapon = () => {
  if (!weaponIsPicked) {
    document.getElementById('weaponLoader').style.visibility='visible';
    setTimeout(function () {
      document.getElementById('weaponLoader').style.visibility='hidden';
      mystery.weapon = randomSelector(weapons); 
      document.getElementById('weaponImage').src = mystery.weapon.image;
      document.getElementById('weaponName').innerHTML = mystery.weapon.name;
      document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}kg`;
      weaponIsPicked = true;
    }, 2500)
}

};
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

// Pick room function
const pickRoom = () => {
    if (!roomIsPicked) {
    document.getElementById('roomLoader').style.visibility='visible';
    setTimeout(function () {
      document.getElementById('roomLoader').style.visibility='hidden';
      mystery.room = randomSelector(rooms);
      document.getElementById('roomName').innerHTML = mystery.room.name;
      document.getElementById('roomImage').src = mystery.room.image;
      roomIsPicked = true
    }, 2500)
  }
};

document.getElementById('roomcard').addEventListener('click', pickRoom);


// Reveal function

//const revealMystery() { - this function does not work when created using const keyword
  function revealMystery() {
    if (killerIsPicked === true && weaponIsPicked === true && roomIsPicked ===true) {
      document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with the ${mystery.weapon.name}`;

    }
  };

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
  document.getElementById('favouriteWeapon').innerHTML = "";
  document.getElementById('weaponImage').src = "";
  document.getElementById('weaponName').innerHTML = "";
  document.getElementById('weaponWeight').innerHTML = "";
  document.getElementById('roomName').innerHTML = "";
  document.getElementById('roomImage').src = "";
  document.getElementById('mystery').innerHTML = "";
};
 