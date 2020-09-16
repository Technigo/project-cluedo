// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He fancies beautiful women',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Psychiatrist'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a femme fatale',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Escort girl'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is a former miss USA',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Teacher'
}

const colMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a colonial imperialist',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Retired soldier'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She works at a prestigious restaurant',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Waitress'
}

// console.log(msScarlet.occupation);

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  weight: 5
}

const candlestick = {
  name: 'candlestick',
  weight: 20
}

const dumbbell = {
  name: 'dumbbell',
  weight: 50
}

const poison = {
  name: 'poison',
  weight: 4
}

const axe = {
  name: 'axe',
  weight: 30
}

const bat = {
  name: 'bat',
  weight: 25
}

const trophy = {
  name: 'trophy',
  weight: 15
}

const pistol = {
  name: 'pistol',
  weight: 16
}

// console.log(dumbbell.weight);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const diningRoom = 'Dining Room'

const conservatory = 'Conservatory'

const kitchen = 'Kitchen'

const study = 'Study'

const library = 'Library'

const billiardRoom = 'Billiard Room'

const lounge = 'Lounge'

const ballroom = 'Ballroom'

const hall = 'Hall'

const spa = 'Spa'

const livingRoom = 'Living Room'

const observatory = 'Observatory'

const theater = 'Theater'

const guestHouse = 'Guest House'

const patio = 'Patio'

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  msScarlet,
  mrsPeacock,
  colMustard,
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
]

// console.log(suspects);
// console.log(weapons);
// console.log(rooms);

// first suspect in the suspects array
// console.log(suspects[0]);

// last room in the room array
// console.log(rooms[rooms.length - 1]);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: '',
  room: '',
  weapon: ''
};
// console.log(mystery)

const killerCard = document.getElementById('killerCard');
const killerName = document.getElementById('killerName');
const killerImage = document.getElementById('killerImage');
const weaponCard = document.getElementById('weaponCard');
const weaponName = document.getElementById('weaponName');
const roomCard = document.getElementById('roomCard');
const roomName = document.getElementById('roomName');
const revealedMystery = document.getElementById('mystery');
const revealButton = document.getElementById('revealButton');
const resetButton = document.getElementById('resetButton');

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  killerCard.style.background = mystery.killer.color;
  killerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerImage.src = mystery.killer.image;
};

killerCard.onclick = pickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  weaponName.innerHTML = mystery.weapon.name;
};

weaponCard.onclick = pickWeapon;

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  roomName.innerHTML = mystery.room;
};

roomCard.onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '') {
    revealedMystery.innerHTML = ('Make sure you have picked a killer, a weapon and a room!');
  } else {
    revealedMystery.innerHTML = (`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}.`);
  }
};

const resetMystery = () => {
  location.reload();
};

revealButton.onclick = revealMystery;
resetButton.onclick = resetMystery;