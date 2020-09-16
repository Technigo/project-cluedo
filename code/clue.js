// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is a quick witted person',
  age: 43,
  image: 'assets/plum.png',
  occupation: 'College professor',
};

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is a sassy femme fatale',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
};

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is an intellectual and well dressed woman',
  age: 55,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
};

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a dapper ex military man',
  age: 60,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
};

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: 'white',
  description: 'She is a widow and a long serving cleaner',
  age: 67,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  image: 'assets/rope.png'
};

const knife = {
  name: 'knife',
  weight: 15,
  image: 'assets/knife.png'
};

const candlestick = {
  name: 'candlestick',
  weight: 20,
  image: 'assets/candlestick.png'
};

const dumbbell = {
  name: 'dumbbell',
  weight: 40,
  image: 'assets/dumbbell.png'
};

const poison = {
  name: 'poison',
  weight: 5,
  image: 'assets/poison.png'
};

const axe = {
  name: 'axe',
  weight: 35,
  image: 'assets/axe.png'
};

const bat = {
  name: 'bat',
  weight: 30,
  image: 'assets/bat.png'
};

const trophy = {  
  name: 'trophy',
  weight: 10,
  image: 'assets/trophy.png'
};

const pistol = {
  name: 'pistol',
  weight: 25,
  image: 'assets/pistol.png'
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

console.log(`${professorPlum.firstName} ${professorPlum.lastName} is a ${professorPlum.age} year old ${professorPlum.occupation}`)

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
];

const weapons = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

const rooms = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];

/*console.log(mrsPeacock.description);
console.log(rope.weight);
console.log(suspects[suspects.length-2]);

suspects.forEach((suspects) => {
  console.log(suspects.description);
});

console.log(weapons);*/


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mysteryCards = {
  killer: "",
  weapon: "",
  room: ""
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons) 
  document.getElementById('weaponImage').src = mystery.weapon.image
  document.getElementById('weaponName').innerHTML = mystery.weapon.name
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight}kg`
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = mystery.room
}
// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


