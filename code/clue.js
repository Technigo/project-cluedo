// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "darkseagreen",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "salmon",
  description: "She will do anything to stay in the spotlight",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "floralwhite",
  description: "She will do anything for justice, including turning vigilante",
  age: 60,
  image: "assets/white.png",
  occupation: "Lawyer"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "plum",
  description: "He is an inventor and a mathematical genius. To challenge him could be perilious.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "cornflowerblue",
  description: "Despite her looks, she's a formidable politician",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Politician"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A casually dressed expert martial artist",
  age: 50,
  image: "assets/mustard.png",
  occupation: "Colonel"
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  color: "BurlyWood",
  weight: 10
}
const knife = {
  name: "knife",
  color: "LightGray",
  weight: 20
}
const candlestick = {
  name: "candlestick",
  color: "Moccasin",
  weight: 30
}
const dumbbell = {
  name: "dumbbell",
  color: "Gray",
  weight: 40
}
const poison = {
  name: "poison",
  color: "DarkSeaGreen",
  weight: 1
}
const axe = {
  name: "axe",
  color: "Gainsboro",
  weight: 35
}
const bat = {
  name: "bat",
  color: "RosyBrown",
  weight: 25
}
const trophy = {
  name: "trophy",
  color: "GoldenRod",
  weight: 30
}
const pistol = {
  name: "pistol",
  color: "LightSteelBlue ",
  weight: 15
}

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

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

const rooms = [
  "dining room",
  "conservatory",
  "kicthen",
  "study",
  "library",
  "billiard room",
  "lounge",
  "ballroom",
  "hall",
  "spa",
  "living room",
  "observatory",
  "theater",
  "guest house",
  "patio"
]
console.log(rooms);
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
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName;

  // Print the killer's age
  theKillerAge.innerHTML = mystery.killer.age;

  // Print the killer's occupation
  theKillerOccupation.innerHTML = mystery.killer.occupation;

  // Set the image to the killer's portrait
  theKillerImage.setAttribute("src", mystery.killer.image);

  // Print the killer's description
  theKillerDescription.innerHTML = mystery.killer.description;

  // Add class to killer card
  theKiller.classList.add("picked");

}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// Picka a random weapon
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  const theWeapon = document.getElementById("weapon");
  const theWeaponName = document.getElementById("weaponName");
  const theWeaponWeight = document.getElementById("weaponWeight");

  // Print the weapon's name
  theWeaponName.innerHTML = mystery.weapon.name;

  // Print the weapon's color
  theWeaponName.style.background = mystery.weapon.color;

  // Print the weapon's weight
  theWeaponWeight.innerHTML = mystery.weapon.weight;

  // Add class to killer deck
  theWeapon.classList.add("picked");
}

// Pick a random room
const pickRoom = () => {
  //This will randomly select a room from the rooms. And add that to the mystery object.
  mystery.room = randomSelector(rooms);

  const theRoom = document.getElementById("room");
  const theRoomName = document.getElementById("roomName");

  // Print room name on card
  theRoomName.innerHTML =
    mystery.room;

  // Add class to killer deck
  theRoom.classList.add("picked");
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  const theMystery = document.getElementById("mystery");

  // If there is no mystery killer, mystery weapon or mystery room set
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    // Print message
    theMystery.innerHTML = "No mystery is yet to be revealed.";

    // If there is a mystery killer, mystery weapon and mystery room set
  } else {
    //Print the reveal message
    theMystery.innerHTML =
      `<span class="reveal-title">The murder was commited by</span><br/> ${mystery.killer.firstName} ${mystery.killer.lastName} in the ${mystery.room} with the ${mystery.weapon.name}`;
  }
}