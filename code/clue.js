

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



const rope = {
  name: 'rope',
  weight: 10,
  id: 'rope'
  
}

const knife = {
  name: 'knife',
  weight: 5,
  id: 'knife'
}

const candlestick = {
  name: 'candlestick',
  weight: 15,
  id: 'candlestick'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 30,
  id: 'dumbbell'
}

const poison = {
  name: 'poison',
  weight: 1,
  id: 'poison'
}

const axe = {
  name: 'axe',
  weight: 25,
  id: 'axe'
}

const bat = {
  name: 'bat',
  weight: 20,
  id: 'bat'
}

const trophy = {
  name: 'trophy',
  weight: 15,
  id: 'trophy'
}

const pistol = {
  name: 'pistol',
  weight: 8,
  id: 'pistol'

}



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



const mystery = {
  killer: '',
  weapon: '',
  room: ''
}


const pickKiller = () => {
  
  mystery.killer = randomSelector(suspects);
  
  
  document.getElementById('killerCard').style.background = mystery.killer.color
  document.getElementById('killerImage').src = mystery.killer.image;
  
  document.getElementById('killerName').innerHTML = 
  `${mystery.killer.firstName} ${mystery.killer.lastName} ${mystery.killer.description} ${mystery.killer.age} ${mystery.killer.occupation}`
}



const pickWeapon = () => {
  
  mystery.weapon = randomSelector(weapons);

  document.getElementById('weaponCard')
  document.getElementById('weaponName');
  document.getElementById('weaponWeight').innerHTML = `${mystery.weapon.name} ${mystery.weapon.weight}`
}

const pickRoom = () => {
  
  mystery.room = randomSelector(rooms);

  document.getElementById('roomCard')
  roomName.innerHTML = mystery.room
  
}



const shuffleFavouriteWeapon = () => {
  
  suspects.favouriteWeapon.forEach ((suspects) => {
    suspects.favouriteWeapon = randomSelector(weapons).id;
  });
}
  
  
    
  
  






document.getElementById('playAgainButton').style.display = 'none';
const revealMystery = () => {

      if (mystery.killer === '' || mystery.weapon === '' || mystery.room === '') {
      document.getElementById('mystery').innerHTML = 'Pick all three cards'
    } else {
      document.getElementById('mystery').innerHTML = `The murder was commited by ${mystery.killer.firstName} in the ${mystery.room} with a/an ${mystery.weapon.name}.`;
      document.getElementById('allCards').style.display = 'none';
      document.getElementById('findKiller').style.display = 'none';
      document.getElementById('pickCard').style.display = 'none';
      document.getElementById('revealButton').style.display = 'none';
      document.getElementById('playAgainButton').style.display = 'block';
      document.getElementById('favouriteWeapon').innerHTML = `${mystery.killer.firstName}s favourite weapon is: ${mystery.favouriteWeapon.name}`;
      
    }
    
  }

  document.getElementById('playAgainButton').addEventListener('click', () => {
    location.reload();
  });

  

  

