// SUSPECTS OBJECTS
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'Very well connected, has friend in high places',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Expert in chemistry and posions',
  age: 32,
  image: 'assets/plumfixed.png',
  occupation: 'Entrepreneur'
}

const missScarlet = {
  nameNam: 'missScarlet',
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'Professional temptress, can seduce anyone.',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Entrepreneur'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Can disguise herself as woman or man alike.',
  age: 48,
  image: 'assets/peacock.png',
  occupation: 'Actress'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Strategies in general, and military strategies especially',
  age: 71,
  image: 'assets/mustard.png',
  occupation: 'Retiered General'
  }

const mrsWhite = {
  firstName: 'Mable',
  lastName: 'White',
  color: 'white',
  description: 'Skilful pick-pocketer and lock-picker',
  age: 83,
  image: 'assets/white.png',
  occupation: 'Retiered Crafts Teacher'
  }


// WEAPONS OBJECTS
const rope = {
  name: 'Rope',
  weight: 10,
  reach: 40,
  image: 'assets/rope.png'
}

const knife = {
  name: 'Knife',
  weight: 10,
  reach: 20,
  image: 'assets/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  weight: 100,
  reach: 30,
  image: 'assets/candlestick.png'
}

const dumbell = {
  name: 'Dumbell',
  weight: 300,
  reach: 30,
  image: 'assets/dumbell.png'
}

const poison = {
  name: 'Poison',
  weight: 5,
  reach: 200,
  image: 'assets/poison.png'
}

const axe = {
  name: 'Axe',
  weight: 200,
  reach: 30,
  image: 'assets/axe.png'
}

const bat = {
  name: 'Bat',
  weight: 250,
  reach: 50,
  image: 'assets/bat.png'
}

const trophy = {
  name: 'Trophy',
  weight: 150,
  reach: 30,
  image: 'assets/trophy.png',
}

const pistol = {
  name: 'Pistol',
  weight: 40,
  reach: 300,
  image: 'assets/pistol.png'
}

// ROOMS OBJECTS
const diningRoom = {
  name: 'Dining Room',
  image: 'assets/diningRoom.jpg'
}

const conservatory = {
  name: 'Conservatory',
  image: 'assets/conservatory.jpg'
}

const kitchen = {
  name: 'Kitchen',
  image: 'assets/kitchen.jpg'
}

const study = {
  name: 'Study',
  image: 'assets/study.jpg'
}
const library = {
  name: 'Library',
  image: 'assets/library.jpg'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'assets/billiardRoom.jpg'
}

const lounge = {
  name: 'Lounge',
  image: 'assets/lounge.jpg'
}

const ballroom = {
  name: 'Ballroom',
  image: 'assets/ballroom.jpg'
}

const hall = {
  name: 'Hall',
  image: 'assets/hall.jpg'
}

const spa = {
  name: 'Spa',
  image: 'assets/spa.jpg'

}

const livingRoom = {
  name: 'Living Room',
  image: 'assets/livingRoom.jpg'
}

const theater = {
  name: 'Theater',
  image: 'assets/theater.jpg'
}

//Arrays for suspects, weapons and rooms
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
  dumbell,
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
  theater
];

//Functions for decks and reveals
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

let mystery = {
  killer:'',
  weapon:'',
  room:'',
};

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  killerImage.src = mystery.killer.image;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerImage').innerHTML = `${mystery.killer.image}`;
}

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  weaponImage.src = mystery.weapon.image;
  document.getElementById('weaponCard').style.background.color = mystery.weapon.color;
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  roomImage.src = mystery.room.image;
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`;
}

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murderer is ${mystery.killer.firstName} ${mystery.killer.lastName}, ${mystery.weapon.name} was the means of the killing, and the murder was committed in the ${mystery.room.name}.`;
}


