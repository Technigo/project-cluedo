// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:
//
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She handles a knife like no one else.",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He knows a lot about chemistry and Egypt",
  age: 36,
  image: "assets/plum.png",
  occupation: "Cycietrist"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is very capable",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "cyan",
  description: "She is a social butterfly and great social skills",
  age: 47,
  image: "assets/peacock.png",
  occupation: "Socialite"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is an expert in weapons and conspiracy.",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Military man"
};



// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.
// Rope Knife Candlestick Dumbbell Poison Axe Bat Trophy Pistol
const rope = {
  name: "rope",
  weight: 10
};

const knife = {
  name: "Knife",
  weight: 5
};

const candleStick = {
  name: "Candle Stick",
  weight: 2
};

const dumbBell = {
  name: "Dumbbell",
  weight: 15
};

const poison = {
  name: "Poison",
  weight: 20
};

const axe = {
  name: "Axe",
  weight: 30
};

const bat = {
  name: "Bat",
  weight: 25
};
const throphy = {
  name: "Throphy",
  weight: 30
};

const pistol = {
  name: "Pistol",
  weight: 100
};


// THE ROOMS ONLY HAVE A NAME SO NO NEED FOR OBJECTS THERE.

const dinningRoom = "Dinning Room"
const conservatory = "Conservatory"
const kitchen = "Kitchen"
const study = "Study"
const library = "Library"
const billiardRoom = "Billiar Room"
const lounge = "Lounge"
const ballroom = "Ballroom"
const hall = "Hall"
const spa = "Spa"
const livingRoom = "Living room"
const observatory = "Observatory"
const theater = "Theater"
const guestHouse = "Guest House"
const patio = "Patio"



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
  candleStick,
  dumbBell,
  poison,
  axe,
  bat,
  throphy,
  pistol
];
console.log(weapons);
//Dinning Room Conservatory Kitchen Study Library Billiard Room Lounge Ballroom Hall Spa Living Room Observatory Theater Guest House Patio
const rooms = [
  dinningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballroom,
  hall,
  spa,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
];

console.log(rooms);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerAge = document.getElementById("killerAge")
  const theKillerOccupation = document.getElementById("killerOccupation")
  const theKillerImage = document.getElementById("killerImage")
  const theKillerDescription = document.getElementById("killerDescription")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerAge.innerHTML = mystery.killer.age
  theKillerOccupation.innerHTML = mystery.killer.occupation
  theKillerImage.src = mystery.killer.image
  theKillerDescription.innerHTML = mystery.killer.description
}
// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeaponName.innerHTML =
    mystery.weapon.name
  theWeaponWeight.innerHTML =
    mystery.weapon.weight
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoomName = document.getElementById("roomName")
  theRoomName.innerHTML = mystery.room
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const theKillerName = document.getElementById("killerName").innerText
  const theWeaponName = document.getElementById("weaponName").innerText
  const theRoomName = document.getElementById("roomName").innerText
  if (theKillerName != "" && theWeaponName != "" && theRoomName != "") {
    document.getElementById("mysteryMessage").innerText = `The murder was committed by ${theKillerName} in the ${theRoomName} using the ${theWeaponName}.`
  }
}