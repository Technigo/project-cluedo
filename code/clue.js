// OBJECTS FOR SUSPECTS

//OBJECTS 
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur' 
}
const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'pink',
  description: 'He wears sunglasses',
  age: 37,
  image: 'assets/plum.png',
  occupation: 'Project Manager' 
}
const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She always watches instagram',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Influencer' 
}
const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'grey',
  description: 'he is always late',
  age: 48,
  image: 'assets/mustard.png',
  occupation: 'lawyer' 
}
const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'lila',
  description: 'She always picks up packages',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Doctor' 
}
const mrsWhite = {
  firstName: 'Ana',
  lastName: 'White',
  color: 'Orange',
  description: 'she is always one step behind you',
  age: 35,
  image: 'assets/white.png',
  occupation: 'garderner' 
};

const weapons = [
'rope',
'knife',
'candlestick', 
'dumbbell', 
'poison', 
'axe', 
'bat',
'throphy', 
'pistol' 
];

const rooms = [
'diningRoom', 
'conservatory', 
'kitchen', 
'study', 
'library', 
'billiardRoom', 
'lounge', 
'ballroom', 
'hall', 
'spa', 
'livingRoom', 
'observatory', 
'theater', 
'guestHouse', 
'patio'];

// Group OBJECTS (just 'suspects' because i choosed to no give the weapons a discirption (not at least in this point)

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  colonelMustard,
  mrsPeacock,
  mrsWhite
];

// FUNCTION RANDOMLY SELECT ONE ITEM FROM THE ARRAY 
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.


const mystery = {
  suspects,
  weapons:[],
  rooms:[] 
};


// FUNCTIONS + INVOKE FUNCTIONS

// FUNCTIONS pickKiller
const pickKiller = () => {
  mystery.killer = randomSelector(suspects);killerImage.src = mystery.killer.image;
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
};
document.getElementById(
  'killerCard'
  ).addEventListener('click', pickKiller);


// FUNCTIONS pickWeapon
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponCard').style.background = mystery.weapon.color
  document.getElementById(
    'weaponName'
).innerHTML = `${mystery.weapon}`
}

document.getElementById(
  'weaponCard'
  ).addEventListener('click', pickWeapon);

// FUNCTIONS pickRoom
 const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById(
    'roomName'
  ).innerHTML = `${mystery.room}`
 }

 document.getElementById(
  'roomCard'
  ).addEventListener('click', pickRoom);


// FUNCTION revealMystery 

const revealMystery = () => {
  const killerAnnoncement = document.getElementById("revealButton").innerText;
  document.getElementById("killerMessage").innerHTML = `Psst! The murder was committed by ${mrsPeacock.firstName} ${mrsPeacock.lastName}, in the ${rooms[2]} with a ${weapons[8]}.`;
}
