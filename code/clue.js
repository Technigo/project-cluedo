// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "knife"
};

const prPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "violet",
  description: "A quick-witted professor",
  age: 35,
  image: "assets/plum.png",
  occupation: "Professor",
  favouriteWeapon: "rope"
};

const missScarlett = {
  firstName: "Cassandra",
  lastName: "Scarlett",
  color: "orange",
  description: "Femme Fatale",
  age: 30,
  image: "assets/scarlet.png",
  occupation: "International spy",
  favouriteWeapon: "candlestick"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "An elderly, still-attractive woman",
  age: 55,
  image: "assets/peacock.png",
  occupation: "Ornithologist",
  favouriteWeapon: "dumbell"
};

const colMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "Hunter and colonial imperialist",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Colonel",
  favouriteWeapon: "poison"
};

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "Widow of a nuclear physicist",
  age: 62,
  image: "assets/white.png",
  occupation: "Servant",
  favouriteWeapon: "axe"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  image: "assets/rope.png",
  weight: 10,
  id : "rope"
};

const knife = {
  name: "knife",
  image: "assets/knife.png",
  weight: 1,
  id: "knife"
};

const candlestick = {
  name: "candlestick",
  image: "assets/candlestick.png",
  weight: 1,
  id: "candlestick"
};

const bomb = {
  name: "bomb",
  image: "assets/bomb.png",
  weight: 5,
  id: "bomb"
};

const poison = {
  name: "poison",
  image: "assets/poison.png",
  weight: 1,
  id: "poison"
};

const axe = {
  name: "axe",
  image: "assets/axe.png",
  weight: 7,
  id: "axe"
};

const bat = {
  name: "bat",
  image: "assets/bat.png",
  weight: 4,
  id: "bat"
};

const wench = {
  name: "wench",
  image: "assets/wench.png",
  weight: 8,
  id: "wench"
};

const pistol = {
  name: "pistol",
  image: "assets/pistol.png",
  weight: 3,
  id: "pistol"
};

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:

const suspects = [
  mrGreen,
  prPlum,
  missScarlett,
  mrsPeacock,
  colMustard,
  mrsWhite,

  // ...  and the rest
];

const weapons = [
  rope,
  knife,
  candlestick,
  bomb,
  poison,
  axe,
  bat,
  wench,
  pistol,
];

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
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
  killer : null, //() => (`${this.firstName} ${this.lastName}`),
  weapon : null, //() => (`${this.name}`), 
  room: null
};

// Progress bar for loading cards. Bar will oly be shown once clicked. 

var i = 0;
function move(callback) {
  document.getElementById('myProgress').style.display = "block";
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 25);
    function frame() {
      if (width > 100) {
        clearInterval(id);
        i = 0;
        document.getElementById('myProgress').style.display = "none";
      } else if (width == 100){
        callback();
        width++;
      } 
      else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

/*const shuffleFavouriteWeapon = () => {
  suspect.favouriteWeapon = randomSelector(suspects).favouriteWeapon;
  suspects.forEach((suspect) => (killer.favouriteWeapon = randomSelector(suspects).favouriteWeapon));
  //suspects.forEach(suspect) => ((suspect.favouriteWeapon = randomSelector(weapons).name));
  //mystery.killer.favouriteWeapon = randomSelector(weapons).name;
  document.getElementById(
    "killerFavWeapon"
  ).innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
}*/

const shuffleFavouriteWeapon = (suspect) => {
  suspects.forEach((suspect) => (suspect.favouriteWeapon = randomSelector(weapons).name));
  //suspect.favouriteWeapon = randomSelector(weapons).name;
}

const testShuffle = () => {
  suspects.forEach(shuffleFavouriteWeapon);
}

document.getElementById("change").onclick = shuffleFavouriteWeapon;

/*const testShuffle = () => {
  suspects.forEach(shuffleFavouriteWeapon);
}*/

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById(
    "killerDescription"
  ).innerHTML = `${mystery.killer.description}`;
  document.getElementById(
    "killerFavWeapon"
  ).innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
};

const clickKiller = (somefunction) => {
  move(pickKiller); //animation
  //setTimeout(pickKiller, 2500); //reveal killer card
}

document.getElementById('killerCard').onclick = clickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  // document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "weaponName"
  ).innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponImage").src = mystery.weapon.image;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `Weight: ${mystery.weapon.weight}`;
};

document.getElementById('weaponCard').onclick = pickWeapon;

const pickRoom = () => {
  // This will randomly select a room from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. Feel free to add more things to show about the killer.
  // document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "roomName"
  ).innerHTML = `${mystery.room}`;
  //document.getElementById("killerImage").src = mystery.killer.image;
};

document.getElementById('roomCard').onclick = pickRoom;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
}

document.getElementById('reveal').onclick = revealMystery;
