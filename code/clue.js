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
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "Cheerfully plump middle-aged cook with red hair",
  age: 60,
  image: "assets/white.png",
  occupation: "Housekeeper"
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Widely seen as the intellectual",
  age: 36,
  image: "assets/plum.png",
  occupation: "Professor"
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "Young, cunning, and highly attractive",
  age: 25,
  image: "assets/scarlet.png",
  occupation: "Actress"
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "The usual classy social butterfly",
  age: 32,
  image: "assets/peacock.png",
  occupation: "Socialite"
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "A military man both dignified and dangerous",
  age: 56,
  image: "assets/mustard.png",
  occupation: "Colonel"
}
// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 10,
  image: "assets/rope.png"
}

const knife = {
  name: "Dagger",
  weight: 10,
  image: "assets/dagger.png"
}

const candlestick = {
  name: "Candlestick",
  weight: 21,
  image: "assets/unlit-candelabra.png"
}

const dumbbell = {
  name: "Monkey Wrench",
  weight: 25,
  image: "assets/monkey-wrench.png"
}

const poison = {
  name: "Poison",
  weight: 5,
  image: "assets/poison.png"
}

const axe = {
  name: "Axe",
  weight: 35,
  image: "assets/wood-axe.png"
}

const leadPipe = {
  name: "Lead Pipe",
  weight: 20,
  image: "assets/lead-pipe.png"
}

const trophy = {
  name: "Blunderbuss",
  weight: 15,
  image: "assets/blunderbuss.png"
}

const pistol = {
  name: "Pistol",
  weight: 12,
  image: "assets/revolver.png"
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
  leadPipe,
  trophy,
  pistol
]

const rooms = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"]

console.log(suspects)
console.log(weapons)
console.log(rooms)

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.
const mistery = {
  killer,
  weapon,
  room
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

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.
const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons)

  const theWeaponName = document.getElementById("weaponName")
  const theWeaponWeight = document.getElementById("weaponWeight")
  const theWeaponImage = document.getElementById("weaponImage")

  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
  theWeaponImage.src = mystery.weapon.image
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)

  const theRoomName = document.getElementById("roomName")

  theRoomName.innerHTML = mystery.room
}
// CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  if (!mystery.killer || !mystery.weapon || !mystery.room) {
    alert("No mystery is yet to be revealed.");
  } else {
    alert(`The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`);
  }
}