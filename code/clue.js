// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "A man with a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur"
}
const profPlum = {
  firstName: "Victor Montgomery",
  lastName: "Plum",
  color: "purple",
  description: "A man with a degree of suspicion",
  age: 72,
  image: "assets/plum.png",
  occupation: "College professor"
}
const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "A aspiring actress whose passion for fame, fortune, and men will let no one stand in her way.",
  age: 28,
  image: "assets/scarlet.png",
  occupation: "Actor"
}
const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "A woman with a reputation that she would rather forget",
  age: 42,
  image: "assets/peacock.png",
  occupation: "Lady of Arlington Grange"
}
const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A gallant military hero whose glittering career hides a tarnished past",
  age: 24,
  image: "assets/mustard.png",
  occupation: "Military veteran"
}
const mrsWhite = {
  firstName: "Blanche",
  lastName: "White",
  color: "white",
  description: "She hides a secret indulgence.",
  age: 82,
  image: "assets/white.png",
  occupation: "House keeper"
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
  color: "brown"
}

const knife = {
  name: "knife",
  weight: 5,
  color: "silver"
}

const candlestick = {
  name: "candlestick",
  weight: 15,
  color: "gold"
}

const dumbbell = {
  name: "dumbbell",
  weight: 30,
  color: "black"
}

const poison = {
  name: "poison",
  weight: 1,
  color: "purple"
}

const axe = {
  name: "axe",
  weight: 20,
  color: "silver"
}

const bat = {
  name: "bat",
  weight: 10,
  color: "brown"
}

const trophy = {
  name: "trophy",
  weight: 18,
  color: "gold"
}

const pistol = {
  name: "pistol",
  weight: 15,
  color: "silver"
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
  "dinning room",
  "conservatory",
  "kitchen",
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
  "patio",
]

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
  const theKillerDescription = document.getElementById("killerDescription")
  theKiller.style.background = mystery.killer.color
  theKillerName.innerHTML =
    mystery.killer.firstName + " " + mystery.killer.lastName
    theKillerDescription.innerHTML =
    mystery.killer.description
}

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)
  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  theWeaponName.innerHTML =
    mystery.weapon.name
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoom = document.getElementById("roomName")  
  theRoom.innerHTML =
    mystery.room
}

document
  .getElementById("killer")
  .addEventListener("click", pickKiller);

  document
  .getElementById("weapon")
  .addEventListener("click", pickWeapon);

  document
  .getElementById("room")
  .addEventListener("click", pickRoom);



// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

