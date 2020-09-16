// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'pistol'
}

const professorPlum = {
  firstName: "Victor",
  lastName: 'Plum',
  color:'plum',
  description: 'He loves books',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Professor in Latin',
  favouriteWeapon: 'candlestick'
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: 'Scarlet',
  color: 'red',
  description: 'She loves food and wine',
  age: 37,
  image: 'assets/scarlet.png',
  occupation: 'Business woman',
  favouriteWeapon: 'bat'
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: 'Peacock',
  color: 'blue',
  description: 'She loves spending money',
  age: 49,
  image: 'assets/peacock.png',
  occupation: 'Extremely rich heiress',
  favouriteWeapon: 'poison'
}

const colonelMustard = {
  firstName: "Jack",
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is always angry',
  age: 64,
  image: 'assets/mustard.png',
  occupation: 'War veteran',
  favouriteWeapon: 'axe'
}

const mrsWhite = {
  firstName: "Betty",
  lastName: 'White',
  color: 'white',
  description: 'She can convince anybody',
  age: 69,
  image: 'assets/white.png',
  occupation: 'Maid',
  favouriteWeapon: 'trophy'
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  color: "white",
  weight: 10,
  image: 'assets/rope.jpg',
  id: 'rope'
}

const knife = {
  name: 'knife',
  color: "white",
  weight: 2,
  image: 'assets/knife.jpg',
  id: 'knife'
}
  
const candlestick = {
  name: 'candlestick',
  color: "white",
  weight: 12,
  image: 'assets/candlestick.jpg',
  id: 'candlestick'
}

const dumbbell = {
  name: 'dumbbell',
  color: "white",
  weight: 6,
  image: 'assets/dumbbell.jpg',
  id: 'dumbbell'
}

const poison = {
  name: 'poison',
  color: "white",
  weight: 0.5,
  image: 'assets/poison.PNG',
  id: 'poison'
}

const axe = {
  name: 'axe',
  color: "white",
  weight: 4,
  image: 'assets/axe.jpg',
  id: 'axe'
}

const bat = {
  name: 'bat',
  color: "white",
  weight: 1,
  image: 'assets/bat.jpg',
  id: 'bat'
}

const trophy = {
  name: 'trophy',
  color: "white",
  weight: 5,
  image: 'assets/trophy.jpg',
  id: 'trophy'
}

const pistol = {
  name: 'pistol',
  color: "white",
  weight: 3,
  image: 'assets/pistol.jpg',
  id: 'pistol'
}

  

// CREATED OBJECTS FOR THE ROOM TO GET A COLOR ON THE CARDS

const diningRoom = {
  name: "dining room",
  color: "slateblue"
}

const conservatory = {
  name: "conservatory",
  color: "steelblue"
}

const kitchen = {
  name: "kitchen",
  color: "springgreen"
}

const study = {
  name: "study",
  color: "orchid"
}
  
const library = {
  name: "library",
  color: "lightcoral"
}

const billiardRoom = {
  name: "billiard room",
  color: "tomato"
}

const lounge = {
  name: "lounge",
  color: "khaki"
}

const ballRoom = {
  name: "ballroom",
  color: "lightblue"
}

const hall = {
  name: "hall",
  color: "black"
}

const spa = {
  name: "spa",
  color: "white"
}
  
const livingRoom = {
  name: "living room",
  color: "skyblue"
}

const observatory = {
  name: "observatory",
  color: "lightgrey"
}

const theater = {
  name: "theater",
  color: "lightyellow"
}
 
const guestHouse = {
  name: "guest house",
  color: "lightpink"
}

const patio = {
  name: "patio",
  color: "lightgreen"
}


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
  diningRoom,
  conservatory, 
  kitchen, 
  study,
  library,
  billiardRoom ,
  lounge,
  ballRoom,
  hall, 
  spa, 
  livingRoom, 
  observatory, 
  theater, 
  guestHouse, 
  patio,
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
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage'); killerImage.src = mystery.killer.image;
/*   document.getElementById('killerfavouriteWeapon').innerHTML = `${mystery.killer.favouriteWeapon}` */
}  


// FUNCTION FOR THE WEAPON

document.getElementById('weaponCard').onclick = pickWeapon;

function pickWeapon() {
mystery.weapon = randomSelector(weapons)
document.getElementById('weaponCard').style.background = mystery.weapon.color
document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}`
document.getElementById('weaponImage'); weaponImage.src = mystery.weapon.image;
}  



// FUNCTION FOR THE ROOM

document.getElementById('roomCard').onclick = pickRoom;

function pickRoom() {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room.name}`
  document.getElementById('roomCard').style.background = mystery.room.color
  }  
  
  
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {
document.getElementById("mystery").innerHTML= `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`
document.getElementById("clickMe").onclick = revealMystery;
}
console.log(revealMystery)



//Red Level - - Create `shuffleFavouriteWeapon` function to change favourite weapons of each person

/* const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) =>
  (suspect.favouriteWeapon = randomSelector(suspects).favouriteWeapon));
}

document.getElementById('killerCard').onclick = shuffleFavouriteWeapon(); */