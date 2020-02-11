// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THER
// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

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
  image: 'assets/plum.png',
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
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
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
  document.getElementById("mystery").innerHTML = `Killer is ${mystery.killer.firstName} ${mystery.killer.lastName} with a ${mystery.weapon.name} in the ${mystery.room.name}`;
}

// This function will be invoked when you click on the killer card.

// This will randomly select a killer from the suspects. And add that to the mystery object.

// This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  
// const revealButton = document.getElementById('button')

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
