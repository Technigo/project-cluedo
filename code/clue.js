// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:



const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He has a lot of connections",
  age: 47,
  image: "assets/plum.png",
  occupation: "Scientist"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She knows how to get what shw wants",
  age: 43,
  image: "assets/peacock.png",
  occupation: "Manager"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She really know how to make a stew",
  age: 39,
  image: "assets/scarlet.png",
  occupation: "Chef"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He likes to hunt",
  age: 57,
  image: "assets/mustard.png",
  occupation: "Kapten"
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "White",
  description: "She can really clean",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}

const knife = {
  name: "knife",
  weight: 12
}

const candelstick = {
  name: "Candelstick",
  weight: 9
}

const dumbell = {
  name: "Dumbbell",
  weight: 8
}

const poison = {
  name: "Poison",
  weight: 11
}

const axe = {
  name: "Axe",
  weight: 13
}

const bat = {
  name: "bat",
  weight: 9
}

const trophy = {
  name: "Trophy",
  weight: 7
}

const pistol = {
  name: "Pistol",
  weight: 11
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]

const writeOutsuspect = suspect => {
  console.log(suspects);
};

writeOutsuspect(suspects);


const weapons = [
  rope,
  knife,
  candelstick,
  dumbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const writeOutWeapon = weapon => {
  console.log(weapons);
};

writeOutWeapon(weapons);


const rooms = [
  "dinningRoom",
  "conservatory",
  "kitchen",
  "study",
  "library",
  "billiardRoom",
  "lounge",
  "ballRoom",
  "hall",
  "spa",
  "livingRoom",
  "observatory",
  "theatre",
  "guestHouse",
  "patio"
]

console.log(rooms);

/*
const writeOutroom = room => {
  console.log(rooms);
};

writeOutWeapon(rooms);*/

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.


const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

/*
const randomSelectorSuspects = (suspectsGroup) => {
  return suspectsGroup[Math.floor(Math.random() * suspectsGroup.length)];
};

const randomSelectorWeapons = (weaponsGroup) => {
  return weaponsGroup[Math.floor(Math.random() * weaponsGroup.length)];
};

const randomSelectorRooms = (roomsGroup) => {
  return roomsGroup[Math.floor(Math.random() * roomsGroup.length)];
};

console.log(randomSelectorSuspects(suspects).firstName);
console.log(randomSelectorWeapons(weapons).name);
console.log(randomSelectorRooms(rooms));*/


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
//suspects, weapons, rooms

const mystery = {
  killer: "",
  weapon: "",
  room: ""
}


/*
let mystery = (murderMystery) => {
  const randomSuspects = randomSelector(suspects)
  const randomWeapons = randomSelector(weapons)
  const randomRooms = randomSelector(rooms)

  console.log(randomSuspects, randomWeapons, randomRooms)
}

mystery()
*/




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

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  console.log(mystery.weapon)

  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")

  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  console.log(mystery.room)

  const theRoomName = document.getElementById("roomName")

  theRoomName.innerHTML = mystery.room
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// The murder was committed by Jacob Green, in the living room with a rope.