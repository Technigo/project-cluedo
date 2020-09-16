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
const mrMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is good at weapons',
  age: 55,
  image: 'assets/mustard.png',
  occupation: 'Hunter'
}
const mrsPeacock = {
  firstName: 'Lena',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She has a lot of money',
  age: 50,
  image: 'assets/peacock.png',
  occupation: 'Rich Mama'
}
const professorPlum = {
  firstName: 'Lennart',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a genius',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Genius'
}
const missScarlet = {
  firstName: 'Scarlet',
  lastName: 'Johansson',
  color: 'red',
  description: 'She is beautiful',
  age: 30,
  image: 'assets/scarlet.png',
  occupation: 'Beauty'
}
const mrsWhite = {
  firstName: 'Edna',
  lastName: 'White',
  color: 'white',
  description: 'She knows everything',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Know it all'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 5,
  image: 'assets/rope.png'
}
const gun = {
  name: 'gun',
  weight: 40,
  image: 'assets/gun.png'
}
const knife = {
  name: 'knife',
  weight: 20,
  image: 'assets/knife.png'
}
const wrench = {
  name: 'wrench',
  weight: 50,
  image: 'assets/wrench.png'
}
const candlestick = {
  name: 'candlestick',
  weight: 30,
  image: 'assets/candle.png'
}
const pipe = {
  name: 'pipe',
  weight: 10,
  image: 'assets/pipe.png'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  professorPlum,
  missScarlet,
  mrsWhite
]

const weapon = [
  rope,
  gun,
  knife,
  wrench,
  candlestick,
  pipe
]

const room = [
  'hall',
  'lounge',
  'study',
  'library',
  'kitchen',
  'ballroom'
]

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let crime = {
 killer: [],
 weapon: [],
 room: ''
}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerCard').addEventListener('click', pickKiller)
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `age: ${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `occupation: ${mystery.killer.occupation}`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`;
  document.getElementById('killerImage').src = mystery.killer.image;
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapon)
  document.getElementById('weaponCard').style.background = mystery.killer.color;
  document.getElementById('weaponCard').addEventListener('click', pickWeapon)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
  document.getElementById('weaponImage').src = mystery.weapon.image;
}

const pickRoom = () => {
  mystery.room = randomSelector(room)
  document.getElementById('roomCard').style.background = mystery.killer.color;
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

function revealMystery() {
document.getElementById("revealMystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}`;
}

document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;