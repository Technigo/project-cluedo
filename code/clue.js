// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:


const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
};

const mrPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#5c0470",
  description: "Knowing a lot about chemistry and Egypt",
  age: 36,
  image: "assets/plum.png",
  occupation: "Cycietrist"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Being very cunning",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
};
  
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#0fb7bd",
  description: "A social butterfly with great social skills",
  age: 47,
  image: "assets/peacock.png",
  occupation: "Socialite"
};

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#f0b432",
  description: "An expert in weapons and conspiracy.",
  age: 60,
  image: "assets/mustard.png",
  occupation: "Military man"
};

const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "Handles a knife like no one else.",
  age: 65,
  image: "assets/white.png",
  occupation: "Housekeeper"
};

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  //weight: 10,
  description:"Be sure to know your knots"
};

const knife = {
  name: "Knife",
  weight: 2,
  description:"A sharp blade makes the perfect cut"
};

const candlestick = {
  name: "Candlestick",
  //weight: 85,
  description:"For impulsive kills"
};

const dumbbell = {
  name: "Dumbbell",
  //weight: 112,
  description:"It takes strength"
};

const poison = {
  name: "Poison",
  //weight: 10,
  description:"Effective but slow"
};

const axe = {
  name: "Axe",
  //weight: 10,
  description:"Split in two for best effect"
};

const bat = {
  name: "Bat",
  //weight: 10,
  description:"A good swing gets the job done"
};
const trophy = {
  name: "Trophy",
  //weight: 210,
  description: "For champions only"
};

const pistol = {
  name: "Pistol",
 // weight: 150,
  description: "Everyone can pull the trigger"
};


// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = "dining room"
const conservatory = "conservatory"
const kitchen = "kitchen"
const study = "study"
const library = "library"
const lounge = "lounge"
const ballroom = "ballroom"
const hall = "hall"
const spa = "spa"
const livingRoom = "living room"
const observatory = "observatory"
const theater = "theater"
const guestHouse = "guest House"
const patio = "patio"
const billiardRoom = "billiard room"

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

const suspects = [
  mrGreen,
  mrsWhite,
  mrPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
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
  diningRoom,
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
};
console.log (randomSelector);

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mystery = {
  killer,
  weapon,
  room
}
console.log(mystery)

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  console.log (mystery.killer);

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")
  
  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName

  const theKillerImage = document.getElementById("killerImage")
    
  theKiller.style.background = mystery.killer.color
    theKillerImage.innerHTML =
    theKillerImage.src = mystery.killer.image


  const theKillerAge = document.getElementById("killerAge")
    
  theKiller.style.background = mystery.killer.color
    theKillerAge.innerHTML = `Age: ${mystery.killer.age}`

  const theKillerDescription = document.getElementById("killerDescription")
   
  theKiller.style.background = mystery.killer.color
   theKillerDescription.innerHTML = `Known for: ${mystery.killer.description}`

}

// CREATE FUNCTIONS pickWeapon
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  console.log (mystery.weapon);

const theWeapon = document.getElementById("weapon")
const theWeaponName = document.getElementById("weaponName")

//theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML =
    mystery.weapon.name

const theWeaponDescription = document.getElementById("weaponDescription")

theWeapon.style.background = mystery.weapon.color
  theWeaponDescription.innerHTML =
  mystery.weapon.description

}

//FUNCTION pickRoom
const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  console.log (mystery.room);

  //const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  //theRoom.style.background = mystery.room.color
  theRoomName.innerHTML = 
   mystery.room

}

// FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

//const revealMystery = () => {
  //const randomSuspect = randomSelector (suspects)
  //const randomWeapon = randomSelector (weapons)
  //const randomRoom = randomSelector (rooms)
  
  //console.log(randomSuspect, randomWeapon, randomRoom);
//}

//document.getElementById("mystery").addEventListener("click", revealMystery)
const revealMystery = () => {
  const theRevealMystery = document.getElementById("mystery")
   theRevealMystery.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`}
