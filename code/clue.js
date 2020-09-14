//Setup some vars
let gameStarted = false;
let killerPicked = false;
let weaponPicked = false;
let roomPicked = false;

// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: 'Reverend',
  lastName: 'Green',
  color: 'green',
  description: 'He is a very serious man.',
  age: 45,
  image: 'assets/green.png',
  occupation: 'Priest'
};

const clMustard = {
  firstName: 'Colonel',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'Has fought many wars and knows how to handle a gun.',
  age: 65,
  image: 'assets/mustard.png',
  occupation: 'Military man'
};

const mrsPeacock = {
  firstName: 'Petunia',
  lastName: 'Peacock',
  color: 'blue',
  description: 'World famous',
  age: 34,
  image: 'assets/peacock.png',
  occupation: 'Senators wife'
};

const prPlum = {
  firstName: 'Professor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Smooth-talker',
  age: 41,
  image: 'assets/plum.png',
  occupation: 'Psychiatry Professor'
};

const msScarlet = {
  firstName: 'Serena',
  lastName: 'Scarlet',
  color: 'orange',
  description: 'You never know if she is telling you the truth.',
  age: 23,
  image: 'assets/scarlet.png',
  occupation: 'Runs a underground brothel'
};

const mrsWhite = {
  firstName: 'Wendy',
  lastName: 'White',
  color: 'white',
  description: 'A sweet old lady',
  age: 73,
  image: 'assets/white.png',
  occupation: 'Servant'
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: 'rope',
  weight: 10,
  color: "red",
  article: "a"

};

const knife = {
  name: 'knife',
  weight: 7,
  color: "blue",
  article: "a"
};

const axe = {
  name: 'axe',
  weight: 12,
  color: "green",
  article: "an"
};

const revolver = {
  name: 'revolver',
  weight: 6,
  color: "pink",
  article: "a"
};

const poison = {
  name: 'poison',
  weight: 3,
  color: "yellow",
  article: ""
}

const scissors = {
  name: 'scissors',
  weight: 2,
  color: "purple",
  article: ""
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
  scissors
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
const pickKiller = () => {
  if (gameStarted) {
    // This will randomly select a killer from the suspects. And add that to the mystery object.
    mystery.killer = randomSelector(suspects)

    // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. 
    //Feel free to add more things to show about the killer.
    document.getElementById('killerCard').style.background = mystery.killer.color
    document.getElementById(
      'killerName'
    ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`
    document.getElementById('killerImage').src = mystery.killer.image;
    killerPicked = true;
  }

}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  if (killerPicked) {
    mystery.weapon = randomSelector(weapons);
    console.log(mystery.weapon);
    document.getElementById('weaponName').innerHTML = mystery.weapon.name;
    document.getElementById('weaponWeight').innerHTML = mystery.weapon.weight;
    weaponPicked = true;
  }
}

const pickRoom = () => {
  if (weaponPicked) {
    mystery.room = randomSelector(rooms);
    console.log(mystery.room);
    document.getElementById('roomName').innerHTML = mystery.room;
    roomPicked = true;
  }
}

const startGame = () => {
  gameStarted = true;
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  if (killerPicked && weaponPicked && roomPicked) {
    let killer = mystery.killer.firstName + " " + mystery.killer.lastName;
    let weapon = mystery.weapon.article + " " + mystery.weapon.name;
    let room = mystery.room;
    let mysteryString = (`It was ${killer} using ${weapon} in the ${room}!`);
    document.getElementById('mystery-reveal').innerHTML = mysteryString;
  }
}