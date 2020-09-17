// STEP 1 - OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
}

const professorPlum = {
  firstName: "Victor",
  lastName: 'Plum',
  color:'plum',
  description: 'He loves books',
  age: 55,
  image: 'assets/plum.png',
  occupation: 'Professor in Latin',
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: 'Scarlet',
  color: 'red',
  description: 'She loves food and wine',
  age: 37,
  image: 'assets/scarlet.png',
  occupation: 'Business woman',
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: 'Peacock',
  color: 'blue',
  description: 'She loves spending money',
  age: 49,
  image: 'assets/peacock.png',
  occupation: 'Extremely rich heiress',
}

const colonelMustard = {
  firstName: "Jack",
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is always angry',
  age: 64,
  image: 'assets/mustard.png',
  occupation: 'War veteran',
}

const mrsWhite = {
  firstName: "Betty",
  lastName: 'White',
  color: 'white',
  description: 'She can convince anybody',
  age: 69,
  image: 'assets/white.png',
  occupation: 'Maid',
}

// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'rope',
  color: "white",
  weight: 10,
  image: 'assets/rope.jpg',
}

const knife = {
  name: 'knife',
  color: "white",
  weight: 2,
  image: 'assets/knife.jpg',
}
  
const candlestick = {
  name: 'candlestick',
  color: "white",
  weight: 12,
  image: 'assets/candlestick.jpg',
}

const dumbbell = {
  name: 'dumbbell',
  color: "white",
  weight: 6,
  image: 'assets/dumbbell.jpg',
}

const poison = {
  name: 'poison',
  color: "white",
  weight: 0.5,
  image: 'assets/poison.PNG',
}

const axe = {
  name: 'axe',
  color: "white",
  weight: 4,
  image: 'assets/axe.jpg',
}

const bat = {
  name: 'bat',
  color: "white",
  weight: 1,
  image: 'assets/bat.jpg',
}

const trophy = {
  name: 'trophy',
  color: "white",
  weight: 5,
  image: 'assets/trophy.jpg',
}

const pistol = {
  name: 'pistol',
  color: "white",
  weight: 3,
  image: 'assets/pistol.jpg',
}

  

// CREATED OBJECTS FOR THE ROOM TO GET DIFFERENT COLORS ON THE CARDS

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


// ARRAYS WITH SUSPECTS, WEAPONS AND ROOMS

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


// RANDOM SELECTOR FUNCTION

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

  
// MYSTERY OBJECT

const mystery = {
  killer: null,
  weapon: null,
  room: null
}
  
  
// FUNCTION TO REVEAL THE CRIME

const revealMystery = () => {
  document.getElementById("mystery").innerHTML= `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}.`
  document.getElementById("clickMe").onclick = revealMystery;
}
console.log(revealMystery)