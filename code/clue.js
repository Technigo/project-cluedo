// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  nickName: 'Mr Green',
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#48878d',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur'
};

const professorPlum = {
  nickName: 'Professor Plum',
  firstName: 'Peter',
  lastName: 'Plum',
  color: '#928eb5',
  description: 'A man with a degree of suspicion.',
  age: 36,
  image: 'assets/plum.png',
  occupation: 'Professor'
};

const missScarlet = {
  nickName: 'Miss Scarlet',
  firstName: 'Vivienne',
  lastName: 'Scarlet',
  color: '#d0676b',
  description: 'A vivacious and aspiring actress.',
  age: 25,
  image: 'assets/scarlet.png',
  occupation: 'Actress'
};

const mrsPeacock = {
  nickName: 'Mrs Peacock',
  firstName: 'Elizabeth',
  lastName: 'Peacock',
  color: '#9eb4db',
  description: 'Lady of Arlington Grange and a beautiful society hostess.',
  age: 32,
  image: 'assets/peacock.png',
  occupation: 'Socialite'
};

const colonelMustard = {
  nickName: 'Colonel Mustard',
  firstName: 'Michael',
  lastName: 'Mustard',
  color: '#ccb064',
  description: 'A gallant military hero whose glittering career hides a tarnished past.',
  age: 50,
  image: 'assets/mustard.png',
  occupation: 'Colonel'
};

const mrsWhite = {
  nickName: 'Mrs White',
  firstName: 'Blanche',
  lastName: 'White',
  color: '#E8DFD6',
  description: 'Loyal housekeeper and a devoted confidant.',
  age: 60,
  image: 'assets/white.png',
  occupation: 'Housekeeper'
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  weight: 5,
  description: 'Cotton rope.'
};

const knife = {
  name: 'Knife',
  weight: 2,
  description: 'Rusty kitchen knife.'
};

const candlestick = {
  name: 'Candlestick',
  weight: 5,
  description: 'Heavy silver candlestick.'
};

const dumbbell = {
  name: 'Dumbbell',
  weight: 20,
  description: 'Perfect for exercise.'
};

const poison = {
  name: 'Poison',
  weight: 1,
  description: 'Cyanide or maybe Arsenic?'
};

const axe = {
  name: 'Axe',
  weight: 20,
  description: 'Perfect for cutting wood.'
};

const bat = {
  name: 'Bat',
  weight: 10,
  description: 'Baseball bat.'
};

const trophy = {
  name: 'Trophy',
  weight: 20,
  description: 'Trophy that needs polishing.'
};

const pistol = {
  name: 'Pistol',
  weight: 2,
  description: 'One missing bullet in this one.'
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  // ...  and the rest
];

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

const rooms = [
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: " ",
  weapon: " ",
  room: " "
  };


// This function will be invoked when you click on the killer card.
const pickKiller = () => {
 
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  document.getElementById('killerImage').src = `${mystery.killer.image}`
  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerNickname').innerHTML = `${mystery.killer.nickName}`
  document.getElementById('killerName').innerHTML = `Full Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.weight} kg`
  document.getElementById('weaponDescription').innerHTML = `${mystery.weapon.description}`
};

const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  document.getElementById('roomName').innerHTML = `${mystery.room}`
};

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  console.log(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`)
  document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`
}

document.getElementById("button").onclick = revealMystery
