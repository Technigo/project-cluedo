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
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "crimson",
  description: "She will do anything to stay in the spotlight",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She will do anything for justice, including turning vigilante",
  age: 60,
  image: "assets/white.png",
  occupation: "Lawyer"
}
const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is an inventor and a mathematical genius. To challenge him could be perilious.",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
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
  weight: 10
}
const knife = {
  name: "knife",
  weight: 20
}
const candlestick = {
  name: "candlestick",
  weight: 30
}
const dumbbell = {
  name: "dumbbell",
  weight: 40
}
const poison = {
  name: "poison",
  weight: 1
}
const axe = {
  name: "axe",
  weight: 35
}
const bat = {
  name: "bat",
  weight: 25
}
const trophy = {
  name: "trophy",
  weight: 30
}
const pistol = {
  name: "pistol",
  weight: 15
}
// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.
const diningRoom = "dining room";
const conservatory = "conservatory";
const kicthen = "kitchen";
const study = "study";
const library = "library";
const billiardRoom = "billiard room";
const lounge = "lounge";
const ballroom = "ballroom";
const hall = "hall";
const spa = "spa";
const livingRoom = "living room";
const observatory = "observatory";
const theater = "theater";
const guestHouse = "guest house";
const patio = "patio";

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
  diningRoom,
  conservatory,
  kicthen,
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
  mystery.killer = randomSelector(suspects)

  // This will change the background color of the card to the one connected to the chosen killer and show the full name of the killer.
  const theKiller = document.getElementById("killer")
  const theKillerName = document.getElementById("killerName")

  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// Picka a random weapon
const pickWeapon = () => {
  // This will randomly select a weapon from the weapons. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons);

  const theWeapon = document.getElementById("weapon");
  const theWeaponName = document.getElementById("weaponName");

  // Print the weapons name and weight
  theWeaponName.innerHTML =
    mystery.weapon.name + " " + mystery.weapon.weight;

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
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
