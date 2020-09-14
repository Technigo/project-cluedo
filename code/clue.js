//Setup some vars
let gameStarted = false;
let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Reverend',
  lastName: 'Green',
  color: '#539853',
  description: 'He is a very serious man.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Priest',
  favoriteWeapon: 'rope'
};

const clMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: '#fbd460',
  description: 'Has fought many wars and knows how to handle a gun.',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Military man',
  favoriteWeapon: 'knife'
};

const mrsPeacock = {
  firstName: 'Petunia',
  lastName: 'Peacock',
  color: '#5656b3',
  description: 'World famous',
  age: 34,
  image: 'assets/peacock.png',
  occupation: 'Senators wife',
  favoriteWeapon: 'axe'
};

const prPlum = {
  firstName: 'Professor',
  lastName: 'Plum',
  color: '#8b5195',
  description: 'Smooth-talker',
  age: 41,
  image: 'assets/plum.png',
  occupation: 'Psychiatry Professor',
  favoriteWeapon: 'revolver'
};

const msScarlet = {
  firstName: 'Serena',
  lastName: 'Scarlet',
  color: '#f84b3e',
  description: 'You never know if she is telling you the truth.',
  age: 23,
  image: 'assets/scarlet.png',
  occupation: 'Runs a underground brothel',
  favoriteWeapon: 'poison'
};

const mrsWhite = {
  firstName: 'Wendy',
  lastName: 'White',
  color: '#ebebe9',
  description: 'A sweet old lady',
  age: 73,
  image: 'assets/white.png',
  occupation: 'Servant',
  favoriteWeapon: 'candlestick'
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'Rope',
  id: 'rope',
  weight: 10,
  color: 'red',
  article: 'a',
  increasedChanceOfDraw: 3,
  likelyFoundIn: 'Cellar'
};

const knife = {
  name: 'Knife',
  id: 'knife',
  weight: 7,
  color: 'blue',
  article: 'a',
  increasedChanceOfDraw: 5,
  likelyFoundIn: 'Kitchen'
};

const axe = {
  name: 'Axe',
  id: 'axe',
  weight: 12,
  color: 'green',
  article: 'an',
  increasedChanceOfDraw: 2,
  likelyFoundIn: 'Study'
};

const revolver = {
  name: 'Revolver',
  id: 'revolver',
  weight: 6,
  color: 'pink',
  article: 'a',
  increasedChanceOfDraw: 10,
  likelyFoundIn: 'Lounge'
};

const poison = {
  name: 'Poison',
  id: 'poison',
  weight: 3,
  color: 'yellow',
  article: '',
  increasedChanceOfDraw: 4,
  likelyFoundIn: 'Dining Room'
}

const scissors = {
  name: 'Scissors',
  id: 'scissors',
  weight: 2,
  color: 'purple',
  article: '',
  increasedChanceOfDraw: 3,
  likelyFoundIn: 'Library'
}

const candleStick = {
  name: 'Candle stick',
  id: 'candlestick',
  weight: 4,
  color: 'white',
  article: 'a',
  increasedChanceOfDraw: 10,
  likelyFoundIn: 'Hall'
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
const suspects = [
  mrGreen,
  clMustard,
  mrsPeacock,
  prPlum,
  msScarlet,
  mrsWhite
]

const weapons = [
  rope,
  knife,
  axe,
  revolver,
  poison,
  scissors,
  candleStick
]

const rooms = ['Kitchen', 'Dining Room', 'Lounge', 'Study', 'Cellar', 'Billiard Room', 'Conservatory', 'Library', 'Hall'];


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer: null,
  weapon: null,
  room: null
};

// This function will be invoked when you click on the killer card.
const pickKiller = (loadID) => {
  if (gameStarted && !killerPicked) {
    //This should be displayed for a few seconds.
    document.getElementById(loadID.id).style.opacity = 1;
    //After 2.5 seconds, run the function
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      // This will randomly select a killer from the suspects. And add that to the mystery object.
      mystery.killer = randomSelector(suspects);
      // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. 

      //Feel free to add more things to show about the killer.
      document.getElementById('killerName').style.background = mystery.killer.color;

      document.getElementById('killerImage').src = mystery.killer.image;
      document.getElementById(
        'killerName'
      ).innerHTML = (`${mystery.killer.firstName} ${mystery.killer.lastName}`);
      document.getElementById(
        'killerFavoriteWeapon'
      ).innerHTML = (`Preferred weapon: ${mystery.killer.favoriteWeapon}`);
      document.getElementById('killerAge').innerHTML = (`Age: ${mystery.killer.age}`);
      document.getElementById('killerOccupation').innerHTML = (`Occupation: ${mystery.killer.occupation}`);
      killerPicked = true;


    }, 200);

  }

}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = (loadID) => {

  if (killerPicked && !weaponPicked && !roomPicked) {
    //Look at the killers favorite weapon and change the prob. of it being picked
    increaseChanceForFavWeapon(mystery.killer);
    //This should be displayed for a few seconds.
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      mystery.weapon = randomSelector(weapons);
      console.log(mystery.weapon);
      document.getElementById('weaponName').innerHTML = `Type: ${mystery.weapon.name}`;
      document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon.weight}`;
      weaponPicked = true;
    }, 200);
  } else(showInfoMessage("pickWeapon"));
}

const pickRoom = (loadID) => {

  if (weaponPicked && !roomPicked) {
    //This should be displayed for a few seconds.
    document.getElementById(loadID.id).style.opacity = 1;
    setTimeout(function () {
      document.getElementById(loadID.id).style.opacity = 0;
      increaseChanceForRoom(mystery.weapon);
      mystery.room = randomSelector(rooms);
      console.log(mystery.room);
      document.getElementById('roomName').innerHTML = mystery.room;
      roomPicked = true;
    }, 200);
  } else(showInfoMessage("pickRoom"));
}

const showInfoMessage = (callerFunctionName) => {
  if (callerFunctionName === "pickWeapon" || (callerFunctionName === "pickRoom" && !killerPicked)) {
    //If pickWeapon calls this function, it means the user hasn't picked a killer yet.
    document.getElementById("killerInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("killerInfoMessage").style.opacity = 0;
    }, 2000);

  } else if (callerFunctionName === "pickRoom" && killerPicked) {
    //Is pickRoom calls this function  and the killer has been picked, the user hasn't picked a weapon. 
    document.getElementById("weaponInfoMessage").style.opacity = 1;
    setTimeout(function () {
      document.getElementById("weaponInfoMessage").style.opacity = 0;
    }, 2000);
  }
}

//Select a random weapon from the weapons array and assign in to the suspects fav-weapon property
const shuffleFavoriteWeapon = () => {
  suspects.forEach(suspect => {
    let selectedRandomWeapon = randomSelector(weapons).id;
    suspect.favoriteWeapon = selectedRandomWeapon;
  });
}

const increaseChanceForFavWeapon = (killerObject) => {
  let preferredWeapon = killerObject.favoriteWeapon;
  let weaponObject = weapons.find(weapon => weapon.id === preferredWeapon);
  let increaseChance = weaponObject.increasedChanceOfDraw;

  for (i = 0; i < increaseChance; i++) {
    weapons.push(weaponObject);
  }
}

const increaseChanceForRoom = (weaponObject) => {
  let preferredRoom = weaponObject.likelyFoundIn;
  //Increase chance for weapon in room is random(Some number between 1 and 10) every time.
  let increaseChance = Math.floor(Math.random() * 10) + 1;
  for (i = 0; i < increaseChance; i++) {
    rooms.push(preferredRoom);
  }

}

const startGame = () => {
  gameStarted = true;
  toggleGameBoard();
  shuffleFavoriteWeapon();
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  if (killerPicked && weaponPicked && roomPicked) {
    let killer = mystery.killer.firstName + " " + mystery.killer.lastName;
    let weapon = mystery.weapon.article + " " + mystery.weapon.name;
    let room = mystery.room;
    let mysteryString = (`
                It was ${
                  killer
                }
                using ${
                  weapon
                } in the ${
                  room
                }!`);
    document.getElementById('mystery-reveal').innerHTML = mysteryString;
  }
}

const endGame = () => {
  var check = confirm("Are you sure? Window will close");
  if (check == true) {
    window.close();
  } else {

  }

}

const toggleGameBoard = () => {
  document.getElementById("gameBoard").classList.remove("inactive");
  document.getElementById("gameBoard").classList.add("active");
  document.getElementById("start-button").classList.remove("active");
  document.getElementById("start-button").classList.add("inactive");
}