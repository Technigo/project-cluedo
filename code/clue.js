// OBJECTS FOR ALL THE SUSPECTS, favourite weapon in order to shuffle to work later

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

// OBJECTS FOR ALL THE WEAPONS 

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

// Array for suspects, weapons, rooms (rooms is not object)

const suspects = [
  mrGreen,
  prPlum,
  missScarlett,
  mrsPeacock,
  colMustard,
  mrsWhite,
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

// Random selector, takes an array and returns one random item in the array

const randomSelector = (array) => array[Math.floor(Math.random() * array.length)];

// Mystery object 

const mystery = {
  killer : null, 
  weapon : null,  
  room: null
};

// Progress bar for loading cards. Bar will oly be shown once clicked. After animation completes, callback function is called for picking
// killer.

let i = 0;
const move = (callback) => {
  document.getElementById('myProgress').style.display = "block";
  if (i === 0) {
    i = 1;
    const elem = document.getElementById("myBar");
    let width = 1;
    const id = setInterval(frame, 75);
    function frame() {
      if (width > 100) {
        clearInterval(id);
        i = 0;
        document.getElementById('myProgress').style.display = "none";
      } else if (width == 100){
        //callback();
        width++;
      } 
      else {
        width++;
        elem.style.width = width + "%";
      }
      callback();
    }
  }
}

//Function for fading away text when clicking change button or reveal crime.

const remove = () => {
  document.getElementById("mystery").classList.remove("h1fade");
  document.getElementById("mystery").innerHTML = "";
}

//Shufflefavourite weapon. Loops through the array of suspects and replaces favourite weapon
//with new weapon from randomSelector. After that displays text "weapons changed"

const shuffleFavouriteWeapon = (suspect) => {
  suspects.forEach((suspect) => suspect.favouriteWeapon = randomSelector(weapons).name);
  document.getElementById("mystery").innerHTML = "Weapons Changed";
  document.getElementById("mystery").classList.add("h1fade"); 
  setTimeout(remove, 4000);
}

//Test function for shuffle to see that it works

const testShuffle = () => {
  suspects.forEach(shuffleFavouriteWeapon);
}

document.getElementById("change").onclick = shuffleFavouriteWeapon;

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer. 
  // As well as setting image of the card and flipping the cards, showing description, favroutite weapon

  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  document.getElementById("killerImage").classList.toggle("imgflip");
  document.getElementById("killerImage").src = mystery.killer.image;
  document.getElementById(
    "killerDescription"
  ).innerHTML = `${mystery.killer.description}`;
  document.getElementById(
    "killerFavWeapon"
  ).innerHTML = `Favourite weapon: ${mystery.killer.favouriteWeapon}`;
};

//Function to make sure move knows which card is clicked and start the animation for the appropriate card

const clickCard = (card) => {
  move(card); 
}

//Event handler for clicking card
document.getElementById('killerCard').addEventListener('click', (e) => {
  e.preventDefault();
  clickCard(pickKiller);
})

// This function will be invoked when you click on the weapon card.
const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons); 
  document.getElementById(
    "weaponName"
  ).innerHTML = `${mystery.weapon.name}`;
  document.getElementById("weaponImage").src = mystery.weapon.image;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `Weight: ${mystery.weapon.weight}`;
};

//Similar event handler for picking weapon. No image flip occurs on weapon
document.getElementById('weaponCard').addEventListener('click', (e) => {
  e.preventDefault();
  clickCard(pickWeapon);
})

const pickRoom = () => {
  // This will randomly select a room from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms);
  document.getElementById("roomName").innerHTML = `${mystery.room}`;
};

//Event handler for picking room
document.getElementById('roomCard').addEventListener('click', (e) => {
  e.preventDefault();
  clickCard(pickRoom);
})

// FUNCTION revealMystery that will be invoked when you click that button. If all cards not clicked will show fading message.

const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room){
  document.getElementById("mystery").innerHTML = `You don´t have all the clues yet! Please click all cards`;
  document.getElementById("mystery").classList.add("h1fade"); 
  setTimeout(remove, 6000);
  }
  else
  document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
}

document.getElementById('reveal').onclick = revealMystery;
