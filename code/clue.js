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
  description: " A quick-witted, young professor with a bow tie",
  age: 35,
  image: "assets/plum.png",
  occupation: "Professor"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "An attractive young woman, who allegedly is a femme fatale.",
  age: 22,
  image: "assets/scarlet.png",
  occupation: "Spy"
}
const mrsPeacock = {
  firstName: "Eleonor",
  lastName: "Peacock",
  color: "blue",
  description: "A grande dame, an elderly yet still attractive woman who maintains her dignity in almost all cases.",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a military man both dignified and dangerous.",
  age: 50,
  image: "assets/mustard.png",
  occupation: "Colonel"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "A frazzled servant.",
  age: 62,
  image: "assets/white.png",
  occupation: "Servant"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  material: "Hamp",
  weight: 7
}
const knife = {
  name: "Knife",
  material: "Steel",
  weight: 7
}
const candlestick = {
  name: "Candelstick",
  material: "Wax",
  weight: 3
}
const dumbbell = {
  name: "Dumbbell",
  material: "Iron",
  weight: 15
}
const poison = {
  name: "Poison",
  material: "Plant",
  weight: 0.5
}
const axe = {
  name: "Axe",
  material: "Iron and wood",
  weight: 10
}
const bat = {
  name: "Bat",
  material: "Wood",
  weight: 8
}
const throphy = {
  name: "Throphy",
  material: "Plastic",
  weight: 2
}
const pistol = {
    name: "Pistol",
    material: "Steel",
    weight: 6
  }
  // THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const dinningRoom = {
  name: "Dinning Room"
}
const conservatory = {
  name: "Conservatory"
}
const kitchen = {
  name: "Kitchen"
}
const study = {
  name: "Study"
}
const library = {
  name: "Library"
}
const billiardRoom = {
  name: "Billiard Room"
}
const lounge = {
  name: "Lounge"
}
const ballroom = {
  name: "Ballroom"
}
const hall = {
  name: "Hall"
}
const spa = {
  name: "Spa"
}
const livingRoom = {
  name: "Living Room"
}
const observatory = {
  name: "Observatory"
}
const theater = {
  name: "Theater"
}
const guestHouse = {
  name: "Guest House"
}
const patio = {
    name: "Patio"
  }
  // ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]
console.log(suspects)

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  throphy,
  pistol
]
console.log(weapons)

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
]
console.log(rooms)
  // THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {

}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer");
  const theKillerColor = document.getElementById("killerColor");
  const theKillerName = document.getElementById("killerName");
  const theKillerAge = document.getElementById("killerAge");
  const theKillerOccupation = document.getElementById("killerOccupation");
  const theKillerImage = document.getElementById("killerImage");
  const theKillerDescription = document.getElementById("killerDiscription");


  theKiller.style.background = mystery.killer.color;

  theKillerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;

  theKillerAge.innerHTML = mystery.killer.age;

  theKillerOccupation.innerHTML = mystery.killer.occupation;

  theKillerImage.src = mystery.killer.image;

  theKillerDescription.innerHTML = mystery.killer.description;


}

const pickWeapon = () => {

  mystery.weapon = randomSelector(weapons);

  const theWeapon = document.getElementById("weapon");
  const theWeaponName = document.getElementById("weaponName");
  const theWeaponMaterial = document.getElementById("weaponMaterial");
  const theWeaponWeight = document.getElementById("weaponWeight");

  theWeaponName.innerHTML = mystery.weapon.name;

  theWeaponMaterial.innerHTML = mystery.weapon.material;

  theWeaponWeight.innerHTML = `${mystery.weapon.weight} kg`;


}

const pickRoom = () => {
  mystery.room = randomSelector(rooms);

  /*  const theRoom = document.getElementById("room"); */
  const theRoomName = document.getElementById("roomName");

  theRoomName.innerHTML = `${mystery.room.name}`;

}

const revealMystery = () => {
  const theMystery = document.getElementById("mystery");
  const theMysteryDescription = document.getElementById("mysteryDescription");

  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    theMystery.innerHTML = "No mystery";
  } else {
    theMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`;
  }
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'