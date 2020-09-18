//LAYOUT MODIFICATIONS ON PAGE LOAD//

//Makes the frontside of the card decks visible when loading the page.
document.getElementById('killerCard').classList.add("active");
document.getElementById('weaponCard').classList.add("active");
document.getElementById('roomCard').classList.add("active");

document.getElementById('weaponInner').classList.add("front");
document.getElementById('killerInner').classList.add("front");
document.getElementById('roomInner').classList.add("front");



// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

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
}


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  material: 'hampen',
  id: 'rope'
};

const candlestick = {
  name: 'candlestick',
  weight: 22,
  material: 'silver',
  id: 'candlestick'
};

const revolver = {
  name: 'revolver',
  weight: 30,
  material: 'iron',
  id: 'revolver'
};

const leadPipe = {
  name: 'lead pipe',
  weight: 52,
  material: 'lead',
  id: 'lead pipe'
};

const dagger = {
  name: 'dagger',
  weight: 28,
  material: 'steel',
  id: 'dagger'
};

const wrench = {
  name: 'wrench',
  weight: 18,
  material: 'stainless steel',
  id: 'wrench'
};



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




// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


//FUNCTION THAT SHUFFLES THE FAVOURITE WEAPON OF A PERSON
const shuffleFavouriteWeapon = person => person.favouriteWeapon = randomSelector(weapons).id


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer: null,
  weapon: null,
  room: null
};

//Function to delay pickKiller-function:
const delayPickKiller = () => {
  document.getElementById('killerLoader').style.display = 'block';
  setTimeout(pickKiller, 1600);
}

document.getElementById('killerInner').addEventListener('click', delayPickKiller);

//Function to delay pickWeapon-function:
const delayPickWeapon = () => {
  document.getElementById('weaponLoader').style.display = 'block';
  setTimeout(pickWeapon, 1600);
}

document.getElementById('weaponInner').addEventListener('click', delayPickWeapon);

//Function to delay pickRoom-function:
const delayPickRoom = () => {
  document.getElementById('roomLoader').style.display = 'block';
  setTimeout(pickRoom, 1600);
}

document.getElementById('roomInner').addEventListener('click', delayPickRoom);

//FUNCTIONS THAT WILL BE INVOKED WHEN YOU CLICK ON THE CARD DECKS

// 1. for the killer card deck.

function pickKiller() {
  document.getElementById('killerLoader').style.display = 'none';
  // This will randomly select a killer from the suspects, add that to the mystery object and give him/her a random favourite weapon.
  mystery.killer = randomSelector(suspects);
  shuffleFavouriteWeapon(mystery.killer);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerInner').style.background = mystery.killer.color;

  //This will remove the card fronzside styling.
  document.getElementById('killerCard').classList.remove('active');
  document.getElementById('killerInner').classList.remove('front');
  document.getElementById('killerInner').classList.add('back');

  //This will show information about the killer
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerImage').src = `${mystery.killer.image}`;
  document.getElementById(
    'killerDescription').innerHTML = `${mystery.killer.description}`;
  document.getElementById('killerFavWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
}


// 2. for the weapon card deck.

const pickWeapon = () => {
  document.getElementById('weaponLoader').style.display = 'none';

  mystery.weapon = randomSelector(weapons);

  //This will remove the card frontside styling.
  document.getElementById('weaponCard').classList.remove('active');
  document.getElementById('weaponInner').classList.remove('front');
  document.getElementById('weaponInner').classList.add('back');


  //Show information about the picked weapon.
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`;
  document.getElementById('weaponMaterial').innerHTML = `${mystery.weapon.material}`;
};


//3. for the room card deck.

const pickRoom = () => {
  document.getElementById('roomLoader').style.display = 'none';

  mystery.room = randomSelector(rooms);

  //This will remove the card frontside styling.
  document.getElementById('roomCard').classList.remove('active');
  document.getElementById('roomInner').classList.remove('front');
  document.getElementById('roomInner').classList.add('back');

  //Show the name opf the picked room
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
};


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  // console.log(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} 
  // in the ${mystery.room} with a ${mystery.weapon.name}.`)
  const revealText = document.getElementById('revealedMystery')
  revealText.style.display = 'block'
  //Only reveal a mystery, when killer, weapon and room are chosen.
  if (mystery.killer !== null && mystery.weapon !== null && mystery.room !== null) {
      //Show a box with a text that reveals the mystery
    revealText.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} 
    in the ${mystery.room} with a ${mystery.weapon.name}.`;

  } else {
      revealText.innerHTML = 'Please choose one card from each deck!'
    }
}

//Call the revealMystery function
document.getElementById('revealButton').onclick = revealMystery;


