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

const prPlum = {
  firstName: 'Peter',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is highly intelligent',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const msScarlet = {
  firstName: 'Josephine',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is always wearing red',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
}

const mrsPeacock = {
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She enjoys ballroom danicing',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
}

const colMustard = {
  firstName: 'Michael',
  lastName: 'Mustard',
  color: 'yellow',
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

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

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

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

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

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mystery = {
  killer: '',
  weapon: '',
  room: ''
}
  

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen 
  // killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById(
    'killerName'
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}

document.getElementById("killerCard").onclick = pickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

//Function to pick a weapon
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons array. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen 
  // killer and show the full name of the killer. Feel free to add more things to show about the killer.
  //document.getElementById('weaponCard').style.background = mystery.killer.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
}

document.getElementById("weaponCard").onclick = pickWeapon;

//Function to pick a room
const pickRoom = () => {
  // This will randomly select a weapon from the object. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen 
  // killer and show the full name of the killer. Feel free to add more things to show about the killer.
  //document.getElementById('weaponCard').style.background = mystery.killer.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
}

document.getElementById("roomCard").onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
