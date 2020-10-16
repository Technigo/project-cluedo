//OBJECTS FOR ALL SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'rope'
};

const mrsWhite = {
  firstName: 'Elvira',
  lastName: 'White',
  color: 'white',
  description: 'She knows every corner of the house.',
  age: 65,
  image: 'assets/white.png',
  occupation: 'Chef',
  favouriteWeapon: 'candlestick'
};

const missScarlet = {
  firstName: 'Gloria',
  lastName: 'Scarlet',
  color: 'red',
  description: 'The spotlight is always on her.',
  age: 32,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'dagger'
};

const colonelMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is trained with weapons.',
  age: 52,
  image: 'assets/mustard.png',
  occupation: 'Soldier',
  favouriteWeapon: 'revolver'
};

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She impresses people with her elegance.',
  age: 47,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'wrench'
};

const profPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'His intelligence is stunning.',
  age: 39,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'lead pipe'
};


//OBJECTS FOR ALL WEAPONS

const rope = {
  name: 'rope',
  weight: 10,
  material: 'hampen',
  id: 'rope',
  favouriteRoom: 'hall',
  secondFavouriteRoom: 'billiard room'
};

const candlestick = {
  name: 'candlestick',
  weight: 22,
  material: 'silver',
  id: 'candlestick',
  favouriteRoom: 'lounge',
  secondFavouriteRoom: 'dining room'
};

const revolver = {
  name: 'revolver',
  weight: 30,
  material: 'iron',
  id: 'revolver',
  favouriteRoom: 'study',
  secondFavouriteRoom: 'billiard room'
};

const leadPipe = {
  name: 'lead pipe',
  weight: 52,
  material: 'lead',
  id: 'lead pipe',
  favouriteRoom: 'library',
  secondFavouriteRoom: 'dining room'
};

const dagger = {
  name: 'dagger',
  weight: 28,
  material: 'steel',
  id: 'dagger',
  favouriteRoom: 'conservatory',
  secondFavouriteRoom: 'ballroom'
};

const wrench = {
  name: 'wrench',
  weight: 18,
  material: 'stainless steel',
  id: 'wrench',
  favouriteRoom: 'kitchen',
  secondFavouriteRoom: 'ballroom'
};


//VARIABLES FOR ALL ROOMS

const kitchen = 'kitchen';
const ballroom = 'ballroom';
const conservatory = 'conservatory';
const billiardRoom = 'billiard room';
const library = 'library';
const study = 'study';
const hall = 'hall';
const lounge = 'lounge';
const diningRoom = 'dining room';


//GROUP SUSPECTS, WEAPONS AND ROOMS IN ARRAYS

const suspects = [
  mrGreen,
  mrsWhite,
  missScarlet, 
  colonelMustard,
  mrsPeacock,
  profPlum
];

let weapons = [
  rope, 
  candlestick,
  revolver,
  leadPipe,
  dagger,
  wrench
];

let rooms = [
  kitchen,
  ballroom,
  conservatory,
  billiardRoom,
  library,
  study,
  hall,
  lounge,
  diningRoom
];


//OBJECT TO KEEP THE MYSTERY
const mystery = {
  killer: null,
  weapon: null,
  room: null
};


//RANDOMIZING FUNCTIONS

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const shuffleFavouriteWeapon = person => person.favouriteWeapon = randomSelector(weapons).id;


//FUNCTIONS FOR THE LOADERS

const delayPickKiller = () => {
  document.getElementById('killerLoader').style.display = 'block';
  setTimeout(pickKiller, 1600);
}
document.getElementById('killerInner').addEventListener('click', delayPickKiller);


const delayPickWeapon = () => {
  document.getElementById('weaponLoader').style.display = 'block';
  setTimeout(pickWeapon, 1600);
}
document.getElementById('weaponInner').addEventListener('click', delayPickWeapon);


const delayPickRoom = () => {
  document.getElementById('roomLoader').style.display = 'block';
  setTimeout(pickRoom, 1600);
}
document.getElementById('roomInner').addEventListener('click', delayPickRoom);


//FUNCTION TO MODIFY WEAPON-ARRAY

const findFavouriteWeapon = weapon => {
  if (weapon.id === mystery.killer.favouriteWeapon) {
    weapons.push(weapon, weapon, weapon, weapon);
  };
};


//FUNCTIONS THAT WILL BE INVOKED WHEN YOU CLICK ON THE CARD DECKS

// 1. for the killer card deck.

function pickKiller() {
  document.getElementById('killerLoader').style.display = 'none';
  
  mystery.killer = randomSelector(suspects);
  shuffleFavouriteWeapon(mystery.killer);
  
  weapons = [
    rope, 
    candlestick, 
    revolver, 
    leadPipe, 
    dagger, 
    wrench
  ];
  weapons.forEach(findFavouriteWeapon);

  //Styling
  document.getElementById('killerInner').style.background = mystery.killer.color;
  document.getElementById('killerCard').classList.remove('active');
  document.getElementById('killerInner').classList.remove('front');
  document.getElementById('killerInner').classList.add('back');

  //Show information
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerImage').src = `${mystery.killer.image}`;
  document.getElementById(
    'killerDescription').innerHTML = `${mystery.killer.description}`;
  document.getElementById('killerFavWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
};


// 2. for the weapon card deck.

const pickWeapon = () => {
  document.getElementById('weaponLoader').style.display = 'none';

  mystery.weapon = randomSelector(weapons);

  rooms = [
    kitchen,
    ballroom,
    conservatory,
    billiardRoom,
    library,
    study,
    hall,
    lounge,
    diningRoom
  ];
  rooms.push(
    mystery.weapon.favouriteRoom,
    mystery.weapon.favouriteRoom,
    mystery.weapon.favouriteRoom,
    mystery.weapon.favouriteRoom,
  );
  rooms.push(
    mystery.weapon.secondFavouriteRoom,
    mystery.weapon.secondFavouriteRoom,
  );

  //Styling
  document.getElementById('weaponCard').classList.remove('active');
  document.getElementById('weaponInner').classList.remove('front');
  document.getElementById('weaponInner').classList.add('back');

  //Show information
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`;
  document.getElementById('weaponMaterial').innerHTML = `${mystery.weapon.material}`;
};


//3. for the room card deck.

const pickRoom = () => {
  document.getElementById('roomLoader').style.display = 'none';

  mystery.room = randomSelector(rooms);

  //Styling
  document.getElementById('roomCard').classList.remove('active');
  document.getElementById('roomInner').classList.remove('front');
  document.getElementById('roomInner').classList.add('back');

  //Show information
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
};


// REAVEALING THE MYSTERY

const revealMystery = () => {
  const revealText = document.getElementById('revealedMystery');
  revealText.style.display = 'block';

  if (mystery.killer && mystery.weapon && mystery.room) {
    revealText.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} 
    in the ${mystery.room} with a ${mystery.weapon.name}.`;
  } else {
      revealText.innerHTML = 'Please choose one card from each deck!'
    };
};

document.getElementById('revealButton').onclick = revealMystery;


