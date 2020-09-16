// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He has a lot of connections',
  age: 45,
  image: './assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'dumbbell'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He is good at his job',
  age: 55,
  image: './assets/plum.png',
  occupation: 'Professor',
  favouriteWeapon: 'bat'
}

const msCassandra = {
  firstName: 'Scarlet',
  lastName: 'Cassandra',
  color: 'red',
  description: 'She has curly hair and a sharp look',
  age: 37,
  image: './assets/scarlet.png',
  occupation: 'Coder',
  favouriteWeapon: 'trophy'
}

const mrMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'orange',
  description: 'He has been expelled from the army',
  age: 58,
  image: './assets/mustard.png',
  occupation: 'colonel',
  favouriteWeapon: 'pistol'

}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'Her family used to be very rich',
  age: 50,
  image: './assets/peacock.png',
  occupation: 'housewife',
  favouriteWeapon: 'poison'

}

const mrsWhite = {
  firstName: 'Sophia',
  lastName: 'White',
  color: 'yellow',
  description: 'A lonely women, no family around',
  age: 60,
  image: './assets/white.png',
  occupation: 'maid',
  favouriteWeapon: 'rope'
}

const rope = {
  name: 'rope',
  id: 'rope',
  weight: 10,
  location: 'Patio'
}

const knife = {
  name: 'knife',
  id: 'knife',
  weight: 8,
  location: 'Kitchen'
}

const candlestick = {
  name: 'candlestick',
  id: 'candleStick',
  weight: 15,
  location: 'Living Room'
}

const dumbbell = {
  name: 'dumbbell',
  id: 'dumbBell',
  weight: 12,
  location: 'Billiard Room'
}

const poison = {
  name: 'poison',
  id: 'poison',
  weight: 1.5,
  location: 'Conservatory'
}

const axe = {
  name: 'axe',
  id: 'axe',
  weight: 8,
  location: 'Patio'
}

const bat = {
  name: 'bat',
  id: 'bat',
  weight: 18,
  location: 'Hall'
}

const trophy = {
  name: 'trophy',
  id: 'trophy',
  weight: 17,
  location: 'Lounge'
}

const pistol = {
  name: 'pistol',
  id: 'pistol',
  weight: 1,
  location: 'Study'
}

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  mrPlum,
  msCassandra,
  mrsWhite
]

const weapons = [
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
  'Patio',
]

const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {
  killer: '',
  weapon: '',
  room: ''
}

const shuffleFavouriteWeapon = () => {
  suspects.forEach((suspect) => {
    const randomWeapon = randomSelector(weapons)
    suspect.favouriteWeapon = randomWeapon.id;
  })
}

const pickKiller = () => {
  document.querySelector('.killer-deck').classList.add('shakeX');
  
  setTimeout(function() {
    document.querySelector('.killer-deck').classList.add('bounce');
  }, 1000);

  setTimeout(function() {
    document.querySelector('.killer-deck').classList.remove('shakeX');
    document.querySelector('.killer-deck').classList.remove('bounce');
    document.querySelector('.killerIcon').classList.add('hide');

    shuffleFavouriteWeapon();
    mystery.killer = randomSelector(suspects)
    document.getElementById('killerCard').style.background = mystery.killer.color
    document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
    document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
    document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
    
    document.getElementById('killerImage').src = `${mystery.killer.image}`
    document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`

    document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`

  }, 1500);
}

const pickWeapon = () => {
  document.querySelector('.weapon-deck').classList.add('shakeX');
  
  setTimeout(function() {
    document.querySelector('.weapon-deck').classList.add('bounce');
  }, 1000)
  
  setTimeout(function() {
    document.querySelector('.weapon-deck').classList.remove('bounce');
    document.querySelector('.weapon-deck').classList.remove('shakeX');

    const favouriteWeapon = weapons.find((item) => {
        return item.id === mystery.killer.favouriteWeapon;
      }
    )
    const weaponsClone = [
      ...weapons,
      favouriteWeapon,
      favouriteWeapon,
      favouriteWeapon,
      favouriteWeapon,
      favouriteWeapon,
    ]
    mystery.weapon = randomSelector(weaponsClone);
  
    document.getElementById('weaponName').innerHTML = `${mystery.weapon.name} of ${mystery.weapon.weight} pounds`
  }, 1500);
}

const pickRoom = () => {
  document.querySelector('.room-deck').classList.add('shakeX');
  
  setTimeout(function() {
    document.querySelector('.room-deck').classList.add('bounce');
  }, 1000)
  
  setTimeout(function() {
    document.querySelector('.room-deck').classList.remove('bounce');
    document.querySelector('.room-deck').classList.remove('shakeX');

    const suspectRooms = rooms.find((item) => {
      return item === mystery.weapon.location;
    });
    const roomsClone = [
      ...rooms,
      suspectRooms,
      suspectRooms,
      suspectRooms,
      suspectRooms,
      suspectRooms,
    ]
    mystery.room = randomSelector(roomsClone);

    document.getElementById('roomName').innerHTML = `${mystery.room}`
  }, 1500);
}

const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, a ${mystery.killer.age}-year-old ${mystery.killer.occupation}, in the ${mystery.room} with a ${mystery.weapon.name} of ${mystery.weapon.weight} pounds.`;
  document.querySelector('.reveal').classList.add('active');
}
