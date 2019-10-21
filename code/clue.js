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

const mrsWhite = {
  firstName: "Claudia",
  lastName:"White",
  color: "white",
  description:"She is a good actress",
  age: 60,
  image: "assets/white.png",
  occupation:"Actress"
}

const profPlum = {
  firstName: "Tom",
  lastName:"Plum",
  color: "purple",
  description:"He is quick witted",
  age: 50,
  image: "assets/plum.png",
  occupation:"Professor"
}

const missScarlet = {
  firstName: "Nicole",
  lastName:"Scarlet",
  color: "red",
  description:"She is smart",
  age: 25,
  image: "assets/scarlet.png",
  occupation:"Fashion designer"
}

const mrsPeacock = {
  firstName: "Jane",
  lastName:"Peacock",
  color: "blue",
  description:"She is verbal",
  age: 58,
  image: "assets/peacock.png",
  occupation:"Author"
}

const mrMustard = {
  firstName: "Don",
  lastName:"Mustard",
  color: "yellow",
  description:"He is dangerous",
  age: 64,
  image: "assets/mustard.png",
  occupation:"Military"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10
}

const knife = {
  name:"knife",
  weight: 7
}

const candlestick = {
  name: "candlestick",
  weight: 5
}

const dumbbell = {
  name: "dumbbell",
  weight: 18
}

const poison = {
  name: "poison",
  weight: 6
}

const axe = {
  name: "axe",
  weight: 15
}

const bat = {
  name: "bat",
  weight: 12
}

const trophy = {
  name: "trophy",
  weight: 16
}

const pistol = {
  name: "pistol",
  weight: 12
}


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningroom = "Dining Room";
const conservatory = "Conservatory"; 
const kitchen = "Kitchen";
const study = "Study";
const library = "Library";
const billiardroom = "Billiard Room";
const lounge = "Lounge";
const ballroom = "Ballroom";
const hall = "Hall";
const spa = "Spa";
const livingroom = "Living Room";


// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]
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
]
console.log(weapons);

const rooms = [
  diningroom,
  conservatory,
  kitchen,
  study,
  library,
  billiardroom,
  lounge,
  ballroom,
  hall,
  spa,
  livingroom
]
console.log(rooms);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
let mystery = {
  killer: this.killer,
  weapon: this.weapon,
  room: this.room,
  time: this.time 
}

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  const theKillerImage = document.getElementById("killerImage")
  document.getElementById("killerImage").src = mystery.killer.image
 

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
  theKillerImage.innerHTML = mystery.killer.image
  
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoomName = document.getElementById("roomName")
  theRoomName.innerHTML = mystery.room
}

console.log(mystery);

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const theMysteryRevealed = document.getElementById("mystery");
  if (mystery.killer === "" || mystery.room === "" || mystery.weapon ==="") {
    theMysteryRevealed.innerHTML = `No mystery is yet to be revealed`;
  } else {
  theMysteryRevealed.innerHTML = `The murder was committed by 
  ${mystery.killer.firstName} ${mystery.killer.lastName}, in 
  the ${mystery.room} with a ${mystery.weapon.name} and in the
  ${mystery.time}.`
}
}


// Creating variables for when the murder was committed
const morning = "morning";
const afternoon = "afternoon";
const evening = "evening";
const night = "night";

// Creating an array with times of when the murder was committed
const times = [
  morning,
  afternoon,
  evening,
  night
]

// Declaring a function for when the murderer was committed
const pickTime = () => {
  mystery.time = randomSelector(times);
  const theTime = document.getElementById("timeOfMurder");
  theTime.innerHTML = mystery.time;
}

