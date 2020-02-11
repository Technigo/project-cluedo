// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const MrGreen = {
  firstName : 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
}  
console.log(MrGreen.firstName);

const ProfessorPlum = {
  firstName : 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He works hard',
  age: 35,
  image: 'assets/plum.png',
  occupation: 'Teacher'
}
const MissScarlet ={
  firstName : 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is smart',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Broker'
}

const MrsPeacock = {
  firstName : 'Jane',
  lastName: 'Doh',
  color: 'blue',
  description: 'Socialite',
  age: 35,
  image: 'assets/peacock.png',
  occupation: 'Manager'
} 
const ColonelMustard = {
  firstName : 'Jack',
  lastName: 'Mustard',
  color: 'Mustard',
  description: 'Wise old man',
  age: 75,
  image: 'assets/mustard.png',
  occupation: 'Retired Colonel'
} 
const MrsWhite = {
  firstName : 'Mrs',
  lastName: 'White',
  color: 'White',
  description: 'Mother of the house hold',
  age: 65,
  image: 'assets/white.png',
  occupation: 'House keeper'
} 


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10
}
const knife = {
  name: `knife`,
  weight: 30
}
const candlestick = {
  name: `candlestick`,
  weight: 5
}
const dumbbell = {
  name: `bumbbell`,
  weight: 80
}
const poison = {
  name: `poison`,
  weight: 30
}
const axe = {
  name: `kaxe`,
  weight: 15
}

const bat = {
  name: `bat`,
  weight: 32
}
const trophy = {
  name: `trophy`,
  weight: 18
}

const pistol = {
  name: `pistol`,
  weight: 55
}

console.log(rope.weight);

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const rooms = [
  `Diningroom`, 
  `Conservatory`, 
  `Kitchen`, 
  `Study`, 
  `Library`, 
  `Billiard room`, 
  `Lounge`, 
  `Ballroom`, 
  `Hall`, 
  `Spa`, 
  `Living room`,
  `Observatory`, 
  `Theater`,
  `Guest House`, 
  `Patio`
];

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

let suspects = [
  MrGreen,
  ProfessorPlum,
  MissScarlet,
  MrsPeacock,
  ColonelMustard,
  MrsWhite
]

let weapons = [
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

//console.log(weapons[weapons.length - 1]);





// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.


const randomSelector = array => {
return array[Math.floor(Math.random() * array.length)]
}
//console.log(randomSelector(suspects));


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
const mystery = {
  killer : "",
  weapons : "",
  room : ""
};

// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.

const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  
  //This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
}


const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapons = randomSelector(weapons)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('weaponCard').style.background = mystery.weapons.color
  document.getElementById('weaponName').innerHTML = `${mystery.weapons.name} <br> Weight:${mystery.weapons.weight}`
}
const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.


document.getElementById('killerCard').onclick = pickKiller;
document.getElementById('weaponCard').onclick = pickWeapon;
document.getElementById('roomCard').onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
const theMystery = document.getElementById('mystery');
const revealButton = document.getElementById (`revealButton`);

const revealMystery = () => {
theMystery.innerHTML =` The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, 
in the ${mystery.room} with a ${mystery.weapons.name}`
};
document.getElementById(`revealButton`).onclick = revealMystery;
// 'The murder was committed by Jacob Green, in the living room with a rope.'
