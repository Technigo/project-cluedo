// Objects for suspects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He is connected.',
  age: 'Age: ' + 45,
  image: 'assets/green.png',
  occupation: 'Occupation: entrepreneur',
  favouriteWeapon: 'knife'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is an old-school army man.',
  age: 'Age: ' + 62,
  image: 'assets/mustard.png',
  occupation: 'Occupation: officer',
  favouriteWeapon: 'dumbbell'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She has many secrets.',
  age: 'Age: ' + 43,
  image: 'assets/peacock.png',
  occupation: 'Occupation: artist',
  favouriteWeapon: 'candlestick'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He loves his bees.',
  age: 'Age: ' + 29,
  image: 'assets/plum.png',
  occupation: 'Occupation: biologist',
  favouriteWeapon: 'poison'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'pink',
  description: 'She is super-smart.',
  age: 'Age: ' + 26,
  image: 'assets/scarlet.png',
  occupation: 'Occupation: journalist',
  favouriteWeapon: 'bat'
}

const mrsWhite = {
  firstName: 'Evie',
  lastName: 'White',
  color: 'white',
  description: 'She is no old biddy.',
  age: 'Age: ' + 62,
  image: 'assets/white.png',
  occupation: 'Occupation: housekeeper',
  favouriteWeapon: 'axe'
}

// Objects for weapons

const rope = {
  name: 'rope',
  weight: 10
}

const knife = {
  name: 'knife',
  id: 'knife',
  weight: 5
}

const candlestick = {
  name: 'candlestick',
  weight: 25
}

const dumbbell = {
  name: 'dumbbell',
  id: 'dumbbell',
  weight: 30
}

const poison = {
  name: 'poison',
  id: 'poison',
  weight: 5
}

const axe = {
  name: 'axe',
  id: 'axe',
  weight: 25
}

const bat = {
  name: 'bat',
  id: 'bat',
  weight: 20
}

const trophy = {
  name: 'trophy',
  weight: 30
}

const pistol = {
  name: 'pistol',
  weight: 25
}


// Arrays for suspects, weapons and rooms

const suspects = [
  mrGreen,
  mrsWhite,
  mrPlum,
  msScarlet,
  mrsPeacock,
  colonelMustard
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
  'diningroom', 
  'conservatory', 
  'kitchen', 
  'study', 
  'library', 
  'billiardroom', 
  'lounge', 
  'ballroom', 
  'hall', 
  'spa', 
  'livingroom', 
  'observatory', 
  'theatre', 
  'guesthouse', 
  'patio'
]

// Selects randomly one item from the array passed into the function
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Creates an object that stores the mystery 
// The values will be set later.
const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined,
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  document.getElementById('loader1').style.display = 'block';
  setTimeout(delayedPickKiller, 1300);
};
  
document.getElementById('killerImage').style.filter = 'sepia(100%)';
document.getElementById('loader1').style.display = 'none'; // prevents loader to begin when page is loaded
document.getElementById('killerCard').addEventListener('click', pickKiller); // allows us to connect en event when clicked to the killer card

// This function triggers when loader is done.
const delayedPickKiller = () => {
  document.getElementById('killerImage').style.filter = 'sepia(0%)';
  document.getElementById('loader1').style.display = 'none';
  document.getElementById('killerCard').removeEventListener('click', pickKiller);

// This function randomly changes each killer's favourite weapon.
  const shuffleFavouriteWeapon = () => {
    mystery.favouriteWeapon = randomSelector(weapons)
  }
 
// This calls/executes the above function.
  shuffleFavouriteWeapon();

// These connects the js and the html, and outputs in browser.
  document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.favouriteWeapon.name}`
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}` 
  document.getElementById('killerImage').src = mystery.killer.image
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age}` 
  document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}` 
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}` 
};

// This function will be invoked when you click on the room card.
const pickWeapon = () => {
  document.getElementById('loader2').style.display = 'block';
  setTimeout(delayedPickWeapon, 1300);
};

document.getElementById('loader2').style.display = 'none';
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

// This function will be invoked when loader is done.
const delayedPickWeapon = () => {
  document.getElementById('loader2').style.display = 'none';
  document.getElementById('weaponCard').removeEventListener('click', pickWeapon);

  // This will randomly select a weapon from the weapon array. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`
}

// This function will be invoked when you click on the room card.
const pickRoom = () => {
  document.getElementById('loader3').style.display = 'block';
  setTimeout(delayedPickRoom, 1400);
};

document.getElementById('loader3').style.display = 'none';
document.getElementById('roomCard').addEventListener('click', pickRoom);

// This function will be invoked when loader is done.
const delayedPickRoom = () => {
  document.getElementById('loader3').style.display = 'none';
  document.getElementById('roomCard').removeEventListener('click', pickRoom);
  
  // This will randomly select a room from the room array. And add that to the mystery object.
  mystery.room = randomSelector(rooms)
  document.getElementById('roomCard').style.background = mystery.room.color
  document.getElementById('roomName').innerHTML = `${mystery.room}`
}

// This generates random items from the arrays on onclick.
document.getElementById('killerCard').onclick = pickKiller
document.getElementById('weaponCard').onclick = pickWeapon
document.getElementById('roomCard').onclick = pickRoom

// Creates a function - revealMystery - that will be invoked when you click reveal button.
const revealMystery = () => {
    if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    document.getElementById('revealButton').innerText = 'Please, pick killer, weapon and room.';
  }  else {
    document.getElementById('revealButton').innerText = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}.`
  }
}


