// Objects for all suspects

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "MediumSeaGreen",
  description: "He has a lot of connections.",
  age: 45,
  image: "assets/mrgreen.png",
  occupation: "Entrepreneur"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "Salmon",
  description: "She will do anything to stay in the spotlight.",
  age: 25,
  image: "assets/msscarlet.png",
  occupation: "Actress"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "SeaShell",
  description: "She will do anything for justice, including turning vigilante.",
  age: 50,
  image: "assets/mrswhite.png",
  occupation: "Lawyer"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He is an inventor and a genius. To challenge him could be dangerous.",
  age: 36,
  image: "assets/mrplum.png",
  occupation: "Professor"
}
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "CornflowerBlue",
  description: "Despite her looks, she's a formidable politician.",
  age: 32,
  image: "assets/mrspeacock.png",
  occupation: "Politician"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "Gold",
  description: "A casually dressed expert martial artist.",
  age: 50,
  image: "assets/mrmustard.png",
  occupation: "Colonel"
}
// Objects for all weapons

const rope = {
  name: "rope",
  description: "Some frayed rope. Looks like a noose.",
  image: "assets/rope.png",
  weight: 10
}
const knife = {
  name: "knife",
  description: "A rusty kitchen knife that has seen better days.",
  image: "assets/knife.png",
  weight: 20
}
const candlestick = {
  name: "candlestick",
  description: "All this candlestick needs is a candle.",
  image: "assets/candlestick.png",
  weight: 30
}
const dumbbell = {
  name: "dumbbell",
  description: "Perfect for exercise or as a paper weight.",
  image: "assets/dumbbells.png",
  weight: 40
}
const poison = {
  name: "poison",
  description: "Arsenic? Cyanide? Who knows.",
  image: "assets/poison.png",
  weight: 1
}
const axe = {
  name: "axe",
  description: "Someone has been using this axe for something other than wood.",
  image: "assets/axe.png",
  weight: 35
}
const bat = {
  name: "bat",
  description: "A baseball bat.",
  image: "assets/bat.png",
  weight: 25
}
const trophy = {
  name: "trophy",
  description: "This trophy needs polishing.",
  image: "assets/trophy.png",
  weight: 30
}
const pistol = {
  name: "pistol",
  description: "One bullet is missing from this pistol.",
  image: "assets/pistol.png",
  weight: 15
}

// Objects for all rooms (because I wanted more information than just room name)

const theDiningRoom = {
  name: "dining room",
  description: "The fondest memories are made when gathered around the table.",
  image: "assets/diningroom.png"
}

const theKitchen = {
  name: "kitchen",
  description: "Everything happens in the kitchen. Life happens in the kitchen.",
  image: "assets/kitchen.png"
}

const theConservatory = {
  name: "conservatory",
  description: "Prepare for a bitter harvest. Winter has come at last.",
  image: "assets/conservatory.png"
}

const theStudy = {
  name: "study",
  description: "When I'm in here, that means that I am working.",
  image: "assets/study.png"
}

const theLibrary = {
  name: "library",
  description: "When in doubt, go to the library.",
  image: "assets/library.png"
}

const theBilliardRoom = {
  name: "billiard room",
  description: "Everything should be approached like a game of billiards. If you bash the ball too hard, you get nowhere.",
  image: "assets/billiardroom.png"
}

const theLounge = {
  name: "lounge",
  description: "The lounge is like a fine old mink coat: opulent, dignified and warm.",
  image: "assets/lounge.png"
}

const theBallroom = {
  name: "ballroom",
  description: "We should consider every day lost on which we have not danced at least once.",
  image: "assets/ballroom.png"
}

const theHall = {
  name: "hall",
  description: "It's just a hall.",
  image: "assets/hall.png"
}

const theSpa = {
  name: "spa",
  description: "It's always a good idea to do something relaxing prior to making an important decision in your life.",
  image: "assets/spa.png"
}

const theLivingRoom = {
  name: "living room",
  description: "Irony is when someone is murdered in the living room.",
  image: "assets/livingroom.png"
}

const theObservatory = {
  name: "observatory",
  description: "We're all in the gutter, but some of us are looking at the stars.",
  image: "assets/observatory.png"
}

const theTheater = {
  name: "theater",
  description: "To be or not to be, that is the question.",
  image: "assets/theater.png"
}

const theGuestHouse = {
  name: "guest house",
  description: "Hospitality: making your guest feel like they're at home even if you wish they were.",
  image: "assets/guesthouse.png"
}

const thePatio = {
  name: "patio",
  description: "There's no peace like the peace of a patio on a sunny day.",
  image: "assets/patio.png"
}

// Grouping suspects, weapons and rooms in arrays

const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard
]


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


const rooms = [
  theBallroom,
  theBilliardRoom,
  theConservatory,
  theDiningRoom,
  theGuestHouse,
  theHall,
  theKitchen,
  theLibrary,
  theLivingRoom,
  theLounge,
  theObservatory,
  thePatio,
  theSpa,
  theStudy,
  theTheater
]


// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// Empty mystery object that will store information about the killer, weapon and room
const mystery = {

}

// This function will be invoked when you click on the killer card.
const pickKiller = () => {

  // Check if the card contains the class flipped. If it does, remove the class and remove the killer from the mystery object.
  if (document.getElementById("killer").classList.contains("flipped")) {

    const theKiller = document.getElementById("killer");
    theKiller.classList.remove("flipped");

    delete mystery.killer

    // Pick a random suspect, print details on card and add the class flipped to the card 
  } else {

    // This will randomly select a killer from the suspects array. And add that to the mystery object.
    mystery.killer = randomSelector(suspects);

    const theKiller = document.getElementById("killer");
    const theKillerColor = document.getElementById("killerColor");
    const theKillerName = document.getElementById("killerName");
    const theKillerAge = document.getElementById("killerAge");
    const theKillerOccupation = document.getElementById("killerOccupation");
    const theKillerImage = document.getElementById("killerImage");
    const theKillerDescription = document.getElementById("killerDescription");

    // Change the background color to the killer color
    theKillerColor.style.background = mystery.killer.color;

    // Print the killer's first and last name
    theKillerName.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;

    // Print the killer's age
    theKillerAge.innerHTML = mystery.killer.age;

    // Print the killer's occupation
    theKillerOccupation.innerHTML = mystery.killer.occupation;

    // Set the image to the killer's portrait
    theKillerImage.setAttribute("src", mystery.killer.image);

    // Print the killer's description
    theKillerDescription.innerHTML = mystery.killer.description;

    // Add class to killer deck for special styling of the card
    theKiller.classList.add("flipped");
  }
  emptyMysteryReveal();
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// Picka a random weapon
const pickWeapon = () => {

  // Check if the card contains the class flipped. If it does, remove the class and remove the weaponfrom the mystery object.
  if (document.getElementById("weapon").classList.contains("flipped")) {

    const theWeapon = document.getElementById("weapon");
    theWeapon.classList.remove("flipped");

    delete mystery.weapon

  } else {

    // This will randomly select a weapon from the weapons array. And add that to the mystery object.
    mystery.weapon = randomSelector(weapons);

    const theWeapon = document.getElementById("weapon");
    const theWeaponName = document.getElementById("weaponName");
    const theWeaponWeight = document.getElementById("weaponWeight");
    const theWeaponDescription = document.getElementById("weaponDescription");
    const theWeaponImage = document.getElementById("weaponImage");

    // Print the weapon's name
    theWeaponName.innerHTML = mystery.weapon.name;

    // Print the weapon's weight
    theWeaponWeight.innerHTML = `${mystery.weapon.weight} kg`;

    // Print the weapons's description
    theWeaponDescription.innerHTML = mystery.weapon.description;

    // Set the image to the image of the weapon
    theWeaponImage.setAttribute("src", mystery.weapon.image);

    // Add class to weapon deck for special styling of the card
    theWeapon.classList.add("flipped");
  }
  emptyMysteryReveal();
}

// Pick a random room
const pickRoom = () => {

  // Check if the card contains the class flipped. If it does, remove the class and remove the room from the mystery object.
  if (document.getElementById("room").classList.contains("flipped")) {

    const theRoom = document.getElementById("room");
    theRoom.classList.remove("flipped");

    delete mystery.room;

  } else {
    //This will randomly select a room from the rooms array. And add that to the mystery object.
    mystery.room = randomSelector(rooms);

    const theRoom = document.getElementById("room");
    const theRoomName = document.getElementById("roomName");
    const theRoomDescription = document.getElementById("roomDescription");
    const theRoomImage = document.getElementById("roomImage");

    // Print the room's description
    theRoomDescription.innerHTML = mystery.room.description;

    // Set the image to the room symbol image
    theRoomImage.setAttribute("src", mystery.room.image);

    // Print room name on card
    theRoomName.innerHTML = mystery.room.name;

    // Add class to room deck for special styling of the card
    theRoom.classList.add("flipped");
  }
  emptyMysteryReveal();
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const theMystery = document.getElementById("mystery");
  const theMysteryDescription = document.getElementById("mysteryDescription");

  // If the mystery object has a killer, weapon or room set
  if (mystery.killer && mystery.weapon && mystery.room) {

    //Print the reveal message
    theMystery.innerHTML = "The murder was commited by";
    theMysteryDescription.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room.name} with a ${mystery.weapon.name}.`;

    // Else (if there is no a mystery killer, mystery weapon and mystery room set)
  } else {

    // Print message
    theMystery.innerHTML = "No mystery is yet to be revealed.";
  }
}

// A function to empty the mystery reveal
const emptyMysteryReveal = () => {
  const theMystery = document.getElementById("mystery");
  const theMysteryDescription = document.getElementById("mysteryDescription");

  theMysteryDescription.innerHTML = "";
  theMystery.innerHTML = "";
}