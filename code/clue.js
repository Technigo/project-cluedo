
//Objects for suspects
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: './assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'knife'
}

const professorPlum = {
  firstName: 'Viktor',
  lastName: 'Plum',
  color: 'plum',
  description: 'He has knowledge in anatomy',
  age: 70,
  image: './assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'poison'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'scarlet',
  description: 'She is a student at the local college',
  age: 24,
  image: './assets/scarlet.png',
  occupation: 'Student',
  favouriteWeapon: 'rope'
}

const mrsPeacock = {
  firstName: 'Elanor',
  lastName: 'Peacock',
  color: 'peacock',
  description: 'She knows everybody in the neighborhood',
  age: 40,
  image: './assets/peacock.png',
  occupation: 'Teacher',
  favouriteWeapon: 'candlestick'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'mustard',
  description: 'He is an old general in the army',
  age: 65,
  image: './assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'pistol'
}

const mrsWhite = {
  firstName: 'Edith',
  lastName: 'White',
  color: 'white',
  description: 'She is a retired doctor',
  age: 55,
  image: './assets/white.png',
  occupation: 'Retired',
  favouriteWeapon: 'trophy'
}


//Objects for weapons
const rope = {
  name: 'rope',
  weight: 10,
  id: 'rope',
  image: './assets/rope.jpeg'
  
}

const knife = {
  name: 'knife',
  weight: 5,
  id: 'knife',
  image: './assets/knife.jpeg'
}

const candlestick = {
  name: 'candlestick',
  weight: 15,
  id: 'candlestick',
  image: './assets/candlestick.jpeg'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30,
  id: 'dumbbell',
  image: './assets/dumbbell.jpeg'
}

const poison = {
  name: 'poison',
  weight: 1,
  id: 'poison',
  image: './assets/poison.jpeg'
}

const axe = {
  name: 'axe',
  weight: 25,
  id: 'axe',
  image: './assets/axe.jpeg'
}

const bat = {
  name: 'bat',
  weight: 20,
  id: 'bat',
  image: './assets/bat.png'
}

const trophy = {
  name: 'trophy',
  weight: 15,
  id: 'trophy',
  image: './assets/trophy.jpeg'
}

const pistol = {
  name: 'pistol',
  weight: 8,
  id: 'pistol',
  image: './assets/pistol.jpeg'

}

const diningroom = {
  name: 'dining room'
}

const conservatory = {
  name: 'conservatory'
}

const kitchen = {
  name: 'kitchen'
}

const study = {
  name: 'study'
}

const library = {
  name: 'library'
}

const billiardroom = {
  name: 'billiard room'
}

const lounge = {
  name: 'lounge'
}

const ballroom = {
  name: 'ballroom'
}

const hall = {
  name: 'hall'
}

const spa = {
  name: 'spa'
}

const livingroom = {
  name: 'living room'
}

const observatory = {
  name: 'observatory'
}

const theater = {
  name: 'theater'
}

const guesthouse = {
  name: 'guest house'
}

const patio = {
  name: 'patio'
}

//Arrays for suspects, weapons and rooms
const suspects = [
  mrGreen,
  mrsWhite,
  professorPlum,
  missScarlet,
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
  diningroom, 
  conservatory, 
  kitchen, 
  study, 
  library, 
  billiardroom, 
  lounge, 
  ballroom,
  hall, 
  spa, 
  livingroom, 
  observatory, 
  theater, 
  guesthouse, 
  patio
]


// This function will randomly select one item from the array that's passed in the function
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// Mystery object
const mystery = {
  killer: '',
  weapon: '',
  room: '',
  favouriteWeapon: ''
}
// Loader animation for picking killer
const killerAnimation = () => {
  document.getElementById('killerLoader').style.display = 'block';
  document.getElementById('killerImage').style.display = 'none';
  document.getElementById('killerName').style.display = 'none';
  document.getElementById('killerAge').style.display = 'none';
  document.getElementById('killerDescription').style.display = 'none';
  
  setTimeout(pickKiller, 1000);
  
  }
  
  document.getElementById('killerCard').addEventListener('click', killerAnimation);

//Function for picking a random killer
const pickKiller = () => {
  
  document.getElementById('killerLoader').style.display = 'none';
  mystery.killer = randomSelector(suspects);
  
  
  document.getElementById('killerImage').style.display = 'block';
  document.getElementById('killerName').style.display = 'block';
  document.getElementById('killerAge').style.display = 'block';
  document.getElementById('killerDescription').style.display = 'block';
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image;
  
  
  document.getElementById('killerDescription')
  document.getElementById('killerName').innerHTML = 
  `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById('killerAge').innerHTML = `${mystery.killer.age} years old`;
  document.getElementById('killerDescription').innerHTML = `${mystery.killer.description} and favourite weapon is ${mystery.killer.favouriteWeapon}`; 
  
}

const weaponAnimation = () => {
  document.getElementById('weaponLoader').style.display = 'block';
  document.getElementById('weaponName').style.display = 'none';
  document.getElementById('weaponWeight').style.display = 'none';
  document.getElementById('weaponImage').style.display = 'none';
  setTimeout(pickWeapon, 1000);
  }
  document.getElementById('weaponCard').addEventListener('click', weaponAnimation);

//Function for picking a random weapon
const pickWeapon = () => {
  document.getElementById('weaponLoader').style.display = 'none';
  mystery.weapon = randomSelector(weapons);

  document.getElementById('weaponImage').style.display = 'block';
  document.getElementById('weaponCard')
  document.getElementById('weaponName').style.display = 'block';
  document.getElementById('weaponWeight').style.display = 'block';
  document.getElementById('weaponName').innerHTML = `Name: ${mystery.weapon.name}`;
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight} lbs`;
  document.getElementById('weaponImage').src = mystery.weapon.image;
  
}

const roomAnimation = () => {
  document.getElementById('roomLoader').style.display = 'block';
  document.getElementById('roomName').style.display = 'none';
  setTimeout(pickRoom, 1000);
  }
  document.getElementById('roomCard').addEventListener('click', roomAnimation);

//Function for picking a random room
const pickRoom = () => {
  document.getElementById('roomLoader').style.display = 'none';
  mystery.room = randomSelector(rooms);

  document.getElementById('roomName').style.display = 'block';
  
  document.getElementById('roomCard')
  roomName.innerHTML = `Room: ${mystery.room.name}`;
  
}

//Function for shuffling the favourite weapon amongst the suspects  
const shuffleFavouriteWeapon = () => {
  
  suspects.forEach((suspect) => {
    suspect.favouriteWeapon = randomSelector(weapons).name;
    
  })
  
  
};

document.getElementById('playAgainButton').style.display = 'none';
// Function for revealing the mystery
const revealMystery = () => {

      if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '') {
      document.getElementById('mystery').innerHTML = 'Pick all three cards'
    } else {
      document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.favouriteWeapon}`;
      document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} in the ${mystery.room.name} with a/an ${mystery.weapon.name}.`;
      document.getElementById('allCards').style.display = 'none';
      document.getElementById('findKiller').style.display = 'none';
      document.getElementById('pickCard').style.display = 'none';
      document.getElementById('revealButton').style.display = 'none';
      document.getElementById('change').style.display = 'none';
      document.getElementById('playAgainButton').style.display = 'block';
      document.getElementById('favouriteWeapon').innerHTML = `${mystery.killer.firstName}s favourite weapon is: ${mystery.killer.favouriteWeapon}`;
      
    }
    
  }
//Reload button to start playing again
  document.getElementById('playAgainButton').addEventListener('click', () => {
    location.reload();
  });

  

  

