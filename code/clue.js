/*** ! DECLARATIONS ! ***/

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#389060',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}

const profPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#BF5371',
  description: 'He knows the answer to your questions',
  age: 42,
  image: 'assets/plum.png',
  occupation: 'Professor'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#F48743',
  description: 'She is very persuasive',
  age: 29,
  image: 'assets/scarlet.png',
  occupation: 'Lawyer'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#565BAF',
  description: 'She cannot be trusted',
  age: 47,
  image: 'assets/peacock.png',
  occupation: 'Singer'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#F0BD2B',
  description: 'He makes sure the rules are followed',
  age: 47,
  image: 'assets/mustard.png',
  occupation: 'Army Officer'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#E7D5A1',
  description: 'She knows the gossip',
  age: 62,
  image: 'assets/white.png',
  occupation: 'Maid'
}

// declare the front icons on cards
const killerIcon = document.getElementById('killerIcon')
const weaponIcon = document.getElementById('weaponIcon')
const roomIcon = document.getElementById('roomIcon')

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 10,
  danger: 'Medium',
  color: '#FFDAC1',
  image: 'weapons/rope.png'
}

const knife = {
  name: 'Knife',
  weight: 0.5,
  danger: 'High',
  color: '#FFB7B2',
  image: 'weapons/knife.png'
}

const candlestick = {
  name: 'Candlestick',
  weight: 0.2,
  danger: 'Low',
  color: '#E2F0CB',
  image: 'weapons/candlestick.png'
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 8,
  danger: 'Medium',
  color: '#FFDAC1',
  image: 'weapons/dumbbell.png'
}

const poison = {
  name: 'Poison',
  weight: 0.3,
  danger: 'High',
  color: '#FFB7B2',
  image: 'weapons/poison.png'
}

const axe = {
  name: 'Axe',
  weight: 5,
  danger: 'High',
  color: '#FFB7B2',
  image: 'weapons/axe.png'
}

const bat = {
  name: 'Bat',
  weight: 2,
  danger: 'Medium',
  color: '#FFDAC1',
  image: 'weapons/bat.png'
}

const trophy = {
  name: 'Trophy',
  weight: 3,
  danger: 'Medium',
  color: '#FFDAC1',
  image: 'weapons/trophy.png'
}

const pistol = {
  name: 'Pistol',
  weight: 1,
  danger: 'High',
  color: '#FFB7B2',
  image: 'weapons/pistol.png'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. (I will create objects since I want the rooms to have images). 

const diningRoom = {
  name: 'Dining Room',
  image: 'rooms/diningroom.png'
}

const conservatory = {
  name: 'Conservatory',
  image: 'rooms/conservatory.png'
}

const kitchen = {
  name: 'Kitchen',
  image: 'rooms/kitchen.png'
}

const study = {
  name: 'Study',
  image: 'rooms/study.png'
}

const library = {
  name: 'Library',
  image: 'rooms/library.png'
}

const billiardRoom = {
  name: 'Billiard Room',
  image: 'rooms/billiardroom.png'
}

const lounge = {
  name: 'Lounge',
  image: 'rooms/lounge.png'
}

const ballroom = {
  name: 'Ballroom',
  image: 'rooms/ballroom.png'
}

const hall = {
  name: 'Hall',
  image: 'rooms/hall.png'
}

const spa = {
  name: 'Spa',
  image: 'rooms/spa.png'
}

const livingRoom = {
  name: 'Living Room',
  image: 'rooms/livingroom.png'
}

const observatory = {
  name: 'Observatory',
  image: 'rooms/observatory.png'
}

const theater = {
  name: 'Theater',
  image: 'rooms/theater.png'
}

const guestHouse = {
  name: 'Guest House',
  image: 'rooms/guesthouse.png'
}

const patio = {
  name: 'Patio',
  image: 'rooms/patio.png'
}

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite,
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

/*** ! FUNCTIONS ! ***/

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.

let mystery = {
  killer: null,
  weapon: null,
  room: null
};

// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerDescription').innerHTML = mystery.killer.description
  //This will remove the icon on the front of the card
  killerIcon.remove();
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {  
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}kg`
  document.getElementById('weaponDanger').innerHTML = `Danger: ${mystery.weapon.danger}`
  document.getElementById('weaponImage').src = mystery.weapon.image
  weaponIcon.remove();
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.room.name
  document.getElementById('roomImage').src = mystery.room.image
  roomIcon.remove();
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  if (mystery.killer == null || mystery.weapon == null || mystery.room == null) {
    document.getElementById('reveal').style.display = 'flex'; 
    document.getElementById('mystery').innerHTML = 'Please click on each card before you reveal the crime.'
    window.scrollBy(0, 300); 
  } else {
    document.getElementById('reveal').style.display = 'flex'; 
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}.`
    window.scrollBy(0, 300); 
  }
}

// FUNCTION THAT WILL CLEAR THE REVEAL

const clearRevealResults = () => {
  mystery.killer = null;
  mystery.weapon = null;
  mystery.room = null;
  location.reload();
}

/*** ! EXECUTIONS ! ***/

//store the results
document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;