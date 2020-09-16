// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const mrsWhite = {
  firstName: 'Elvira',
  lastName: 'White',
  color: 'white',
  description: 'She knows every corner of the house.',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Chef'
};

const missScarlet = {
  firstName: 'Gloria',
  lastName: 'Scarlet',
  color: 'red',
  description: 'The spotlight is always on her.',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
};

const colonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is trained with weapons.',
  age: 52,
  image: 'assets/mustard.png',
  occupation: 'Soldier'
};

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She impresses people with her elegance.',
  age: 47,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
};

const profPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'His intelligence is stunning.',
  age: 39,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

// console.log(mrGreen.firstName);
// console.log(mrsWhite.lastName);
// console.log(missScarlet.color);
// console.log(colonelMustard.description);
// console.log(mrsPeacock.age);
// console.log(profPlum.occupation);


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  material: 'hampen'
};

const candlestick = {
  name: 'candlestick',
  weight: 22,
  material: 'silver'
};

const revolver = {
  name: 'revolver',
  weight: 30,
  material: 'iron'
};

const leadPipe = {
  name: 'lead pipe',
  weight: 52,
  material: 'lead'
};

const dagger = {
  name: 'dagger',
  weight: 28,
  material: 'steel'
};

const wrench = {
  name: 'wrench',
  weight: 18,
  material: 'stainless steel'
};

// console.log(rope.name);
// console.log(candlestick.weight);
// console.log(revolver.material);
// console.log(leadPipe.name);
// console.log(dagger.weight);
// console.log(wrench.material);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const kitchen = 'kitchen';
const ballroom = 'ballroom';
const conservatory = 'conservatory';
const billiardRoom = 'billiard room';
const library = 'library';
const study = 'study';
const hall = 'hall';
const lounge = 'lounge';
const diningRoom = 'dining room';


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  missScarlet, 
  colonelMustard,
  mrsPeacock,
  profPlum
]

const weapons = [
  rope, 
  candlestick,
  revolver,
  leadPipe,
  dagger,
  wrench
]

const rooms = [
  kitchen,
  ballroom,
  conservatory,
  billiardRoom,
  library,
  study,
  hall,
  lounge,
  diningRoom
]

// console.log(rooms);
// console.log(weapons);
// console.log(suspects);

// console.log(rooms[0]);
// console.log(weapons[4]);
// console.log(suspects[suspects.length-1])

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: null,
  weapon: null,
  room: null
};
// console.log(mystery.killer)
// console.log(mystery.weapon)

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerImage').src = `${mystery.killer.image}`;
  document.getElementById(
    'killerDescription').innerHTML = `${mystery.killer.description}`;
};

document.getElementById('killerCard').onclick = pickKiller;
// console.log(mystery.killer)

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);

  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`;
  document.getElementById('weaponMaterial').innerHTML = `${mystery.weapon.material}`;
};

document.getElementById('weaponCard').onclick = pickWeapon;
// console.log(mystery.weapon)

const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  document.getElementById('roomName').innerHTML = `${mystery.room}`;
};

document.getElementById('roomCard').onclick = pickRoom;
// console.log(mystery.room)

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
