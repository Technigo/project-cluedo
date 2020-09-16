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
  description: 'Her family used to very rich',
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


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  id: 'rope',
  weight: 10

}

const knife = {
  name: 'knife',
  id: 'knife',
  weight: 8
}

const candlestick = {
  name: 'candlestick',
  id: 'candleStick',
  weight: 15
}

const dumbbell = {
  name: 'dumbbell',
  id: 'dumbBell',
  weight: 12,
}

const poison = {
  name: 'poison',
  id: 'poison',
  weight: 1.5
}

const axe = {
  name: 'axe',
  id: 'axe',
  weight: 8
}

const bat = {
  name: 'bat',
  id: 'bat',
  weight: 18
}

const trophy = {
  name: 'trophy',
  id: 'trophy',
  weight: 17
}

const pistol = {
  name: 'pistol',
  id: 'pistol',
  weight: 1
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  mrMustard,
  mrsPeacock,
  mrPlum,
  msCassandra,
  mrsWhite
  // ...  and the rest
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

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

// This function will be invoked when you click on the killer card.
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
    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)
    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
    document.getElementById('killerCard').style.background = mystery.killer.color
    document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
    document.getElementById('killerAge').innerHTML = `${mystery.killer.age}`
    document.getElementById('killerOccupation').innerHTML = `${mystery.killer.occupation}`
    
    document.getElementById('killerImage').src = `${mystery.killer.image}`
    document.getElementById('killerDescription').innerHTML = `${mystery.killer.description}`

    document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`

  }, 1500);
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  document.querySelector('.weapon-deck').classList.add('shakeX');
  
  setTimeout(function() {
    document.querySelector('.weapon-deck').classList.add('bounce');
  }, 1000)
  
  setTimeout(function() {
    document.querySelector('.weapon-deck').classList.remove('bounce');
    document.querySelector('.weapon-deck').classList.remove('shakeX');
    
    // const favoriteWeapon = weapons.find((w) => {
    //   return w.id === mystery.suspect.favouriteWeapon;
    // });

    // const weaponsCopy = [
    //   ...weapons,
    //   favoriteWeapon,
    //   favoriteWeapon,
    //   favoriteWeapon,
    //   favoriteWeapon
    // ];

    // console.log(weaponsCopy);

    mystery.weapon = randomSelector(weapons)
    // document.getElementById('weaponCard').style.background = mystery.killer.color
    document.getElementById('weaponName').innerHTML = `${mystery.weapon.name} of ${mystery.weapon.weight} pounds`
  }, 1500);
}

const pickRoom = () => {
  document.querySelector('.room-deck').classList.add('shakeX');
  
  setTimeout(function() {
    document.querySelector('.room-deck').classList.add('bounce');
  }, 1000)
  
  setTimeout(function() {
    mystery.room = randomSelector(rooms)
    document.querySelector('.room-deck').classList.remove('bounce');
    document.querySelector('.room-deck').classList.remove('shakeX');

    // document.getElementById('roomCard').style.background = mystery.killer.color
    document.getElementById('roomName').innerHTML = `${mystery.room}`
  }, 1500);
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, a ${mystery.killer.age}-year-old ${mystery.killer.occupation}, in the ${mystery.room} with a ${mystery.weapon.name} of ${mystery.weapon.weight} pounds.`;
  document.querySelector('.reveal').classList.add('active');
}
