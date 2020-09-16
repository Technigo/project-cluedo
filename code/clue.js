//variables to prevent clicking cards in wrong direction. 
let killerIsPicked = false;
let weaponIsPicked = false;
let roomIsPicked = false; 


//objects for suspects
const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#008000',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'rope' //rope
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#8B008B', 
  description: 'He is a nuclear specialist',
  age: 84,
  image: 'assets/plum.png',
  occupation: 'Retired',
  favouriteWeapon: 'pistol' //pistol
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#DC143C', 
  description: 'She is a specialist in freelance espionage',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'knife'//knife
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#0000CD', 
  description: 'She always maintains her dignity',
  age: 57,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'candlestick' //candlestick
}

const colonelMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: '#FCE38E', 
  description: 'He is a great hunter',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'axe' //axe
}


const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#FFFAF0	', 
  description: 'Loyal and confidant',
  age: 72,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'posion' //poison
}


//objects for weapons
const rope = {
  name: 'rope',
  weight: 10,
  article: 'a',
  id: 'rope',
  chanceOfKillerWeapon: 5
}

const knife = {
  name: 'knife',
  weight: 7,
  article: 'a',
  id: 'knife',
  chanceOfKillerWeapon: 25
}

const candelstick = {
  name: 'candelstick',
  weight: 12,
  article: 'a',
  id: 'candelstick',
  chanceOfKillerWeapon: 8
}

const dumbbell = {
  name: 'dumbbell',
  weight: 24,
  article: 'a',
  id: 'dumbbell',
  chanceOfKillerWeapon: 12
}

const poison = {
  name: 'poison',
  weight: 1,
  article: '',
  id: 'poison',
  chanceOfKillerWeapon: 20
}

const axe = {
  name: 'axe',
  weight: 17,
  article: 'an',
  id: 'axe',
  chanceOfKillerWeapon: 12
}

const bat = {
  name: 'bat',
  weight: 4,
  article: 'a',
  id: 'bat',
  chanceOfKillerWeapon: 4
}


const trophy = {
  name: 'trophy',
  weight: 29,
  article: 'a',
  id: 'trophy',
  chanceOfKillerWeapon: 2
}

const pistol = {
  name: 'pistol',
  weight: 11,
  article: 'a',
  id: 'pistol',
  chanceOfKillerWeapon: 12
}


//suspects array
const suspects = [
  mrGreen,
  professorPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
  mrsWhite
]


//weapons array
const weapons = [
  rope,
  knife,
  candelstick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]


//room array
const rooms = [
  "Dining Room", 
  "Conservatory", 
  "Kitchen", 
  "Study", 
  "Library", 
  "Billiard Room", 
  "Lounge", 
  "Ballroom", 
  "Hall", 
  "Spa", 
  "Living Room", 
  "Observatory", 
  "Theater", 
  "Guest House", 
  "Patio"
]



// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}



//object that keeps mystery 
const mystery = {
  killer: null,
  weapon: null,
  room: null
};


// This function will be invoked when you click the killer card.
const pickKiller = () => {
  if (!killerIsPicked) {
    document.getElementById('loaderKiller').style.opacity = 1
    setTimeout(function () {
      document.getElementById('loaderKiller').style.opacity = 0
      let randomWeapon = shuffleFavoriteWeapon();
      // This will randomly select a killer from the suspects. And add that to the mystery object.
      mystery.killer = randomSelector(suspects)
      document.getElementById('killerCard').style.background = mystery.killer.color
      document.getElementById(
        'killerName'
      ).innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
      document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
      document.getElementById('killerDescription').innerHTML = `Descripton: ${mystery.killer.description}`
      document.getElementById('killerFavouriteWeapon').innerHTML = `Preferred weapon: ${mystery.killer.favouriteWeapon}` //red level to check that the fav-weap changes by using function "shuffleFavouriteWeapon"
      document.getElementById('killerImage').src = mystery.killer.image;
      document.getElementById('killerImage').style.opacity = 1;
      killerIsPicked = true;
    }, 2500)
  }
};


// This function will be invoked when you click the weapon card.
const pickWeapon = () => {
  if (killerIsPicked && !weaponIsPicked) {
    document.getElementById('loaderWeapon').style.opacity = 1
    setTimeout(function() {
      document.getElementById('loaderWeapon').style.opacity = 0
      mystery.weapon = randomSelector(weapons)
      document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`
      document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`
      weaponIsPicked = true
    }, 2500)
  } else {
    alert('pick killer card')
  }
};


//This function will be invoked when you click  the room card.
const pickRoom = () => {
  if (weaponIsPicked && !roomIsPicked) {
    document.getElementById('loaderRoom').style.opacity = 1
    setTimeout(function() { 
      document.getElementById('loaderRoom').style.opacity = 0
      mystery.room = randomSelector(rooms)
      document.getElementById('roomName').innerHTML = `Where murder was commited: ${mystery.room}`
      weaponIsPicked = true
    },2500)   
  } else {
    alert('pick room')
  }
};


//select a random weapon from the weapons array and assigns it to suspects favouriteWeapon. 
const shuffleFavoriteWeapon = () => {
  suspects.forEach(suspect => {
    let randomWeapon = randomSelector(weapons).id;
    suspect.favouriteWeapon = randomWeapon
    //console.log(randomWeapon);
  });
};



// STEP 4 - revealMystery that will be invoked when you click that button.

const revealMystery = () => {
  if (
    mystery.killer === null ||
    mystery.weapon === null ||
    mystery.room === null 
    ) {
    document.getElementById('mystery').innerHTML = `No mystery has been solved`;
    } else {
      let killer = mystery.killer.firstName + " " + mystery.killer.lastName;
      let weapon = mystery.weapon.article + " " + mystery.weapon.name;
      let room = mystery.room;
    document.getElementById('mystery').innerHTML = `The murder was comitted by ${killer} using ${weapon} in the ${room}!`; 
    }
}


const restartGame = () => {
  let confirmation = confirm(`Click OK if you want to restart the game?`);
  if (confirmation === true) {
    location.reload();
  }
};