// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
let killerIsPicked = false;
let weaponIsPicked = false;
let roomIsPicked = false; 

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: '#008000',
  description: 'He has a lot of connections',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Entrepreneur',
  favouriteWeapon: 'rope'
}

const professorPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: '#8B008B', 
  description: 'He is a nuclear specialist',
  age: 84,
  image: 'assets/plum.png',
  occupation: 'Retired',
  favouriteWeapon: 'pistol'
}

const missScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: '#DC143C', 
  description: 'She is a specialist in freelance espionage',
  age: 28,
  image: 'assets/scarlet.png',
  occupation: 'Actress',
  favouriteWeapon: 'knife'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: '#0000CD', 
  description: 'She always maintains her dignity',
  age: 57,
  image: 'assets/peacock.png',
  occupation: 'Socialite',
  favouriteWeapon: 'candlestick'
}

const colonelMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: '#FCE38E', 
  description: 'He is a great hunter',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Colonel',
  favouriteWeapon: 'axe'
}


const mrsWhite = {
  firstName: 'Mrs',
  lastName: 'White',
  color: '#FFFAF0	', 
  description: 'Loyal and confidant',
  age: 72,
  image: 'assets/white.png',
  occupation: 'Housekeeper',
  favouriteWeapon: 'poison'
}

//CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  article: 'a',
  id: 'rope'
}

const knife = {
  name: 'knife',
  weight: 7,
  article: 'a',
  id: 'knife'
}

const candelstick = {
  name: 'candelstick',
  weight: 12,
  article: 'a',
  id: 'candelstick'
}

const dumbbell = {
  name: 'dumbbell',
  weight: 24,
  article: 'a',
  id: 'dumbbell'
}

const poison = {
  name: 'poison',
  weight: 1,
  article: '',
  id: 'poison'
}

const axe = {
  name: 'axe',
  weight: 17,
  article: 'an',
  id: 'axe'
}

//do I have to keep this? 
/*const bat = {
  name: 'bat',
  weight: 4
}*/



const trophy = {
  name: 'trophy',
  weight: 29,
  article: 'a',
  id: 'trophy'
}

const pistol = {
  name: 'pistol',
  weight: 11,
  article: 'a',
  id: 'pistol'
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

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
  candelstick,
  dumbbell,
  poison,
  axe,
  //bat,
  trophy,
  pistol
]

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

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = (loadID) => {
  if (!killerIsPicked) {
    document.getElementById(loadID.id).style.opacity = 1
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0

      // This will randomly select a killer from the suspects. And add that to the mystery object.
      shuffleFavoriteWeapon();
      mystery.killer = randomSelector(suspects)
  
      // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
      document.getElementById('killerCard').style.background = mystery.killer.color
      document.getElementById(
        'killerName'
      ).innerHTML = `Name: ${mystery.killer.firstName} ${mystery.killer.lastName}`
      document.getElementById('killerOccupation').innerHTML = `Occupation: ${mystery.killer.occupation}`
      document.getElementById('killerDescription').innerHTML = `Descripton: ${mystery.killer.description}`
      document.getElementById('killerFavouriteWeapon').innerHTML = `Preferred weapon: ${mystery.killer.favouriteWeapon}` //red level to check that the fav-weap changes by using function "shuffleFavouriteWeapon"
      document.getElementById('killerImage').src = mystery.killer.image;
      killerIsPicked = true;
    }, 1500)
  }
  
};


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
//LOADER IS NOT WORKING HERE YET
const pickWeapon = (loadID) => {
  if (killerIsPicked === true && weaponIsPicked === false) {
    document.getElementById(loadID.id).style.opacity = 1
    setTimeout(function() {
      document.getElementById(loadID.id).style.opacity = 0
      mystery.weapon = randomSelector(weapons)
      document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`
      document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`
      weaponIsPicked = true
    },1500)
  } else {
    alert('pick killer card')
  }
  
};


const pickRoom = () => {
  if (weaponIsPicked === true) {
    setTimeout(function() { 
      mystery.room = randomSelector(rooms)
      document.getElementById('roomName').innerHTML = `Where murder was commited: ${mystery.room}`
    },1500)   
  } else {
    alert('pick room')
  }
    
};


//select a random weapon from the weapons array and assigns it to suspects favouriteWeapon. 
const shuffleFavoriteWeapon = () => {
  suspects.forEach(suspect => {
    let randomWeapon = randomSelector(weapons).id;
   // console.log(suspect.favouriteWeapon, suspect.firstName)
    suspect.favouriteWeapon = randomWeapon
   // console.log(randomWeapon);
   // console.log(suspect.favouriteWeapon, suspect.firstName)
  });
}
//shuffleFavoriteWeapon();



// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'


const revealMystery = () => {
  if (
    mystery.killer === undefined ||
    mystery.weapon === undefined ||
    mystery.room === undefined 
    ) {
    document.getElementById('mystery').innerHTML = `No mystery has been solved`;
    } else {
      let killer = mystery.killer.firstName + " " + mystery.killer.lastName;
      let weapon = mystery.weapon.article + " " + mystery.weapon.name;
      let room = mystery.room;
    document.getElementById('mystery').innerHTML = `The murder was comitted by ${killer} using ${weapon} in the ${room}!`; 
    }
}
//console.log(revealMystery);



//document.getElementById('killerCard').onclick = pickKiller;
//document.getElementById('weaponCard').onclick = pickWeapon;
//document.getElementById('roomCard').onclick = pickRoom;
//document.getElementById('mystery').onclick = revealMystery;


