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
  name: "Rope",
  weight: 10,
  image: "assets/Rope.jpg",
  color: "white"
}

const knife = {
  name: "Knife",
  weight: 12,
  image: "assets/Knife.jpg",
  color: "white"
}

const candelstick = {
  name: "Candelstick",
  weight: 9,
  image: "assets/Candlestick.jpeg",
  color: "white"
}

const dumbell = {
  name: "Dumbbell",
  weight: 8,
  image: "assets/Dumbbell.jpg",
  color: "white"
}

const poison = {
  name: "Poison",
  weight: 11,
  image: "assets/Poison.jpg",
  color: "white"
}

const axe = {
  name: "Axe",
  weight: 13,
  image: "assets/Axe.jpg",
  color: "white"
}

const bat = {
  name: "Bat",
  weight: 9,
  image: "assets/Bat.jpg",
  color: "white"
}

const trophy = {
  name: "Trophy",
  weight: 7,
  image: "assets/Trophy.jpg",
  color: "white"
}

const pistol = {
  name: "Pistol",
  weight: 11,
  image: "assets/Pistol.jpg",
  color: "white"
}

//Rooms

const DinningRoom = {
  name: "Dinning Room",
  color: "white"
}

const conservatory = {
  name: "Conservatory",
  color: "white"
}

const kitchen = {
  name: "Kitchen",
  color: "white"
}

const study = {
  name: "Study",
  color: "white"
}

const library = {
  name: "Library",
  color: "white"
}

const billiardRoom = {
  name: "BilliardRoom",
  color: "white"
}

const lounge = {
  name: "Lounge",
  color: "white"
}

const ballRoom = {
  name: "BallRoom",
  color: "white"
}

const hall = {
  name: "Hall",
  color: "white"
}

const spa = {
  name: "Spa",
  color: "white"
}

const livingRoom = {
  name: "LivingRoom",
  color: "white"
}

const observatory = {
  name: "Observatory",
  color: "white"
}

const theatre = {
  name: "Theatre",
  color: "white"
}

const guestHouse = {
  name: "GuestHouse",
  color: "white"
}

const patio = {
  name: "Patio",
  color: "white"
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
  DinningRoom,
  conservatory,
  kitchen,
  study,
  library,
  billiardRoom,
  lounge,
  ballRoom,
  hall,
  spa,
  livingRoom,
  observatory,
  theatre,
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
//suspects, weapons, rooms

const mystery = {
  killer: "",
  weapon: "",
  room: ""
}


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

  const theWeapon = document.getElementById("weapon")
  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeapon.style.background = mystery.weapon.color
  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  console.log(mystery.room)

  const theRoom = document.getElementById("room")
  const theRoomName = document.getElementById("roomName")

  theRoom.style.background = mystery.room.color
  theRoomName.innerHTML = mystery.room.name
}


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// The murder was committed by Jacob Green, in the living room with a rope.

const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room.name} with a ${mystery.weapon.name}`
}

//revealMystery.onclick(revealMystery); -kommentar: onclick behövs inte i javascript om onclick finns i HTML på en knapp(button)

