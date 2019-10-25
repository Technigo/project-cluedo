// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "Green",
  description: "He has a lot of connections",
  age: 39,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is a small fat man",
  age: 56,
  image: "assets/plum.png",
  occupation: "Lawyer"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "orange",
  description: "She is a tall intelligent woman",
  age: 33,
  image: "assets/scarlet.png",
  occupation: "Tech Entrepreneur"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She devious elderly woman",
  age: 56,
  image: "assets/peacock.png",
  occupation: "Media woman"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A hard headed man",
  age: 61,
  image: "assets/mustard.png",
  occupation: "Retired Navy SEAL"
};

const mrsWhite = {
  firstName: "Alice",
  lastName: "White",
  color: "white",
  description: "A sweet and caring young woman",
  age: 24,
  image: "assets/white.png",
  occupation: "Nurse at County General Hospital Chicago "
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10,
  color: "black",
}

const knife = {
  name: "Knife",
  weight: 25,
  color: "brown",
}

const candlestick = {
  name: "Candlestick",
  weight: 20,
  color: "grey",
}

const dumbbell = {
  name: "Dumbbell",
  weight: 40,
  color: "pink",
}

const poison = {
  name: "Poison",
  weight: 2,
  color: "darkgrey",
}

const axe = {
  name: "Axe",
  weight: 35,
  color: "lightpink",
}

const bat = {
  name: "Bat",
  weight: 35,
  color: "lightblue",
}

const trophy = {
  name: "Trophy",
  weight: 60,
  color: "yellow",
}

const pistol = {
  name: "Pistol",
  weight: 30,
  color: "darkgreen",
}

const weaponsImage = {
  image: "axe.jpg",
  image: "bat.jpg",
  image: "candlestick",
  image: "dumbbell.jpg",
  image: "knife",
  image: "pistol",
  image: "poison"
}
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE. /

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard
];
console.log(suspects);


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
];
console.log(weapons);


const rooms = [
  "LivningRoom",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "BillardRoom",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "LivingRoom",
  "Observatory",
  "Theatre",
  "GuestHouse",
  "Patio"
];

console.log(rooms);


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

console.log(randomSelector(suspects).firstName + "" + (suspects).lastName);
console.log(randomSelector(weapons).name);
console.log(randomSelector(rooms));


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const theMystery = {
  killer: "mrs Peacock",
  color: "blue",
  image: "assets/peacock.png",
  weapon: "trophy",
  room: "theatre"
};

// This will randomly select a killer from the suspects. And add that to the mystery object.
// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.

const pickKiller = () => {
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName

  /// REMAINING OBJECT INFO ///

  const theKillerAge = document.getElementById("killerAge")
  theKillerAge.innerHTML =
    mystery.killer.age

  const theKillerDescription = document.getElementById("killerDescription")
  theKillerDescription.innerHTML =
    mystery.killer.description

  const theKillerOccupation = document.getElementById("killerOccupation")
  theKillerOccupation.innerHTML =
    mystery.killer.occupation

  const theKillerImage = document.getElementById("killerImage")
  theKillerImage.src = mystery.killer.image

}


// CREATE FUNCTIONS 
// weapon //
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeapon = document.getElementById("weaponName");
  theWeapon.innerHTML = mystery.weapon.name

  const theWeaponWeight = document.getElementById("weaponWeight")
  theWeaponWeight.innerHTML = mystery.weapon.weight

  const theWeaponImage = document.getElementById("weaponImage")
  heWeaponImage.src = mystery.weapon.image

  //const theWeaponColor = document.getElementById("weaponColor")
  //theWeaponColor.innerHTML = mystery.weapon.color
}

// room //
const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName");
  theRoomName.innerHTML = mystery.room
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

// Invoking the function reveal the mystery and send alert //
function revealMystery() {
  alert(`The murder was committed by mrs Peacock,
with a trophe in the theatre`)
};

// on click -------- something is sent to the HTML file that makes it show in the DOM incl id from html
//document.getElementById(
  //"mystery"
//).innerHTML = (`The murder was committed by ${mystery.killer}, with a ${mystery.weapon} in the ${mystery.room}`)
//revealMystery(theKiller);
