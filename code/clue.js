// OBJECTS FOR ALL THE SUSPECTS

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#556B2F',
  age: 55,
  occupation: 'Entrepreneur',
  image: 'assets/green.png',
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#800080',
  age: 46,
  occupation: 'Scientist',
  image: 'assets/plum.png'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlett',
  color: '#800000',
  age: 40,
  occupation: 'Actress',
  image: 'assets/scarlet.png'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#00008B',
  age: 49,
  occupation: 'Ornithologist',
  image: 'assets/peacock.png'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: '#FFA500',
  age: 72,
  occupation: 'Hunter',
  image: 'assets/mustard.png'
}

const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#FDF5E6',
  age: 70,
  occupation: 'Housekeeper',
  image: 'assets/white.png'
  }


// OBJECTS FOR ALL THE WEAPONS

const rope = {
  name: 'Rope',
  weight: 8
}

const knife = {
  name: 'Knife',
  weight: 2
}

const candlestick = {
  name: 'Candlestick',
  weight: 4
}

const dumbbell = {
  name: 'Dumbbell',
  weight: 8,
}

const poison = {
name: 'Poison',
weight: 1
}

const axe = {
  name: 'Axe',
  weight: 12
}

const bat = {
  name: 'Bat',
  weight: 10
}

const trophy = {
  name: 'Trophy',
  weight: 8
}

const pistol = {
  name: 'Pistol',
  weight: 8
}

// ARRAYS FOR ALL SUSPECTS, WEAPONS AND ROOMS

const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
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
  'Dining Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Guest House',
  'Patio'
]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// AN OBJECT THAT KEEPS THE MYSTERY.

const mystery = {
  killer: null,
  weapon: null,
  room: null
}

// This function will be invoked when you click on the KILLER CARD
const pickKiller = () => {

// This will randomly select a killer from the suspects. And add that to the mystery object.
mystery.killer = randomSelector(suspects);

  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer.age}`;
  document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`;
  document.getElementById('killerImage').src = mystery.killer.image;
}


// This function will be invoked when you click on the WEAPON CARD.
  const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons);

    document.getElementById('weaponCard').style.background = '#5F9EA0';
    document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}<br> Weight: ${mystery.weapon.weight} kg`; 
  }

  // This function will be invoked when you click on the ROOM CARD.
  const pickRoom = () => {

  mystery.room = randomSelector(rooms);

    document.getElementById('roomCard').style.background = '#DCDCDC';
    document.getElementById('roomName').innerHTML = `${mystery.room}`;  
  }

  document.getElementById('killerCard').onclick = pickKiller;
  document.getElementById('weaponCard').onclick = pickWeapon;
  document.getElementById('roomCard').onclick = pickRoom;

// FUNCTION revealMystery that will be invoked when you click that button.
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, with a ${mystery.weapon.name} in the ${mystery.room}` 
  document.getElementById("clickMe").onclick = revealMystery;
}