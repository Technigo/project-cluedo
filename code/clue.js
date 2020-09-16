// SUSPECTS OBJECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#16a83d',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const prPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: '#ff40ef',
  description: 'He is highly intelligent',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const msScarlet = {
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: '#ff3030',
  description: 'She is always wearing red',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: '#4050ff',
  description: 'She enjoys ballroom dancing',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: '#f0fa32',
  description: 'He has a stiff right leg and walks with a limp',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
}

const mrsWhite = {
  firstName: 'Blanche',
  lastName: 'White',
  color: 'white',
  description: 'She likes her surroundings spotless',
  age: 70,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
}

// WEAPON OBJECTS

const rope = {
  name: 'rope',
  weight: 0.3
}

const knife = {
  name: 'knife',
  weight: 1
}

const candlestick = {
  name: 'candlestick',
  weight: 2
}

const dumbbell = {
  name: 'dumbbell',
  weight: 16
}

const poison = {
  name: 'poison',
  weight: 0.2
}

const axe = {
  name: 'axe',
  weight: 7
}

const bat = {
  name: 'bat',
  weight: 3
}

const trophy = {
  name: 'trophy',
  weight: 15
}

const pistol = {
  name: 'pistol',
  weight: 2
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

// OBJECT THAT KEEPS THE MYSTERY.

let mystery = {
  killer: '',
  weapon: '',
  room: ''
}
  

// This function will be invoked when clicking on the killer card.
const pickKiller = () => {
  // Randomly selects a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  // This will change the styling and content of the card after it is clicked 
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
  // Hides the first "side"/ p-tag of the card
  document.getElementById("start-view-card-killer").style.display = "none";
}

// Calling the pickKiller function
document.getElementById("killerCard").onclick = pickKiller;


//This function will be invoked when clicking on the weapon card.
const pickWeapon = () => {
  // Randomly selects a weapon from the array. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
  // This will change the styling and the content of the card after it is clicked
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `weight: ${mystery.weapon.weight} kg`;
  document.getElementById("start-view-card-weapon").style.display = "none";
}

// Calling the pickWeapon function
document.getElementById("weaponCard").onclick = pickWeapon;

//This function will be invoked when clicking on the room card.
const pickRoom = () => {
  // Randomly selects a room from the array. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  // This will change the styling and the content of the card after it is clicked
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
  document.getElementById("start-view-card-room").style.display = "none";
}

// Calling the pickRoom function
document.getElementById("roomCard").onclick = pickRoom;


// Function to reveal mystery when clicking the button
const revealMystery = () => {
  if (mystery.room && mystery.weapon && mystery.killer) {
    document.getElementById('mystery').innerHTML = 
    `The murder was commited by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`;
  } else {
    document.getElementById('mystery').innerHTML = `Please pick a killer, weapon and room!`;
  }
}

document.getElementById('revealButton').onclick = revealMystery;