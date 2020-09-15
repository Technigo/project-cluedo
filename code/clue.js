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

const professorPlum = {
  firstName: "Victor",
  lastName: 'Plum',
  color:'plum',
  description: 'He loves books',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Professor in Latin'
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: 'Scarlet',
  color: 'red',
  description: 'She loves food and wine',
  age: 37,
  image: 'assets/scarlet.png',
  occupation: 'Business woman'
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: 'Peacock',
  color: 'blue',
  description: 'She loves spending her money',
  age: 49,
  image: 'assets/peacock.png',
  occupation: 'Extremely rich heiress'
}

const colonelMustard = {
  firstName: "Jack",
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is always angry',
  age: 64,
  image: 'assets/mustard.png',
  occupation: 'War veteran'
}

const mrsWhite = {
  firstName: "Betty",
  lastName: 'White',
  color: 'white',
  description: 'She can convince anybody',
  age: 69,
  image: 'assets/white.png',
  occupation: 'Maid'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  color: "white",
  weight: 10
}

const knife = {
  name: 'Knife',
  color: "white",
  weight: 2
}
  
const candlestick = {
  name: 'Candlestick',
  color: "white",
  weight: 12
}

const dumbbell = {
  name: 'Dumbbell',
  color: "white",
  weight: 6
}

const poison = {
  name: 'Poison',
  color: "white",
  weight: 0.5
}

const axe = {
  name: 'Axe',
  color: "white",
  weight: 4
}

const bat = {
  name: 'Bar',
  color: "white",
  weight: 1
}

const trophy = {
  name: 'Trophy',
  color: "white",
  weight: 5
}

const pistol = {
  name: 'Pistol',
  color: "white",
  weight: 3
}

  

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.



// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

console.log(suspects);

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
];

console.log(weapons);

const rooms = [
  "Dining Room", 
  "Conservatory", 
  "Kitchen", 
  "Study", 
  "Library", 
  "Billiard Room", 
  "Lounge", 
  "Ball room", 
  "Hall", 
  "Spa", 
  "Living Room", 
  "Observatory", 
  "Theater", 
  "Guest House", 
  "Patio"
];
console.log(rooms);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
/* // YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.


// This function will be invoked when you click on the killer card.
function pickKiller() {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
} */

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// FUNCTION FOR THE KILLER

document.getElementById('killerCard').onclick = pickKiller;

function pickKiller() {
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}  


// FUNCTION FOR THE WEAPON

document.getElementById('weaponCard').onclick = pickWeapon;

function pickWeapon() {
mystery.weapon = randomSelector(weapons)
document.getElementById('weaponCard').style.background = mystery.weapon.color
document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
}  



// FUNCTION FOR THE ROOM

document.getElementById('roomCard').onclick = pickRoom;

function pickRoom() {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
  }  
  
  
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {
document.getElementById("mystery").innerHTML= `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
document.getElementById("clickMe").onclick = revealMystery;
}
console.log(revealMystery)