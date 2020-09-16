// SUSPECTS OBJECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#16a83d',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favoriteWeapon: 'knife'
}

const prPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: '#ff40ef',
  description: 'He is highly intelligent',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor',
  favoriteWeapon: 'bat'
}

const msScarlet = {
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: '#ff3030',
  description: 'She is always wearing red',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favoriteWeapon: 'poison'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: '#4050ff',
  description: 'She enjoys ballroom dancing',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favoriteWeapon: 'candlestick'
}

const colMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: '#f0fa32',
  description: 'He has a stiff right leg and walks with a limp',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favoriteWeapon: 'trophy'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'She likes her surroundings spotless',
  age: 70,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favoriteWeapon: 'pistol'
}

// WEAPON OBJECTS

const rope = {
  name: 'rope',
  weight: 0.3,
  id: 'rope'
}

const knife = {
  name: 'knife',
  weight: 1,
  id: 'knife'
}

const candlestick = {
  name: 'candlestick',
  weight: 2,
  id: 'candlestick'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 16,
  id: 'dumbbell'
}

const poison = {
  name: 'poison',
  weight: 0.2,
  id: 'poison'
}

const axe = {
  name: 'axe',
  weight: 7,
  id: 'axe'
}

const bat = {
  name: 'bat',
  weight: 3,
  id: 'bat'
}

const trophy = {
  name: 'trophy',
  weight: 15,
  id: 'trophy'
}

const pistol = {
  name: 'pistol',
  weight: 2,
  id: 'pistol'
}

// ROOM VARIABLES

const roomDining = 'Dining Room';

const roomConservatory = 'Conservatory';

const roomKitchen = 'Kitchen';

const roomStudy = 'Study';

const roomLibrary = 'Library';

const roomBilliard = 'Billiard Room';

const roomLounge = 'Lounge';

const roomBallroom = 'Ballroom';

const roomHall = 'Hall';

const roomSpa = 'Spa';

const roomLiving = 'Living Room';

const roomObservatory = 'Observatory';

const roomTheather = 'Theater';

const roomGuest = 'Guest House';

const roomPatio = 'Patio';

// OBJECT THAT KEEPS THE MYSTERY.

let mystery = {
  killer: '',
  weapon: '',
  room: ''
}

// ARRAYS OF ALL SUSPECTS, WEAPONS AND ROOMS

const suspects = [
  mrGreen,
  prPlum,
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
  roomDining,
  roomConservatory,
  roomKitchen,
  roomStudy,
  roomLibrary,
  roomBilliard,
  roomLounge,
  roomBallroom,
  roomHall,
  roomSpa,
  roomLiving,
  roomObservatory,
  roomTheather,
  roomGuest,
  roomPatio
]


// FUNCTION THAT RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT PASSES IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Function to shuffle the suspects favorite weapon
const shuffleFavoriteWeapon = () => {
  favoriteWeapon = weapons[Math.floor(Math.random() * weapons.length)]; //Picks a random weapon from the array and creates a favoriteWeapon object
  mystery.killer.favoriteWeapon = favoriteWeapon.name;// Assigns the name of favoriteWeapon to choosen killers object
  document.getElementById('favoriteWeapon').innerHTML = `Prefered weapon: ${mystery.killer.favoriteWeapon}`; //Prints favoriteweapon to card
}

// This function will be invoked when clicking on the killer card.
const pickKiller = () => {
  document.getElementById("loader-wrapper-killer").style.display = "none";
  document.getElementById("killer-info-wrapper").style.display = "block";
  // Randomly selects a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);
  // This will change the styling and content of the card after it is clicked 
  document.getElementById('killerCard').style.backgroundColor = mystery.killer.color;
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
  shuffleFavoriteWeapon();//calls the function to shuffle the favorite weapon for choosen killer
}

const loadingPickKiller = () => {
  // Sets time for loader animation and calls pickKiller function after
  const loaderTime = setTimeout(pickKiller, 2000);
  // Hides the first "side"/ p-tag of the card
  document.getElementById("start-view-card-killer").style.display = "none";
  // Hides the killer information
  document.getElementById('killer-info-wrapper').style.display = "none";
  // Displays the loader
  document.getElementById('loader-wrapper-killer').style.display = "flex";
  document.getElementById('killerCard').style.backgroundColor = '#000'; 
}

// Calling the LoadingPickKiller function
document.getElementById("killerCard").onclick = loadingPickKiller;


//This function will be invoked when clicking on the weapon card.
const pickWeapon = () => {
  document.getElementById("loader-wrapper-weapon").style.display = "none";
  document.getElementById("weapon-info-wrapper").style.display = "block";
  // Randomly selects a weapon from the array. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
  // This will change the styling and the content of the card after it is clicked
  document.getElementById('weaponName').innerHTML = `type: ${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `weight: ${mystery.weapon.weight} kg`;
  document.getElementById("start-view-card-weapon").style.display = "none";
}

const loadingPickWeapon = () => {
  // Sets time for loader animation and calls pickKiller function after
  const loaderTime = setTimeout(pickWeapon, 2000);
  // Hides the first "side"/ p-tag of the card
  document.getElementById("start-view-card-weapon").style.display = "none";
  // Hides the killer information
  document.getElementById('weapon-info-wrapper').style.display = "none";
  // Displays the loader
  document.getElementById('loader-wrapper-weapon').style.display = "flex";
  document.getElementById('weaponCard').style.backgroundColor = '#000'; 
}
// Calling the loadingPickWeapon function
document.getElementById("weaponCard").onclick = loadingPickWeapon;

//This function will be invoked when clicking on the room card.
const pickRoom = () => {
  document.getElementById("loader-wrapper-room").style.display = "none";
  document.getElementById("room-info-wrapper").style.display = "block";
  // Randomly selects a room from the array. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  // This will change the styling and the content of the card after it is clicked
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
  document.getElementById("start-view-card-room").style.display = "none";
}

const loadingPickRoom = () => {
  // Sets time for loader animation and calls pickKiller function after
  const loaderTime = setTimeout(pickRoom, 2000);
  // Hides the first "side"/ p-tag of the card
  document.getElementById("start-view-card-room").style.display = "none";
  // Hides the killer information
  document.getElementById('room-info-wrapper').style.display = "none";
  // Displays the loader
  document.getElementById('loader-wrapper-room').style.display = "flex";
  document.getElementById('roomCard').style.backgroundColor = '#000'; 
}
// Calling the loadingPickRoom function
document.getElementById("roomCard").onclick = loadingPickRoom;



// Function to reveal mystery when clicking the button
const revealMystery = () => {
  if (mystery.killer === '') {
    document.getElementById('mystery').innerHTML = `Please pick a killer!`;
  } else if (mystery.weapon === '') {
    document.getElementById('mystery').innerHTML = `Please pick a weapon!`;
  } else if (mystery.room === '') {
    document.getElementById('mystery').innerHTML = `Please pick a room!`;
  } else {
    document.getElementById('mystery').innerHTML = 
    `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}!`;
  }
}

// Calling the revealMystery function
document.getElementById('revealButton').onclick = revealMystery;